import Head from 'next/head'
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import ImgTitle from "../components/ImgTitle"
import Image from "react-bootstrap/Image"

const content = {
  tabTitle: "Boutiques en ligne",
  imageTitle: "Boutiques en ligne",
  firstTitle: "Europe",
  secondTitle: "Amérique du Nord",
  thirdTitle: "Asie"
}

function StoreImg({storeName}) {

  return(
    <Container 
      className="d-flex justify-content-center hoverItem"
      style={{marginBottom: 20, flexBasis: "30%"}}
    >
      <Image
        src={"/pages-img/boutiques/" + storeName + ".jpg"}
        style={{width: "200px", margin: "auto"}}
      />
    </Container>
  )
}


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{content.tabTitle}</title>
      </Head>
      <ImgTitle imgUrl="/pages-img/adherer.jpg" imgTitle={content.imageTitle} imgHeight="30vh"/>
      <Container style={{marginBottom: 30, marginTop: 30}}>
        <p className="h1 text-center p-4">{content.firstTitle}</p>
        <Container className="d-flex flex-wrap justify-content-center">
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
        </Container>
        <p className="h1 text-center p-4">{content.secondTitle}</p>
        <Container className="d-flex flex-wrap justify-content-center">
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
        </Container>
        <p className="h1 text-center p-4">{content.thirdTitle}</p>
        <Container className="d-flex flex-wrap justify-content-center">
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
          <StoreImg storeName="latienda"/>
        </Container>
      </Container>
    </Layout>
  )
}
