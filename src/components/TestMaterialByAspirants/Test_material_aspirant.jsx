import React, { useState } from "react";
import "./Test_material_aspirant.css";
function Test_material_aspirant() {
  const [active, setActive] = useState("");
  const [word, setWord] = useState("");
  const [srt, setSrt] = useState("");
  const [tat, setTat] = useState("");
  const [urlPpdt, setUrlPpdt] = useState("");
  const [gpe, setGpe] = useState({
    url: "",
    problem: "",
  });
  return (
    <>
      <div>
        <h1 className="text-center">SSB Mocks</h1>
        <h5 className="text-muted">Add test content for fellow aspirants</h5>
        <h5 className="text-muted">
          Added content will be verified by administrator before it is used in
          SSB Mocks virtual test{" "}
        </h5>
      </div>
      <div className="container">
        <div className="row">
          <div
            className={`${active === "wat" ? "active_item" : "item"} col`}
            onClick={(e) => setActive("wat")}
          >
            Add WAT content
          </div>
          <div
            className={`${active === "ppdt" ? "active_item" : "item"} col`}
            onClick={(e) => setActive("ppdt")}
          >
            Add PPDT content
          </div>
          <div
            className={`${active === "tat" ? "active_item" : "item"} col`}
            onClick={(e) => setActive("tat")}
          >
            Add TAT content
          </div>
          <div
            className={`${active === "gpe" ? "active_item" : "item"} col`}
            onClick={(e) => setActive("gpe")}
          >
            Add GPE content
          </div>
          <div
            className={`${active === "srt" ? "active_item" : "item"} col`}
            onClick={(e) => setActive("srt")}
          >
            Add SRT content
          </div>
        </div>
        <div
          className={`${
            active === "wat"
              ? "mt-4 bg-light border border-2 border-dark p-3"
              : "d-none"
          }`}
        >
          <h5>Instructions</h5>
          <li className="m-0">Add one word at a time.</li>
          <li className="m-0">Avoid adding repeated words.</li>
          <div className="d-flex mt-3 ">
            <input
              className="p-2 rounded-2 w-30 mx-2"
              placeholder="Add your word here"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <div className="btn btn-info w-20">Add</div>
          </div>
        </div>
        <div
          className={`${
            active === "ppdt"
              ? "mt-4 bg-light border border-2 border-dark p-3"
              : "d-none"
          }`}
        >
          <h5>Instructions</h5>
          <li className="m-0">Add url of the image for PPDT.</li>
          <li className="m-0">Avoid adding repeated urls.</li>
          <div className="d-flex mt-3 ">
            <input
              className="p-2 rounded-2 w-30 mx-2 ppdtcontent"
              placeholder="Add your url here"
              value={urlPpdt}
              onChange={(e) => setUrlPpdt(e.target.value)}
            />
            <div className="btn btn-info w-20">Add</div>
          </div>
        </div>
        <div
          className={`${
            active === "tat"
              ? "mt-4 bg-light border border-2 border-dark p-3"
              : "d-none"
          }`}
        >
          <h5>Instructions</h5>
          <li className="m-0">Add url of the image for tat.</li>
          <li className="m-0">Avoid adding repeated urls.</li>
          <div className="d-flex mt-3 ">
            <input
              className="p-2 rounded-2 w-30 mx-2 ppdtcontent"
              placeholder="Add your url here"
              value={tat}
              onChange={(e) => setTat(e.target.value)}
            />
            <div className="btn btn-info w-20">Add</div>
          </div>
        </div>
        <div
          className={`${
            active === "srt"
              ? "mt-4 bg-light border border-2 border-dark p-3"
              : "d-none"
          }`}
        >
          <h5>Instructions</h5>
          <li className="m-0">Add situation for SRT.</li>
          <li className="m-0">Avoid adding same content.</li>
          <div className="d-flex mt-3 ">
            <input
              className="p-2 rounded-2 w-30 mx-2 ppdtcontent"
              placeholder="Add your url here"
              value={srt}
              onChange={(e) => setSrt(e.target.value)}
            />
            <div className="btn btn-info ">Add</div>
          </div>
        </div>
        <div
          className={`${
            active === "gpe"
              ? "mt-4 bg-light border border-2 border-dark p-3"
              : "d-none"
          }`}
        >
          <h5>Instructions</h5>
          <li className="m-0">Add url of the GPE model and problem statement for GPE.</li>
          <li className="m-0">Avoid adding same content.</li>
          <div className="d-flex mt-3 flex-column ">
            <input
              className="p-2 rounded-2 w-30 mx-2 my-2 ppdtcontent"
              placeholder="Add your url here"
              value={gpe.url}
              onChange={(e) => setGpe({url: e.target.value,problem:gpe.problem})}
            />
             <textarea
              className="p-2 rounded-2 w-30 mx-2 ppdtcontent"
              rows="10"
              cols="8"
              placeholder="Add your problem  statement here"
              value={gpe.url}
              onChange={(e) => setGpe({url: gpe.url,problem:e.target.value})}
            /><br/>
            <div className="btn btn-info w-sm mx-2">Add</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test_material_aspirant;
