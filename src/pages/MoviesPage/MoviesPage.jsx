import styles from "./MoviesPage.module.css";

const shows = [
  {
    id: 1,
    title: "ONE PIECE",
    tagline: "Пірати наближаються",
  },
  {
    id: 2,
    title: "Магічна битва",
    tagline: 'A boy fights... for "the right death."',
  },
  {
    id: 3,
    title: "Перехоплений рейс",
    tagline: "Let them think they're in control.",
  },
];

function MoviesPage() {
  return (
    <div className={styles.home}>
      {shows.map(({ title, tagline }) => (
        <div key={title} className={styles.wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{tagline}</p>
        </div>
      ))}
    </div>
  );
}
export default MoviesPage;
