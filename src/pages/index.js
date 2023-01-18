import Layout from "@/components/Layout";
import Loadingindicator from "@/components/Loadingindicator";
import Welcome from "@/components/Welcome";

const index = () => {
  return (
    <Layout pageTitle='Home'>
      <Welcome />
    </Layout>
  );
};

export default index;
