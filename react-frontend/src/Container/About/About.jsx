import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
   useEffect(() => {
    window.history.scrollRestoration = "manual";
   }, []);

   const [abouts, setAbouts] = useState([]);

   useEffect(() => {
     const query = '*[_type == "abouts"]';

     client.fetch(query).then((data) => {
       setAbouts(data);
     });
   }, []);
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Product</span>
      </h2>
      <motion.div
        className="app__profiles"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3.0, delayChildren: 2.0, ease: "circIn" }}
      >
        <motion.div
          className="app_description"
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, type: "tween" }}
        >
          <p className="p-text">
            Hi. I am <b>Debangshu Das </b>currently in my final year of{" "}
            <b>B.Tech</b> in Computer Science and Engineering at{" "}
            <b>Sister Nivedita University. </b>
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="app__profiles"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3.0, delayChildren: 2.0, ease: "circIn" }}
      >
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
