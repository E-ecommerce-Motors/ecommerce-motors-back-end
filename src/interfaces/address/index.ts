interface IAddress {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
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
    IAddress,
    AddressUpdate
}