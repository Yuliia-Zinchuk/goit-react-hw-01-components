import PropTypes from 'prop-types';
import css from './FriendList.module.css';
//import { Alert } from '../Alert/Alert';
//console.log(Alert);
//console.log(css);

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, avatar, name, isOnline }) => (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.online : css.ofline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
};
//console.log(css[name]);
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
