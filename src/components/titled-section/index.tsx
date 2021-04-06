import { FC, ReactNode } from "react";

export const TitledSection: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <section>
      <h2 className="border-b-2 border-black">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
};
