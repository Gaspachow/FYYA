import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/Layout'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function Home({ allPostsData }) {
    return (
        <Layout>
            <h2 >Blog</h2>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                </li>
                ))}
            </ul>
        </Layout>
    )
}