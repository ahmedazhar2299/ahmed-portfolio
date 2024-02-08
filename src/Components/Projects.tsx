import React from "react";
import styled from "styled-components";
import Heading from "../Common/Heading.tsx";
import { PROJECTS_DATA } from "../constants.tsx";

interface ProjectInterface {
  image: string;
  description: string;
  name: string;
  technologies: string;
  redirection: string;
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 17px;
  color: rgb(170 166 195);
`;

const ProjectContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const Project = styled.div`
  width: 350px;
  background-color: #151030;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  * {
    background-color: #151030;
  }
  @media all and (max-width: 630px) {
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.div`
  width: 320px;
  height: 250px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media all and (max-width: 630px) {
    width: 100%;
    img {
      object-fit: cover;
    }
  }
`;

const ProjectTitle = styled.h5`
  color: #fff;
  margin: 20px 0;
  font-size: 24px;
  font-weight: 700;
`;

const ProjectDescriptionWrapper = styled.div`
  background-color: #ffdead;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media all and (max-width: 630px) {
    height: inherit;
  }
`;

const ProjectDescription = styled.p`
  background-color: #ffdead;
  padding: 5px;
  margin: inherit;
`;

const ProjectTechonologySection = styled.div`
  padding: 2px 5px;
  border-radius: 7px;
`;

const ProjectTechonology = styled.p`
  color: rgb(170 166 195);
  font-size: 14px;
`;

const Projects = () => {
  const handleRedirection = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Wrapper>
      <Heading title="Projects" color="#151030" />
      <Description>
        Check out these projects to see what I can do! Each one gives you a
        quick rundown of what it's about and includes links to where you can
        find the code and see it in action. These projects provide a firsthand
        look at my skills in action. You'll see how I handle challenging
        problems, work with various technologies, and effectively manage project
        tasks.
      </Description>
      <ProjectContainer>
        {PROJECTS_DATA.map((project: ProjectInterface) => (
          <Project onClick={() => handleRedirection(project.redirection)}>
            <ProjectImage>
              <img src={project.image} alt="" />
            </ProjectImage>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescriptionWrapper>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTechonologySection>
                <ProjectTechonology>{project.technologies}</ProjectTechonology>
              </ProjectTechonologySection>
            </ProjectDescriptionWrapper>
          </Project>
        ))}
      </ProjectContainer>
    </Wrapper>
  );
};

export default Projects;
