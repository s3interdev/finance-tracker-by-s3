import { useFirestore } from '../../hooks/useFirestore';

const TransactionList = ({ transactions }) => {
	const { deleteDocument } = useFirestore('transactions');

	return (
		<ul className="transactions">
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className="name">{transaction.name}</p>
					<p className="amount">KES{transaction.amount}</p>
					<button onClick={() => deleteDocument(transaction.id)}>x</button>
				</li>
			))}
		</ul>
	);
};

export default TransactionList;
