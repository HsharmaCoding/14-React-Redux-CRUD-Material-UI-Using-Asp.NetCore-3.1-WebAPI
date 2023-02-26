// export interface IResponse {
//     isSuccess: boolean;
//     message: string;
//     id: string;
//     errorCode: string;
//     detail?: string;
// }

// export type CommonAction<T = any> = {
//     type: string;
//     payload?: T;
// }

// export interface CommonState<T> {
//     data: T;
//     saving: boolean;
//     loading: boolean;
//     error: ''
//     isError: boolean;
// }

export interface IResponse {
    isSuccess: boolean;
    message: string;
    id: string;
    errorCode: string;
    detail?: string;
}