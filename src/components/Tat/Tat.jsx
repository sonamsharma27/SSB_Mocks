import React, { useState } from "react";
import TatInput from "./TatInput";
import TatImg from "./TatImg";

const getImgUrls = () => {
  return [
    "https://defencedirecteducation.com/wp-content/uploads/2022/07/dde-tat.jpg",
    "https://1.bp.blogspot.com/-8IgPl_NfBqQ/XWzr2E2GScI/AAAAAAAAAUk/SSFBhCA6dr0ElLScrtkrzmFSo-K-R3BOwCLcBGAs/s1600/l.JPG",
    "https://1.bp.blogspot.com/-wTO5gA59QYg/XWzr3fH3nxI/AAAAAAAAAU4/gLxjYCzbHdQyjksUtHRTGTy-dE99uTQLQCLcBGAs/s1600/r.JPG",
  ];
};

function Tat() {
  const [storyInput, setStoryInput] = useState({
    s1: "",
    s0: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
  });
  const imgUrls=getImgUrls();
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="text-center p-2 align-self-center bg-success rounded-2">
        Thematic Apperception Test
      </h1>
      <TatImg imgUrls={imgUrls}  />
      <TatInput setStoryInput={setStoryInput} storyInput={storyInput} imgUrls={imgUrls} />
    </div>
  );
}

export default Tat;