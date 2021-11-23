import React, {useState} from 'react';
import NavbarPrimary from '../components/NavbarPrimary';
import Container from '../components/Container';
import ApiService from '../Service/ApiService';

function Join() {

    const [message, setMessage] = useState();
    const [info, setInfo] = useState();

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

        setMessage(null);

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
                setInfo('Success login!');

            }catch (err) {
                let error = err.response.data.errors[0].msg;
                setInfo(null);
                if (error) {
                    setMessage(error);
                } else {
                    setMessage('Server error');
                }

            }

        }
    
  return (
            <>
                <NavbarPrimary />
                <Container title={"Sign In"}>
                    <span>Sign into Your Account</span>
                    <br /><br />
                    {(info) &&
                        <span className="alert-info">{info}</span>
                    }
                    {(message) &&
                        <span className="alert">{message}</span>
                    }
                    <form  onSubmit={(e) => submitForm(e)}>
                        <table border={'0'} align={'center'}>
                            <tr>
                                <td>
                                    <input type="email" name={'email'} value={email} onChange={e => formChange(e)} placeholder={'Email address'} />
                                </td>
                                <td>
                                    <input type="password" name={'password'} value={password} onChange={e => formChange(e)} placeholder={'********'} />
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

    export default Join;
