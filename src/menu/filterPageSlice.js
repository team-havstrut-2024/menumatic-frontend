import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const filterPage = createSlice({
    name: "filterPage",
    initialState: {
        apiPrefs: {
            includeTags: {
                title: "food preference",
                paramsArray: [],
            },
            excludeTags: {
                title: "allergies",
                paramsArray: [],
            }
        }
    },
    reducers: {
        saveIncludeTags: (state, action) => {
            if (state.apiPrefs.includeTags.paramsArray.length !== 0) {
                state.apiPrefs.includeTags.paramsArray.length = 0;
            }
            state.apiPrefs.includeTags.paramsArray.push(...action.payload);
        },
        saveExcludeTags: (state, action) => {
            if (state.apiPrefs.excludeTags.paramsArray.length !== 0) {
                state.apiPrefs.excludeTags.paramsArray.length = 0;
            }
            state.apiPrefs.excludeTags.paramsArray.push(...action.payload);
        },
        saveTags: (state, action) => {
            if (state.apiPrefs.includeTags.paramsArray.length !== 0) {
                state.apiPrefs.includeTags.paramsArray.length = 0;
            }
            if (state.apiPrefs.excludeTags.paramsArray.length !== 0) {
                state.apiPrefs.excludeTags.paramsArray.length = 0;
            }
            state.apiPrefs.includeTags.paramsArray.push(...action.payload.includeTags);
            state.apiPrefs.excludeTags.paramsArray.push(...action.payload.excludeTags);
        },
    },
    });

    export default filterPage.reducer;

    export const {saveIncludeTags, saveExcludeTags, saveTags} = filterPage.actions;
    export const getExcludeTags = (state) => state.filterPage.apiPrefs.excludeTags.paramsArray
    export const getIncludeTags = (state) => state.filterPage.apiPrefs.includeTags.paramsArray