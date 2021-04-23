import { SHOW_CONFIRM, HIDE_CONFIRM } from "./dialogActions";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_CONFIRM:
      return {
        show: true,
        title: action.payload.title,
        msg: action.payload.msg,
        res: null,
      };
    case HIDE_CONFIRM:
      return {
        show: false,
        title: "",
        msg: "",
        res: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
