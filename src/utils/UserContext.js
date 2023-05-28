import {createContext} from "react";

const UserContext = createContext({ 
  user:{
    name: "Sai Phanindra",
    email: "saiphanindra265@gmail.com"
  }
})

export default UserContext;