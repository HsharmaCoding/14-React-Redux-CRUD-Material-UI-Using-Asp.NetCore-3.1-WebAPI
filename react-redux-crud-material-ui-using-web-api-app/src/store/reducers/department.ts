import { CommonAction,CommonState  } from "../../model";
import { DepartmentAction } from "../actions";
import {IResponse} from '../../model/IResponse'

export interface IDepartmentState extends CommonState<any> {
    apiResponse: IResponse;
}

const initialState: IDepartmentState = {
    data: [],
    error: '',
    isError: false,
    loading: false,
    saving: false,
    apiResponse: { id: "", isSuccess: false, message: "", errorCode: "" }
}

export const departmentReducer = (state = initialState, action: CommonAction): IDepartmentState => {
    switch (action.type) {
        //GET
        case DepartmentAction.getFetchDepartmentAction():
        case DepartmentAction.getFetchDepartmentLoadingAction():
            return {
                ...state,
                loading: true,
                isError: false
            }
        case DepartmentAction.getFetchDepartmentSuccessAction():
            return {
                ...state,
                loading: false,
                data: [...action.payload],
            }
        case DepartmentAction.getFetchDepartmentErrorAction():
            return {
                ...state,
                loading: false,
                isError: true,
                error: action.payload,
            }            
        default:
            return state
    }
}