import styles from '../Signup/signup.module.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from '../Navbar/Navbar';
import { useHistory } from "react-router-dom";
import {userContext} from '../../App';
export const Signup = () =>
{
    const [clickResult, setResult] = useState(false);

    const [dataObj, setObj] = useState({});

    const history = useHistory();

    const { state, setState } = useContext(userContext);

    const handleInputValues = (e) => {

        const { name, value } = e.target;
        setObj({ ...dataObj, [name]: value });
    }

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        const systemData = {
            'ip_address': res.data.IPv4,
            'country': res.data.country_name
        }
        setObj({ ...dataObj, ...systemData });
    }





    const handleForemData = (e) => {

        axios({
            method: 'post',
            url: 'http://localhost:2222/users/register',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(dataObj),
            withCredentials: true
        }).then((res) => {
            setObj({});
            e.target.reset();
            //history.push('/');

        }).catch((err) => {
            alert(err);
        });
        e.preventDefault();
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <Navbar />
            <section className={styles.Signup__section}>
                <div className={styles.signup__page}>
                    <div className={styles.signup__content}>
                        <h1 className={styles.h1__title}>Welcome to DEV Community</h1>
                        <p className={styles.signup__des}><a href="" className={styles.link__style}>DEV Community</a> is a community of 702,115 amazing developers</p>

                        <div className={styles.signup__btn}>
                            <button className={`${styles.button__black} ${styles.btn__styles}`}> <i className={`${styles.icon__font} uit uit-apple-alt`}></i> Sign up with Apple</button>
                            <button className={`${styles.button__gray} ${styles.btn__styles}`}> <i className={` ${styles.icon__font} uit uit-github-alt`}></i> Sign up with GitHub</button>
                            <button className={`${styles.button__skyblue} ${styles.btn__styles}`}><i className={`${styles.icon__font} uit uit-twitter-alt`}></i> Sign up with Twitter</button>
                        </div>

                        <div className={styles.login__link}>
                            <span className={styles.login__span}>Already have an account? <a href="javascript:void(0)" onClick={() => setResult(!clickResult)} className={styles.link__style}>Login</a></span>
                        </div>


                        <div className={`${styles.flex__design} ${styles.input__div} ${clickResult ? styles.form__block : styles.form__visible}`}>
                            <form className={`${styles.flex__design} ${styles.input__div}`} onSubmit={handleForemData}>
                                <div className={styles.input__parent}>
                                    <label className={styles.label__style}>First Name</label>
                                    <input className={styles.input__styles} type="text" name="first_name" placeholder="First Name" onChange={handleInputValues} value={dataObj.first_name} />
                                </div>

                                <div className={styles.input__parent}>
                                    <label className={styles.label__style}>Last Name</label>
                                    <input className={styles.input__styles} type="text" name="last_name" placeholder="Last Name" onChange={handleInputValues} value={dataObj.last_name} />
                                </div>

                                <div className={styles.input__parent}>
                                    <label className={styles.label__style}>Email</label>
                                    <input className={styles.input__styles} type="text" name="email" placeholder="Email" onChange={handleInputValues} value={dataObj.email} />
                                </div>
                                <div className={styles.input__parent}>
                                    <label className={styles.label__style}>Location</label>
                                    <input className={styles.input__styles} type="text" name="location" placeholder="Location" onChange={handleInputValues} value={dataObj.location} />
                                </div>
                                <div className={styles.input__parent}>
                                    <label className={styles.label__style}>Password</label>
                                    <input className={styles.input__styles} type="password" name="password" placeholder="Password" onChange={handleInputValues} value={dataObj.password} />
                                </div>

                                <div className={styles.input__parent}>
                                    <button className={`${styles.btn__styles} ${styles.button__blue}`}>Continue</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
                <div className={styles.extra__content}>
                    <p className={styles.flex__design}>Open Source &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                        <path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"></path><path fillRule="evenodd" clipRule="evenodd" fill="#292F33" d="M1.24 11.018c.24.239 1.438.957 1.677 1.675.24.717.72 4.784 2.158 5.981 1.483 1.232 7.077.774 8.148.24 2.397-1.195 2.691-4.531 3.115-6.221.239-.957 1.677-.957 1.677-.957s1.438 0 1.678.956c.424 1.691.72 5.027 3.115 6.221 1.072.535 6.666.994 8.151-.238 1.436-1.197 1.915-5.264 2.155-5.982.238-.717 1.438-1.435 1.677-1.674.241-.239.241-1.196 0-1.436-.479-.478-6.134-.904-12.223-.239-1.215.133-1.677.478-4.554.478-2.875 0-3.339-.346-4.553-.478-6.085-.666-11.741-.24-12.221.238-.239.239-.239 1.197 0 1.436z"></path><path fill="#664500" d="M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243c.123-.205.084-.468-.094-.628z"></path>
                    </svg>· Free Forever &nbsp; <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="24" height="24">
                            <path fill="#DD2E44" d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"></path>
                        </svg>
                    </p>
                    <p>We strive for transparency and don't collect excess data.</p>
                </div>

            </section>
        </>
    );
}