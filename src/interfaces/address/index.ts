export interface IAddress {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    userId: number;
}

export interface IAddressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: number;
    complement?: string;
}

