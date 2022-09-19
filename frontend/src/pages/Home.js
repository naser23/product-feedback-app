import React from "react";
import FeedbackHeader from "../components/FeedbackHeader";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <FeedbackHeader />
    </main>
  );
}

export default Home;
