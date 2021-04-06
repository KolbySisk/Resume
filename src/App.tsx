import { ContactInfoSection } from "./components/contact-info-section";
import { TitledSection } from "./components/titled-section";
import { ExperienceItem } from "./components/experience-item";
import { contactInfo, profile, educations, experiences } from "./data";

function App() {
  return (
    <main className="flex space-x-16">
      <aside className="w-1/3 space-y-8">
        <img
          className="w-1/2"
          src={process.env.PUBLIC_URL + "/logo.svg"}
          alt="Kolby Sisk"
        />

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
      </aside>

      <div className="flex-1">
        <TitledSection title="Experience">
          <div className="space-y-8">
            {experiences.map((experience) => (
              <ExperienceItem {...experience} />
            ))}
          </div>
        </TitledSection>
      </div>
    </main>
  );
}

export default App;
