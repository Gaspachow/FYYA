import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/Layout'
import Date from '../components/Date'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Head from "next/head"

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
    marginTop: 20,
    fontSize: "1.5em"
  }

  const newsCont = {
    padding: 10
  }

  return (
      <Layout>
        <Head>
          <title>Actualité FYYA</title>
        </Head>
        <Container style={containerStyle}>
          <Container>
            <h1>Actualité FYYA</h1>
          </Container>
          <ul>
              {allPostsData.map(({ id, date, title }) => (
              <Container style={newsCont}>
                <li key={id}>
                  <Link href="/posts/[id]" as={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              </Container>
              ))}
          </ul>
        </Container>
      </Layout>
  )
}