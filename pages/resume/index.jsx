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
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </>
      )
    }

    export default Resume;