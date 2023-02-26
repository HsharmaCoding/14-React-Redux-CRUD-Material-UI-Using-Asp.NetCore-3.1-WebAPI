import { combineEpics } from "redux-observable";
import employee from "./employee"
import department from "./department"

export const rootEpics=combineEpics(
    employee,
    department
)