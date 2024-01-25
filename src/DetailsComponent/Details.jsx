import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import { img_300, img_not_available } from "../Config";
import Corousel from "../CorouselComponent/Corousel";

import "./Details.css";

const Details = () => {
  const params = useParams();
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();

  const id = params.movieid || "";
  const media_type = params.mediatype || "";
  const titleName =
    content && content.name && content.name !== ""
      ? content.name
      : content && content.title && content.title !== ""
      ? content.title
      : "";

  const API_KEY = "438961d880d968421c100e9ef8629c77";
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}&language=en-US`
      );
      setContent(data);
      console.log("fetchData-", data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      setVideo(data.results[0].key);
      console.log("fetchvideo-", data);
    } catch (error) {
      console.error(error);
    }
  };

  const CreditsFetch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      setCredits(data.cast);
      console.log("fetchcredits-", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Trending Component did mount");
    fetchData();
    fetchVideo();
    CreditsFetch();
    //eslint-disable-next-line
  }, []);

  const renderDataHtml = () => {
    const ImageURL = content.poster_path
      ? img_300 + content.poster_path
      : img_not_available;

    const vote_average = parseInt(content.vote_average);
    const original_language = content.original_language || "";
    const adult = !content.adult ? "10+" : "18+";
    const origin_country =
      content.origin_country && content.origin_country[0]
        ? content.origin_country[0]
        : content.production_countries &&
          content.production_countries[0] &&
          content.production_countries[0].name
        ? content.production_countries[0].name
        : "";
    const overview = content.overview;
    const first_air_date = content.first_air_date || content.release_date;
    const budget = content.budget || "";
    const genres =
      content.genres && content.genres.length > 0
        ? content.genres.map((item) => <span key={item.id}>{item.name}</span>)
        : "";

    return (
      <Row>
        <Col className='col-12'>
          <h1>{titleName}</h1>
        </Col>
        <Col className='col-12 col-xl-6'>
          <div className='card card--details'>
            <div className='card__cover'>
              <img src={ImageURL} alt='myimage' />
            </div>
            <div className='card__content'>
              <div className='card__wrap'>
                <span className='card__rate'> {vote_average}</span>

                <ul className='card__list'>
                  <li>{original_language}</li>
                  <li>{adult}</li>
                </ul>
              </div>
              <ul className='card__meta'>
                <li>
                  <span>Genre:</span>
                  <span className='linkTag'>{genres}</span>
                </li>
                <li>
                  <span>Type:</span>
                  <span className='linkTag'>{media_type}</span>
                </li>

                <li>
                  <span>Release year:</span>{" "}
                  <span className='linkTag'>{first_air_date}</span>
                </li>
                {budget && budget !== "" ? (
                  <li>
                    <span>Budget:- </span>
                    <span className='linkTag'> {budget}</span>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <span>Country:</span>{" "}
                  <span className='linkTag'>{origin_country}</span>{" "}
                </li>
              </ul>
              <div className='description_readmore_wrapper '>{overview}</div>
            </div>
          </div>
        </Col>
        <Col className='col-12 col-xl-6'>
          <div className='frameSec'>
            <iframe
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${video}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    );
  };
  return (
    <>
      <main className='detailsPage'>
        <Container>
          {titleName && titleName !== "" ? renderDataHtml() : "Loading..."}
        </Container>
        <section className='section'>
          <div className='contentHead'>
            <Container>
              <Row>
                <Col className='col-12'>
                  {credits && credits.length > 0 ? (
                    <Corousel data={credits} />
                  ) : (
                    "Lading data..."
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
};

export default Details;
