import Link from 'next/link'
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
            <Link href='https://csb-jzke1s-o4qhq8ebw-datfoosteve.vercel.app/' >
 CLICK HERE FOR RESUME AND YOU WILL BE REDIRECTED TO ANOTHER PAGE WHICH HAS MY RESUME </Link>
        </>
      )
    }
        
    export default Resume;
