import React from 'react';

const userInitialState = {
    name: null,
    token: null
};

const UserContext = React.createContext({});

const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log("Login...", action);
            return {
                ...state, name: action.name
            }

        case "LOGOUT":
            console.log("Logout...", action);
            return {
                ...state, name: null
            }

        default:
            console.log("Unknown action for user reducer", action);
            return state;
    }
}

export {
    userInitialState,
    userReducer
}

export default UserContext;