
import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences, Container, Title, Desc } from "../../data/constants";


const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;


const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const index = () => {
    return (
      <Container id="experience">
        <Wrapper>
          <Title>Experience</Title>
          <Desc>
            My Journey Through Various Companies and Projects in Software Engineering.
          </Desc>
          <TimelineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector style={{ background: "#995c54" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "7px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineSection>
        </Wrapper>
      </Container>
    );
}

export default index