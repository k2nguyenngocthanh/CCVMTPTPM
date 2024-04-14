import { localUserSrv } from "../../Service/localService";
import { USER_LOGIN } from "../contact/userContant";

const initialState = {
  userInfo: localUserSrv.get(),
};

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:{
        return{...state,userInfo:payload};
    }
    default:
      return state;
  }
};
export default userReducer;
    