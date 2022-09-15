import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);

	const signup = async (email, password, displayName) => {
		setError(null);
		setIsPending(true);

		try {
			/** signup procedure */
			const res = await projectAuth.createUserWithEmailAndPassword(email, password);

			if (!res) {
				throw new Error('Could not complete the new user signup');
			}

			/** add the display name to user profile */
			await res.user.updateProfile({ displayName });

			setIsPending(false);
			setError(null);
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setIsPending(false);
		}
	};

	return { error, isPending, signup };
};
