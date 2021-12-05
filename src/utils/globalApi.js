import axios from "axios";

const base_url = process.env.REACT_APP_ENDPOINT;

export const GlobalApi = {

  async getState() {
    alert('Api Hit')
    const { data } = await axios.get(base_url+`common/state`);
    return data;
  },

  async getDistrict(district) {
    const { data } = await axios.get(base_url+`common/district/`+ district);
    return data;
  },

  async getOffice({state, district}) {
    const { data } = await axios.get(base_url+"common/officelistddl/" + state + "/" + district,);
    return data;
  },

  async getModule() {
    const { data } = await axios.get(base_url+`common/getmodulelist`);
    return data;
  },

  async getStage() {
    const { data } = await axios.get(base_url+`common/getstagelist`);
    return data;
  },

  async getStatus() {
    const { data } = await axios.get(base_url+`common/CommonList/action_status`);
    return data;
  },

  async getOfficerStage() {
    const { data } = await axios.get(base_url+``);
    return data;
  },

}