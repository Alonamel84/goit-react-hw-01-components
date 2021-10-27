import PropTypes from 'prop-types';
import s from './Statistics.module.css'
const Statistics = ({ stats, title }) => {
    
    return (
        <section className="statistics">
            {title&&
                <h2 className="title">{title}</h2>}

            <ul className={s.statList}>
              {stats.map(item=>
                  <li key={item.id} className={s.item}>
                      <span className={s.label}>{item.label}</span>
                      <span className={s.percentage}>{item.percentage}%</span></li>)}
   
  </ul>
</section>
    )
};
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
            percentage: PropTypes.number.isRequired,
        }),
    ),
    title: PropTypes.string,
 
};
export default Statistics;