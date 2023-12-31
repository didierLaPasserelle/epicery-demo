import DemoForm from "./DemoForm";
import ClientForm from "./ClientForm";
import Button from "../../../../../reusable-ui/Button";
import { BsArrowRight } from "react-icons/bs";
import { theme } from "../../../../../../theme";
import styled from "styled-components";
import { useState } from "react";
import {
  checkIsInputEmpty,
  findDemoPasswordMessage,
} from "./helper/login-form";
import LoginModes from "./LoginModes";
import { getFormTitlesConfig } from "./formTitlesConfig";

export default function LoginForm({ username, setUsername, handleChange }) {
  const [isClicked, setIsClicked] = useState(true);

  const handleDemoFormClick = () => {
    setIsClicked(true);
    setUsername({ businessName: "" });
  };

  const handleClientFormClick = () => {
    setIsClicked(false);
    setUsername({ businessName: "", password: "" });
  };

  const FormTitles = getFormTitlesConfig({
    handleDemoFormClick,
    handleClientFormClick,
    isClicked,
  });

  const isInputEmpty = checkIsInputEmpty(isClicked, username);
  const demoPasswordMessage = findDemoPasswordMessage(FormTitles);

  return (
    <LoginFormStyled>
      <LoginModes
        FormTitles={FormTitles}
        demoPasswordMessage={demoPasswordMessage}
      />
      {isClicked ? (
        <DemoForm username={username} handleChange={handleChange} />
      ) : (
        <ClientForm username={username} handleChange={handleChange} />
      )}
      <Button
        disabled={isInputEmpty}
        label={isClicked ? "J'accède à la démo" : "J'accède à mon espace"}
        Icon={<BsArrowRight />}
        x
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  min-height: 430px;
  width: 90%;
  box-shadow: 0 10px 15px 3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 40px 50px 0px;
  border-radius: ${theme.borderRadius.extraRound};

  @media screen and (min-width: 1370px) {
    width: 85%;
  }

  .login-modes {
    display: grid;
    grid-template-columns: 50% 50%;
    border-bottom: 1px solid ${theme.colors.greyLight};
    margin-bottom: 40px;

    span {
      font-size: ${theme.fonts.size.XS};
      color: ${theme.colors.greyDark};
      margin: 5px 0 10px;
      align-self: center;
    }
  }

  h2 {
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.newDark};
    font-family: "Gilroy", sans-serif;
    line-height: ${theme.spacing.lg};
  }

  .icon {
    font-size: ${theme.fonts.size.P2};
  }
`;
