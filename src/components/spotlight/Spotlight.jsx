import {
  reactShowcase,
  javascriptShowcase,
  portfolioShowcase,
  owlShowcase,
  goatShowcase,
  cowShowcase,
} from "../../data.js";

export default function Spotlight({ text, project }) {
  console.log(project);
  return (
    <div>
      {text} {project} the image is {}
    </div>
  );
}
