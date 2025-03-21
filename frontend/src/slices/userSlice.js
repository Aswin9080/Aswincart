import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        user: {},
        users: {},
        isUserUpdated: false,
        isUserDeleted: false
    },
    reducers: {
        usersRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        usersSuccess(state, action) {
            return {
                ...state,
                loading: false,
                users: action.payload.user
            }
        },
        usersFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        userRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        userSuccess(state, action) {
            return {
                ...state,
                loading: false,
                user: action.payload.user
            }
        },
        userFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        deleteUserRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        deleteUserSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isUserDeleted:true
            }
        },
        deleteUserFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        updateUserRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        updateUserSuccess(state, action) {
            return {
                ...state,
                loading: false,
                isUserUpdated:true
            }
        },
        updateUserFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearUserDeleted(state, action) {
            return {
                ...state,
                isUserUpdated:false
            }
        },
        clearuserUpdated(state, action) {
            return {
                ...state,
                isUserUpdated:false
            }
        },
        clearError(state, action) {
           return{
            ...state,
            error :null
           }
        }
    }

});


const { actions, reducer } = userSlice

export const { 
    usersRequest,
    usersSuccess,
    usersFail,
    userRequest,
    userSuccess,
    userFail,
    deleteUserRequest,
    deleteUserSuccess,
    deleteUserFail,
    updateUserRequest,
    updateUserSuccess,
    updateUserFail,
    clearUserDeleted,
    clearuserUpdated,
    clearError } = actions
export default reducer