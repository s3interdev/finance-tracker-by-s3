import { useState } from 'react';

const TransactionForm = () => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ name, amount });
	};

	return (
		<>
			<h3>Add a Transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Transaction Name:</span>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
					/>
				</label>
				<label>
					<span>Amount (KES):</span>
					<input
						type="number"
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
						required
					/>
				</label>
				<button>Add Transaction</button>
			</form>
		</>
	);
};

export default TransactionForm;
