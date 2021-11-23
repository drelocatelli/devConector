import React, { useState } from 'react';
import NavbarPrimary from '../components/NavbarPrimary';
import Container from '../components/Container';
import ApiService from '../Service/ApiService';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Alert from '../components/Alert';

function Join({ setAlert }) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const formChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const userLogin = { email, password };

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }


            const body = JSON.stringify(userLogin);
            const res = await ApiService().post('/auth', body, config);

            console.log(res.data);
            setAlert('Success login!', 'success');

        } catch (err) {
            let error = err.response.data.errors[0].msg;
            if (error) {
                setAlert(error, 'danger');
            } else {
                setAlert('Server error', 'danger');
            }

        }

    }

    return (
        <>
            <NavbarPrimary />
            <Container title={"Sign In"}>
                <span>Sign into Your Account</span>
                <br /><br />
                <Alert />
                <form onSubmit={(e) => submitForm(e)}>
                    <table border={'0'} align={'center'}>
                        <tr>
                            <td>
                                <input type="email" name={'email'} value={email} onChange={e => formChange(e)} placeholder={'Email address'} required />
                            </td>
                            <td>
                                <input type="password" name={'password'} value={password} onChange={e => formChange(e)} placeholder={'********'} required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={'2'}>
                                <span style={{ fontSize: '22px', position: 'relative', top: '10px' }}>
                                    <a href="/register">Don't have an account? Register</a>
                                </span>
                                <div style={{ float: 'right' }}>
                                    <button class={'primary'} type="submit">Login</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
            </Container>
        </>
    );
}

Join.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Join);
