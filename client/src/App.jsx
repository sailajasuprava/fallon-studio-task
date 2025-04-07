import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FeedbackList from "./components/FeedbackList";

function App() {
  return (
    <div>
      <Navbar />
      <FeedbackForm />
      <FeedbackList />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
