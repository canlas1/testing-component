var RenderGraph = React.createClass({
    ..., // Rest of the React Component Code
    render: function () {
        return (
            <ReactFC {...categoryChartConfigs} />
            <ReactFC {...revenueChartConfigs} />
        );
    }
});

ReactDOM.render(
    <MyApp />,
    document.getElementById('chart-container')
);