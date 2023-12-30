import { createContext } from "react";

const UserContext = createContext({
     loggedInUser: "deafult user" 
});

export default UserContext;