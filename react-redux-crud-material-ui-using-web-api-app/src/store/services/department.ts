import {IDepartment} from '../../model';
import { IResponse } from '../../model/IResponse';
import {BaseService} from '../services';

export class DepartmentService{
    static getAll=async():Promise<IDepartment[]>=>{
        const result=await BaseService.createInstance().get('Department/GetAll')
        return result.data;
    }  
} 
