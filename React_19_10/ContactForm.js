import React, { useState } from 'react';
import './styles.css';

function ContactForm() {
    const [err, setErr] = useState({});
    const [submit, setSubmit] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [msg, setMsg] = useState('');

    // ✅ Validation function
    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = 'Name is required';

        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!form.message.trim()) newErrors.message = 'Message is required';

        return newErrors;
    };

    // ✅ Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate();

        if (Object.keys(validateErrors).length > 0) {
            setErr(validateErrors);
        } else {
            setMsg(form.name);
            setSubmit(true);
            setErr({});
            setForm({ name: '', email: '', message: '' });
        }
    };

    // ✅ Handle field changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErr({ ...err, [e.target.name]: '' }); // clear error while typing
    };

    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            {submit ? (
                <h2>Thank You, {msg}! </h2>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                    {err.name && <p style={{ color: 'red' }}>{err.name}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    />
                    {err.email && <p style={{ color: 'red' }}>{err.email}</p>}

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                    ></textarea>
                    {err.message && <p style={{ color: 'red' }}>{err.message}</p>}

                    <button type="submit" style={{ marginTop: '1rem' }}>
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
