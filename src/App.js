import React, { useState } from "react";
import Tabs from "./Components/Tabs";
import NoteNavButtons from "./Components/noteNav";

import {
  Container,
  Button,
  ClickAwayListener,
  ButtonGroup,
  Input,
  Checkbox,
  Radio,
  FormLabel,
} from "@mui/material";
import { textAlign } from "@mui/system";

function App() {
  let [noteLength, setNoteLength] = useState(0);
  let [noteButtons, setNoteButtons] = useState([]);
  let [noteContent, setNoteContent] = useState([]);
  let [tabClass, setTabClass] = useState("inactive");
  ///////////////////////////////////////////////////////////////////////////////
  let [titles, setTitles] = useState([{ id: noteLength, title: "title" }]);
  ///////////////////////////////////////////////////////////////////////////////

  function handleChange(event, id) {
    console.clear();
    // console.log(titles);
    setTitles((prevState) => {
      return prevState.map((item) => {
        console.log(item);

        // console.log("Item ID: ", item.id);
        // console.log("ID: ", id);
        return item.id === id ? { ...item, title: "changed" } : item;
      });
    });
  }

  function createNote() {
    setNoteLength((prevState) => prevState + 1);

    setTitles((prevState) => {
      return [...prevState, { id: noteLength + 1, title: "" }];
    });

    setNoteButtons((prevState) => {
      return [
        ...prevState,
        <NoteNavButtons
          tabClass={`${tabClass}${noteLength}`}
          navClass={`navClass${noteLength}`}
          key={noteLength}
          id={noteLength}
          index={`Note${noteLength}`}
          title={titles[noteLength].title}
        />,
      ];
    });

    ///////////////////////

    /////////////////////////////////////////////
    setNoteContent((prevState) => {
      return [
        ...prevState,
        <Tabs
          handleChange={handleChange}
          id={`id${noteLength}`}
          tabClass={`${tabClass}${noteLength}`}
          key={noteLength}
          index={noteLength}
        />,
      ];
    });
  }

  let [noteAlign, setNoteAlign] = useState({
    align: "",
  });

  function handleAlignChange(event) {
    console.clear();
    let { name, value, type, checked } = event.target;
    setNoteAlign((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    let noteCont = document.querySelector(".note");
    console.log(noteCont);
    console.log("NoteAlign", noteAlign.align);
    noteCont.style.textAlign = "right";
    console.log(noteCont);
    if (noteAlign.align == "alignLeft") {
      console.log("AlignLeft!");
      noteCont.style.textAlign = "left";
    } else if (noteAlign.align == "alignCenter") {
      console.log("AlignCenter!!");
      noteCont.style.textAlign = "center";
    } else if (noteAlign.align == "alignRight") {
      console.log("AlignRight!!!");

      noteCont.style.textAlign = "right";
    }
  }

  return (
    <div className="App">
      <div className="noteNav">{noteButtons}</div>
      <Button variant="contained" onClick={createNote}>
        New Note
      </Button>
      <Button> UpperCase</Button>
      {/* <Button>TextAlign</Button> */}
      {/* <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            name="align"
            value="alignLeft"
            onChange={handleAlignChange}
            checked={noteAlign.align == "alignLeft"}
            // checked
          />
          Left
        </label>
        <label class="btn btn-secondary">
          <input
            type="radio"
            name="options"
            id="option2"
            autocomplete="off"
            name="align"
            value="alignCenter"
            onChange={handleAlignChange}
            checked={noteAlign.align == "alignCenter"}
          />
          Center
        </label>
        <label class="btn btn-secondary">
          <input
            type="radio"
            name="options"
            id="option3"
            autocomplete="off"
            name="align"
            value="alignRight"
            onChange={handleAlignChange}
            checked={noteAlign.align == "alignRight"}
          />
          Right
        </label>
      </div>
      {noteContent}
    </div>
  );
}

export default App;
