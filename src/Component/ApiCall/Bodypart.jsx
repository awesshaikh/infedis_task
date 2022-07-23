import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./Bodypart.css";
import axios from "axios";

export const Bodypart = () => {
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
      <hr></hr>
      <div>
        <div class="parent">
          <div className="child1">
            <div className="getCenter">
              <h4>{title}</h4>
            </div>
            <div>
              <p className="title paddingDesc">
                <h5>{desc}</h5>
              </p>
            </div>
          </div>
          <div class="child2">
            <div className="getCenter">
              <h4>Cirrhosis: Diagnosis and Management</h4>
            </div>
            <hr></hr>
            <div className="heading">
              <img
                alt="titleImage"
                src="https://sgp1.digitaloceanspaces.com/hidoc-files/hidoc-client-files/1654750843935.jpg"
                width="300px"
                height="150px"
              ></img>
            </div>
            <hr></hr>
            <div>
              <p>
                <h6>
                  Cirrhosis is one of the leading causes of death among the
                  patients but one of the major issues is the majority of the
                  patients are not aware that they are having liver cirrhosis.
                </h6>
              </p>
            </div>
            <div>
              <p className="title">
                <h5>{desc2}</h5>
              </p>
            </div>
          </div>

          <div class="child3">
            <div className="getCenter">
              <h4>
                A Nomogram for Predicting Event-Free Survival in Childhood Acute
                Lymphoblastic Leukemia
              </h4>
            </div>
            <div>
              <p style={{ paddingTop: "60px" }}>
                <h5>
                  A nomogram is constructed to predict event-free survival (EFS)
                  among the patients of acute lymphoblastic leukaemia. It can
                  have an immense impact on the clinical decision making system
                  for the selection of therapeutic approaches while treating
                  childhood acute lymphoblastic leukaemia
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
