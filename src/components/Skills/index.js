import React from 'react'
import styled from 'styled-components'
import { skills, Container, Title, Desc } from '../../data/constants'

export const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 8px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 1px solid #d1b6b3;
  // border: 0.3px solid ${({ theme }) => theme.primary};
  box-shadow: #e8dad9 0px 4px 24px;
  border-radius: 16px;
  padding: 20px 30px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 30px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  // cursor: pointer;
      transition: all 0.2s ease-in-out !important;

  &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    
    // filter: brightness(1);
    } 
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
`

const Skills = () => {
  return (
      <Container id='skills'>
        <Wrapper>
          <Title>Skills</Title>
          <Desc> Here are some of my skills I have worked on. </Desc>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem><SkillImage src={item.image} /> {item.name}</SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
  );
}

export default Skills