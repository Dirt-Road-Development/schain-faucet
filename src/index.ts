import { SChainFaucet } from "./app";

async function main() {
    const app: SChainFaucet = new SChainFaucet();

    app.listen();
}

main()
    .catch((err) => {
        throw new Error(err);
    })