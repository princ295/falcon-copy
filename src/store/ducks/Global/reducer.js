// action type
import { produce } from "immer";
import { NotificationStatus } from "../../types";
import { GlobalStateActionType } from "./actionCreator";
import { NotificationActionsType } from "./contracts/actionType";

export const ChangeLanguageActionType = {
  SET_LANGUAGE: 'SET_LANGUAGE'
} 

export const ChangeModalActionType = {
  SET_MODAL: 'SET_MODAL'
}


const initialGlobalState = {
  modal: undefined,
  state_name: [],
  district_name: [],
  office: [],
  module: [],
  stage: [],
  status: [],
  officer_stage: [],
  notification: {
    visible: false,
    text: undefined,
    type: NotificationStatus.NEVER
  },
}

export const globalReducer = produce((draft, action) => {
   switch(action.type){
    
    case GlobalStateActionType.SET_STAGE:
      draft.state_name = action.payload;
      break

    case GlobalStateActionType.SET_DISTRICT:
      draft.district_name = action.payload;
      break

    case GlobalStateActionType.SET_OFFICE:
      draft.office = action.payload;
      break

    case GlobalStateActionType.SET_MODULE:
      draft.module = action.payload;
      break

    case GlobalStateActionType.SET_STAGE:
      draft.stage = action.payload;
      break

    case GlobalStateActionType.SET_OFFICER_STAGE:
      draft.officer_stage = action.payload;
      break

    default: 
      break
   }
}, initialGlobalState);