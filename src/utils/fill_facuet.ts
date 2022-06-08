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
 * @file src/utils/fill_faucet.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import { providers, Contract, Wallet, ethers, BigNumber } from "ethers";
import { ABIs } from "../config/abis";
import { ADDRESSES } from "../config/addresses";
import { checkBalance } from "./check_balance";

const CONTRACT: Contract = new ethers.Contract(ADDRESSES['etherbase'], ABIs['etherbase']);
const MAXIMUM_BALANCE: BigNumber = ethers.utils.parseEther('100');
const MINIMUM_BALANCE: BigNumber = ethers.utils.parseEther('25');

export const fillFaucet = async(wallet: Wallet) : Promise<providers.TransactionResponse | boolean> => {

    try {

        /// 1 -> Check Balance of Faucet Manager
        const faucetOwner: string = wallet.address;
        const balance: BigNumber = await checkBalance(wallet.provider, faucetOwner);
        /// 2 -> If Under X Amount, Fill, Else Return
        if (balance < MINIMUM_BALANCE) {
            const _amountToFill: BigNumber = MAXIMUM_BALANCE.sub(balance);
            return await _fillFaucet(wallet, _amountToFill);
        }

        return false;

    } catch (err: any) {
        throw new Error(err);
    }
}

const _fillFaucet = async(wallet: Wallet, amount: BigNumber) : Promise<providers.TransactionResponse> => {
    try {
        const contract: Contract = CONTRACT.connect(wallet);
        const estimate: BigNumber = await contract.estimateGas.partiallyRetrieve(wallet.address, amount);
        return await contract.partiallyRetrieve(wallet.address, amount, {
            gasLimit: ethers.utils.hexlify(50000000)
        });
    } catch (err: any) {
        throw new Error(err);
    }
}