import { GlobalStateActionType } from "./contracts/actionType";

export const fethStateData = (payload) => ({
  type: GlobalStateActionType.FETCH_STATE
})



export const setState = (payload) => ({
  type: GlobalStateActionType.SET_STATE,
  payload
})

export const setDistrict = (payload) => ({
  type: GlobalStateActionType.SET_DISTRICT,
  payload
})

export const setOffice = (payload) => ({
  type: GlobalStateActionType.SET_OFFICE,
  payload
})
  
export const setModule = (payload) => ({
  type: GlobalStateActionType.SET_MODULE,
  payload
})


export const setStage = (payload) => ({
  type: GlobalStateActionType.SET_STAGE,
  payload
})

export const setStatus = (payload) => ({
  type: GlobalStateActionType.SET_STATUS,
  payload
})

export const setOfficerStage = (payload) => ({
  type: GlobalStateActionType.SET_OFFICER_STAGE,
  payload
})
