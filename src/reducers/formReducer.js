import { FORMS, ONEFORM } from '../constants/types';

const initalState = {
  forms: [],
  form: {},
  loading: false,
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
    case ONEFORM.RESET:
      return {
        ...state,
        form: {}
      };
    default:
      return state;
  }
};

export default formReducer;