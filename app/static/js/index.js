var FinanceBox = React.createClass({
    render: function () {
        return (
            <div className="">
                <div style={{margin:'1rem auto 1rem 0.8rem',borderTop:'0.17rem solid #f296000',float:'left'}}>
                    <div style={{}}>
                        <img src="../static/images/20160427  图片素材-12.png" style={{width:'2rem',height:'1.2rem'}}/>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <FinanceBox/>,
    document.getElementById('content')
);