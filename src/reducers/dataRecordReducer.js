import { DATARECORDS, ONEDATARECORD } from '../constants/types';

const initalState = {
  dataRecords: [],
  dataRecord: {},
  loading: false,
  error: '',
}

const dataRecordReducer = (state = initalState, action) => {
  switch (action.type) {
    case DATARECORDS.LOAD:
      return {
        ...state,
        loading: true,
      };

    case DATARECORDS.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        dataRecords: action.dataRecords,

      };

    case DATARECORDS.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };

    case ONEDATARECORD.LOAD:
      return {
        ...state,
        loading: true,
      };

    case ONEDATARECORD.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        dataRecord: action.dataRecord,

      };

    case ONEDATARECORD.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONEDATARECORD.CREATE:
      return {
        ...state,
        loading: true,
      };
    case ONEDATARECORD.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataRecord: action.dataRecord,

      };
    case ONEDATARECORD.CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONEDATARECORD.UPDATE:
      return {
        ...state,
        loading: true,
      };
    case ONEDATARECORD.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataRecord: action.dataRecord,
      };
    case ONEDATARECORD.UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONEDATARECORD.RESET:
      return {
        ...state,
        dataRecord: {}
      };
    default:
      return state;
  }
};

export default dataRecordReducer;