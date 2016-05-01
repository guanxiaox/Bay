var Product = React.createClass({
    render: function () {
        return (
            <div>
                <img src="/static/images/20160427  图片素材-01.png" style={{width: "100%",height: "15rem"}}/>
                <div style={{fontSize:'2rem',color:'#f29600',marginLeft:'1rem'}}>￥800<span
                    style={{float:'right',fontSize:'0.4rem',color:'#999999',margin:'0.4rem auto 0 auto'}}>9410人付款</span>
                </div>
                <div style={{fontSize:'1.6rem',margin:'1rem'}}><strong>股东/股权更变</strong></div>
                <div style={{fontSize:'0.4rem',color:'#999999',marginLeft:'1rem',width:'80%'}}>
                    帮助您快速完成公司注册,办事流程完整的同时保证您的效率,为您提供最优质的服务
                </div>
                <div className="box-in">
                    <div style={{border:0,width:'22%',height:'3rem'}}><img src="/static/images/yizhan.png"
                                                                           style={{width:'1rem',height:'1rem'}}/><span
                        style={{color:'#999999',fontSize:'0.1rem'}}>一站式服务</span>
                    </div>
                    <div style={{border:0,width:'22%',height:'3rem'}}><img src="/static/images/pc.png"
                                                                           style={{width:'1rem',height:'1rem'}}/><span
                        style={{color:'#999999',fontSize:'0.1rem'}}>实时短信</span>
                    </div>
                    <div style={{border:0,width:'22%',height:'3rem'}}><img src="/static/images/pc.png"
                                                                           style={{width:'1rem',height:'1rem'}}/><span
                        style={{color:'#999999',fontSize:'0.1rem'}}>实时提醒</span>
                    </div>
                    <div style={{border:0,width:'22%',height:'3rem'}}><img src="/static/images/star.png"
                                                                           style={{width:'1rem',height:'1rem'}}/><span
                        style={{color:'#999999',fontSize:'0.1rem'}}>一对一服务</span>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Product/>,
    document.getElementById('content')
);


var ProductDetail = React.createClass({
    render: function () {
        return (
            <div>
                <img src="/static/images/first.png" style={{width: "100%",height: "10rem"}}/>
                <div style={{padding:'0.8rem'}}>

                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <ProductDetail/>,
    document.getElementById('tab1')
)

var Problem = React.createClass({
    render: function () {
        return (
            <div>Problem</div>
        )
    }
});
ReactDOM.render(
    <Problem/>,
    document.getElementById('tab2')
)

var Evaluation = React.createClass({
    render: function () {
        return (
            <div>Evaluation</div>
        )
    }
});
ReactDOM.render(
    <Evaluation/>,
    document.getElementById('tab3')
)