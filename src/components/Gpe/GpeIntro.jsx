import React from "react";
import { Nav } from "react-bootstrap";
import "./GpeIntro.css";
function gpeIntro() {
  return (
    <div className="gpe_cont">
      <h1 className="gpe_head">Welcome to Group Planning Exercise </h1>
      <p className="gpe_para">
        Group Planning Exercise or also called Military Planning exercise is the
        second test of the GTO series. It is generally conducted on the third
        day of the five-day SSB Interview schedule. It is the first task where
        you have to virtually think and act as an Officer.
      </p>
      <hr />
      <p className="gpe_para">
        In this task, you will be narrated a situation in which you are part of
        a group who are heading to someplace or returning from some location.
        Meanwhile, you and your group come to know about various problems which
        have either happened and will affect others or are going to happen in
        the future. There will be approximately 3 to 5 problems of different
        magnitude. Some resources will be given, which either will be given
        directly in the problem or you have to consider them by your common
        sense.
      </p>
      <p className="gpe_para">
        You as a leader of the group have to act swiftly and have to address
        every problem giving workable solutions to every problem. You have to
        act as a group, taking actions simultaneously by optimal use of
        resources.
      </p>
      <p className="gpe_para">
        Time and distance covered will also be under watch, as you have to solve
        every problem within the time limit considering the practical time taken
        to cover the distance. The 2D or 3D map of the area with every detail
        will also be kept in front of you for your better understanding.
      </p>
      <button className="gpe_btn" type="button">
        <Nav.Link className="gpe_link" href="/gpe">
          Start Test
        </Nav.Link>
      </button>
    </div>
  );
}

export default gpeIntro;
