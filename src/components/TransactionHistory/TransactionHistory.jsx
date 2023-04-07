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
          <tr key={transaction.id} className={css.tableColors}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
