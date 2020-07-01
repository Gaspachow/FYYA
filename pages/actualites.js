import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/Layout'
import Date from '../components/Date'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function Home({ allPostsData }) {
  
  const containerStyle = {
    marginTop: 20
  }
  return (
      <Layout>
        <Container style={containerStyle}>
          <h2 >Actualité</h2>
          <ul>
              {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
              ))}
          </ul>
        </Container>
      </Layout>
  )
}