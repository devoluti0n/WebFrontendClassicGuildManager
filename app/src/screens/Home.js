import React, { useContext, useEffect } from 'react';

// Shared Context
import UserContext from "../context/UserContext";


export default (props) => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        /*
        userContext.dispatch({
            type: "LOGIN",
            name: "My name"
        })
        */
    })

    return <div>Test</div>;
};
