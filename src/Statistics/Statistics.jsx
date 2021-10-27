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
export default Statistics;