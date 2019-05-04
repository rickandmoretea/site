import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import contactStyle from './contact.module.scss'
const Email = "mailto:pongchaihantapong@protonmail.com";
const contactPage = () => {
    return (
        <Layout>
            <Head title="contact"/>
            <h1>Contact</h1>
            <h3 className={contactStyle.email}><a href={Email}>Email</a></h3>
        </Layout>
    )
    }

    export default contactPage;