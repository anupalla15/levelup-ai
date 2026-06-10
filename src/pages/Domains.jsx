import { useNavigate } from "react-router-dom";

function Domains() {

  const navigate = useNavigate();

  const domains = [

    {
      name: "React",
      skills: "Frontend, Hooks, APIs"
    },

    {
      name: "Java",
      skills: "OOPs, Spring Boot, DSA"
    },

    {
      name: "Python",
      skills: "Automation, AI, Backend"
    },

    {
      name: "AI/ML",
      skills: "LLMs, Deep Learning"
    },

    {
      name: "Cybersecurity",
      skills: "Networking, Security"
    },

    {
      name: "System Design",
      skills: "Scalability, Architecture"
    }

  ];

  const startInterview = (domain) => {

    navigate("/interview", {
      state: { domain }
    });

  };

  return (

    <div className="
      min-h-screen
      bg-[#060816]
      text-white
      p-10
    ">

      <h1 className="
        text-5xl
        font-bold
        mb-10
        text-center
      ">

        Explore Career Domains

      </h1>

      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">

        {domains.map((item, index) => (

          <div
            key={index}
            className="
              bg-white/5
              p-6
              rounded-2xl
              border
              border-white/10
            "
          >

            <h2 className="
              text-2xl
              font-bold
              mb-4
            ">

              {item.name}

            </h2>

            <p className="
              text-gray-400
              mb-6
            ">

              {item.skills}

            </p>

            <button
              onClick={() =>
                startInterview(item.name)
              }
              className="
                bg-purple-600
                px-6
                py-3
                rounded-full
              "
            >

              Start Interview

            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Domains;