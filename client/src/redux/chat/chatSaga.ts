import {
  all,
  call,
  delay,
  put,
  take,
  takeEvery,
  takeLatest
} from "@redux-saga/core/effects";
import { chatTypes } from "./chatAction";
import axios from "../../common/axiosConfig";
import * as toastify from "../../common/toastify";
import config from "../../common/config.json";
import { singleFileUpload } from "../../common/fileUpload";

function* sagaImg() {
	
}

function* profileSaga() {
  yield all([
		
  ]);
}

export default profileSaga;
