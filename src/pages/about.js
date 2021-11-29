import Awards from "../components/Awards/Awards";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Blockquote from "../components/Blockquote/Blockquote";
import { Layout } from "../layout/Layout";

const About = () => {
  return (
    <Layout>
      <Timeline />
      <Technologies />
      <Awards />
      <Blockquote />
    </Layout>
  );
};

export default About;
