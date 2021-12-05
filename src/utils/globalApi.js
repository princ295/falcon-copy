import axios from "axios";

const base_url = process.env.REACT_APP_ENDPOINT;

export const GlobalApi = {

  async getState() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

  async getDistrict() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

  async getOffice() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

  async getModule() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

  async getStage() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

  async getStatus() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

  async getOfficerStage() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

}