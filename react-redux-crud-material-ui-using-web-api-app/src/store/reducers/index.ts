import { combineReducers } from 'redux';
import {employeeReducer,IEmployeeState} from './employee'
import {departmentReducer,IDepartmentState} from './department'

export type IRootState = {
    employee: IEmployeeState;
    department: IDepartmentState;
};

const reduecers = {
    employee: employeeReducer,
    department: departmentReducer,
  };
  
export const rootReducer = combineReducers(reduecers)