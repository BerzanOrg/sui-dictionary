import { writable } from "svelte/store";

interface WalletStore {
    address?: string
    isConnected: boolean
}

export const walletStore = writable<WalletStore>({
    isConnected: false,
})