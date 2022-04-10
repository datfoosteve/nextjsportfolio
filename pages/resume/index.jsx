import Link from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Head from "next/head";
import { Box, Container, Heading, SlideFade, Divider } from "@chakra-ui/react";



const Resume = () => {
    return (
        <>
        <Head>
        <title>Resume Title | Stephen Puthenpurackal</title>
        <meta
          name="description"
          content="Stephen Puthenpurackal | Full stack developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="thehumbleabode.vercel.app" />
        <meta
          property="og:title"
          content="Stephen Puthenpurackal | Full stack Developer"
        />
        <meta property="og:image" content="/meta-image.jpg" />
      </Head>
          <h1>Link To My Resume, Stiill trying to intergrate a seemless PDF on the page.</h1>
          <h2>
        <Link href='https://csb-jzke1s-o4qhq8ebw-datfoosteve.vercel.app/' isExternal>
 Resume <ExternalLinkIcon mx='20px' />
</Link>
          </h2>
        </>
      )
    }

    export default Resume;
