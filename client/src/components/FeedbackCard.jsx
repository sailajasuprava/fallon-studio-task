function FeedbackCard({ item }) {
  const { fullname, email, message, createdAt } = item;

  const publishedAt = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-purple-100 p-4 shadow hover:shadow-md transition-shadow duration-300 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">{fullname}</h3>
        <p className="text-sm">{publishedAt}</p>
      </div>

      <p className="text-sm text-gray-500 italic">{email}</p>
      <p className="text-gray-700 text-sm">{message}</p>
    </div>
  );
}

export default FeedbackCard;
