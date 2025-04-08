import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";

function App() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  return (
    <div>
      <Navbar setShowFeedbacks={setShowFeedbacks} />
      {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
