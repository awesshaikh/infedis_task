import React, { useState } from "react";
import "./Headarpart.css";
import axios from "axios";

export const Headarpart = () => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const req =
    "http://devapi.hidoc.co:8080/hidoc-us/api/v1/getArticlesByUid? sId=5& uuId=0";

  axios
    .post(req)
    .then((result) => {
      setTitle(result.data.data.news[0].title.slice(0, 21));
      setDesc(result.data.data.news[0].description);
    })
    .catch((e) => console.log(e));

  return (
    <div>
      <div>
        <div>
          <h1 className="heading">NEWS</h1>
        </div>
        <div class="parent">
          <div class="chil1">
            <div className="heading">
              <img
                alt="image101"
                src="https://sgp1.digitaloceanspaces.com/hidoc-files/hidoc-client-files/1652261857236.jpg"
                width="250px"
                height="200px"
              />
            </div>
          </div>

          <div class="chil 2">
            <div className="title padding">
              <h1>{title}</h1>
            </div>

            <div>
              <p>
                <h5 className="title padding">{desc}</h5>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
