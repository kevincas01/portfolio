import { useEffect, useRef, useState } from "react";

export default function ExperienceElement({
  stepNumber,
  description,
  experience,
  id,
}) {
  const stepRef = useRef(null);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [height, setHeight] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      if (stepRef.current) {
        const rect = stepRef.current.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const screenTriggerPoint =
          window.innerHeight / (1.5 - 0.1 * (stepNumber - 1));

        if (elementCenter < screenTriggerPoint) {
          const distance = screenTriggerPoint - elementCenter;
          const maxDistance = screenTriggerPoint;
          const ratio = Math.min(1, distance / maxDistance);
          setIntersectionRatio(ratio);
        } else {
          setIntersectionRatio(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newHeight = 100 * intersectionRatio * 8;
    setHeight(newHeight);
  }, [intersectionRatio]);

  return (
    <div ref={stepRef} className="experience-element" id={id}>
      <div className="experience-step-bar">
        <div
          className="experience-step-fill"
          style={{ opacity: intersectionRatio * 3 }}
        ></div>
      </div>
      <div className="experience-content">
        <div className="experience-top-row">
          <div className="experience-title-container">
            <h4 className="experience-title">
              {experience.role}
              {experience.company && ` - ${experience.company}`}
            </h4>
          </div>
          <div className="experience-date">
            {experience.startDate} -
            {!experience.endDate ? " Present " : experience.endDate}
          </div>
        </div>

        <div
          style={{ maxHeight: `${height}px` }}
          className="experience-description"
        >
          <p>{description}</p>
          <div className="experience-skills">
            {experience.skills.map((skill, index) => (
              <div className="skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
