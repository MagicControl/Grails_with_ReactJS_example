class TestComponent extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <span>{this.state.date.toLocaleTimeString()}</span>
        )
    }
}

ReactDOM.render(
    <TestComponent/>,
    document.getElementById('app')
);