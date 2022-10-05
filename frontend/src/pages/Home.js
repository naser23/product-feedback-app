import React, { useEffect } from "react";
import FeedbackHeader from "../components/FeedbackHeader";
import FeedbackList from "../components/FeedbackList";
import Navbar from "../components/Navbar";
import NoSuggestions from "../components/NoSuggestions";
import { useSelector, useDispatch } from "react-redux";
import { getSuggestions } from "../features/feedback/feedbackSlice";
import { reset } from "../features/feedback/feedbackSlice";

function Home() {
  const { suggestions, isSuccess } = useSelector((state) => state.feedback);

  const dispatch = useDispatch();

  useEffect(() => {
    // make the request for the suggestions.
    dispatch(getSuggestions());

    // trying to make something happen on unmount.
    // WHY THE FUCK IS THIS NOT RUNNING
    // Come back to this later on
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);
  return (
    <main className="home">
      <Navbar />
      <div className="homeContent">
        <FeedbackHeader />
        {suggestions.length === 0 ? <NoSuggestions /> : <FeedbackList />}
      </div>
    </main>
  );
}

export default Home;
