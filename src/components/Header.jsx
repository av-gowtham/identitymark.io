import { useEffect, useState } from "react";
import "../header.css";
import "../weather.css";

function Header({ toggleNav }) {
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    const handleApi = async function () {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=63cdbdf7ff1be9ed8de0b0b5b93454de&units=metric"
      );

      try {
        const data = await res.json();
        console.log(data);

        setTemp(Math.floor(data.main.temp));
      } catch (e) {
        console.log("There was a problem with the fetch operation: " + e);
      }
    };

    handleApi();
  });

  return (
    <div className="header">
      <nav>
        <div className="nav-logo">
          <a href="#">
            <span>Identity</span>
            <span>Mark</span>
          </a>
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="mailto:example@gmail.com">Support</a>
          </li>
          <li>
            <a className="login" href="#">
              Login
            </a>
          </li>
          <li className="weather">
            <h2>{temp ? temp : ""}°C</h2>
            <p>{temp ? "Bengaluru" : "Loading"}</p>
          </li>
        </ul>
      </nav>

      <div className="hamburger">
        <li className="weather sec">
          <h2>{temp ? temp : ""}°C</h2>
          <p>{temp ? "Bengaluru" : "Loading"}</p>
        </li>
        <div onClick={() => toggleNav()}>
          <img src="/hamburger.svg" alt="Menu" />
        </div>
      </div>
    </div>
  );
}

export default Header;
