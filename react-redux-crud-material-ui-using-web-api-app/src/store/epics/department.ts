import { combineEpics, Epic, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, } from "rxjs/operators";
import {DepartmentService} from '../services';
import {DepartmentAction} from '../actions/department';

const fetchDepartment: Epic = (action$) => action$.pipe(
    ofType(DepartmentAction.getFetchDepartmentAction()),
    mergeMap((data: any) => from(DepartmentService.getAll()).pipe(
        map(result => DepartmentAction.fetchDepartmentSuccess(result)),
        catchError(error => of(DepartmentAction.fetchDepartmentError(error.message))),
    ))
);

export default combineEpics(fetchDepartment);
