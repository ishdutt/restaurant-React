import MainComponent from "../components/MainComponent";
import { Component } from "react";

export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING';
export const DISHES_FAILED = 'DISHES_FAILED';
export const ADD_DISHES = 'ADD_DISHES';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const PROMOS_LOADING = 'PROMOS_LOADING';
export const ADD_PROMOS = 'ADD_PROMOS';
export const PROMOS_FAILED = 'PROMOS_FAILED';
export const LEADERS_LOADING = 'LEADERS_LOADING';
export const ADD_LEADERS = 'ADD_LEADERS';
export const LEADERS_FAILED = 'LEADERS_FAILED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const FAVORITES_LOADING = 'FAVORITES_LOADING';
export const FAVORITES_FAILED = 'FAVORITES_FAILED';
export const ADD_FAVORITES = 'ADD_FAVORITES';


//For Creating a new State:
// 1. Edit Here add its action
// 2. Add respective funtions in ActionCreaters
// 3. Add dispathtostore in MainComponent
// 4. send as props to respective Component
// 5. use the main function passed as props for modifying the state 