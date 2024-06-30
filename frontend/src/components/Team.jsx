import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            
At Zoca, our team is the heart and soul of the restaurant.
 Our chefs are passionate about creating culinary delights that
  combine tradition with innovation, ensuring every dish is a
   masterpiece. Behind the scenes,
     our support staff works tirelessly
 to maintain a seamless and enjoyable dining experience.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
