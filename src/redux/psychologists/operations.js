// operations.js
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import { setPsychologists } from "./slice";
import { nanoid } from "@reduxjs/toolkit";

export const fetchPsychologists = () => (dispatch) => {
  const unsubscribe = onValue(ref(db), (snapshot) => {
    const data = snapshot.val();

    const psychologistsArray = Array.isArray(data) ? data : Object.values(data);
    const psychologistsWithId = psychologistsArray.map((psychologist) => ({
      ...psychologist,
      id: nanoid(),
    }));

    dispatch(setPsychologists(psychologistsWithId));
  });

  return () => {
    unsubscribe();
  };
};
