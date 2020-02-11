import Layout from "../components/layout";
import Barchart from "../components/barChart";
import LineChart from "../components/lineChart"
import LineChart2 from "../components/lineChart2"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui";


export default () => (
  <Layout isHome={false}>
    <div sx={{ backgroundColor: "#F5F9FC", paddingX: "10%", paddingY: "5%" }}>
      <Styled.h1>A Superior JVM Experience</Styled.h1>
      <div
        sx={{
          paddingY: 5,
          paddingX: "5%",
        }}
      >

        <Barchart/>

        <LineChart/>
        <LineChart2/>

      </div>
    </div>

  </Layout>
);
