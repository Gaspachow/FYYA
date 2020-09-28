import Head from 'next/head'
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import ImgTitle from "../components/ImgTitle"
import Button from "react-bootstrap/Button"

const content = {
  tabTitle: "Adhérer à la FYYA",
  imageTitle: "Adhérer à l'Association",
  secondTitle: "Pourquoi adhérer à la FYYA ?",
  textContent: `Les cotisations de nos membres nous sont d’une grande aide car elles sont, avec le pack FYYA annuel, notre seule source de financement.
                Grâce à l’argent récolté au travers des adhésions, nous pouvons organiser un championnat de qualité, à la hauteur des attentes de nos compétiteurs, ainsi que de nos visiteurs.
                Avec cet argent, nous pouvons par exemple produire les différents supports de communication que nous utilisons, comme la carte de membre, la bannière des sponsors lors du championnat de France, etc.
                Il nous permet également de renouveler le matériel nécessaire à la compétition, d’acheter des yoyos pour nos initiations, ainsi que toutes autres activités en lien avec la pratique du yoyo.

                L'adhésion à la FYYA est nécessaire pour participer au championnat de France, organisé chaque année.`,
  buttonCta: "Adhérer",
  buttonUrl: "https://www.helloasso.com/associations/france-yoyo-association/adhesions/adhesion-a-l-association-francaise-de-yoyo-2020"
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{content.tabTitle}</title>
      </Head>
      <ImgTitle imgUrl="/pages-img/adherer.jpg" imgTitle={content.imageTitle} />
      <Container>
        <p className="h1 text-center p-4">{content.secondTitle}</p>
        <p style={{fontSize: 18, whiteSpace: "pre-line"}}>{content.textContent}</p>
        <Container className="text-center p-4">
          <Button variant="orange" size="lg" href={content.buttonUrl}>{content.buttonCta}</Button>
          <p>Propulsé par <a href="https://www.helloasso.com" rel="nofollow">HelloAsso</a></p>
      </Container>
      </Container>
    </Layout>
  )
}
