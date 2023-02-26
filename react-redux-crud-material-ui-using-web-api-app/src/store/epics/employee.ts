import { combineEpics, Epic, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, } from "rxjs/operators";
import {EmployeeService} from '../services';
import {EmployeeAction} from '../actions/employee';

const fetchEmployee: Epic = (action$) => action$.pipe(
    ofType(EmployeeAction.getFetchEmployeeAction()),
    mergeMap((data: any) => from(EmployeeService.getAll()).pipe(
        map(result => EmployeeAction.fetchEmployeeSuccess(result)),
        catchError(error => of(EmployeeAction.fetchEmployeeError(error.message))),
    ))
);

const fetchEmployeeById: Epic = (action$) => action$.pipe(
    ofType(EmployeeAction.getFetchEmployeeGetByIdAction()),
    mergeMap((data: any) => from(EmployeeService.getById(data.payload)).pipe(
        map(result => EmployeeAction.fetchEmployeeGetByIDSuccess(result)),
        catchError(error => of(EmployeeAction.fetchEmployeeGetByIDError(error.message))),
    ))
);


const createEmployee: Epic = (action$) => action$.pipe(
    ofType(EmployeeAction.getCreateEmployeeAction()),
    mergeMap((data: any) => from(EmployeeService.add(data.payload)).pipe(
        map(result => EmployeeAction.createEmployeeSuccess(result)),
        catchError(error => of(EmployeeAction.createEmployeeError(error.message))),
    ))
);

const updateEmployee: Epic = (action$) => action$.pipe(
    ofType(EmployeeAction.getUpdateEmployeeAction()),
    mergeMap((data: any) => from(EmployeeService.update(data.payload)).pipe(
        map(result => EmployeeAction.updateEmployeeSuccess(result)),
        catchError(error => of(EmployeeAction.updateEmployeeError(error.message))),
    ))
);

const deleteEmployee: Epic = (action$) => action$.pipe(
    ofType(EmployeeAction.getDeleteEmployeeAction()),
    mergeMap((data: any) => from(EmployeeService.delete(data.payload)).pipe(
        map(result => EmployeeAction.deleteEmployeeSuccess(result)),
        catchError(error => of(EmployeeAction.deleteEmployeeError(error.message))),
    ))
);

export default combineEpics(fetchEmployee,createEmployee,updateEmployee,fetchEmployeeById,deleteEmployee);
