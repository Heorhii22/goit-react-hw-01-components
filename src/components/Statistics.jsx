export function Statistics({ title = 'Upload stats', statistics }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {statistics.map(statsItem => (
          <li key={statsItem.id} className="item">
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
