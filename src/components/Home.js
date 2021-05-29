import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../config/fire";
import "./Home.css";

export default function Home() {
  let history = useHistory();

  const [comment, setComment] = useState("");
  const [finalcomment, setfinalComment] = useState([]);
  const [logoutbutton, setLogoutButton] = useState(false);
  const [name, setName] = useState("");
  const [commentornot, setCommentOrNot] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    fire.auth().signOut();
    history.push("/login");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCommentOrNot(true);
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setfinalComment((prevComment) => [...prevComment, comment]);
        setComment("");
        setLogoutButton(true);
        setName(user.displayName);
      } else {
        alert("You need to sign up in order to comment");
        history.push("/signup");
      }
    });
  };


  return (
    <div id='home_background'>
      <div id='comment_section'>
        <input
          type='text'
          placeholder='Enter your comment'
          id='enter_comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button id="comment_button" type='submit' onClick={(e) => handleClick(e)}>
          Send
        </button>
      </div>

      <div id='comments'>
        {commentornot ? (
          <div>
            {finalcomment.map((item) => {
              return (
                <div key={Math.random()}>
                  <ul>
                    <li id='comment_text'>
                      {name} commented: {item}
                    </li>
                  </ul>
                </div>
              );
            })}{" "}
          </div>
        ) : null}
      </div>

      {logoutbutton ? (
        <button id='logout' onClick={(e) => logout(e)}>
          Logout
        </button>
      ) : null}
    </div>
  );
}
