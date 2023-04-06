import user from './user.json';
import transactions from './transactions.json';
import data from './data.json';
import friendsData from './friends.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './Transactions';
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
      <Statistics statistics={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory item={transactions} />
    </>
  );
};
