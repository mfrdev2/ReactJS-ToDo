import '../css/style.css';

function timePrint() {
    const today = new Date();
    const day = today.toLocaleDateString('en', { weekday: 'long' });
    const dayMonth = `${day}, ${today.getDate()} ${today.toLocaleDateString('en', { month: 'long' })}\n\n`;
    const year = today.getFullYear();
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;

    const time = today.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });

    const timePrint = dayMonth + " " + year + ": " + time + ", " + wish;
    return timePrint;
}
function Card(props) {
    return < div className="card" >
        <h3 className="cardTitle">{props.title}</h3>
        <p className="cardDesc">{props.desc}</p>
        <p className="cardTime">{timePrint()}</p>
    </div >;
}

export default Card;