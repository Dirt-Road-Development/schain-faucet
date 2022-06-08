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
 * @file src/utils/check_dot.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import { ethers, Contract } from 'ethers';
import { ABIs } from '../config/abis';
import { ADDRESSES } from '../config/addresses';

// const CONTRACT: Contract = new ethers.Contract(ADDRESSES['dot_name_service'], ABIs['dot_name_service']);

export const isDOT = async(provider: ethers.providers.WebSocketProvider, address: string) : Promise<boolean> => {

    try {
        // const contract: Contract = CONTRACT.connect(provider);
        // return await contract.callStatic.dotIsClaimed(address);
        return false;
    } catch (err: any) {
        throw new Error(err);
    }

}