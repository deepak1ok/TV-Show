import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from "../CardMovies/CardMoviesComponents";
import Pagination from "../PaginationComponent/Pagination";

const Movies = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);

  const API_KEY = "438961d880d968421c100e9ef8629c77";
  const getDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    );
    setContent(data.results);
    setPaginationno(data.total_pages);
  };

  useEffect(() => {
    getDataTrending();
  }, []);

  const handleClick = (number) => {
    setPageno(number);
  };
  useEffect(() => {
    console.log("Trending Component didupdate mount");
    getDataTrending();
    //eslint-disable-next-line
  }, [pageno]);

  return (
    <>
      <main className='moviepage'>
        <Container>
          <Row>
            <Col className='col-12'>
              <section>
                <h1 className='textCenter'>Top Trending Movies</h1>
              </section>
            </Col>
            {content && content.length > 0
              ? content.map((item) => {
                  if (item.media_type === "movie") {
                    return (
                      <CardMoviesComponents
                        key={item.id}
                        data={item}
                        mediaType='movie'
                      />
                    );
                  }
                })
              : "Loading ...."}
            {paginationno && paginationno > 1 ? (
              <Pagination
                maxnum={paginationno}
                activenum={pageno}
                handleClick={handleClick}
              />
            ) : (
              ""
            )}
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Movies;
