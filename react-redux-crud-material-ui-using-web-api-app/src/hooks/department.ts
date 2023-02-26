import { useSelector } from "react-redux";
import { IRootState } from "../store";
import {IDepartment} from "../model"
import {useEffect,useState} from 'react';

export const DepartmentHook=()=>{
    const data = useSelector((state:IRootState)=>state.department.data);
    const loading = useSelector((state: IRootState) => state.department.loading);
    const error = useSelector((state: IRootState) => state.department.error);
    const isError = useSelector((state: IRootState) => state.department.isError);
    const apiResponse = useSelector((state: IRootState) => state.department.apiResponse);
    
    return { data, loading, error, isError, apiResponse };
}