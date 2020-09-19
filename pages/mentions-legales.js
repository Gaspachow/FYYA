import Head from 'next/head'
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import ImgTitle from "../components/ImgTitle"
import Button from "react-bootstrap/Button"

const content = {
  tabTitle: "Mentions Légales",
  secondTitle: "Mentions légales",
  textContent: 
  `FRANCE YOYO ASSOCIATION est une association loi 1901 créée le 6 juin 2001 à Villejuif.
  Son siège social est situé au 47 rue de Pommard – 75012 Paris – France. 
  Téléphone : +33 (0)6 59 75 22 72
  Directeur de publication : Clément Bertaux
  SIRET : 750 483 943 00015
  RNA : W943002804
  
  Veuillez envoyer tout courrier adressé à France Yoyo Association à :
  Clément Bertaux
  47 rue de Pommard
  75012 Paris
  France
  
  Franceyoyo.fr n’enregistre aucune information sur ses visiteurs.
  
  Hébergeur : 
  Vercel Inc.
  340 S Lemon Ave #4133
  Walnut, California 91789
  USA
  vercel.com`,
  buttonCta: "Adhérer",
  buttonUrl: "https://www.helloasso.com/associations/france-yoyo-association/adhesions/adhesion-a-l-association-francaise-de-yoyo-2020"
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{content.tabTitle}</title>
      </Head>
      <Container>
        <p class="h1 mt-3 p-4">{content.secondTitle}</p>
        <p style={{fontSize: 18, whiteSpace: "pre-line"}}>{content.textContent}</p>
      </Container>
    </Layout>
  )
}
