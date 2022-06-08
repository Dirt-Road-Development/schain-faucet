# SKALE Chain Faucet

## Overview
This repository is designed to distribute S-Fuel to users quickly and efficiently in a secure manner.

## Setup

1. Clone this repo by running ```git clone https://github.com/mylilius/schain-faucet```
2. Run ```npm install in the root```
3. Run ```cp .env.example .env```
4. Add in your SKALE Chain WS URL and your PRIVATE KEY for the Faucet Manager
5. You must assign your Faucet Manager ETHER_MANAGER_ROLE. This can be done on [MyLilius](https://mylilius.com) if you have the proper roles:
   - [SKALE Chain Admin Portal on Mainnet](https://schain.mylilius.com)
   - [SKALE Chain Admin Portal on Testnet](https://testnet.schain.mylilius.com)
6. Once assigned simply deploy this faucet to any Cloud Provider and point your API calls to it


## Road Map

   - [x] Initial Faucet Build
        - [x] Contains Middleware
        - [x] Contains Controllers
            - [x] DOT
            - [x] Developer
            - [x] General
   - [ ] Additional Security
        - [ ] Redis or Other Database for the Following:
            - [ ] Rate Limiting
            - [ ] Developer Address Management
        - [ ] Alerts for Malicious Balance Amounts
            - [ ] Discord
            - [ ] SMS
   - [ ] Cross Chain DOT Calls
   - [ ] Balance Management for Faucet Manager
        - [ ] Queue with Only W Calls Per Time Period X (Example)
        - [ ] Cap Fill ups for Manager to Y Per Time Period Z
