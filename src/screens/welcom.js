import Card from '../components/card';
import {GrAccessibility, GrTransaction} from 'react-icons/gr';
import {GiProfit} from 'react-icons/gi';
import {BsPersonBadge} from 'react-icons/bs';
import {MdOutlineSmsFailed, MdPending} from 'react-icons/md';
import '../styles/welcome.scss'


/*
    - contains cards and chart
    - everytime load page, need get current data from backend and show as cards
    - 4 cards
    - one chart

*/

export default function Welcome(props) {
    const arr = [{name: "Merchants", count: 106, icon: <BsPersonBadge />}, 
    {name: "Success Transactions", count: "50,000", icon: <GiProfit />}, 
    {name: "Pending Trasactions", count: "156", icon: <MdPending />}, {name: "Failed Transactions", count: 12, icon: <MdOutlineSmsFailed />}];
    
    return(
        <div className="pz-welcome">
            <div className='pz-cards'>
                {arr.map((item, i)=> <Card key={i} title={item.name} count={item.count} icon={item.icon} />)}
            </div>
            <div className='pz-chart'>
            </div>
        </div>
    );
}