import { display } from "@mui/system";
import {
  reactShowcase,
  javascriptShowcase,
  portfolioShowcase,
  owlShowcase,
  goatShowcase,
  cowShowcase,
} from "../../data.js";
import "./spotlight.scss";

export default function Spotlight({ text, project, data }) {
  console.log(project, text, data);

  const displayedProjectId = text - 1;
  const displayedProject = data[displayedProjectId];
  console.log(displayedProjectId);
  return (
    <div>
      text:{text}
      <br></br>
      project:{project}
      <br></br>
      displayedProjectId:{displayedProjectId}
      <br></br>
      displayedProject:{displayedProject.img}
      <img src={displayedProject.img} className="cover" alt="cover" />
    </div>
  );
}
