import {CommonAction,IDepartment} from '../../model'
import {Department_Types} from '../types/department'

export class DepartmentAction{
    static getFetchDepartmentAction=()=>{return Department_Types.DEPARTMENT_FETCH};
    static getFetchDepartmentLoadingAction=()=>{return Department_Types.DEPARTMENT_FETCH_LOADING};
    static getFetchDepartmentSuccessAction=()=>{return Department_Types.DEPARTMENT_FETCH_SUCCESS};
    static getFetchDepartmentErrorAction=()=>{return Department_Types.DEPARTMENT_FETCH_ERROR};

    static fetchDepartment=():CommonAction<null>=>({
        type:DepartmentAction.getFetchDepartmentAction(),
    })

    static fetchDepartmentSuccess = (payload: IDepartment[]): CommonAction<IDepartment[]> => ({
        type: DepartmentAction.getFetchDepartmentSuccessAction(),
        payload
    });

    static fetchDepartmentError = (payload: string): CommonAction<string> => ({
        type: DepartmentAction.getFetchDepartmentErrorAction(),
        payload
    });
}