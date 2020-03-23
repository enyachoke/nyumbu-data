import { DATARECORDS, ONEDATARECORD } from '../constants/types';
export const fetchDataRecords = (dataRecordId) => {
    return {
        type: DATARECORDS.LOAD,
        payload: dataRecordId
    };
};
export const getOneDataRecord = (id) => {
    return {
        type: ONEDATARECORD.LOAD,
        payload: id
    };
};

export const updateOneDataRecord = (payload) => {
    return {
        type: ONEDATARECORD.UPDATE,
        payload
    };
};

export const deleteOneDataRecord = (id) => {
    return {
        type: ONEDATARECORD.DELETE,
        payload: id
    };
};

export const createDataRecord = (payload) => {
    return {
        type: ONEDATARECORD.CREATE,
        payload
    };
};

export const resetDataRecord = () => {
    return {
        type: ONEDATARECORD.RESET,
    };
};