import Head from 'next/head'
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import ImgTitle from "../components/ImgTitle"
import Image from "react-bootstrap/Image"
import Link from "next/link"

const content = {
  tabTitle: "Boutiques en ligne",
  imageTitle: "Boutiques en ligne",
  firstTitle: "Europe",
  secondTitle: "Amérique du Nord",
  thirdTitle: "Asie"
}

function StoreImg({storeImg, storeLink, border}) {

  if (!storeLink) {
    storeLink="#";
  }
  if (!border) {
    border = "0px";
  }
  return(
    <Container 
      className="d-flex justify-content-center align-items-center hoverItem"
      style={{minHeight: "10`0px", marginBottom: 20, flexBasis: "30%"}}
    >
      <a href={storeLink} target="_blank">
        <Image
          src={"/pages-img/boutiques/" + storeImg}
          style={{width: "200px", margin: "auto", borderRadius: border}}
        />
      </a>
    </Container>
  )
}


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{content.tabTitle}</title>
      </Head>
      <ImgTitle imgUrl="/pages-img/boutiques.jpg" imgTitle={content.imageTitle} imgHeight="30vh"/>
      <Container style={{marginBottom: 30, marginTop: 30}}>
        <p className="h1 text-center p-4">{content.firstTitle}</p>
        <Container className="d-flex flex-wrap justify-content-center">
          <StoreImg storeLink="https://www.yoyoblast.com/" storeImg="yoyoblast.png"/>
          <StoreImg storeLink="https://www.yoyoworld.dk/en/" storeImg="yoyoworld.png"/>
          <StoreImg storeLink="https://www.slusny.net/" storeImg="slusny.png"/>
          <StoreImg storeLink="https://www.latiendadelyoyo.com/" storeImg="latienda.jpg"/>
          <StoreImg storeLink="http://www.yoyovillage.co.uk/" storeImg="yoyovillage.jpg"/>
          <StoreImg storeLink="https://www.yo-shop.de/index.php?language=en" storeImg="yoshop.png"/>
        </Container>
        <hr></hr>
        <p className="h1 text-center p-4">{content.secondTitle}</p>
        <Container className="d-flex flex-wrap justify-content-center">
          <StoreImg border="15px" storeLink="https://www.yoyoexpert.com/" storeImg="yoyoexpert.jpg"/>
          <StoreImg storeLink="https://usa.yoyostorerewind.com/" storeImg="rewindusa.png"/>
          <StoreImg storeLink="https://www.yoyosam.com/" storeImg="yoyosam.jpg"/>
        </Container>
        <hr></hr>
        <p className="h1 text-center p-4">{content.thirdTitle}</p>
        <Container className="d-flex flex-wrap justify-content-center">
          <StoreImg storeLink="https://spingear.jp/" storeImg="spingear.png"/>
          <StoreImg storeLink="https://www.yoyostorerewind.com/" storeImg="rewindworld.png"/>
          <StoreImg border="15px" storeLink="https://www.spinworkx.com/" storeImg="spinworkx.png"/>
        </Container>
      </Container>
    </Layout>
  )
}
