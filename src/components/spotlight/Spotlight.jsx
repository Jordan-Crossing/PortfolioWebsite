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
          text:{text}
          <br></br>
          project:{project}
          <br></br>
          displayedProjectId:{displayedProjectId}
          <br></br>
          displayedProject:{displayedProject.img}
        </div>
        <div className="right">
          text:{text}
          <br></br>
          project:{project}
          <br></br>
          displayedProjectId:{displayedProjectId}
          <br></br>
          displayedProject:{displayedProject.img}
        </div>
      </div>
    </div>
  );
}
