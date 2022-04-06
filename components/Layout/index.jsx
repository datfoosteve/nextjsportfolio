import Navbar from "./Navbar";
import Footer from "./Footer";

const index = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
