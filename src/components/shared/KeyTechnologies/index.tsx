import React from "react";

type Props = {
  keywords: string[];
};

export const KeyTechnologies: React.FC<Props> = ({ keywords }) => {
  return (
    <p className={"text-secondary font-medium responsive-text-xs"}>
      Key Technologies and Tools:{" "}
      <span className={"text-tertiary font-normal"}>{`${keywords.join(
        ", "
      )}.`}</span>
    </p>
  );
};
