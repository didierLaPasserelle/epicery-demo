import styled, { css } from "styled-components";
import { theme } from "../../../theme";
import Button from "../Button";
import { fadeInFromRight, fadeInFromTop } from "../../../theme/animations";
import { FaTrashAlt } from "react-icons/fa";
import { getCardButtons } from "./buttonConfig";

export default function Card({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
  onAdd,
  onRemove,
  isOverlapImageVisible,
  overlapImageSource,
  quantity,
}) {
  const cardButtons = getCardButtons(
    isOverlapImageVisible,
    onRemove,
    onAdd,
    quantity
  );

  return (
    <CardStyled
      className="produit"
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <button
            className="delete-button"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <FaTrashAlt className="icon" />
          </button>
        )}
        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img className="overlap-image" src={overlapImageSource} alt="" />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{leftDescription}</div>
            <div className="right-description">
              {cardButtons.map((cardButton) => (
                <Button
                  key={cardButton.id}
                  className={cardButton.className}
                  label={cardButton.label}
                  onClick={cardButton.onClick}
                  disabled={cardButton.disabled}
                  version={cardButton.version}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${(props) => props.isHoverable && HoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 280px;

  .card {
    background: ${theme.colors.white};
    width: 240px;
    height: 280px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px 20px 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-button {
      position: absolute;
      top: 20px;
      right: 25px;
      cursor: pointer;
      color: ${theme.colors.primary};
      border: none;
      background: none;
      animation: ${fadeInFromRight} 500ms ease-out;
      z-index: 2;
      padding: 0;

      .icon {
        width: 20px;
        height: 20px;

        :hover {
          color: ${theme.colors.red};
        }
        :active {
          color: ${theme.colors.primary};
        }
      }
    }

    .image {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} 500ms;
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }
    }

    .text-info {
      user-select: none;
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P1};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.extraHeavy};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.families.gilroy};
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-family: ${theme.fonts.families.gilroy};

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;

          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
            &.left {
              border-top-left-radius: ${theme.borderRadius.roundedFull};
              border-bottom-left-radius: ${theme.borderRadius.roundedFull};
            }

            &.right {
              border-top-right-radius: ${theme.borderRadius.roundedFull};
              border-bottom-right-radius: ${theme.borderRadius.roundedFull};
            }
          }
        }
      }
    }

    ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && selectedStyle}
  }
`;

const HoverableStyle = css`
  &:hover {
    box-shadow: ${theme.shadows.orangeHighLight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;

    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    :active {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }

    &.is-disabled {
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
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    :active {
      color: ${theme.colors.white};
    }
  }

  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
