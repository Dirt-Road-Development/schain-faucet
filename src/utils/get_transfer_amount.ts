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
 * @file src/utils/get_transfer_amount.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import { BigNumber, ethers } from "ethers";

type ITransferAmount = {
    [key: string]: BigNumber;
}

const amounts: ITransferAmount = {
    dot: ethers.utils.parseEther('0.0000001'),
    general: ethers.utils.parseEther('0.000000001'),
    developer: ethers.utils.parseEther('0.000005')
};


export const getTransferAmount = (type: string) : BigNumber => {
    try {
        return amounts[type];
    } catch (err: any) {
        throw new Error(err);
    }
}