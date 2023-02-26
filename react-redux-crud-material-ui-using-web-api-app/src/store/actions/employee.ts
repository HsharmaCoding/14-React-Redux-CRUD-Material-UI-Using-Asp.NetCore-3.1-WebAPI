import {CommonAction,IEmployee,IResponse} from '../../model'
import {Employee_Types} from '../types/employee'

export class EmployeeAction{
    //GET
    static getFetchEmployeeAction=()=>{return Employee_Types.EMPLOYEE_FETCH};
    static getFetchEmployeeLoadingAction=()=>{return Employee_Types.EMPLOYEE_FETCH_LOADING};
    static getFetchEmployeeSuccessAction=()=>{return Employee_Types.EMPLOYEE_FETCH_SUCCESS};
    static getFetchEmployeeErrorAction=()=>{return Employee_Types.EMPLOYEE_FETCH_ERROR};

    //GET BY ID
    static getFetchEmployeeGetByIdAction=()=>{return Employee_Types.EMPLOYEE_FETCH_GETBYID};
    static getFetchEmployeeGetByIdLoadingAction=()=>{return Employee_Types.EMPLOYEE_FETCH_GETBYID_LOADING};
    static getFetchEmployeeGetByIdSuccessAction=()=>{return Employee_Types.EMPLOYEE_FETCH_GETBYID_SUCCESS};
    static getFetchEmployeeGetByIdErrorAction=()=>{return Employee_Types.EMPLOYEE_FETCH_GETBYID_ERROR};

    //CREATE
    static getCreateEmployeeAction = () => { return Employee_Types.EMPLOYEE_CREATE };
    static getCreateEmployeeSavingAction = () => { return Employee_Types.EMPLOYEE_CREATE_SAVING };
    static getCreateEmployeeSuccessAction = () => { return Employee_Types.EMPLOYEE_CREATE_SUCCESS };
    static getCreateEmployeeErrorAction = () => { return Employee_Types.EMPLOYEE_CREATE_ERROR };

    //UPDATE
    static getUpdateEmployeeAction = () => { return Employee_Types.EMPLOYEE_UPDATE };
    static getUpdateEmployeeSavingAction = () => { return Employee_Types.EMPLOYEE_UPDATE_SAVING };
    static getUpdateEmployeeSuccessAction = () => { return Employee_Types.EMPLOYEE_UPDATE_SUCCESS };
    static getUpdateEmployeeErrorAction = () => { return Employee_Types.EMPLOYEE_UPDATE_ERROR };

    //DELETE
    static getDeleteEmployeeAction=()=>{return Employee_Types.EMPLOYEE_DELETE};
    static getDeleteEmployeeSavingAction=()=>{return Employee_Types.EMPLOYEE_DELETE_SAVING};
    static getDeleteEmployeeSuccessAction=()=>{return Employee_Types.EMPLOYEE_DELETE_SUCCESS};
    static getDeleteEmployeeErrorAction=()=>{return Employee_Types.EMPLOYEE_DELETE_ERROR};

    //CLEAR
    static getCleareEmployeeResponseAction = () => { return Employee_Types.EMPLOYEE_CLEAR_RESPONSE };

    //GET
    static fetchEmployee=():CommonAction<null>=>({
        type:EmployeeAction.getFetchEmployeeAction(),
    })

    static fetchEmployeeSuccess = (payload: IEmployee[]): CommonAction<IEmployee[]> => ({
        type: EmployeeAction.getFetchEmployeeSuccessAction(),
        payload
    });

    static fetchEmployeeError = (payload: string): CommonAction<string> => ({
        type: EmployeeAction.getFetchEmployeeErrorAction(),
        payload
    });

    //GET BY ID
    static fetchEmployeeGetByID=(payload:number):CommonAction<number>=>({
        type:EmployeeAction.getFetchEmployeeGetByIdAction(),
        payload
    })

    static fetchEmployeeGetByIDSuccess = (payload: IEmployee): CommonAction<IEmployee> => ({
        type: EmployeeAction.getFetchEmployeeGetByIdSuccessAction(),
        payload
    });

    static fetchEmployeeGetByIDError = (payload: string): CommonAction<string> => ({
        type: EmployeeAction.getFetchEmployeeGetByIdErrorAction(),
        payload
    });

    //CREATE
    static createEmployee = (payload: IEmployee): CommonAction<IEmployee> => ({
        type: EmployeeAction.getCreateEmployeeAction(),
        payload
    })

    static createEmployeeSuccess = (payload: IResponse): CommonAction<IResponse> => ({
        type: EmployeeAction.getCreateEmployeeSuccessAction(),
        payload
    });

    static createEmployeeError = (payload: string): CommonAction<string> => ({
        type: EmployeeAction.getCreateEmployeeErrorAction(),
        payload
    });

    
    //UPDATE
    static updateEmployee  = (payload: IEmployee): CommonAction<IEmployee> => ({
        type: EmployeeAction.getUpdateEmployeeAction(),
        payload
    })

    static updateEmployeeSuccess = (payload: IResponse): CommonAction<IResponse> => ({
        type: EmployeeAction.getUpdateEmployeeSuccessAction(),
        payload
    });

    static updateEmployeeError = (payload: string): CommonAction<string> => ({
        type: EmployeeAction.getUpdateEmployeeErrorAction(),
        payload
    });

    //DELETE
    static deleteEmployee = (payload: number): CommonAction<number> => ({
        type: EmployeeAction.getDeleteEmployeeAction(),
        payload
    })

    static deleteEmployeeSuccess = (payload: IResponse): CommonAction<IResponse> => ({
        type: EmployeeAction.getDeleteEmployeeSuccessAction(),
        payload
    });

    static deleteEmployeeError = (payload: string): CommonAction<string> => ({
        type: EmployeeAction.getDeleteEmployeeErrorAction(),
        payload
    });

    //CLEAR
    static cleareUserMessage = (): CommonAction => ({
        type: EmployeeAction.getCleareEmployeeResponseAction()
    })
}