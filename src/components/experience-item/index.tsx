import { FC } from "react";
import { Experience } from "../../types";

export const ExperienceItem: FC<Experience> = ({
  jobTitle,
  companyName,
  start,
  end,
  description,
  bulletPoints,
}) => {
  return (
    <article>
      <h3>
        <span className="font-bold">{jobTitle}</span> @ {companyName}
      </h3>
      <p className="text-xs font-semibold">
        {start} - {end}
      </p>
      <p className="mt-2">{description}</p>
      {!!bulletPoints?.length && (
        <ol className="list-disc px-8 mt-2 space-y-2">
          {bulletPoints.map((bulletPoint) => (
            <li>{bulletPoint}</li>
          ))}
        </ol>
      )}
    </article>
  );
};
