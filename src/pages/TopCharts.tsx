import styles from './topCharts.module.scss';
import { BarChart, XAxis, Tooltip, YAxis, Bar, Cell } from 'recharts';
import data from '../../utils/data';

export default function TopCharts(){

return(
<div className={styles.container}>

<BarChart width={730} height={250} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}} >
  <XAxis dataKey="day" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="rating" fill="orange">
    {
        data.map((entry,index)=>(
            <Cell key={index} stroke='yellow' radius={20} />
        ))
    }
  </Bar>
</BarChart>
</div>
);
}
