import { SCHEMAS, ONESCHEMA } from '../constants/types';
export const fetchSchemas = (formId) => {
    return {
        type: SCHEMAS.LOAD,
        payload: formId
    };
};
export const getOneSchema = (id) => {
    return {
        type: ONESCHEMA.LOAD,
        payload: id
    };
};

export const updateOneSchema = (payload) => {
    return {
        type: ONESCHEMA.UPDATE,
        payload
    };
};

export const deleteOneSchema = (id) => {
    return {
        type: ONESCHEMA.DELETE,
        payload: id
    };
};

export const createSchema = (payload) => {
    return {
        type: ONESCHEMA.CREATE,
        payload
    };
};

export const resetSchema = () => {
    return {
        type: ONESCHEMA.RESET,
    };
};