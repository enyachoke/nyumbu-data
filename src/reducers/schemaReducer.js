import { SCHEMAS, ONESCHEMA } from '../constants/types';

const initalState = {
  schemas: [],
  schema: { display: 'form' },
  loading: false,
  error: '',
}

const schemaReducer = (state = initalState, action) => {
  switch (action.type) {
    case SCHEMAS.LOAD:
      return {
        ...state,
        loading: true,
      };

    case SCHEMAS.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        schemas: action.schemas,

      };

    case SCHEMAS.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };

    case ONESCHEMA.LOAD:
      return {
        ...state,
        loading: true,
      };

    case ONESCHEMA.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        schema: action.schema,

      };

    case ONESCHEMA.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONESCHEMA.CREATE:
      return {
        ...state,
        loading: true,
      };
    case ONESCHEMA.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        schema: action.schema,

      };
    case ONESCHEMA.CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONESCHEMA.RESET:
      return {
        ...state,
        schema: {}
      };
    default:
      return state;
  }
};

export default schemaReducer;