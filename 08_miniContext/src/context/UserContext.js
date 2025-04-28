import React from "react";
// Part 1
const UserContext = React.createContext({
    user: {},
    setUser: () => {},
});

export default UserContext;