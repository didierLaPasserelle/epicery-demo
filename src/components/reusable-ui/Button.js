import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  className,
  version = "normal",
  onClick,
  disabled,
  quantity,
}) {
  return (
    <ButtonStyled
      className={className}
      version={version}
      onClick={onClick}
      Icon={Icon}
      disabled={disabled}
    >
      <span>{quantity || label}</span>
      {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ version }) => extraStyle[version]}

  .icon {
    margin-left: 10px;
  }
`;

const extraStyleNormal = css`
  width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.roundedFull};
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.roundedFull};
  height: 100%;
  /* padding: 0 1.5em; */
  padding: 0 2rem;
  font-weight: ${theme.fonts.weights.semiBold};
  :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;

const extraStyleThree = css`
  min-width: 39px;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;

  padding: 18px 24px;
  /* border-radius: 5px; */
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;
  /* border-radius: ${theme.borderRadius.roundedFull}; */

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
  three: extraStyleThree,
};
