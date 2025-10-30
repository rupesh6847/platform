import { useEffect, useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    try {
      const res = await fetch(
        "https://api.api-ninjas.com/v2/quotes?categories=success,wisdom",
        {
          headers: {
            "X-Api-Key": "g4kIvpBbHGVxf9XHKO7tug==TXbMTbKvuuNe42v7",
          },
        }
      );
      if (!res.ok) throw new Error("API request failed");
      const data = await res.json();
      if (data && data.length > 0) {
        const newQuote = {
          text: data[0].quote,
          author: data[0].author,
          timestamp: Date.now(),
        };
        // Save to localStorage for reuse
        localStorage.setItem("dailyQuote", JSON.stringify(newQuote));
        setQuote(newQuote.text);
        setAuthor(newQuote.author);
      }
    } catch (err) {
      console.error("Quote fetch error:", err);
      setError(true);
    }
  };

  useEffect(() => {
    const storedQuote = localStorage.getItem("dailyQuote");

    if (storedQuote) {
      const parsed = JSON.parse(storedQuote);
      const now = Date.now();
      const age = now - parsed.timestamp;
      const oneDay = 24 * 60 * 60 * 1000;

      if (age < oneDay) {
        // Use cached quote
        setQuote(parsed.text);
        setAuthor(parsed.author);
        return;
      }
    }

    // Fetch new quote if none or older than 24h
    fetchQuote();
  }, []);

  return (
    <div className="border rounded-2xl bg-white p-8 text-sm text-gray-700  ">
      <p className="text-gray-500 mb-1">Quote of the day:</p>
      {error ? (
        <p>Unable to fetch quote right now.</p>
      ) : quote ? (
        <p className="  text-gray-800 text-3xl lg:text-xl">
          “{quote}”{" "}
          <span className="not-italic font-medium text-gray-600">
            — {author}
          </span>
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomQuote;
