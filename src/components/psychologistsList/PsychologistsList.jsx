import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

const PsychologistsList = () => {
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    const dataRef = ref(db);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Firebase data: ", data); // Debugging log
      if (data) {
        setPsychologists(data);
      }
    });
  }, []);
  console.log("Psychologists state: ", psychologists); // Debugging log

  return (
    <div>
      <h1>Psychologists List</h1>
      <ul>
        {psychologists.map((psychologist, index) => (
          <li key={index}>
            <img src={psychologist.avatar_url} alt={psychologist.name} />
            <h2>{psychologist.name}</h2>
            <p>{psychologist.specialization}</p>
            <p>Experience: {psychologist.experience}</p>
            <p>Price per hour: ${psychologist.price_per_hour}</p>
            <p>Rating: {psychologist.rating}</p>
            <p>License: {psychologist.license}</p>
            <p>Initial Consultation: {psychologist.initial_consultation}</p>
            <p>About: {psychologist.about}</p>
            <h3>Reviews:</h3>
            <ul>
              {psychologist.reviews.map((review, reviewIndex) => (
                <li key={reviewIndex}>
                  <p>Reviewer: {review.reviewer}</p>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PsychologistsList;
