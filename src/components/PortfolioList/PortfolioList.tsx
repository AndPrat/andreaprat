import { useAppSelector } from "../../store";

const PortfolioList = (): React.ReactElement => {
  const portfolioProjects = useAppSelector(
    (state) => state.portfolioProjectsState.portfolioProjects,
  );
  return (
    <div className="portfoliolist">
      <ul className="portfoliolist__list">
        {portfolioProjects.map((portfolioProject) => (
          <li key={portfolioProject.id} className="portfoliolist__project">
            <h3 className="portfoliolist__list">{portfolioProject.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
