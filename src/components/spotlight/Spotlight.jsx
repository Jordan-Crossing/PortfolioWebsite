import "./spotlight.scss";

export default function Spotlight({ text, project, data }) {
  console.log(project, text, data);

  const displayedProjectId = text - 1;
  const displayedProject = data[displayedProjectId];
  console.log(displayedProjectId);
  return (
    <div className="spotlight">
      <div className="top">
        <img src={displayedProject.img} className="cover" alt="cover" />
      </div>
      <div className="bottom">
        <div className="left">
          <div className="techniques">
            <h1>Techniques:{text}</h1>
            <ul>
              <li>Cat</li>
              <li>Cat</li>
              <li>Cat</li>
              <li>Cat</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="purpose">
            <h1>text:{text}</h1>
            <br></br>
            project:{project}
            <br></br>
            displayedProjectId:{displayedProjectId}
            <br></br>
            displayedProject:{displayedProject.img}
          </div>
        </div>
      </div>
    </div>
  );
}