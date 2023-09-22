import { writable } from "svelte/store";

export const smartContractStore = writable<{
    words: {
        [key in string]: Array<{
            date: number
            author: string
            content: string
        }>
    }
}>({
    words: {
        'sui': [{
            date: Date.now(),
            author: '0xme',
            content: 'Sui is a great blockchain.',
        }],
        'move': [{
            date: Date.now(),
            author: '0xme',
            content: 'Move is a smart contract language.',
        }],
        'blockchain': [{
            date: Date.now(),
            author: '0xme',
            content: 'I love blockchains.',
        }],
    }
})

