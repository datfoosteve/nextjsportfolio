// import Link from 'next/link'
// import Head from "next/head";
// import { Box, Container, Heading, SlideFade, Divider } from "@chakra-ui/react";
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { pdfjs } from 'react-pdf';
import Pdf from "/public/images/resume.pdf"
function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };
  class Sample extends Component {
    state = {
      file: "/public/images/resume.pdf",
      numPages: null,
    }

  Resume = () => {
    return (
        <>
        <Document
  options={{
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  }} ></Document>
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
          <Container centerContent = {true}>
          <div>
      <Document
        file="/public/images/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
            
            
             </Container>
        </>
      )
    }
  }}

  export default Resume;


  import { Document, DocumentProps } from 'react-pdf'

type LoadCallback = Required<DocumentProps>['onLoadSuccess']

function Display() {
  const onLoad: LoadCallback = useCallback((pdf) => {
    console.log(pdf.numPages) // `pdf` is properly typed here
    ...
  }, [])

  return (
    <Document loading="" file={url} onLoadSuccess={onLoad}>
      ...
    </Document>
  )
}