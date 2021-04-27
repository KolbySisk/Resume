import { Fragment } from "react";
import { ContactInfoSection } from "./components/contact-info-section";
import { TitledSection } from "./components/titled-section";
import { ExperienceItem } from "./components/experience-item";
import {
  Logo,
  contactInfo,
  profile,
  educations,
  experiences,
  skills,
} from "./data";

function App() {
  return (
    <main className="flex space-x-16">
      <aside className="w-1/3 space-y-8">
        <div className="w-1/2">
          <Logo />
        </div>

        <ContactInfoSection {...contactInfo} />

        <TitledSection title="Profile">
          <p>{profile}</p>
        </TitledSection>

        <TitledSection title="Education">
          {educations.map((education) => (
            <>
              <p className="font-bold">{education.degree}</p>
              <p>{education.description}</p>
            </>
          ))}
        </TitledSection>

        <TitledSection title="Skills">
          <p>
            {skills.map((skill, index) => (
              <Fragment key={skill}>
                {index !== 0 && <span> &bull; </span>}
                {skill}
              </Fragment>
            ))}
          </p>
        </TitledSection>
      </aside>

      <div className="flex-1">
        <TitledSection title="Experience">
          <div className="space-y-8">
            {experiences.map((experience) => (
              <ExperienceItem
                key={experience.jobTitle + experience.companyName}
                {...experience}
              />
            ))}
          </div>
        </TitledSection>
      </div>
    </main>
  );
}

export default App;
