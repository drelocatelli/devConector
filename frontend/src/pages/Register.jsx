import React, {useState} from 'react';
import PropTypes from 'prop-types';

import NavbarPrimary from '../components/NavbarPrimary';
import Container from '../components/Container';
import ApiService from '../Service/ApiService';

import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Alert from '../components/Alert';

function Register({ setAlert }) {

    const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            password2: ''
        });

    const { name, email, password, password2 } = formData;

    const formChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        if(password != password2) {
            setAlert('Passwords do not match', 'danger');
        }else {
            
            try {
                const newUser = { name, email, password };
                
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser);
                const res = await ApiService().post('/users', body, config);

                console.log(res.data);
                setAlert('Now you can login', 'success');
                
            }catch(err) {
                let error = err.response.data.errors[0].msg;
                if(error) {
                    setAlert(error, 'danger');
                }else{
                    setAlert('Server error', 'danger');
                }
                
            }
            
        }
        
    }

    
  return (
    <>
      <NavbarPrimary />
        <Container title={"Register an account"}>
            <Alert />
            <form onSubmit={(e) => submitForm(e)}>
                <table border={'0'} width={'80%'} align={'center'}>
                        <tr>
                            <td>
                                <input type="text" name={'name'} value={name} onChange={e => formChange(e)} placeholder={'Your name'} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email" name={'email'} value={email} onChange={e => formChange(e)} placeholder={'Email address'} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name={'password'} value={password} onChange={e => formChange(e)} placeholder={'Password'} required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" name={'password2'} value={password2} onChange={e => formChange(e)} placeholder={'Confirm password'} required />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={'2'}>
                                <span style={{fontSize:'22px', position: 'relative', top: '10px'}}>
                                    <a href="/join">Already have an account? Sign In</a>
                                </span>
                                <div style={{float:'right'}}>
                                    <button className={'primary'} type="submit">Register account</button>
                                </div>
                            </td>
                        </tr>
                </table>
            </form>
        </Container>
    </>
  );
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);
