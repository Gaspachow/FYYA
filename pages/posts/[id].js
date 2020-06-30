import Layout from '../../components/Layout'
import Container from 'react-bootstrap/Container'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
const postData = getPostData(params.id)
return {
    props: {
    postData
    }
}
}

export default function Post({postData}) {
  return <Layout>
      <Container>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Container>
  </Layout>
}