import './App.css';
import Profile from '../src/components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statisticalData from './data/statistical-data.json';
import FriendList from '../src/components/FriendList/FriendList.jsx';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory.jsx';

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
