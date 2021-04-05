import React, { useEffect, useState } from "react";
import MainNavBar from "../MainNavBar/MainNavBar";
import "./CardDetails.css";
import Social1 from "./icon/Facebook.png";
import Social2  from "./icon/YouTube.png";
import Social3 from "./icon/Twitter.png";
import Founded from "./icon/found 1.png";
import Country from "./icon/flag (1) 1.png";
import Gender from "./icon/gender.png";
import Sport from "./icon/football (1) 1.png";
import { useParams } from "react-router";

const CardDetails = () => {
  const [details, setDetails] = useState([]);
  const { idTeam } = useParams();

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, [idTeam]);

  const {
    strTeamLogo,
    strStadiumThumb,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strTeam,
  } = details;

  return (
      <div>
        <div className="card-main">

      <div className="row">
        <div className="col-12">
          <MainNavBar />
        </div>
      </div>
      <div
        className="row bgBanner"
        style={{ backgroundImage: `url(${strStadiumThumb})` }}
      >
        <div className="col-12">
          <img className="teamLogo" src={strTeamLogo} alt="log" />
        </div>
      </div>
      <div className="container">

      <div className="row card-dtls my-3 py-5">
        <div className="col-md-5">
          <div className="details-content">
          <h2>League : {strTeam} </h2>
          <p>
          <img src={Founded} alt=""></img>

            <strong>Founded : </strong> {intFormedYear}{" "}
          </p>


          <p>
          <img src={Country} alt=""></img>

            <strong>Country : </strong> {strCountry}{" "}
          </p>
          <p>
          <img src={Sport} alt=""></img>

            <strong>Sport : </strong> {strSport}{" "}
          </p>
          <p>
          <img src={Gender} alt=""></img>

            <strong>Gender : </strong> {strGender}{" "}
          </p>
          </div>
        </div>
        <div className="col-md-7">
          <img
            className="card-dt-img"
            src={
              strGender === "Male"
                ? "https://www.dreamteamfc.com/c/wp-content/uploads/sites/4/2017/06/qatar-football.jpg?strip=all&w=750&quality=100"
                : "https://www.thesun.co.uk/wp-content/uploads/2017/08/nintchdbpict000343303326.jpg"
            }
            alt="team banner"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 last-text">
         
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ex quam impedit at et facere cupiditate similique doloremque sint, dignissimos, laboriosam autem, est culpa? Deleniti deserunt nihil nisi laborum. Optio adipisci qui quasi magni ab eius quo sequi iure provident rerum, magnam pariatur quibusdam molestiae laborum nam fugit voluptatem dolorem dicta quidem animi unde perspiciatis earum ratione? Quae fugiat libero voluptate aliquid dignissimos, quasi accusantium fuga, officia qui vitae asperiores. Minima vero consequuntur molestiae, quos debitis dolores cumque tempore totam ullam unde. Nemo, asperiores! Nihil fugit in explicabo, voluptates vel corrupti facilis vitae eius excepturi numquam aut accusamus temporibus quis.</p>
          <p>et facere cupiditate similique doloremque sint, dignissimos, laboriosam autem, est culpa? Deleniti deserunt nihil nisi laborum. Optio adipisci qui quasi magni ab eius quo sequi iure provident rerum, magnam pariatur quibusdam molestiae laborum nam fugit voluptatem dolorem dicta quidem animi unde perspiciatis earum ratione? Quae fugiat liberotae asperiores. Minima vero consequuntur molestiae, quos debitis dolores cumque tempore totam ullam unde. Nemo, asperiores! Nihil fugit in explicabo, voluptates vel corrupti facilis vitae eius excepturi numquam aut accusamus temporibus quis.</p>
            <div className="social">
             <a href="#"><img src={Social1} alt=""></img> </a>
             <a href="#"><img src={Social2} alt=""></img> </a>
             <a href="#"><img src={Social3} alt=""></img> </a>
                
          </div>
        </div>
      </div>  
      </div>
    </div>
  </div>

  );
};

export default CardDetails;
