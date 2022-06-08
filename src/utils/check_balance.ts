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
 * @file src/utils/check_balance.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import { BigNumber, ethers } from "ethers";

export const checkBalance = async(provider: ethers.providers.Provider, address: string) : Promise<BigNumber> => {
    try {
        return await provider.getBalance(address);
    } catch (err: any) {
        throw new Error(err);
    }
}