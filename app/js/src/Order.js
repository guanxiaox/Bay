var Order = React.createClass({
    render: function () {
        return (
            <div>
                <div className="order-title" style={{background:'#ffffff',height:'17rem',padding:0}}>
                    <div className="order-title-in" style={{width:"100%",border:'0'}}>
                        <div>&nbsp;2016-5-2&nbsp;&nbsp;</div>
                        <div>订单编号:&nbsp;23456789873654</div>
                        <div style={{float:'right',border:'0'}}>**&nbsp;&nbsp;删除记录</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'1.5rem',width:'30%'}}>
                        <img src="/static/images/20160427  图片素材-77.png" style={{width:'8rem',height:"4rem"}}/>
                        <div style={{fontSize:'1rem'}}>股东/股权更变</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'1.5rem'}}>
                        <span style={{fontSize:'1.4rem',color:"#f29600" }}>￥850.00</span>
                        <div style={{color:"#999999"}}>含运费￥50.00</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'2.5rem',color:"#999999"}}>
                        <div>未成交</div>
                        <div>未付款</div>
                    </div>
                    <div style={{width:"30%",height:"87%",border:'0',paddingTop:'4.5rem'}}>
                        <button style={{background:"#f29600",color:"#ffffff"}}>去付款</button>
                        <button style={{background:"#efefef",color:"#999999"}}>取消订单</button>
                    </div>
                    <div className="order-detail" style={{width:'70%'}}>
                        <div>订单信息:<span>上海知佳信息有限公司-吉林长春</span></div>
                        <div>联系电话:<span>12345678901</span></div>
                        <div>订单备注:<span>备注备注备注备注备注备注备注备注备注备注备注备注</span></div>
                    </div>
                </div>
                <div className="order-title" style={{background:'#ffffff',height:'17rem',padding:0}}>
                    <div className="order-title-in" style={{width:"100%",border:'0'}}>
                        <div>&nbsp;2016-5-2&nbsp;&nbsp;</div>
                        <div>订单编号:&nbsp;23456789873654</div>
                        <div style={{float:'right',border:'0'}}>**&nbsp;&nbsp;删除记录</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'1.5rem',width:'30%'}}>
                        <img src="/static/images/20160427  图片素材-77.png" style={{width:'8rem',height:"4rem"}}/>
                        <div style={{fontSize:'1rem'}}>股东/股权更变</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'1.5rem'}}>
                        <span style={{fontSize:'1.4rem',color:"#f29600" }}>￥850.00</span>
                        <div style={{color:"#999999"}}>含运费￥50.00</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'2.5rem',color:"#999999"}}>
                        <div>已付款</div>
                        <div>等待发货</div>
                    </div>
                    <div style={{width:"30%",height:"87%",border:'0',paddingTop:'6rem'}}>
                        <button style={{background:"#efefef",color:"#999999"}}>取消订单</button>
                    </div>
                    <div className="order-detail" style={{width:'70%'}}>
                        <div>订单信息:<span>上海知佳信息有限公司-吉林长春</span></div>
                        <div>联系电话:<span>12345678901</span></div>
                        <div>订单备注:<span>备注备注备注备注备注备注备注备注备注备注备注备注</span></div>
                    </div>
                </div>
                <div className="order-title" style={{background:'#ffffff',height:'17rem',padding:0}}>
                    <div className="order-title-in" style={{width:"100%",border:'0'}}>
                        <div>&nbsp;2016-5-2&nbsp;&nbsp;</div>
                        <div>订单编号:&nbsp;23456789873654</div>
                        <div style={{float:'right',border:'0'}}>**&nbsp;&nbsp;删除记录</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'1.5rem',width:'30%'}}>
                        <img src="/static/images/20160427  图片素材-77.png" style={{width:'8rem',height:"4rem"}}/>
                        <div style={{fontSize:'1rem'}}>股东/股权更变</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'1.5rem'}}>
                        <span style={{fontSize:'1.4rem',color:"#f29600" }}>￥850.00</span>
                        <div style={{color:"#999999"}}>含运费￥50.00</div>
                    </div>
                    <div style={{height:'8rem',paddingTop:'2.5rem',color:"#999999"}}>
                        <div>已付款</div>
                        <div>已成交</div>
                    </div>
                    <div style={{width:"30%",height:"87%",border:'0',paddingTop:'6rem'}}>
                        <button style={{background:"#efefef",color:"#999999"}}>再次购买</button>
                    </div>
                    <div className="order-detail" style={{width:'70%'}}>
                        <div>订单信息:<span>上海知佳信息有限公司-吉林长春</span></div>
                        <div>联系电话:<span>12345678901</span></div>
                        <div>订单备注:<span>备注备注备注备注备注备注备注备注备注备注备注备注</span></div>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Order/>,
    document.getElementById('content')
);