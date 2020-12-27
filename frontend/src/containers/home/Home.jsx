import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <Layout></Layout>
      <Jumbotron
        style={{ margin: "5rem", backgroundColor: "white" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quis minima esse a dolorem quo magnam ex obcaecati, impedit excepturi?
          A quaerat odio, excepturi aut numquam quisquam soluta provident
          maiores!
        </p>
      </Jumbotron>
    </>
  );
}
