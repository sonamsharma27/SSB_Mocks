import React from "react";
import './Ppdt_in.css'
import { Nav } from "react-bootstrap";

function PpdtIntro() {
  return (
    <div className="ppdt_cont">
      <h1 className="ppdt_head">Welcome to Picture Perception Description Test</h1>
      <p className="ppdt_para">
        PPDT is one of the trickiest parts of your SSB Screening, which needs
        regular practice. In Earlier articles, we have explained the PPDT test
        and how to perform your best in the PPDT. Hope that article would have
        helped you in understanding how to write the best PPDT Story for your
        Screening Test. As PPDT requires practice, in this article, we will
        revise the major concepts and then see some of the frequently asked PPDT
        pictures at various SSB Centres.
      </p>
      <hr />
      <p className="ppdt_para">
        In PPDT, all the candidates are assembled in a testing hall and shown a
        hazy picture. You have to observe the picture minutely and try to
        understand what is shown in the picture – as how many characters are
        there, what their age and mood are, what the action is going on in the
        picture, and other objects present in that. Based on these details you
        have to write a short story as to what led to this action, what is the
        action going on, and what will be its outcome – positive or negative –
        if any from the action. The picture will be shown for 30 seconds. After
        that, you will get around 4 minutes to write a story on it. You will be
        given a sheet in which there will be Box and a blank space below it. You
        have to mention the details of the characters – the number of
        characters, their age, and mood – in the box and then write a story in
        the blank space below. You also have to mention the action happening in
        the picture. Your time to write the story will start just after the
        projected picture goes off. After 4 minutes, a bell will ring to
        indicate that time is up. After that, they will collect your answer
        sheet.
      </p>
      <button className="ppdt_btn" type='button'><Nav.Link className="ppdt_link" href='/ppdt'>Start Test</Nav.Link></button>
    </div>
  );
}

export default PpdtIntro;