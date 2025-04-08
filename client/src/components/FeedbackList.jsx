import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";
import { FaSpinner } from "react-icons/fa6";
import FeedbackCard from "./FeedbackCard";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAllFeedbacks() {
      try {
        setIsLoading(true);
        const res = await axios.get("/feedbacks");
        setFeedbacks((prev) => [...prev, ...res.data.data]);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }

    getAllFeedbacks();
  }, []);

  if (isLoading) return <FaSpinner />;

  return (
    <div className="mt-6 w-full max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
      {feedbacks.map((item) => (
        <FeedbackCard key={item._id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
