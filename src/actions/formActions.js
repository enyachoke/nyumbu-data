import { FORMS, ONEFORM } from '../constants/types';
export const fetchForms = () => {
    return {
        type: FORMS.LOAD
    };
};
export const getOneForm = (id) => {
    return {
        type: ONEFORM.LOAD,
        payload: id
    };
};

export const updateOneForm = (payload) => {
    return {
        type: ONEFORM.UPDATE,
        payload
    };
};

export const deleteOneForm = (id) => {
    return {
        type: ONEFORM.DELETE,
        payload: id
    };
};

export const createForm = (payload) => {
    return {
        type: ONEFORM.CREATE,
        payload
    };
};

export const resetForm = () => {
    return {
        type: ONEFORM.RESET,
    };
};