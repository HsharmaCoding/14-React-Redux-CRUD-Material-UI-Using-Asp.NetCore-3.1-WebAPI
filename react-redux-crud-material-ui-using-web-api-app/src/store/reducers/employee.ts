import { CommonAction,CommonState  } from "../../model";
import { EmployeeAction } from "../actions";
import {IResponse} from '../../model/IResponse'

export interface IEmployeeState extends CommonState<any> {
    apiResponse: IResponse;
}

const initialState: IEmployeeState = {
    data: [],
    error: '',
    isError: false,
    loading: false,
    saving: false,
    apiResponse: { id: "", isSuccess: false, message: "", errorCode: "" }
}

export const employeeReducer = (state = initialState, action: CommonAction): IEmployeeState => {
    switch (action.type) {
        //GET
        case EmployeeAction.getFetchEmployeeAction():
        case EmployeeAction.getFetchEmployeeLoadingAction():
            return {
                ...state,
                loading: true,
                isError: false
            }
        case EmployeeAction.getFetchEmployeeSuccessAction():
            return {
                ...state,
                loading: false,
                data: [...action.payload],
            }
        case EmployeeAction.getFetchEmployeeErrorAction():
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            } 
        //FETCH BY ID
        case EmployeeAction.getFetchEmployeeGetByIdAction():
        case EmployeeAction.getFetchEmployeeGetByIdLoadingAction():
            return {
                ...state,
                loading: true,
                isError: false
            }

        case EmployeeAction.getFetchEmployeeGetByIdSuccessAction():
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case EmployeeAction.getFetchEmployeeGetByIdErrorAction():
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            } 
        //CREATE
        case EmployeeAction.getCreateEmployeeAction():
        case EmployeeAction.getCreateEmployeeSavingAction():
            return {
                ...state,
                loading: true,
                isError: false
            }

        case EmployeeAction.getCreateEmployeeSuccessAction():
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                apiResponse: action.payload
            }
        case EmployeeAction.getCreateEmployeeErrorAction():
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            } 
        //Update
        case EmployeeAction.getUpdateEmployeeAction():
        case EmployeeAction.getUpdateEmployeeSavingAction():
            return {
                ...state,
                loading: true,
                isError: false
            }
    
        case EmployeeAction.getUpdateEmployeeSuccessAction():
            return {
                ...state,
                loading: false,
                apiResponse: action.payload
            }
        case EmployeeAction.getUpdateEmployeeErrorAction():
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            }
        //DELETE
        case EmployeeAction.getDeleteEmployeeAction():
        case EmployeeAction.getDeleteEmployeeSavingAction():
            return {
                ...state,
                loading: true,
                isError: false
            }

        case EmployeeAction.getDeleteEmployeeSuccessAction():
            return {
                ...state,
                loading: false,
                data: state.data.filter((x: any) => x.employeeId != action.payload.employeeId),
                apiResponse: action.payload
            }
        case EmployeeAction.getDeleteEmployeeErrorAction():
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            }
        //CLEAR
        case EmployeeAction.getCleareEmployeeResponseAction():
            return {
                    ...state,
                    loading: false,
                    isError: false,
                    error: '',
                    apiResponse: { id: "", isSuccess: false, message: "", errorCode: "" },
            } 
        default:
            return state
    }
}