import { useAppSelector } from "../../store";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./PortfolioList.css";

const PortfolioList = (): React.ReactElement => {
  const portfolioProjects = useAppSelector(
    (state) => state.portfolioProjectsState.portfolioProjects,
  );

  return (
    <div className="portfoliolist">
      <ul className="portfoliolist__list">
        {portfolioProjects.map((portfolioProject) => (
          <li key={portfolioProject.id} className="portfoliolist__project">
            {<PortfolioCard portfolioProjects={portfolioProject} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
