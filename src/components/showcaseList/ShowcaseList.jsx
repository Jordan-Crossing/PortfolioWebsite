import "./showcaseList.scss";

export default function ShowcaseList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "showcaseList active" : "showcaseList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
