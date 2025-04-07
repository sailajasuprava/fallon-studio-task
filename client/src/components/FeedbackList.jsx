import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";
import { FaSpinner } from "react-icons/fa6";

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
    <div className="grid gap-4 mt-6 w-full max-w-3xl">
      {feedbacks.map((feedback) => (
        <div key={feedback._id} className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">{feedback.fullName}</h3>
          <p className="text-sm text-gray-600">{feedback.email}</p>
          <p className="mt-2">{feedback.message}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackList;
