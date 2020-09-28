import Date from './Date'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Actu({ allPostsData }) {
  
  const containerStyle = {
    marginTop: 20,
    marginBottom: 20,
    fontSize: "1.4em",
    width: 400
  }

  return (
      <>
        <Container style={containerStyle}>
          <Container>
            <h1>Actualité FYYA</h1>
          </Container>
          <ListGroup>
              {allPostsData.map(({ id, date, title }) => (
                <Link href="/posts/[id]" as={`/posts/${id}`} key={id}>
                  <ListGroup.Item action hover="true">
                    <p>{title}</p>
                    <small>
                      <Date dateString={date} />
                    </small>
                  </ListGroup.Item>
                </Link>
              ))}
          </ListGroup>
        </Container>
      </>
  )
}