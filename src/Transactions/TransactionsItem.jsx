import PropTypes from 'prop-types';
import s from './TransactionsItem.module.css'
const Transactions = ({  type, amount, currency }) => {
    return(
  
                <tr >
        <td className={ s.table}>{ type}</td>
        <td className={ s.table}>{ amount}</td>
        <td className={ s.table}>{ currency}</td>
    </tr>
    )
}
Transactions.propTypes = {
    type: PropTypes.oneOf(['withdrawal', 'invoice', 'payment', 'deposit']),
    amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
    currency: PropTypes.string,
}
export default Transactions;