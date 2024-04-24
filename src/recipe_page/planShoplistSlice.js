import { createSlice } from "@reduxjs/toolkit";
import { connectStorageEmulator } from "firebase/storage";

const planShoplistSlice = createSlice({
  name: "Shoplist",
  initialState: {
    allItems: [],
  },
  reducers: {
    generateShoplist: (state, action) => {
      /**
       * Takes an object meal: {{result}, portions}
       * retrieves the data needed for creating the shopping list:
       *    *portions: number of portions specified by user
       *    *servings: number of servings for the recipe
       *    *ingredients: array of ingredients for recipe from which following is retrieved
       *        *nameClean: name of ingredient
       *        *measures.metric.amount: amount of ingredient in metric
       *        *measures.metric.unitShort: unit for the ingredient in metric
       *
       * calcAmount: calculates amount of each ingredient in order to get wanted amount of portions
       * pushes stripped objects {name, amount, unit} into IngrArr (to be returned to next function)
       *
       * @param {Objct} meal - A meal object containing portions (number) and result (object), 
       * where result includes serving details and a list of ingredients.
       * @function
       * @returns {Array<Object>} ingrArr - An array of objects, each representing an ingredient
       * with its name, calculated amount, and unit.
       *
       */
      const stripIngr = (meal) => {
        const portions = meal.portions;
        const servings = meal.result.servings;
        const ingredients = meal.result.extendedIngredients;
        const ingrArr = [];
        for (let i = 0; i < ingredients.length; i++) {
          let calcAmount = 0;
          if (ingredients[i].measures.metric.amount > 0.1) {
            calcAmount =
              ingredients[i].measures.metric.amount * (portions / servings);
          } else {
            calcAmount = ingredients[i].measures.metric.amount;
          }
          ingrArr.push({
            name: ingredients[i].nameClean,
            amount: calcAmount,
            unit: ingredients[i].measures.metric.unitShort,
          });
        }
        return ingrArr;
      };
      // console.log(stripIngr(action.payload[0]));

      /**
       * Updates the allItems state with the provided list of items. For each item in the input list,
       * the function checks if the item already exists in the state's allItems list. If an item exists,
       * it increments the item's amount by the amount specified in the input list. If the item does not
       * exist, it is added to the allItems list. After processing all items, it rounds the amount
       * of each item in the allItems list to the nearest tenth.
       *
       * @param {Array<Object>} props - An array of item objects to be added or updated in the allItems list.
       * Each object in the array should have a name property (string) representing the item's name,
       * and an amount property (number) representing the quantity of the item.
       */

      const updateAllItems = (props) => {
        for (let i = 0; i < props.length; i++) {
          let flag = -1;
          for (let j = 0; j < state.allItems.length; j++) {
            if (props[i].name === state.allItems[j].name) {
              // console.log("!!DUPE FOUND!!" + props[i].name + " and " + state.allItems[j].name)
              state.allItems[j].amount += props[i].amount;
              flag = 1;
            }
          }
          if (flag == -1) {
            state.allItems.push(props[i]);
          }
        }
        for (let i = 0; i < state.allItems.length; i++) {
          let cur = state.allItems[i].amount;
          state.allItems[i].amount = Math.ceil(cur * 10) / 10;
        }
      };

      for (let i = 0; i < action.payload.length; i++) {
        updateAllItems(stripIngr(action.payload[i]));
      }
    },
  },
});
export const getAllItems = (state) => state.shoplist.allItems;
export const { generateShoplist } = shoplistSlice.actions;
export default shoplistSlice.reducer;