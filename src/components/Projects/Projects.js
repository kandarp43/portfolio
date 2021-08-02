import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            {/* <Img src={p.image} /> */}
            <TitleContent>
              <HeaderThree titles>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className='card-info'>{p.description}</CardInfo>
            <div>
              <TitleContent style={{ marginTop: 20 }}>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>
                })}
              </TagList>
              <UtilityList>
                {p.visit.length < 2 ? (
                  <ExternalLinks href={p.visit[0]}>source</ExternalLinks>
                ) : (
                  <>
                    <ExternalLinks href={p.visit[0]}>Frontend</ExternalLinks>
                    <ExternalLinks href={p.visit[1]}>Backend</ExternalLinks>
                  </>
                )}

                {/* <ExternalLinks href={p.source}>Source</ExternalLinks> */}
              </UtilityList>
            </div>
          </BlogCard>
        )
      })}
    </GridContainer>
  </Section>
)

export default Projects
