import { CREATE_DATA, DELETE_EMPLOYEE } from "../actions/actionTypes";

const initialState = {
  employees: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DATA:
      return {
        ...state,
        employees: action.payload
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(emp => {
          return emp.key !== action.employeeKey;
        })
      };

    default:
      return state;
  }
};

export default reducer;
