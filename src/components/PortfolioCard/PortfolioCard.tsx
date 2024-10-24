import React from "react";
import { PortfolioData } from "../../dataPortfolio/dataPortfolioTypes";
import "./PortfolioCard.css";

export interface PortfolioCardProps {
  portfolioProjects: PortfolioData;
}

const PortfolioCard = ({
  portfolioProjects: { name, coverimage },
}: PortfolioCardProps): React.ReactElement => {
  return (
    <article className="">
      <img
        src={coverimage}
        alt={name}
        width={200}
        className="portfoliocard__image"
      />
    </article>
  );
};

export default PortfolioCard;
