export const ACTION_TYPES = {
  GLOBAL_LOCATION_CHANGE: "@@router/LOCATION_CHANGE",
  GLOBAL_GET_USERS: Symbol("GLOBAL.GET_USERS"),
  GLOBAL_ADD_USER: Symbol("GLOBAL_ADD_USER"),
  GLOBAL_SET_USER_COUNT: Symbol("GLOBAL_SET_USER_COUNT"),

  SIGN_LIST_CHANGE_SEARCH_INPUT: Symbol("SIGN_LIST.CHANGE_SEARCH_INPUT"),
  SIGN_LIST_START_TO_FETCH_USERS: Symbol("SIGN_LIST.START_TO_FETCH_USERS"),
  SIGN_LIST_FAILED_TO_FETCH_USERS: Symbol("SIGN_LIST.FAILED_TO_FETCH_USERS"),
  SIGN_LIST_END_TO_FETCH_USERS: Symbol("SIGN_LIST.END_TO_FETCH_USERS"),

  SIGN_LIST_START_TO_POST_USERS: Symbol("SIGN_LIST.START_TO_POST_USERS"),
  SIGN_LIST_FAILED_TO_POST_USERS: Symbol("SIGN_LIST.FAILED_TO_POST_USERS"),
  SIGN_LIST_END_TO_POST_USERS: Symbol("SIGN_LIST.END_TO_POST_USERS"),

  SIGN_BOX_REACH_BOX_MOVING_HEIGHT: Symbol("SIGN_BOX.REACH_BOX_MOVING_HEIGHT"),
  SIGN_BOX_LEAVE_BOX_MOVING_HEIGHT: Symbol("SIGN_BOX.LEAVE_BOX_MOVING_HEIGHT"),

  SIGN_BOX_CHANGE_NAME_INPUT: Symbol("SIGN_BOX.CHANGE_NAME_INPUT"),
  SIGN_BOX_CHANGE_AFFILIATION: Symbol("SIGN_BOX.CHANGE_AFFILIATION"),
  SIGN_BOX_CHANGE_AFFILIATION_EMAIL: Symbol("SIGN_BOX.CHANGE_AFFILIATION_EMAIL"),
  SIGN_BOX_CHANGE_COMMENT: Symbol("SIGN_BOX.CHANGE_COMMENT"),
  SIGN_BOX_TOGGLE_SEND_EMAIL_CHECK_BOX: Symbol("SIGN_BOX.TOGGLE_SEND_EMAIL_CHECK_BOX"),
  SIGN_BOX_FORM_ERROR: Symbol("SIGN_BOX.FORM_ERROR"),
  SIGN_BOX_REMOVE_FORM_ERROR: Symbol("SIGN_BOX.REMOVE_FORM_ERROR"),

  SIGN_BOX_START_TO_SUBSCRIBE_EMAIL: Symbol("SIGN_BOX.START_TO_SUBSCRIBE_EMAIL"),
  SIGN_BOX_SUCCEEDED_TO_SUBSCRIBE_EMAIL: Symbol("SIGN_BOX.SUCCEEDED_TO_SUBSCRIBE_EMAIL"),
  SIGN_BOX_FAILED_TO_SUBSCRIBE_EMAIL: Symbol("SIGN_BOX.FAILED_TO_SUBSCRIBE_EMAIL"),

  DECLARATION_TOGGLE_READ_MORE_BOX: Symbol("DECLARATION.TOGGLE_READ_MORE_BOX"),
};
