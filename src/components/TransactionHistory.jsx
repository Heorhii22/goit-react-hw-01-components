import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
export function TransactionHistory({ item }) {
  return (
    <table className={css.transactionTable}>
      <thead className={css.headers}>
        <tr>
          <th className={css.transactionTittle}>Type</th>
          <th className={css.transactionTittle}>Amount</th>
          <th className={css.transactionTittle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {item.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.transactionType}>{transaction.type}</td>
            <td className={css.transactionAmount}>{transaction.amount}</td>
            <td className={css.transactionCurrency}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
