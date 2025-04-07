import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <FeedbackForm />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
