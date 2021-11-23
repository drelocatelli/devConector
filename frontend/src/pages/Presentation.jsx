import React, { useState, useEffect } from 'react';
import NavbarPrimary from '../components/NavbarPrimary';
import Container from '../components/Container';
import ApiService from '../Service/ApiService';
import DevList from '../components/DevList';

function Presentation() {

    const [data, setData] = useState([]);

    useEffect(async () => {

        try {

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await ApiService().get('/profile', config);

            let data = res.data.filter(i => i.visibility === true);

            console.log(data);
            setData(data);


        } catch (err) {
            console.error(err);
        }

    }, []);


    return (
        <>
            <NavbarPrimary />
            <Container title={'Devs profile'}>
                Browse and connect with developers
                <br /><br />
                Listing {data.length} profile(s):
                <br /><br />
                {(data.length >= 1) ?
                    <>
                        {data.map(dev => {
                            return (
                                <DevList 
                                    img={dev.user.avatar} 
                                    name={dev.user.name}
                                    status={dev.status}
                                    location={dev.location} 
                                    skills={dev.skills.join(', ')}>
                                        <a href="/profile" class={'btn btn-primary'}>View Profile</a>
                                </DevList>
                            )
                        })}
                    </>
                    :
                    <>No Devs found.</>
                }
            </Container>
        </>
    );
}

export default Presentation;