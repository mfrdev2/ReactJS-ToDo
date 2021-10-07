import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'


ReactDOM.render(
  <div>
    <h1 class="heading">Todo App</h1>
    <div className = "card">
      <h3 className= "cardTitle">{"Todo-Title"}</h3>
      <p className = "cardDesc">Kasd accusam ipsum accusam dolor invidunt et dolor ea voluptua sanctus. Diam eirmod sit nonumy magna voluptua invidunt. Sanctus duo.</p>
      <p className = "cardTime">{timePrint()}</p>
    </div>
  </div>,
  document.getElementById('root')
);



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

