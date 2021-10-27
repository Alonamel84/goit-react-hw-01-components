import s from './Transactions.module.css'
const Transactions = ({  type, amount, currency }) => {
    return(
  
                <tr >
        <td className={ s.table}>{ type}</td>
        <td className={ s.table}>{ amount}</td>
        <td className={ s.table}>{ currency}</td>
    </tr>
    )
}

export default Transactions;