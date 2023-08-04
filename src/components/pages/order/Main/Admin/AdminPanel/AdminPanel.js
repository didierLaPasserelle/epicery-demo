import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "../tabsConfig";

export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {/* {currentTabSelected === tabSelected.index && tabSelected.label} */}
      {tabSelected && tabSelected.Content}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 30px 5%;
`;
