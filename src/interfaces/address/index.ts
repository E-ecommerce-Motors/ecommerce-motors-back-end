interface Address {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
    userId: number;
}

interface AddressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: number;
    complement?: string;
}

export {
    Address,
    AddressUpdate
}