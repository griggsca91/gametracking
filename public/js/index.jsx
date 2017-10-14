import React from 'react';
import ReactDOM from 'react-dom';


class Row extends React.Component {

    render() {
        return(
            <div>{this.props.value}</div>
        )
    }
}

class Table extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }



    render () {
       return(
           <div>
           {this.state.data.map((d) =>
                <Row key={d.value} value={d.value} />
           )}
           </div>
       ) 
    }
}

class App extends React.Component {

    render() {
        return (
            <Table
                data={[{value: 1}, {value: 2}, {value: 3},{value:  4}, {value: 5}]} />
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);


