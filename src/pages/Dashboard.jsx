import { useEffect, useState } from "react";

function Dashboard() {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    const data =
      JSON.parse(
        localStorage.getItem(
          "interviews"
        ) || "[]"
      );

    setHistory(data);

  }, []);

  return (

    <div className="
      min-h-screen
      bg-[#060816]
      text-white
      p-10
    ">

      <h1 className="
        text-4xl
        font-bold
        mb-8
      ">

        Career Dashboard

      </h1>

      {history.map(
        (item, index) => (

          <div
            key={index}
            className="
              bg-white/5
              p-5
              rounded-xl
              mb-4
            "
          >

            <p>
              Domain:
              {item.domain}
            </p>

            <p>
              Score:
              {item.score}
            </p>

            <p>
              Readiness:
              {item.readiness}
            </p>

            <p>
              Date:
              {item.date}
            </p>

          </div>

        )
      )}

    </div>

  );

}

export default Dashboard;