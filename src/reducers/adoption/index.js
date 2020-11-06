import { combineReducers } from "redux";

import { getRecom, petHeart, getList, getDetail, petDetailId } from "./main";

// //combine all reducer to a big reducer
export const adoptReducer = combineReducers({
  getRecom,
  petHeart,
  getList,
  getDetail,
  petDetailId,
});
