var Pay = React.createClass({
    render: function () {
        return (
            <div>
                <div className="efefef">订单信息</div>
                <div style={{float:'left',margin:'1rem',width:'94%',borderBottom:"0.1rem solid #e0e0e0"}}>
                    <img src="../static/images/20160427  图片素材-15.png"
                         style={{width:'10rem',height:'6rem',float:"left"}}/>
                    <div style={{width:"63%",float:"left",marginLeft:"1rem"}}>
                        <div style={{fontSize:'1.6rem',color:'#f29600'}}>
                            ￥800
                        </div>
                        <div style={{fontSize:'1.4rem'}}><strong>股东/股权更变</strong></div>
                        <div style={{fontSize:'0.4rem',color:'#999999'}}>帮助您快速完成公司注册,办事流程完整的同时保证您的效率</div>
                    </div>
                </div>
                <div className="button-group" style={{float: "left",margin:"0 0 1rem 1rem"}}>服务时长:&nbsp;&nbsp;
                    <button type="button" className="button-time" style={{width:"5.65rem"}}>一&nbsp;&nbsp;年</button>
                    <button type="button" className="button-time" style={{width:"5.65rem"}}>6个月</button>
                    <button type="button" className="button-time" style={{width:"5.65rem"}}>3个月</button>
                    <button type="button" className="button-time" style={{width:"5.65rem"}}>1个月</button>
                </div>
                <div className="efefef">用户信息</div>
                <div className="box-white">
                    <span style={{float:"left"}}>订单信息</span>
                    <span>上海知加信息科技有限公司-吉林长春&nbsp;&nbsp;&nbsp;></span>
                </div>
                <div className="box-white">
                    <span style={{float:"left"}}>联系电话</span>
                    <span>12345678900&nbsp;&nbsp;&nbsp;></span>
                </div>
                <div className="box-white">
                    <span style={{float:"left"}}>订单备注</span>
                    <span>test132412341234&nbsp;&nbsp;&nbsp;></span>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Pay/>,
    document.getElementById('content')
);