import { axios } from "./axios";

export const createNode = async (payload) => {
  return await axios.post("/create-notes", payload);
};
export const getNotes = async (payload) => {
  return await axios.get("/notes", payload);
};
export const deleteNotes = async (payload) => {
  return await axios.post("/delete-notes", payload);
};
