import  {IEmployee} from '../../model'
import React,{useEffect,useState} from 'react'
import { Grid, makeStyles} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useForm,DepartmentHook,EmployeeHook} from '../../hooks'
import {TextBox,Button,Dropdown,CheckBox,RadioGroup,DatePicker} from '../control'
import { useDispatch } from "react-redux"
import department from '../../store/epics/department';
import { DepartmentAction, EmployeeAction } from '../../store';

const initialState:IEmployee = {
    employeeId:0,
    firstName: "",
    lastName:"",
    email: "",
    mobile: "",
    isPermanent:false,
    gender: "",
    departmentId:0,
    dateOfBirth: new Date()
 };

 const useStyles=makeStyles({
    field:{
        marginTop:30,
        marginBottom:20,
        display:'block',
    }
 })
 
 
export const EmployeeForm=()=>{

    const { data: departmentRecords, loading:departmentLoading, error:departmentError, isError:departmentErrorFlg, apiResponse:departmentApiResponse } = DepartmentHook(); 
    const { data: employeeRecords, loading:employeeLoading, error:employeeError, isError:employeeErrorFlg, apiResponse:employeeApiResponse } = EmployeeHook(); 
    
    console.log(employeeApiResponse)

    const navigate = useNavigate();
    const classes=useStyles();
    const dispatch = useDispatch();
    const {id} = useParams();

    const validate = (fieldValues = values) => {
        let temp: any = { ...errors }
        if ('firstName' in fieldValues) {
            if (fieldValues.firstName) {
                if (!(/^[a-zA-Z]+$/).test(fieldValues.firstName)) {
                    temp.firstName = "First Name should contain only alphabets not numbers or other special characters.";
                } else {
                    temp.firstName = "";
                }
            } else {
                temp.firstName = "This field is required.";
            }
        }

        if ('lastName' in fieldValues) {
            if (fieldValues.lastName) {
                if (!(/^[a-zA-Z]+$/).test(fieldValues.lastName)) {
                    temp.lastName = "Last Name should contain only alphabets not numbers or other special characters.";
                } else {
                    temp.lastName = "";
                }
            } else {
                temp.lastName = "This field is required.";
            }
        }
        if ('email' in fieldValues) {
            if (fieldValues.email == "") {
                temp.email = "This field is required."
            }
            else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(fieldValues.email)) {
                temp.email = "Email is not valid."
            }
            else {
                temp.email = "";
            }
        }

        if ('mobile' in fieldValues) {
            if (fieldValues.mobile) {
                if (!(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(fieldValues.mobile)) {
                    temp.mobile = "Mobile number is not valid.";
                } else {
                    temp.mobile = "";
                }
            } else {
                temp.mobile = "This field is required.";
            }
        }

        if ('departmentId' in fieldValues) {
            if(fieldValues.departmentId==0){
                temp.departmentId="This field is required.";
            }
            else{
                temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required.";
            }
        }       
        setErrors({
            ...temp
        })

        if (fieldValues == values) {
            if(temp.firstName == "" && temp.lastName=="" && temp.email=="" && temp.mobile=="" && temp.departmentId==""){
                return true;
            }
        }
    }

    const { onChange, values,errors,setErrors,resetForm,setValues } = useForm(
        initialState,
        true,
        validate,
        initialState
    );

    // submit function
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(validate()){
            if(values.employeeId>0){
                dispatch(EmployeeAction.updateEmployee(values))
            }else{
                dispatch(EmployeeAction.createEmployee(values))
            }
        }
        else{
            console.log("Form Validation Error")
        }
    }

   //reset form
   const resetFormDetails=()=>{
        resetForm()
   }
    
   //dynamic geneder values 
    const genderItems = [
        { id: 'male', title: 'Male' },
        { id: 'female', title: 'Female' },
        { id: 'other', title: 'Other' },
    ]

    const navigateToUserList=()=>{
        navigate("/");
    }

    useEffect(() => {
        dispatch(DepartmentAction.fetchDepartment());
    }, []); 

    useEffect(()=>{
        if(employeeApiResponse){
            if(employeeApiResponse.isSuccess && employeeApiResponse.message){
                navigateToUserList();
                dispatch(EmployeeAction.cleareUserMessage());
            }
        }
    },[employeeApiResponse])

    useEffect(()=>{
        if(id!=null && id!=undefined && parseInt(id)!=0){
            dispatch(EmployeeAction.fetchEmployeeGetByID(parseInt(id)))
        }
    },[])

    useEffect(()=>{        
        setValues({
            ...employeeRecords
        })
    },[employeeRecords])

    return(
        <>
             <Grid container justifyContent="center" alignItems="center" direction="column" style={{minHeight:"100vh"}}>
                <h1>Add Employee</h1>
                <form onSubmit={handleSubmit}>
                    <TextBox
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="First Name"
                        value={values.firstName}
                        onChange={onChange}
                        error={errors.firstName}  
                    />
                    <TextBox
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Last Name"
                        value={values.lastName}
                        onChange={onChange}
                        error={errors.lastName}         
                    />

                    <TextBox
                        id="email"
                        name="email"
                        type="text"
                        label="Email"
                        value={values.email}
                        onChange={onChange}
                        error={errors.email} 
                        className={classes.field}
                        fullWidth             
                    />
                    <TextBox
                        id="mobile"
                        name="mobile"
                        type="text"
                        label="Mobile"
                        value={values.mobile}
                        onChange={onChange}
                        error={errors.mobile}
                        className={classes.field}     
                        fullWidth             
                    />
                    <RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={onChange}
                        items={genderItems}
                        className={classes.field}     
                    />
                    <Dropdown
                        id="departmentId"
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={onChange}
                        options={departmentRecords}
                        error={errors.departmentId}
                        className={classes.field}     
                        fullWidth={true}         
                    />
                    <DatePicker
                        label="Date of Birth"
                        onChange={onChange}
                        value={values.dateOfBirth}
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className={classes.field}
                        fullWidth
                    />
                    <CheckBox
                        name="isPermanent"
                        id="isPermanent"
                        label="Permanent"
                        value={values.isPermanent}
                        onChange={onChange}
                        className={classes.field}     
                    />
                 
                    <Button
                        type="Submit"
                        text="submit"
                        color="primary"
                        size="small"
                        variant="contained"
                    />
                    <Button
                        text="Reset"
                        color="default"
                        size="small"
                        variant="contained"
                        onClick={resetForm}
                    />
                    <Button
                        text="Cancel"
                        color="default"
                        size="small"
                        variant="contained"
                        onClick={navigateToUserList}
                    /> 
                </form>
             </Grid>
        </>
    )
}