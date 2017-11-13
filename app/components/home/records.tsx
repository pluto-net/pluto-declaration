import { TypedRecord, makeTypedFactory } from "typed-immutable-record";

export enum USER_LIST_SORT_TYPE {
  DATE,
  NAME,
  AFFILIATION,
}

export interface IHomeState {
  isLoading: boolean; // For post user
  hasError: boolean; // For post user
  signListSearchQuery: string;
  isTop: boolean;
  isBoxMovingHeight: boolean;
  nameInput: string;
  affiliationInput: string;
  affiliationEmailInput: string;
  commentInput: string;
  userListIsLoading: boolean;
  userListIsEnd: boolean;
  userListPage: number;
  userListSort: USER_LIST_SORT_TYPE;
}

export interface IHomeStateRecord extends TypedRecord<IHomeStateRecord>, IHomeState {}

const initialHomeState: IHomeState = {
  isLoading: false,
  hasError: false,
  signListSearchQuery: "",
  isTop: true,
  isBoxMovingHeight: false,
  nameInput: "",
  affiliationInput: "",
  affiliationEmailInput: "",
  commentInput: "",
  userListIsLoading: false,
  userListIsEnd: false,
  userListPage: 0,
  userListSort: USER_LIST_SORT_TYPE.DATE,
};

export const HomeStateFactory = makeTypedFactory<IHomeState, IHomeStateRecord>(initialHomeState);

export const HOME_INITIAL_STATE = HomeStateFactory();
