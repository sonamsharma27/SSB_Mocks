import React from 'react'
import { Nav } from "react-bootstrap";
import './Tat_in.css'
function TatIntro() {
  return (
    <div className="tat_cont">
      <h1 className="tat_head">Welcome to Thematic Apperception Test </h1>
      <p className="tat_para">
      Technically Thematic Apperception Test (TAT) is a projective psychological test. Proponents of this technique assert that a person’s responses reveal underlying motives, concerns, and the way they see the social world through the stories they make up about ambiguous pictures of people.
      </p>
      <hr />
      <p className="tat_para">
      Thematic Apperception Test in SSB consists of set of ambiguous pictures that will be shown to the candidate, while looking on these pictures candidates must create a theme like a story which requires a hero and a challenge, how the hero will overcome the crisis and succeed.
      In TAT a candidate will be asked to write a story from his own based on the images shown. A candidate shouldn’t just use his memory blocks and start preparing a story, he/she needs to see that every third or fourth line there is different meanings are coming, try interpretation and analyze those meaning as third person because that meaning shows candidate’s state of mind.
      </p>
      <button className="tat_btn" type='button'><Nav.Link className="tat_link" href='/tat'>Start Test</Nav.Link></button>
    </div>
  )
}

export default TatIntro