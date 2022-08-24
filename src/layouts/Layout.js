import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
