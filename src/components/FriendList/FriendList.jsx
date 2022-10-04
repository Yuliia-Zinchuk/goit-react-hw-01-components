import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className="friend-list">
        <FriendListItem friends={friends} />
      </ul>
    </>
  );
};
