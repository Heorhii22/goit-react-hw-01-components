import user from '../data/user.json';
import transaction from '../data/transaction.json';
import data from '../data/data.json';
import friendsData from '../data/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics statistics={data} title="Upload data" />
      <FriendList friends={friendsData} />
      <TransactionHistory item={transaction} />
    </>
  );
};
