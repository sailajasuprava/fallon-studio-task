import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

const initialState = {
  fullname: "",
  email: "",
  message: "",
};

function FeedbackForm() {
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  function handleFormData(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function handleFormSubmission(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.post("/feedbacks", formData);
      toast.success(res.data.message);
      setFormData(initialState);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="max-w-sm sm:max-w-md mx-auto p-8 shadow-2xl space-y-4 rounded-md"
      onSubmit={handleFormSubmission}
    >
      <div>
        <label htmlFor="fullname" className="label">
          Full name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          id="fullname"
          name="fullname"
          required
          className="input"
          value={formData.fullname}
          onChange={handleFormData}
        />
      </div>

      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          id="email"
          name="email"
          required
          className="input"
          value={formData.email}
          onChange={handleFormData}
        />
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          rows={3}
          type="text"
          placeholder="Enter your message"
          id="message"
          name="message"
          required
          className="input"
          value={formData.message}
          onChange={handleFormData}
        />
      </div>

      <button type="submit" className="btn mt-2" disabled={isLoading}>
        {isLoading ? (
          <FaSpinner size={24} fill="white" className="animate-spin mx-auto" />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

export default FeedbackForm;
