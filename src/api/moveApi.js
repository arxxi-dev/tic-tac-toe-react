import { request } from "./baseApi";

export const createMove = (data) => {
  return request.post("/moves", data);
};

export const boardReset = (data) => {
  return request.delete("/moves/reset_board", data);
};
