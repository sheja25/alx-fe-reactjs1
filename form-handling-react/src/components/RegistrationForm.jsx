import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation to check if any field is empty
        if (!username || !email || !password) {
            setErrors({ message: 'Please fill in all fields' });
            return;
        }

        // Handle form submission logic here
        // ...

        // Reset form fields after submission
        setUsername('');
        setEmail('');
        setPassword('');
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors.message && <p>{errors.message}</p>}
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;