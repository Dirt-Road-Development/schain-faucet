/**
 * @license
 * 
 * Schain Faucet
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


/**
 * @file src/controllers/developer.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import { BigNumber, ethers } from 'ethers';
import { Request, Response } from 'express';
import { checkBalance, isDOT, Provider, sendTransaction } from '../utils';
import { checkAddress } from '../utils/address';

const MINIMUM_BALANCE: BigNumber = ethers.utils.parseEther('0.000005');
const MAXIMUM_BALANCE: BigNumber = ethers.utils.parseEther('0.0005')

export const DeveloperController = async(req: Request, res: Response) => {
    try {
        /// 0 -> Create Provider
        const provider: Provider = new Provider();
        /// 1 -> Check Address/Validate
        const address: string = req.params.address;
        const isAddress: boolean = typeof address === 'string' && checkAddress(address);
        if (!isAddress) return res.status(400).send('Invalid Address');
        // TODO  IMPLEMENT DEVELOPER WHITELIST
        
        /// Check Balance
        const balance: BigNumber = await checkBalance(provider.provider, address);
        if (balance >= MINIMUM_BALANCE) {
            return res.status(200).send('Sufficient Balance');
        } else if (balance >= MAXIMUM_BALANCE) {
            /// Unload on the Client
            return res.sendStatus(418);
        }
        /// 3 -> If DOT, Balance Below DOT_MINIMUM_BALANCE; Proceed
        const amount: BigNumber = MINIMUM_BALANCE.sub(balance);
        // 4 -> Transfer DOT S-Fuel to Meet Minimum Balance
        const tx: ethers.providers.TransactionResponse = await sendTransaction(provider.signer, address, amount);
        return res.status(200).send({
            message: 'Filled Up',
            tx: tx.hash
        });
    } catch (err: any) {
        throw new Error(err);
    }
}