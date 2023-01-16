import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, pageTitle }) => {
  const title = `${pageTitle} | Dashboard`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='UTF-8' />
        <meta
          httpEquiv='X-UA-Compatible'
          content='IE=edge'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </Head>
      <Header />
      <Sidebar />
      <div className='main-container'>{children}</div>
    </>
  );
};

export default Layout;
