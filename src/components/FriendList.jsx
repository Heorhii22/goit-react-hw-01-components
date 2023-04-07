import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map(friend => (
        <li key={friend.id} className={css.itemStatus}>
          <span className={friend.isOnline ? css.online : css.offline}></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
