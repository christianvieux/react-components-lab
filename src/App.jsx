// src/App.jsx

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];
  const item_style = { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"};
  const bold_style = {fontWeight: "bold"}
  const center_x_margin = { width: "max-content", marginInline: "auto" }

  return (
    <>
      <h1 style={center_x_margin}>Local Weather</h1>
      <section style={center_x_margin}>
        {weatherForecasts.map((weather) => (
          <div
            style={{
              display: "inline-block",
              border: "solid white 1px",
              width: "350px",
              textAlign: "center",
              marginInline: "auto",
            }}
          >
            {/* day */}
            <h2>{weather.day}</h2>

            {/* conditions */}
            <div style={item_style}>
              <p style={bold_style}>conditions: </p>
              <p>{weather.conditions}</p>
            </div>

            {/* time */}
            <div style={item_style}>
              <p style={bold_style}>time: </p>
              <p style={item_style}>{weather.time}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default App;
