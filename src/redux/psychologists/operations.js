import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import { setPsychologists } from "./slice";

export const fetchPsychologists = () => (dispatch) => {
  const unsubscribe = onValue(ref(db), (snapshot) => {
    const data = snapshot.val();

    const psychologistsArray = Array.isArray(data) ? data : Object.values(data);
    const psychologistsWithId = psychologistsArray.map((psychologist) => ({
      ...psychologist,
      id: psychologist.name,
    }));

    dispatch(setPsychologists(psychologistsWithId));
  });

  return () => {
    unsubscribe();
  };
};
