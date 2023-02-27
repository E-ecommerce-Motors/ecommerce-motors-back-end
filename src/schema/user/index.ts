import * as yup from "yup";


export const createSchema: yup.Schema<any> = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
        .string()
        .email('Email inválido')
        .required('Email é obrigatório'),
    cpf: yup
        .string()
        .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido')
        .required('CPF é obrigatório'),
    phone: yup
        .string()
        .matches(/^\d{2}\s\d{4,5}\-\d{4}$/, 'Telefone inválido')
        .required('Telefone é obrigatório'),
    birthDate: yup
        .date()
        .max(new Date(), 'Data de nascimento inválida')
        .required('Data de nascimento é obrigatória'),
    description: yup.string(),
    typeAccount: yup
        .string()
        .oneOf(['buyer', 'advertiser'], 'Tipo de conta inválido')
        .required('Tipo de conta é obrigatório'),
    password: yup
        .string()
        .min(6, 'Senha deve ter no mínimo 6 caracteres')
        .required('Senha é obrigatória'),
});