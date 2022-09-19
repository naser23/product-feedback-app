import React from "react";
import FeedbackHeader from "../components/FeedbackHeader";
import FeedbackList from "../components/FeedbackList";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <div className="homeContent">
        <FeedbackHeader />
        <FeedbackList />
      </div>
    </main>
  );
}

export default Home;
