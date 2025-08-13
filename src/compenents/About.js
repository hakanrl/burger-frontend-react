import React from "react";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          blanditiis asperiores iusto vel quia voluptatem, minima fuga vitae,
          distinctio repudiandae incidunt rerum tempora totam nostrum voluptas
          eaque assumenda, debitis soluta? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Repudiandae blanditiis illum
          necessitatibus quisquam sapiente obcaecati aspernatur neque labore
          ducimus, recusandae molestias voluptates totam id nihil exercitationem
          quibusdam laudantium, accusamus atque! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Dolor numquam obcaecati deserunt, maxime
          accusamus, in distinctio beatae maiores, laborum minima odio
          consequuntur delectus placeat doloribus ab quasi repellat suscipit
          nesciunt.
        </p>
      </div>
    </div>
  );
};
