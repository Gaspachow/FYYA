import Layout from '../../components/Layout'
import Container from 'react-bootstrap/Container'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/Date'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
const postData = await getPostData(params.id)
return {
    props: {
    postData
    }
}
}

export default function Post({postData}) {

    const containerStyle = {
        marginTop: 20
    }
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <Container style={containerStyle}>
        <h1>{postData.title}</h1> 
        <Date dateString={postData.date}/>
        <br />
        <br />
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
        <h5>
        <Link href="/">
            <a>← Retour</a>
        </Link>
        </h5>
        </Container>
    </Layout>
  )
}