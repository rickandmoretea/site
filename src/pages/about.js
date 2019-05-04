import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'
const aboutPage = () => {
    return (
   <Layout>
       <Head title="about"/>
       <h1>About</h1>
            <p>17 year old high school developer from Bangkok, Thailand </p>
            <p>Website coming soon</p>
            <p>Also you can find my social media follow this link <Link to='/contact'> contact</Link></p>
   </Layout>
    )
}

export default aboutPage;