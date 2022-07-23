import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./Footerpart.css";
import axios from "axios";

export const Footerpart = () => {
  const [desc, setDesc] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");

  const [title, setTitle] = useState("");
  const [secTitle, setsecTitle] = useState("");
  const [title3, setTitle3] = useState("");

  const req =
    "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid? sId=5& uuId=0";

  axios
    .post(req)
    .then((result) => {
      setTitle(result.data.data.latestArticle[0].articleTitle.slice(0, 22));
      setDesc(result.data.data.latestArticle[0].articleDescription);
      setsecTitle(result.data.data.exploreArticle[0].articleTitle.slice(0, 22));
      // setDesc2(result.data.data.trandingArticle[0].articleDescription);
      // setTitle3(result.data.data.latestArticle[0].articleTitle.slice(0, 22));
      // setDesc3(result.data.data.latestArticle[0].articleDescription);
    })
    .catch((e) => console.log(e));

  return (
    <div>
      <div className="parent01">
        <hr></hr>
        <div className="child01">
          <div>
            <h1 className="title">NEWS</h1>
          </div>

          <div>
            <p className="title ">
              <h5>{desc}</h5>
            </p>
          </div>
        </div>
        <div className="child02">
          <div className="heading">
            <img
              alt="titleImage"
              src="https://sgp1.digitaloceanspaces.com/hidoc-files/hidoc-client-files/1650980102635.webp"
              width="400px"
              height="350px"
            ></img>
          </div>
        </div>
        <div className="child03">
          <div>
            <img
              alt="titleImage"
              src="image1.png"
              width="1300px"
              height="850px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
