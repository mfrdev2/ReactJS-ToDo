import React from 'react';
import Card from './Components/component.card';
import data from './data.json';


function App() {
     let item = [];
    // for (let i in data) {
    //    item.push(<Card title={data[i].title} desc={data[i].desc} />)
    // }
    item = data.map((i,k)=>
        <Card key ={k} title={i.title} desc={i.desc} />
    );
    return <div>
        <h1 class="heading">Todo App</h1>
            {item}

        {/* <Card title={data[1].title} desc={data[1].desc} />
        <Card title={data[2].title} desc={data[2].desc} />
        <Card title={data[3].title} desc={data[3].desc} /> */}
    </div>
}

export default App;