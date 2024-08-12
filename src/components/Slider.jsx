import { useEffect, useState } from "react";
import "../slider.css";

function Slider() {
  const feedbacks = [
    {
      name: "Laura Adams",
      position: "CTO, InnovateTech",
      profile: "/profile1.jpg",
      image: "/slider1.png",
      feedback:
        "I usually struggle with design work, but creating a logo with Brandmark was intuitive and enjoyable. It made me feel like a pro!",
    },
    {
      name: "Michael Smith",
      position: "Co-Founder, EcoBrand",
      profile: "/profile2.jpg",
      image: "/slider2.png",
      feedback:
        "Brandmark took the guesswork out of logo design. The process was smooth, and the results were better than I could have imagined.",
    },
    {
      name: "James Lee",
      position: "CEO, FutureFit",
      profile: "/profile3.jpg",
      image: "/slider3.png",
      feedback:
        "Designing a logo always felt like a chore, but with Brandmark, it was quick, easy, and actually fun. The outcome was fantastic!",
    },
  ];
  const [index, setIndex] = useState(0);

  function handleIndex(i) {
    setIndex(i);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="slider">
      <div className="slider-container">
        {feedbacks.map((feedback, i) => (
          <div key={i} className={`slider-text ${index === i ? "active" : ""}`}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              {feedback.feedback}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-quote"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
            </p>

            <div className="slider-profile">
              <img src={feedback.profile} alt="" />
              <div className="slider-profile-info">
                <p>{feedback.name}</p>
                <p>{feedback.position}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="slider-product">
          {feedbacks.map((feedback, i) => (
            <img
              key={i}
              src={feedback.image}
              className={index == i ? "active" : ""}
            />
          ))}
        </div>
      </div>
      <div className="dots">
        <button
          className={`dot ${index === 0 ? "dot-active" : ""}`}
          onClick={() => handleIndex(0)}
        ></button>
        <button
          className={`dot ${index === 1 ? "dot-active" : ""}`}
          onClick={() => handleIndex(1)}
        ></button>
        <button
          className={`dot ${index === 2 ? "dot-active" : ""}`}
          onClick={() => handleIndex(2)}
        ></button>
      </div>
    </section>
  );
}

export default Slider;
