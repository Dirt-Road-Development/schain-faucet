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
 * @file src/utils/provider.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


import { ethers, Wallet } from "ethers";
import * as Config from '../config/config';

class Provider {

    private _provider: ethers.providers.WebSocketProvider = new ethers.providers.WebSocketProvider(Config.WS_URL);
    private _wallet: Wallet = new ethers.Wallet(Config.PRIVATE_KEY).connect(this._provider);

    public get signer() : Wallet {
        return this._wallet;
    }

    public get provider(): ethers.providers.WebSocketProvider {
        return this._provider;
    }

    public closeProvider() : void {
        this._provider.destroy();
    }
}

export {
    Provider
}