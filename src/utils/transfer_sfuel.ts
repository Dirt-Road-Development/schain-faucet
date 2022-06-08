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
 * @file src/utils/transfer_sfuel.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import { BigNumber, ethers, Transaction, Wallet } from "ethers";
import { Deferrable } from "ethers/lib/utils";

const buildTransaction = (to: string, value: BigNumber) : Deferrable<ethers.providers.TransactionRequest> => {
    return {
        to,
        value
    } as Deferrable<ethers.providers.TransactionRequest>;
}

export const sendTransaction = async(wallet: Wallet, to: string, amount: BigNumber) : Promise<ethers.providers.TransactionResponse> => {
    try {
        /// 1 -> Build Transaction
        const _tx: Deferrable<ethers.providers.TransactionRequest> = buildTransaction(to, amount);
        /// 2 -> Send Transaction
        return await wallet.sendTransaction(_tx);
    } catch (err: any) {
        throw new Error(err);
    }
}