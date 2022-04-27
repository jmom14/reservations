export interface AuthSlice {
    user: IUser,
    isLoading: boolean,
    token: string | null,
    error: string,
}

export interface IUser {
    username?: string,
    email?: string
}  

export interface RootState {
    auth: AuthSlice,
}