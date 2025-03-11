import "./About.css";
import { useState } from "react";

const About = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://lms.tversu.ru/eportfolios/1474/entries/46536/files/nxClvkcQOgBv9AawLJSH3k5PB27bzCfiFiNWmYta",
    },
    {
      id: 2,
      src: "https://bvkgroup.ru/upload/iblock/159/15966cf9b0474a8e1f82e79afc964ab5.jpeg",
    },
    {
      id: 3,
      src: "https://printmet.com/upload/shop_1/6/2/6/item_626/shop_items_catalog_image626.webp",
    },
  ]);
  return (
    <div>
      <div className="about-page">
        {images.map((item) => (
          <img
            key={item.id}
            className="about-page__img"
            src={item.src}
            alt="pizza"
          />
        ))}
      </div>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default About;
