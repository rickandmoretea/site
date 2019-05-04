import React from 'react';
import { graphql , useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout';
import blogStyles from './blog.module.scss'
import Head from '../components/head'
const blogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                    } 
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <Head title="blog"/>
            <ol className={blogStyles.posts}>
               {
                   data.allMarkdownRemark.edges.map((edges) => {
                       return (
                           <li className={blogStyles.post}>
                               <Link to={`/blog/${edges.node.fields.slug}`}>
                               <h2>{edges.node.frontmatter.title}</h2>
                               <p>{edges.node.frontmatter.date}</p>
                               </Link>
                           </li>
                       )
                   })
               } 
            </ol>
        </Layout>
    )
}

export default blogPage