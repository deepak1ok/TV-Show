import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
const Home = () => {
  // const [content, setContent] = useState([]);
  // const [pageno, setPageNo] = useState(1);
  // const [pagination, setPagination] = useState(0);

  // const API_KEY = process.env.secret_apikey;
  // const getDataTrending = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
  //   );
  //   setContent(data);
  //   console.log("data", data);
  // };
  // useEffect(() => {
  //   getDataTrending();
  // }, []);
  return (
    <>
      <main className='homepage'>
        <Container>
          <Row>
            <Col className='col-12'>Home Page</Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Home;
