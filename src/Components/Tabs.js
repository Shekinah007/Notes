import React, { useState } from "react";

export default function Tabs(props) {
  // let [noteAlign, setNoteAlign] = useState({
  //   align: "",
  // });

  // function handleAlignChange(event) {
  //   console.clear();
  //   const { name, value, type, checked } = event.target;
  //   setNoteAlign((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  //   let noteCont = document.querySelector(".note");
  //   console.log("NoteAlign", noteAlign.align);
  //   noteCont.style.textAlign = "right";
  //   console.log(noteCont);
  //   if (noteAlign.align == "alignLeft") {
  //     console.log("AlignLeft!");
  //     noteCont.style.textAlign = "left";
  //   } else if (noteAlign.align == "alignCenter") {
  //     console.log("AlignCenter!!");
  //     noteCont.style.textAlign = "center";
  //   } else if (noteAlign.align == "alignRight") {
  //     console.log("AlignRight!!!");

  //     noteCont.style.textAlign = "right";
  //   }
  // }

  return (
    <div className="Tabs" id={props.tabClass}>
      {/* <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            name="align"
            value="alignLeft"
            onChange={handleAlignChange}
            checked={noteAlign.align === "alignLeft"}
            // checked
          />
          AlignLeft
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
            checked={noteAlign.align === "alignCenter"}
          />
          AlignCenter
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
            checked={noteAlign.align === "alignRight"}
          />
          AlignRight
        </label>
      </div> */}
      {/* <legend>Current align status</legend>

      <input
        type="radio"
        id="alignLeft"
        name="align"
        value="alignLeft"
        checked={noteAlign.align === "alignLeft"}
        onChange={handleAlignChange}
      />
      <label htmlFor="alignLeft">AlignLeft</label>
      <br />
      <input
        type="radio"
        id="alignRight"
        name="align"
        value="alignRight"
        checked={noteAlign.align === "alignRight"}
        onChange={handleAlignChange}
      />
      <label htmlFor="alignRight">AlignRight</label>
      <input
        type="radio"
        id="alignCenter"
        name="align"
        value="alignCenter"
        checked={noteAlign.align === "alignCenter"}
        onChange={handleAlignChange}
      />
      <label htmlFor="alignCenter">AlignCenter</label>
      <br /> */}

      <input
        className="title"
        placeholder={`Header`}
        onChange={(event) => props.handleChange(event, props.id)}
      />
      <textarea className="note" id={props.id} placeholder={`Note`} />
    </div>
  );
}
