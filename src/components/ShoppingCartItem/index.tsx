/** At the top we will have all required imports */
import { CiSquareMinus, CiSquarePlus, CiTrash } from "react-icons/ci";
import "./shoppingCartItem.css";
import { IoIosArrowForward } from "react-icons/io";
import { DataContext } from "../../contexts/dataContext";

import { useContext } from "react";

interface LogoHeaderProps {
  itemCount: number;
}

const ShoppingCartItem: React.FC<LogoHeaderProps> = ({ itemCount }) => {
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
      {
        id: 2,
        name: "Dumbbells",
        img: "src/assets/RogueSliceSled.png",
        price: 233,
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
      <div className="Wrapper">
        <ul className="vertical-list-Product">
          {SliceSeds.map((tool, index) => (
            <li key={index}>
              <div className="Product">
                <img src={tool.img} alt={tool.name} />
                <div className="ProductText">
                  <p>{tool.name}</p>
                  <p className="money">USD {tool.price}</p>
                  <div className="ProductControl">
                    <CiSquarePlus />
                    <p className="ProductControlQuantity">1</p>
                    <CiSquareMinus />
                    <CiTrash className="trash" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="WrapperProceed">
        <div className="WrapperProceedHeader">
          <p className="totalItems">Total 2 items</p>
          <p className="totalPrice">USD 580</p>
        </div>
        <button className="proceedButtom">
          Proceed to checkout
          <IoIosArrowForward className="arrowForward" />
        </button>
      </div>
    </>
  );
};

export default ShoppingCartItem;
