import { useDispatch, useSelector } from "react-redux";
import { IRootState, EmployeeAction } from "../store";

export const EmployeeHook=()=>{
    
    const data = useSelector((state:IRootState)=>state.employee.data);
    const loading = useSelector((state: IRootState) => state.employee.loading);
    const error = useSelector((state: IRootState) => state.employee.error);
    const isError = useSelector((state: IRootState) => state.employee.isError);
    const apiResponse = useSelector((state: IRootState) => state.employee.apiResponse);
    
    return { data, loading, error, isError, apiResponse };
}