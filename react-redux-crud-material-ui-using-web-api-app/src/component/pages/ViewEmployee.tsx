import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import {Button} from '../control'
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
import {EmployeeHook} from '../../hooks';
import {EmployeeAction} from '../../store'
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  export const ViewEmployee=()=>{
    const classes = useStyles();
    const { data: employeeRecord, loading, error, isError, apiResponse } = EmployeeHook(); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    
    const navigateToREmployeeList=()=>{
        navigate("/");
    }

    useEffect(()=>{
        if(id!=null && id!=undefined && parseInt(id)!=0){
            dispatch(EmployeeAction.fetchEmployeeGetByID(parseInt(id)))
        }
    },[])

    return(
       <Container>
            <div className={classes.root}>
            <h1>View Employee Details</h1>
            <Button
                    text="Back"
                    color="primary"
                    size="small"
                    variant="contained"
                    onClick={navigateToREmployeeList}
            />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>First Name: {employeeRecord.firstName}</Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper className={classes.paper}>Last Name: {employeeRecord.lastName}</Paper>
                </Grid>

                <Grid item xs={12}>
                <Paper className={classes.paper}>Email: {employeeRecord.email}</Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper className={classes.paper}>Mobile: {employeeRecord.mobile}</Paper>
                </Grid>

                <Grid item xs={12}>
                <Paper className={classes.paper}>Gender: {employeeRecord.gender}</Paper>
                </Grid>
                <Grid item xs={12}>
                <Paper className={classes.paper}>Department: {employeeRecord.department}</Paper>
                </Grid>

                <Grid item xs={12}>
                <Paper className={classes.paper}>Date of birth: {employeeRecord.dateOfBirth!=undefined && employeeRecord.dateOfBirth!=null ? moment(new Date(employeeRecord.dateOfBirth))
                            .utc(true)
                            .local()
                            .format("MM/DD/YYYY"):''}</Paper>
                </Grid>
            </Grid>
        </div>
       </Container>
    )
  }