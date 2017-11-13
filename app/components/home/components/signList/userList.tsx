import * as React from "react";
import * as moment from "moment";
import { IUserInformation } from "../../../../reducers/users";
import { List } from "immutable";
import { USER_LIST_SORT_TYPE } from "../../records";
const InfiniteScroll = require("react-infinite-scroller");
const styles = require("./signList.scss");

interface IUserListProps {
  users: List<IUserInformation>;
  page: number;
  isLoading: boolean;
  isEnd: boolean;
  sort: USER_LIST_SORT_TYPE;
  fetchData: () => void;
}

class UserList extends React.PureComponent<IUserListProps, {}> {
  private mapUsers = () => {
    const { users } = this.props;

    return users.map((user, index) => {
      const date = new Date(user.date);

      return (
        <li className={styles.userItem} key={`userList_${index}`}>
          <span className={styles.userItemName}>{user.name}</span>
          <span className={styles.userItemAffiliation}>{user.affiliation}</span>
          <span className={styles.userItemDate}>{moment(date).format("M/D/YYYY")}</span>
        </li>
      );
    });
  };

  public render() {
    return (
      <div className={styles.joinFormWrapper}>
        <InfiniteScroll
          loadMore={this.props.fetchData}
          hasMore={!this.props.isEnd}
          threshold={400}
          loader={<div className="loader">Loading ...</div>}
        >
          <ul className={styles.userList}>
            <li className={styles.userItemCategory}>
              <span className={styles.userItemName}>Name</span>
              <span className={styles.userItemAffiliation}>Affiliation</span>
              <span className={styles.userItemDate}>Date</span>
            </li>
            {this.mapUsers()}
          </ul>
        </InfiniteScroll>
      </div>
    );
  }
}

export default UserList;
