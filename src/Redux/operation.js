import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../apiServices/api.js";

export const fetchCamperList = createAsyncThunk(
  "getList",
  async (showedCamps, thunkAPI) => {
    try {
      const response = await api("/cars");
      response.campersCount = response.data.length;

      response.promoImages = response.data.map((camper) => {
        return { [camper.name]: camper.gallery[0] };
      });

      const { data, campersCount, promoImages } = response;
      const editedData = data.slice(0, showedCamps);
      const Editedresponse = { data: editedData, campersCount, promoImages };
      return Editedresponse;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
