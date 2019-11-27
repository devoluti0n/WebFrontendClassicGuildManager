import React from "react";

// Shared Context
import UserContext from "../context/UserContext";

export default (props) => {
    const userContext = useContext(UserContext);
    console.log(userContext);

    return <div>Header</div>;
};
