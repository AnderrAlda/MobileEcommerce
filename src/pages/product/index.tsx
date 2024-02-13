import { useState } from "react";
import "./product.css";
import Header from "../../components/Header";

const Product = () => {
  const cartItems = 1;

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

  const Reviews: {
    id: number;
    Reviewer: string;
    Valoration: number;
    Date: string;
    Description: string;
  }[] = [
    {
      id: 0,
      Reviewer: "Ander",
      Valoration: 4,
      Date: "02/02/2023",
      Description: "The best product I have ever used!",
    },
    {
      id: 0,
      Reviewer: "Ander",
      Valoration: 4,
      Date: "02/02/2023",
      Description: "The best product I have ever used!",
    },
    {
      id: 0,
      Reviewer: "Ander",
      Valoration: 4,
      Date: "02/02/2023",
      Description: "The best product I have ever used!",
    },
    {
      id: 0,
      Reviewer: "Ander",
      Valoration: 4,
      Date: "02/02/2023",
      Description: "The best product I have ever used!",
    },
  ];

  const [selectedTool, setSelectedTool] = useState(0);

  const handleClick = (index: number) => {
    setSelectedTool(index);
  };

  const tools = ["Overview", "Review", "Other products"];

  return (
    <>
      <Header itemCount={cartItems} />
      <div className="headerWrapper">
        <p className="productPrice">USD 350</p>
        <p className="productName">Rogue Echo Dog Sled</p>
      </div>

      <div className="Wrapper-Categories">
        <ul className="Categories-list">
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

      <div className="Wrapper-Img">
        <ul className="horizontal-list-Img">
          {SliceSeds.map((tool, index) => (
            <li key={index}>
              <img
                src={tool.img}
                alt="RogueSliceSled"
                className="productImage"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="addCartButtonWrapper">
        <button className="addCartButton">Add to Cart</button>
      </div>

      <p className="ReviewHeader">Reviews ({Reviews.length})</p>

      <div className="Wrapper-Review">
        <ul className="Vertical-list-Review">
          {Reviews.map((rev, index) => (
            <li key={index}>
              <div className="Review">
                <p className="Review-Reviewer">{rev.Reviewer}</p>
                <p className="Review-Valoration">
                  Valoration: {rev.Valoration}/5
                </p>
                <p className="Review-Date">{rev.Date}</p>
                <p className="Review-Description">{rev.Description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="Bottom-Header-Wrapper">
        <h2>Another products</h2>
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
    </>
  );
};

export default Product;
