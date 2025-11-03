import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
{
    title: "AgroClimate",
    description: "A reproducible data analysis pipeline using Snakemake to analyze the impact of climate variables on agricultural crop yields in Brandenburg, Germany",
    tech: "Python, Snakemake, Pandas, Matplotlib, Geopandas",
    github: "https://gitup.uni-potsdam.de/pelaj1/AgroClimate"
  },
  {
    title: "Diagnosis Trends in Germany",
    description: "Analyzes and visualizes long-term trends in German hospital diagnoses using open-source data from Destatis (Statistisches Bundesamt)",
    tech: "Python, Jupyter, Pandas, Matplotlib, Seaborn",
    github: "https://gitup.uni-potsdam.de/pelaj1/diagnosis-trends-germany"
  },
  {
    title: "GenLang",
    description: "An educational software for learning about formal languages and automata theory. Currently supports regular languages with plans to expand.",
    tech: "Python, Flask, React",
    github: "https://github.com/ditaa99/GenLang"
  },
  {
    title: "Traffic Accident Analysis in Zurich",
    description: "Analyzes and visualizes traffic accident patterns in Zurich since 2011 using data from the Swiss Open Data Portal.",
    tech: "Python, Pandas, Matplotlib",
    github: "https://github.com/ditaa99/Traffic-Accident-Analysis"
  },
  {
    title: "MyWeatherApp",
    description: "A simple React app showing real-time weather using a public API.",
    tech: "React, JavaScript, API",
    github: "https://github.com/ditaa99/WeatherApp"
  },
  {
    title: "Games WebApp",
    description: "A group project where I implemented a Maze game.",
    tech: "JavaScript, HTML, CSS",
    github: "https://github.com/190ibrahim/Web-Application-Project/tree/main/app/MazeGame"
  },
  {
    title: "Online Courses API Project",
    description: "Web API of an educational website offering programming online courses, modeled after Udemy. It supports course management and user interactions.",
    tech: "Java, SpringBoot, SwaggerUI, MySQL",
    github: "https://github.com/ditaa99/Online_Courses"
  }
];

const Projects = () => (
  <section className="container my-5" id="projects">
    <h3 className="fw-bold mb-4" data-aos="fade-right">Projects</h3>
    <div className="row">
      {projectData.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  </section>
);

export default Projects;
