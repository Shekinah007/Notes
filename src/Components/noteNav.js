import React, { useState } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteIcon from "@mui/icons-material/Delete";
// import { HomeIcon } from "@mui/icons-material";
import {
  Container,
  Button,
  ClickAwayListener,
  Paper,
  ButtonGroup,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";

export default function NoteNavButtons(props) {
  function changeTab() {
    console.log("Props, title: ", props.title);

    let tabs = document.getElementsByClassName("Tabs");
    let tabContent = document.getElementById(props.tabClass);

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    tabContent.style.display = "flex";
    let allTabButtons = document.getElementsByClassName("navBtn");
    console.log(allTabButtons);
    for (let i = 0; i < allTabButtons.length; i++) {
      allTabButtons[i].style.color = "white";
      allTabButtons[i].style.border = "none";
    }

    let tabButton = document.getElementById(props.navClass);
    tabButton.style.color = "blue";
    tabButton.style.border = "2px solid white";
    console.log(props.navClass);
    console.log(tabButton);
  }

  return (
    <div className="noteNavButtons">
      <textarea
        type="button"
        class="btn btn-outline-dark"
        onClick={changeTab}
        // className={props.index}
        id={props.navClass}
        className="navBtn"
        placeholder="Title"
      >
        {/* {props.index} */}
        {/* {props.title} */}
      </textarea>
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>
      </Button>
    </div>
  );
}
