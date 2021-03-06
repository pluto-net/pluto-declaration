import { IReduxAction } from "../../typings/actionType";
import { IHomeStateRecord, HOME_INITIAL_STATE } from "./records";
import { ACTION_TYPES } from "../../actions/actionTypes";

export function reducer(state = HOME_INITIAL_STATE, action: IReduxAction<any>): IHomeStateRecord {
  switch (action.type) {
    case ACTION_TYPES.SIGN_LIST_CHANGE_SEARCH_INPUT: {
      return state.set("signListSearchQuery", action.payload.searchQuery);
    }

    case ACTION_TYPES.SIGN_BOX_CHANGE_NAME_INPUT: {
      return state.set("nameInput", action.payload.name);
    }

    case ACTION_TYPES.SIGN_BOX_CHANGE_AFFILIATION: {
      return state.set("affiliationInput", action.payload.affiliation);
    }

    case ACTION_TYPES.SIGN_BOX_CHANGE_AFFILIATION_EMAIL: {
      return state.set("affiliationEmailInput", action.payload.affiliationEmail);
    }

    case ACTION_TYPES.SIGN_BOX_CHANGE_COMMENT: {
      return state.set("commentInput", action.payload.comment);
    }

    case ACTION_TYPES.SIGN_LIST_START_TO_FETCH_USERS: {
      return state.withMutations(currentState => {
        return currentState.set("userListIsLoading", true).set("userListIsEnd", false);
      });
    }

    case ACTION_TYPES.SIGN_LIST_FAILED_TO_FETCH_USERS:
    case ACTION_TYPES.SIGN_LIST_END_TO_FETCH_USERS: {
      return state.withMutations(currentState => {
        return currentState.set("userListIsLoading", false).set("userListIsEnd", true);
      });
    }

    case ACTION_TYPES.SIGN_LIST_START_TO_POST_USERS: {
      return state.set("isLoading", true).set("hasError", false);
    }

    case ACTION_TYPES.SIGN_LIST_FAILED_TO_POST_USERS: {
      return state.set("isLoading", false).set("hasError", true);
    }

    case ACTION_TYPES.SIGN_BOX_START_TO_SUBSCRIBE_EMAIL: {
      return state.set("isLoading", true).set("hasError", false);
    }

    case ACTION_TYPES.SIGN_BOX_SUCCEEDED_TO_SUBSCRIBE_EMAIL: {
      return state.set("isLoading", false).set("hasError", false);
    }

    case ACTION_TYPES.SIGN_BOX_FAILED_TO_SUBSCRIBE_EMAIL: {
      return state.set("isLoading", false).set("hasError", true);
    }

    case ACTION_TYPES.GLOBAL_ADD_USER: {
      return state.withMutations(currentState => {
        return currentState
          .set("isLoading", false)
          .set("alreadySigned", true)
          .set("usersCount", currentState.usersCount + 1);
      });
    }

    case ACTION_TYPES.GLOBAL_SET_USER_COUNT: {
      return state.set("usersCount", action.payload.count);
    }

    case ACTION_TYPES.GLOBAL_GET_USERS: {
      return state.withMutations(currentState => {
        return currentState
          .set("userListPage", currentState.userListPage + 1)
          .set("userListIsLoading", false)
          .set("userListIsEnd", false);
      });
    }

    case ACTION_TYPES.SIGN_BOX_TOGGLE_SEND_EMAIL_CHECK_BOX: {
      return state.set("sendEmailChecked", !state.sendEmailChecked);
    }

    case ACTION_TYPES.DECLARATION_TOGGLE_READ_MORE_BOX: {
      return state.set("isReadMoreBoxToggled", !state.isReadMoreBoxToggled);
    }

    case ACTION_TYPES.SIGN_BOX_FORM_ERROR: {
      return state.setIn(["formInputErrorCheck", action.payload.type], true);
    }

    case ACTION_TYPES.SIGN_BOX_REMOVE_FORM_ERROR: {
      return state.setIn(["formInputErrorCheck", action.payload.type], false);
    }

    default:
      return state;
  }
}
