import css from './FriendList.module.css';
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
