import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncShowOrMovie } from "../../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();

  console.log(imdbID);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.movies.showormovie);
  console.log(selector);

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchAsyncShowOrMovie(imdbID));
    }
  }, [dispatch, imdbID]);

  return (
    <>
      <div className="container-fluid mt-5">
      <div className=" md-m-5 row">
      <div className="movie-poster  col-12 col-lg-3 mb-5">
          <div><img src={selector.Poster} alt="" /></div>
        </div>
      <div className="movie-detail col-lg-7 col-12 ">
          <h3 className="title text-light ">{selector.Title}</h3>
          <div className="ratings text-info d-flex gap-4 mt-4 mb-3">
            <h6>
              IMDB Rating{" "}
              <i class="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>:{" "}
              {selector.imdbRating}
            </h6>
            <h6>
              IMDB Voters{" "}
              <i class="fa-solid fa-thumbs-up" style={{ color: "#f2f2f2" }}></i>
              : {selector.imdbVotes}
            </h6>
            <h6>
              Box Office{" "}
              <i
                class="fa-solid fa-dollar-sign"
                style={{ color: "#f2f2f2" }}
              ></i>
              : {selector.BoxOffice}
            </h6>
            <h6>
              Year{" "}
              <i class="fa-solid fa-calendar" style={{ color: "#f3a620" }}></i>:{" "}
              {selector.Year}
            </h6>
          </div>

          <div className="description text-light">
            <p>{selector.Plot}</p>
          </div>

          <div className="extra-details mt-4">
            <h5 className="text-light">Director: <span className="text-info">{selector.Director}</span></h5>
            <h5 className="text-light">Actors: <span className="text-info">{selector.Actors}</span></h5>
            <h5 className="text-light">Genre: <span className="text-info">{selector.Genre}</span></h5>
            <h5 className="text-light">Language: <span className="text-info">{selector.Language}</span></h5>
            <h5 className="text-light">Awards: <span className="text-info">{selector.Awards}</span></h5>
            <h5 className="text-light">Released: <span className="text-info">{selector.Released}</span></h5>
          </div>
        </div>

   
      </div>
      </div>
    </>
  );
};

export default MovieDetail;
