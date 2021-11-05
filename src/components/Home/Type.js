import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior Backend Developer",
          "Computer Engineering Student",
          "Machine Learning Coursetaker",
          "Competitive Programming Beginner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
