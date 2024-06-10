import axios from "axios";
import { axiosInstance } from "./Axios.Instance";
export const getPokemonApI = async () => {
  const { data } = await axiosInstance.get("");
  return data;
};
