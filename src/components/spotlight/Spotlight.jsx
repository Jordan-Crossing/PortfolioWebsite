import "./spotlight.scss";

export default function Spotlight({ text, project, data }) {
  console.log(project, text, data);

  const displayedProjectId = text - 1;
  const displayedProject = data[displayedProjectId];
  console.log(displayedProjectId);
  return (
    <div className="spotlight">
      <div className="Spotlighttop">
        <img src={displayedProject.img} className="cover" alt="cover" />
      </div>
      <div className="Spotlightbottom">
        <div className="Spotlightleft">
          <div className="techniques">
            <h1>Techniques & tech </h1>
            <ul>
              {displayedProject.tech.map((item) => (
                <li> {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Spotlightright">
          <div className="purpose">
            <h1> Description </h1>
            <br></br>
            <p>{displayedProject.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
