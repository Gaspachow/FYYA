import Head from 'next/head'
import Layout from "../components/Layout"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Actu from "../components/Actu"
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>France YoYo Association - Accueil</title>
      </Head>
      <Container fluid className="p-0">
        <Carousel fluid="true">
        <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/pages-img/index/carousel1.jpg"
              alt="Photo de groupe de la FYYA"
              style={{minHeight: "230px", height: "33vh", objectFit: "cover", filter: "brightness(60%)"}}
              
            />

            <Carousel.Caption>
              <h3>Bienvenue sur le site de la FYYA</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/posts/packFYYA2020">
            <Image
              className="d-block w-100"
              src="/pages-img/index/carousel2.jpg"
              alt="One Drop Intro du pack FYYA 2020"
              style={{minHeight: "230px", height: "33vh", objectFit: "cover", filter: "brightness(60%)"}}
              
            />
            <Carousel.Caption>
              <h3>Découvrez le Pack FYYA 2020</h3>
            </Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
        <Container className="d-flex flex-wrap-reverse">
         <Actu allPostsData={allPostsData}/>
          <Container className="text-center" style={{width: 400, marginTop: 20, marginBottom: 20}}>
            <h1>Qui sommes-nous?</h1>
            <p>placeholder</p>
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}
