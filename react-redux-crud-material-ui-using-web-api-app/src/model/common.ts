export interface IAPIResponse<T> {
    data: T;
    success: boolean;
    error: string;
}

export type CommonAction<T = any> = {
    type: string;
    payload?: T;
}

export interface CommonState<T> {
    data: T;
    saving: boolean;
    loading: boolean;
    error: ''
    isError: boolean;
}