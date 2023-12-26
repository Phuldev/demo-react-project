import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHandshakeSimple } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaHourglass } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { about, counter, team } from "../db/db";

const About = () => {
  return (
    <Container>
      {about.map((data) => (
        <div key={data?.id} className="row align-items-center py-5">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2">
            <div
              className="shape rounded bg-soft-primary rellax d-md-block"
              style={{
                bottom: "-1.8rem",
                right: "-0.8rem",
                width: "85%",
                height: "90%",
              }}
            ></div>
            <figure className="rounded ">
              <img src={data.image} alt="" />
            </figure>
          </div>
          <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
            <h4 className="display-4 fw-bold lh-1 mb-4">{data.title}</h4>
            <p className="lead text-muted fw-semibold mb-4">{data.content}</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <span>
                <a
                  href="#"
                  className="btn btn-lg btn-primary rounded-pill me-2"
                >
                  View More
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
      {counter.map((item) => (
        <div key={item?.id} className="row g-4 py-5">
          <div className="text-center">
            <h4 className="display-5 fw-bold">{item.heading}</h4>
            <p className="text-muted fs-5">{item.describe}</p>
          </div>
          {item.counterData.map((itemData) => (
            <div key={itemData?.id} className="col-lg-3 col-12">
              {itemData?.id % 2 === 0 ? (
                <div className="card bg-ak_primary position-relative mt-3">
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="rounded-circle bg-ak_primary p-4">
                      <span className="ak-counter-icon fs-1">
                        <FaHandshakeSimple />
                      </span>
                    </span>
                  </div>
                  <div className="card-body pt-5 text-center">
                    <h2 className="text-white fw-bold">{itemData?.value}</h2>
                    <p className="mb-0 fs-20 text-white">{itemData?.title}</p>
                  </div>
                </div>
              ) : (
                <div className="card bg-ak_secondary position-relative mt-3">
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="rounded-circle bg-ak_secondary p-4">
                      <span className="ak-counter-icon ak-counter-icon fs-1">
                        <FaHandshakeSimple />
                      </span>
                    </span>
                  </div>
                  <div className="card-body pt-5 text-center">
                    <h2 className="text-white fw-bold">{itemData.value}</h2>
                    <p className="mb-0 fs-20 text-white">{itemData.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      <div className="py-5">
        <div className="text-center">
          <h4 className="display-5 fw-bold mb-3">Our Team</h4>
        </div>
        <div className="row">
          {team.map((teamData) => (
            <div key={teamData?.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-team-member bg-ffefef it-agency-color">
                {teamData.image === "" ? (
                  <img
                    src={teamData?.previewImg}
                    className="w-100 rounded-2"
                    height={300}
                    alt={teamData?.name}
                  />
                ) : (
                  <img
                    src={teamData?.image}
                    className="w-100 rounded-2 cover"
                    height={300}
                    alt={teamData?.name}
                  />
                )}
                <div className="content text-center">
                  <h3 className="fw-boldest fs-1x">{teamData?.name}</h3>
                  <span>{teamData?.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
