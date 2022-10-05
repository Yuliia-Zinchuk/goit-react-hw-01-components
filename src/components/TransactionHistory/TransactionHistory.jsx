import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <section className={css.container}>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.tableHeader}>
            <th className={css.tableHeaderItem}>Type</th>
            <th className={css.tableHeaderItem}>Amount</th>
            <th className={css.tableHeaderItem}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={css.tableRow} key={id}>
              <td className={css.tableRowItem}>{type}</td>
              <td className={css.tableRowItem}>{amount}</td>
              <td className={css.tableRowItem}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
