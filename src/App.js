import './App.css';
import Profile from './Profile/Profile.jsx';
import user from './User/user.json';
import Statistics from './Statistics/Statistics.jsx';
import statisticalData from './Statistics/statistical-data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';
import TransactionHistory from './Transactions/TransactionHistory.jsx';

export const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
