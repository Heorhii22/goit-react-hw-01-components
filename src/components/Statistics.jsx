import css from './Statistics.module.css';
export function Statistics({ title = 'Upload stats', statistics }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {statistics.map(statsItem => (
          <li key={statsItem.id} className="item">
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
