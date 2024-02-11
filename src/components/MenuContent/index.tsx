import { useState } from "react";
import "./menuContent.css";

const MenuContent = () => {
  const [selectedTool, setSelectedTool] = useState(0);

  const handleClick = (index: number) => {
    setSelectedTool(index);
  };

  const tools = [
    "Slice Sed",
    "Kettlebells",
    "Dumbbells",
    "Dumbbells",
    "Dumbbells",
  ];

  const SliceSeds = [
    "Rogue Dog Slice 1.2",
    "Kettlebells",
    "Dumbbells",
    "Dumbbells",
    "Dumbbells",
  ];

  return (
    <>
      <div className="menuContentWrapper">
        <div className="Wrapper-top">
          <ul className="horizontal-list">
            {tools.map((tool, index) => (
              <li
                key={index}
                className={selectedTool === index ? "selected" : ""}
                onClick={() => handleClick(index)}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="Wrapper-Medium">
          <ul className="horizontal-list-MediumProduct">
            {SliceSeds.map((tool, index) => (
              <li key={index}>
                <div className="MediumProduct">{tool}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="Bottom-Header-Wrapper">
          <h2>Featured products</h2>
          <p>See All</p>
        </div>
        <div className="Wrapper-Bottom">
          <ul className="horizontal-list-BottomProduct">
            {SliceSeds.map((tool, index) => (
              <li key={index}>
                <div className="BottomProduct">{tool}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuContent;
