import { createContext } from "react"

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  cardClickedOn: {},
  setCardClickedOn: () => {},
  handleItemSelected: () => {},

  titleEditRef: {},
  basket:[],

  handleAddToBasket:() => {}, 
  handleDeleteBasketItem: () => {},

 })