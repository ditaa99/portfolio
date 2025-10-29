import React from "react";

const About = () => (
  <section className="container my-5" id="about" data-aos="fade-up">
    <div className="bg-light p-5 rounded shadow about-section">
      <h3 className="fw-bold mb-3">About Me</h3>
      <p>
        I am <span className="text-primary fw-bold">Dita Pelaj</span> from
        Kosova. I graduated in{" "}
        <span className="text-secondary fst-italic">Computer Science</span> in
        Pécs, Hungary and am currently pursuing my master's in{" "}
        <span className="text-secondary fst-italic">Data Science</span> in
        Potsdam, Germany.
        <br />
        <br />
        I am open to new collaborations or work opportunities where I can
        contribute and grow. Feel free to connect with me! :)
        <br />
        <br />
        I am passionate about the intersection of math and coding. My
        areas of focus include Machine Learning, Finite Automata, and developing
        software that explains complex concepts intuitively. I also enjoy
        developing web applications and teaching.
        <br />
        <br />
        Besides coding, I love learning languages, listening to music, and hiking.
      </p>
    </div>
  </section>
);

export default About;
