# **Sui Dictionary**
A collaborative dictionary on Sui blockchain.

This project is incomplete.

## **Preparing Development Environment**
[**Dev Containers**](https://containers.dev/) are used to develop this dApp. It inculedes everything needed to develop.

First you need [**Docker**](https://docker.com/) and [**VS Code**](https://code.visualstudio.com/) to be installed.

After you clone the repository, [**VS Code**](https://code.visualstudio.com/) will warn you to reopen the repository in a [**Dev Container**](https://containers.dev/).

> Don't forget to change the current working directory to `front-end/` or `smart-contract/` before running commands.

## **Smart Contract Development**
The smart contract of Sui Dictionary is written with [**Sui Move Language**](https://docs.sui.io/build/move).

### **Switching to Sui Devnet**
```shell
sui client switch --env devnet
```

### **Requesting gas tokens from faucet**
You can run the command below to request some gas tokens.
```shell
curl --location --request POST 'https://faucet.devnet.sui.io/gas' \
--header 'Content-Type: application/json' \
--data-raw '{
    "FixedAmountRequest": {
        "recipient": "<YOUR-SUI-ADDRESS>"
    }
}'
```

### **Publishing a Sui Move package**
You can run the command below to request some gas tokens.
```shell
sui client publish --gas-budget 10000000
```

## **Front-End Development**
The front-end of Sui Dictionary is built with [**SvelteKit**](https://kit.svelte.dev/docs/introduction) & [**Sui TypeScript SDK**](https://sui-typescript-docs.vercel.app/typescript).

### **Installing dependencies**
You can run the command below to install dependencies.
```shell
npm install
```

### **Starting a development server**
You can run the command below to start a development server.
```shell
npm run dev
```

### **Building for production**
You can run the command below to create a production build.
```shell
npm run build
```

### **Locally preview the production build**
You can run the command below to locally preview the production build.
```shell
npm run preview
```