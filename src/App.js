import React from 'react';
import Card from './Components/component.card';
const des = "desc -1";

function App() {
    return <div>
        <h1 class="heading">Todo App</h1>
        <Card title = "Title-1" desc = '$des-1'/>
        <Card title = "Title-2" desc = '$des-2'/>
        <Card title = "Title-3" desc = '$des-3'/>
        <Card title = "Title-4" desc = '$des-4'/>
        <Card title = "Title-5" desc = '$des-5'/>
    </div>
}

export default App;