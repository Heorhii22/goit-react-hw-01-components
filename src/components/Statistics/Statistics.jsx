import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ title, statistics }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {statistics.map(statsItem => (
          <li
            key={statsItem.id}
            className="item"
            style={{ backgroundColor: randomHexColor() }}
          >
            <span className="label">{statsItem.label}</span>
            <span className="percentage">{statsItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
