import { FORMS, ONEFORM, UPDATE_NAME_INPUT, UPDATE_VERSION_INPUT } from '../constants/types';

const initalState = {
  forms: [],
  form: { name: "", version: "" },
  loading: false,
  editing: false,
  error: '',
}

const formReducer = (state = initalState, action) => {
  switch (action.type) {
    case FORMS.LOAD:
      return {
        ...state,
        loading: true,
      };

    case FORMS.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        forms: action.forms,

      };

    case FORMS.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };

    case ONEFORM.LOAD:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_NAME_INPUT:
      return {
        ...state,
        form: { ...state.form, ...action.payload }
      }
    case UPDATE_VERSION_INPUT:
      return {
        ...state,
        form: { ...state.form, ...action.payload }
      }
    case ONEFORM.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        form: action.form,

      };

    case ONEFORM.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONEFORM.CREATE:
      return {
        ...state,
        loading: true,
      };
    case ONEFORM.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        form: action.form,

      };
    case ONEFORM.CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONEFORM.UPDATE:
      return {
        ...state,
        loading: true,
      };
    case ONEFORM.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        form: action.form,
        editing: true
      };
    case ONEFORM.UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,

      };
    case ONEFORM.RESET:
      return {
        ...state,
        form: { name: "", version: "" },
        editing: false
      };
    default:
      return state;
  }
};

export default formReducer;