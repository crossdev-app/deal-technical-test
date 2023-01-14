import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle} | Dashboard</title>
        <meta charset='UTF-8' />
        <meta
          http-equiv='X-UA-Compatible'
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
