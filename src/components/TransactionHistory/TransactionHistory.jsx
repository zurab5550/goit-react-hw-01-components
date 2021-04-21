import React from 'react'
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

function TransactionHistory({ items }) {
    const transactionItem = items.map(item => {
        return (
            <tr key={item.id}>
                
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
        )
    })
  return (<table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
   {transactionItem}
  </tbody>
</table>)
}


export default TransactionHistory

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
}