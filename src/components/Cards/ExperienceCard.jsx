import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`
const HoverContainer = styled.div`
  display: none;
`; 


const Description = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100ch;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
  width: 750px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  &:hover ${HoverContainer} {
    display: block;
  }
  &:hover .more {
    display: none;
  }

  border: 0.5px solid #d1b6b3;
  //   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  box-shadow: #e8dad9 0px 4px 24px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1px;
`

const Skill = styled.div`
  font-size: 14px;
  font-weight: 400;

  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;



const ExperienceCard = ({ experience }) => {
    return (
      <Card>
        <Top>
          <Image src={experience.img} />
          <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Date>{experience.date}</Date>
          </Body>
        </Top>
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <Company>Skills</Company>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill>{skill}</Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}

        <Description>
          {experience?.desc.slice(0, 2).map((item, index) => (
            <Span key={index}><b>*</b> {item}</Span>
          ))}
          {experience?.desc.length > 2 && (
            <Span className="more" style={{ fontSize: "10px", color: "blue" }}>
              <br /> Read More...
            </Span>
          )}

          <HoverContainer>
            {experience?.desc.slice(2).map((item, index) => (
              <Span key={index}><b>*</b> {item}</Span>
            ))}
          </HoverContainer>
        </Description>

        {experience.doc && (
          <a href={experience.doc} target="_blank" rel="noopener noreferrer">
            <Document src={experience.doc} />
          </a>
        )}

        {experience.link && (
          <Company>
            {" "}
            <a href={experience.link} target="_blank" rel="noopener noreferrer">
              Article
            </a>
          </Company>
        )}
      </Card>
    );
}

export default ExperienceCard