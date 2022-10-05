import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friend_list}>
        <FriendListItem friends={friends} />
      </ul>
    </>
  );
};
