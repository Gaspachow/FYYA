import Head from 'next/head'
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"

const content = {
  tabTitle: "Adhérer à la FYYA",
  imageTitle: "Adhérer à l'Association",
  secondTitle: "Pourquoi adhérer à l’Association ?",
  textContent: "Les cotisations de nos membres nous sont d’une grande aide car elles sont, avec le pack FYYA annuel, notre seule source de financement. Grâce à l’argent récolté au travers des adhésions, nous pouvons organiser un championnat de qualité, à la hauteur des attentes de nos compétiteurs, ainsi que de nos visiteurs. Avec cet argent, nous pouvons par exemple produire les différents supports de communication que nous utilisons, comme la carte de membre, la bannière des sponsors lors du championnat de France, etc. Il nous permet également de renouveler le matériel nécessaire à la compétition, d’acheter des yoyos pour nos initiations, ainsi que toutes autres activités en lien avec la pratique du yoyo."
}

export default function Home() {

  const titleStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "8vw"
  }

  const titleContainerStyle = {
    background: `url("/pages-img/adherer.jpg") top center`,
    backgroundSize: "cover",
    width: "100%",
    height: "50vh"
  }

  return (
    <Layout>
      <Head>
        <title>{content.tabTitle}</title>
      </Head>
        <div style={titleContainerStyle}>
          <div className="title-bg d-flex">
            <p class="h1 m-auto page-title" style={titleStyle}>{content.imageTitle}</p>
          </div>
        </div>
        <Container>
          <p class="h1 text-center p-4">{content.secondTitle}</p>
          <p>{content.textContent}</p>
        </Container>
    </Layout>
  )
}
