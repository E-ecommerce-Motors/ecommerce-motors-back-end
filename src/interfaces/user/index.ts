import { type_account_options } from "@prisma/client";

export interface IAddress {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement?: string;
}

export interface IUserRequest {
    name: string,
    email: string,
    cpf: string,
    phone: string,
    birthDate: string,
    description: string,
    typeAccount: type_account_options,
    isSaler: boolean,
    password: string,
    createdAt?: Date,
    updatedAt?: Date
    Address: IAddress;
}

export interface IUserUpdate {
    id: number,
    name?: string,
    email?: string,
    cpf?: string,
    phone?: string,
    birthDate?: string,
    description?: string,
}

export interface IUserCreateSchema {
    name: string,
    email: string,
    cpf: string,
    phone: string,
    birthDate: string,
    description: string,
    typeAccount: type_account_options,
    password: string
}

export interface IUserLogin {
    email: string,
    password: string,
}