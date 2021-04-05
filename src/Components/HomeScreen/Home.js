import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import MainNavBar from "../MainNavBar/MainNavBar";
import "./Home.css"

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams.slice(0, 12));
      });
  }, [teams]);

  return (
    <div>
      <div className="main-section">

     
        <div className="row">
          <div className="col-12">
            <MainNavBar />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              style={{
                backgroundImage:
                  "url(https://image.freepik.com/free-vector/soccer-stadium_1284-22432.jpg)",
                  
                height: "350px",
                width: "100%",
              }}
            >
              <h1 className="text-center py-5 text-white">Football Mania</h1>
            </div>
          </div>
        </div>
      <div className="container">

        <div className="row my-3">
          {teams.map((team) => (
            <div className="col-md-4 mb-3">
              <Card team={team} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
