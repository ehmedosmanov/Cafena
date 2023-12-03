import React, { useState } from "react";
import "./index.scss";
import { IoIosArrowRoundUp } from "react-icons/io";

const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div>
      <div
        className={`title ${isOpen ? "active" : ""}`}
        onClick={toggleAccordion}>
            <IoIosArrowRoundUp className="itag"/>
        <div>{title}</div>
      </div>
      {<div className={`content ${isOpen ? "active" : ""}`}>{content}</div>}
    </div>
  );
};

const Accordions = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleAccordion = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <div className="container">
      <div className="accordion_wrapper">

      <Accordion
        title="How does this work?"
        content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
        isOpen={openSection === 1}
        toggleAccordion={() => toggleAccordion(1)}
      />
      <Accordion
        title=" Some menus are missing on a coffee shop page?"
        content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.
        "
        isOpen={openSection === 2}
        toggleAccordion={() => toggleAccordion(2)}
      />
      <Accordion
        title=" Do any of your cheeses contain enzymes derived from animal sources?"
        content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
        isOpen={openSection === 3}
        toggleAccordion={() => toggleAccordion(3)}
      />
      <Accordion
        title="Are your menu prices the same as those at the Coffee house?"
        content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
        isOpen={openSection === 4}
        toggleAccordion={() => toggleAccordion(4)}
      />
      <Accordion
        title="Are your doughs vegan or vegetarian friendly?"
        content="Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket."
        isOpen={openSection === 5}
        toggleAccordion={() => toggleAccordion(5)}
      />
      </div>

    </div>
  );
};

export default Accordions;
