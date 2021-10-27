import Transactions from "./TransactionsItem.jsx";
import s from './TransactionsItem.module.css'
const TransactionHistory = ({ items }) => {
    
    return (
        <>
            <table className={s.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(item =>
                <Transactions key={item.id} type={item.type} amount={item.amount} currency={item.currency} />)}
    </tbody>
            </table>
            </>)
};
export default TransactionHistory;

