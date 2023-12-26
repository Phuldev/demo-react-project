import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { slider, about, services } from "../db/db";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
console.log(about);
const Home = () => {
  return (
    <>
      {/* Slider */}
      <section id="carousel">
        <Carousel className="slider-carousel" fade>
          {slider.map((item) => (
            <Carousel.Item className="opBgImg" key={item?.id} interval={1800}>
              <img src={item?.img} height={450} className="w-100" alt={item.title} />
              <Carousel.Caption className="capation">
                <h3 className="display-4 fw-bold lh-1 mb-0">{item?.title}</h3>
                <p>{item?.description}</p>
                <div className="text-center">
                  <Link to="/" className="btn btn-primary rounded-pill ">
                    Read More
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      {/* About */}
      <Container>
        <section className="py-lg-5 py-md-2" id="about">
          <div className="py-4">
            {about.map((item) => (
              <div
                key={item?.id}
                className="row justify-content-around align-items-start"
              >
                <div className="col-md-6 col-sm-12">
                  <i class="fas fa-user-graduate fs-1 fw-bold"></i>
                  <h4 className="display-4 fw-bold lh-1 mb-4">{item?.title}</h4>
                  <p className="lead text-muted fw-semibold mb-4">
                    {item?.content}
                  </p>
                  <div className="text-satrt">
                    <Link to="/about" className="bg-ak_primary btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 my-auto">
                  <img src={item?.image} alt={item?.title} className="w-100" />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* services */}
        <section className="py-lg-5 py-md-2" id="service">
          {services.map((item) => (
            <div key={item?.id} className="row g-4">
              <div className="col-lg-6 col-12 col-md-12">
                <div className="row g-2">
                  {item.service_items.map((data) => (
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="services-box">
                            <span></span>
                            <h4 className="mb-0">{data?.name}</h4>
                            <p>{data?.para.slice(0, 100) + " "}...</p>
                            <Link
                              className="text-decoration-none d-flex align-items-center gap-2"
                              to="#"
                            >
                              <span>Learn More</span>
                              <span>
                                <HiArrowNarrowRight />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-12 col-md-3 py-md-2">
                <h4 className="display-4 fw-bold lh-1 mb-4">{item.title}</h4>
                <p className="lead text-muted fw-semibold mb-4">
                  {item.description}
                </p>
                <Link to="#" className="bg-ak_secondary btn rounded-pill">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </section>
      </Container>
      {/* contact */}
      <section className="mt-lg-5" id="contact">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.506534703567!2d85.31985237536888!3d27.701642676185834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c42539e481%3A0xd9d4a660ac7b44f2!2sAakash%20Labs!5e0!3m2!1sen!2snp!4v1703496112653!5m2!1sen!2snp"
            height={350}
            width={"100%"}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default Home;
