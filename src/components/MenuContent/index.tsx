import { useState } from "react";
import "./menuContent.css";
import { IoIosArrowRoundForward } from "react-icons/io";

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

  const SliceSeds: { id: number; name: string; img: string; price: number }[] =
    [
      {
        id: 0,
        name: "Rogue Dog Slice 1.2",
        img: "src/assets/RogueAlpacaSled.png",
        price: 312,
      },
      {
        id: 1,
        name: "Kettlebells",
        img: "src/assets/RogueEchoDogSled.png",
        price: 122,
      },
      {
        id: 2,
        name: "Dumbbells",
        img: "src/assets/RogueSliceSled.png",
        price: 233,
      },
    ];

  return (
    <>
      <div className="menuContentWrapper">
        <div className="Wrapper-top">
          <ul className="horizontal-list">
            {tools.map((tool, index) => (
              <li
                key={index}
                className={selectedTool === index ? "selected" : "notSelected"}
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
                <div className="MediumProduct">
                  <div className="MediumProductText">
                    <p>{tool.name}</p>
                    <div className="MediumProductTextShop">
                      <a>Shop now</a>
                      <IoIosArrowRoundForward className="arrow" />
                    </div>
                  </div>
                  <img src={tool.img} alt={tool.name} />
                </div>
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
                <div className="BottomProduct">
                  <img src={tool.img} alt={tool.name} />
                  <p>{tool.name}</p>
                  <p>USD{tool.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuContent;
