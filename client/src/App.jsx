import FeedbackForm from "./components/FeedbackForm";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <FeedbackForm />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
