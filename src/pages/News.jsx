import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgCalendarDates } from 'react-icons/cg';
import { FaUserEdit } from 'react-icons/fa';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=general&apikey=15bd1ca3df2406250d9c9b6997a7f69f&page=${currentPage}`
      );
      const result = await response.json();
      setArticles(result.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (type === 'next') {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <div className="row g-3 py-5">
        {articles.map((data) => (
          <div key={data?.id} className="col-md-4">
            <Link className="text-decoration-none text-dark" to={data?.url}>
              <div className="card">
                <div>
                  <img src={data.image} className="w-100" alt="" />
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between gap-4 mb-3">
                    <span>
                      <CgCalendarDates /> {data.publishedAt}
                    </span>
                    <span>
                      <FaUserEdit /> by Phuldev Mandal
                    </span>
                  </div>
                  <div>
                    <h4 className="text-dark text-capitalize text-decoration-none">
                      {data.title}
                    </h4>
                    <p className="mb-0">{data.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="d-flex justify-content-center my-4">
        <button className='btn btn-primary btn-sm' onClick={() => handleClick('prev')} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="mx-2">Page {currentPage}</span>
        <button className='btn btn-primary btn-sm' onClick={() => handleClick('next')}>Next</button>
      </div>
    </Container>
  );
};

export default News;
