import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveTags, saveTagsByServer } from "../menu/filterPageSlice";
const url = "http://localhost:8080/api/user/create/";
const deleteUrl = "http://localhost:8080/api/mealplan/delete/";
import { searchBySpoonacularApiBulkAsync } from "../store/spoonacularAPISlice";

export const saveShoplistToMenumaticDb = createAsyncThunk(
  "menumaticServerApi/saveShoplistToMenumaticDb",
  async (info, { dispatch }) => {
    const userId = info.userId;
    const data = info.data;
    const excluded = info.excluded;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-id": userId,
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      const { mealplan_id } = await response.json();
      dispatch(
        saveExcludedIngredients({ mealplanId: mealplan_id, excluded: excluded })
      );
      alert("Data saved successfully");
    } catch (error) {
      alert("Saving failed, server is down");
      return error;
    }
  }
);

export const saveFoodPrefToMenumaticDb = createAsyncThunk(
  "menumaticServerApi/saveFoodPrefToMenumaticDb",
  async (info) => {
    console.log(info);
    const userId = info.userId;
    const data = info.data;
    const parseData = (dataP) => {
      const result = [];
      dataP.includeTags.map((tag) => {
        result.push(`include-${tag}`);
      });
      dataP.excludeTags.map((tag) => {
        result.push(`exclude-${tag}`);
      });
      result.push(`mealsInPlan-${dataP.mealsInPlan}`);
      return result;
    };
    const newData = parseData(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-id": userId,
      },
      body: JSON.stringify(newData),
    };
    const custUrl = "http://localhost:8080/api/food-preferences/set/";
    try {
      await fetch(custUrl, options);
    } catch (error) {
      alert("Saving failed, server is down");
      return error;
    }
  }
);
export const deleteMealPlan = createAsyncThunk(
  "menumaticServerApi/deleteMealPlan",
  async (info, { dispatch }) => {
    const userId = info.userId;
    const mealPlanId = info.mealPlanId;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "User-id": userId,
      },
      body: JSON.stringify({ mealplanId: mealPlanId }),
    };
    console.log("Fetching user shopping list is CALLED");
    // dispatch(setMenumaticServerState("loading"));

    const response = await fetch(deleteUrl, options);
    if (!response.ok) {
      throw new Error("Failed to delete the meal plan.");
    }
    dispatch(fetchUserShopinglist(userId));
    return await response.json();
  }
);
export const deleteUser = createAsyncThunk(
  "menumaticServerApi/deleteMealPlan",
  async (info, { dispatch }) => {
    const userId = info.userId;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-id": userId,
      },
    };

    const deleteUserUrl = "http://localhost:8080/api/user/delete/";
    console.log("Fetching user shopping list is CALLED");
    // dispatch(setMenumaticServerState("loading"));

    await fetch(deleteUserUrl, options);
    if (!response.ok) {
      throw new Error("Failed to delete the meal plan.");
    }
  }
);

export const saveExcludedIngredients = createAsyncThunk(
  "menumaticServerApi/saveExcludedIngredients",
  async (info) => {
    const customUrl =
      "http://localhost:8080/api/mealplan/excluded-ingredients/set/";
    const mealplanId = info.mealplanId;
    const data = info.excluded;

    const extractIngredientsName = (ingr) => {
      const result = [];
      ingr.map((each) => {
        each.ingredients.map((ing) => {
          result.push(ing.name);
        });
      });
      return result;
    };
    const ingredients = extractIngredientsName(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "mealplan-id": mealplanId,
      },
      body: JSON.stringify(ingredients),
    };

    await fetch(customUrl, options);
  }
);

export const fetchExcludedIngredients = createAsyncThunk(
  "menumaticServerApi/fetchExcludedIngredients",
  async (info) => {
    const customUrl =
      "http://localhost:8080/api/mealplan/excluded-ingredients/get/";
    const mealplanId = info;

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "mealplan-id": mealplanId,
      },
    };
    const response = await fetch(customUrl, options);
    const data = await response.json();

    return { mealplanId: mealplanId, ingredients: data };
  }
);

export const fetchUserShopinglist = createAsyncThunk(
  "menumaticServerApi/fetchUserShopinglist",
  async (info, { dispatch }) => {
    // dispatch(setMenumaticServerState("loading"));
    const customUrl = "http://localhost:8080/api/user/mealplans/";
    const userId = info;
    // console.log(info)
    // console.log(userId)
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-id": userId,
      },
    };
    console.log("Fetching user shopping list is CALLED");
    // dispatch(setMenumaticServerState("loading"));
    const response = await fetch(customUrl, options);

    if (!response.ok) {
      throw new Error("Failed to fetch user shopList");
    }
    // console.log(response)
    return await response.json();
  }
);

export const fetchUserFoodPref = createAsyncThunk(
  "menumaticServerApi/fetchUserFoodPref",
  async (info, { dispatch }) => {
    const customUrl = "http://localhost:8080/api/food-preferences/get/";
    const userId = info;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "User-id": userId,
      },
    };

    const response = await fetch(customUrl, options);
    const fetchedData = await response.json();

    const includeList = [];
    const excludeList = [];
    let mealsInPlan = 7;

    fetchedData.forEach((item) => {
      const [type, value] = item.split("-");
      if (type === "include") {
        includeList.push(value);
      } else if (type === "exclude") {
        excludeList.push(value);
      } else if (type === "mealsInPlan") {
        mealsInPlan = value;
      }
    });
    dispatch(
      saveTagsByServer({
        includeTags: includeList,
        excludeTags: excludeList,
        mealsInPlan: mealsInPlan,
      })
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user shopList");
    }
    return await fetchedData;
  }
);

const menumaticServerApi = createSlice({
  name: "spoonacularApi",
  initialState: {
    userAllListPromise: {
      data: [],
      state: "loading",
      error: null,
    },
    userCurrentRecipesPromise: {
      data: [],
      state: "loading",
      error: null,
    },

    allList: [],
    userFoodPref: [],
    excludedIngredient: {},
    state: {
      allListState: "loading",
      userFoodPrefState: "loading",
      excludedIngredientState: "loading",
    },
    selectedList: {},
  },

  reducers: {
    // It should be fixed
    setMenumaticServerState: (state, action) => {
      state.state = action.payload;
    },
    setSelectedList: (state, action) => {
      const { id } = action.payload;
      if (state.userAllListPromise.state === "ready") {
        state.selectedList = state.userAllListPromise.data.find(
          (item) => item.id === id
        );
      } else {
        state.selectedList = { id: id, name: "", recepies: [] };
      }
    },
    flushUserData: (state, action) => {
      state.allList = [];
      state.selectedList.listId = null;
      state.selectedList.recepies = [];
    },
    setUserFoodPrefState: (state, action) => {
      state.state.userFoodPrefState = action.payload;
    },
  }, // DUPLICATES!!
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserShopinglist.pending, (state, action) => {
        // state.state.allListState = "loading";
        state.userAllListPromise.state = "loading";
      })
      .addCase(fetchUserShopinglist.fulfilled, (state, action) => {
        state.allList = action.payload;
        state.userAllListPromise.data = action.payload;
        // state.state.allListState = "ready";
        state.userAllListPromise.state = "ready";
      })
      .addCase(fetchUserShopinglist.rejected, (state, action) => {
        // state.state.allListState = "failed";
        state.userAllListPromise.state = "failed";
      })
      .addCase(fetchUserFoodPref.pending, (state, action) => {
        state.state.userFoodPrefState = "loading";
      })
      .addCase(fetchUserFoodPref.fulfilled, (state, action) => {
        state.userFoodPref = action.payload;
        state.state.userFoodPrefState = "ready";
      })
      .addCase(fetchUserFoodPref.rejected, (state, action) => {
        state.state.userFoodPrefState = "failed";
      })
      .addCase(fetchExcludedIngredients.pending, (state, action) => {
        state.state.excludedIngredientState = "loading";
      })
      .addCase(fetchExcludedIngredients.fulfilled, (state, action) => {
        state.state.excludedIngredientState = "ready";
        state.excludedIngredient.mealplanId = action.payload.mealplanId;
        state.excludedIngredient.ingredients = action.payload.ingredients;
      })
      .addCase(fetchExcludedIngredients.rejected, (state, action) => {
        state.state.excludedIngredientState = "failed";
        state.excludedIngredient.mealplanId = action.payload.mealplanId;
        state.excludedIngredient.ingredients = action.payload.ingredients;
      })
      .addCase(searchBySpoonacularApiBulkAsync.pending, (state, action) => {
        state.userCurrentRecipesPromise.state = "loading";
      })
      .addCase(searchBySpoonacularApiBulkAsync.fulfilled, (state, action) => {
        const { userData } = action.payload;

        state.userCurrentRecipesPromise.data = userData;
        state.userCurrentRecipesPromise.state = "ready";
      })
      .addCase(searchBySpoonacularApiBulkAsync.rejected, (state, action) => {
        state.userSavedRecipesPromise.state = "failed";
      });
  },
});
export const getUserAllListPromise = (state) =>
  state.menumaticServerApi.userAllListPromise;
export const getUserCurrentRecipes = (state) =>
  state.menumaticServerApi.userCurrentRecipesPromise.data;
export const getMenumaticAllList = (state) => state.menumaticServerApi.allList;
export const getMenumaticSavedRecipes = (state) =>
  state.menumaticServerApi.userSavedRecipes;
export const getMenumaticSelecedList = (state) =>
  state.menumaticServerApi.selectedList;
export const getExcludedIngredients = (state) =>
  state.menumaticServerApi.excludedIngredient.ingredients;
export const getMenumaticStates = (state) => state.menumaticServerApi.state;
export const {
  setSelectedList,
  setUserFoodPrefState,
  flushUserData,
  setMenumaticServerState,
} = menumaticServerApi.actions;
export default menumaticServerApi.reducer;
