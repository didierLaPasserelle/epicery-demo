import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";

export default function BasketItems({ basket }) {
  return (
    <BasketItemsStyled>
      {basket.map((item) => (
        <div key={item.id} className="basket-card">
          <div >{<BasketCard {...item} />}</div>
        </div>
      ))}
    </BasketItemsStyled>
  );
}

const BasketItemsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
