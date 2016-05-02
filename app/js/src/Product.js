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
                    <div style={{border:'0.1rem solid #e0e0e0',width:'100%',height:'15rem'}}>
                        <div style={{float:'left',margin:'6rem 1rem auto 3rem'}}>
                            <strong style={{fontSize:'1.8rem'}}>您将得到</strong>
                            <div style={{background:'#f29600',color:'#ffffff',marginLeft:'-1.3rem',
                                         fontSize:'1.2rem',padding:'0 0.2rem 0 0.2rem',width:'9.5rem'}}>
                                一对一的星级服务
                            </div>
                        </div>
                        <hr style={{border:'0.1rem dashed #999999',width:'0',height:'9.5rem',padding:'0',margin:'3rem 0 0 0'}}/>
                        <hr style={{border:'0.1rem dashed #999999',width:'1rem',padding:'0',margin:'-9.6rem 0 0 12.5rem'}}/>
                        <hr style={{border:'0.1rem dashed #999999',width:'1rem',padding:'0',margin:'3rem 0 0 12.5rem'}}/>
                        <hr style={{border:'0.1rem dashed #999999',width:'1rem',padding:'0',margin:'3rem 0 0 12.5rem'}}/>
                        <hr style={{border:'0.1rem dashed #999999',width:'1rem',padding:'0',margin:'3rem 0 0 12.5rem'}}/>
                        <div style={{float:'left',margin:'-10.5rem auto auto 15rem'}}>
                            <div>
                                <div style={{width:'2rem',height:'rem',background:'#f29600',
                                         color:'#ffffff',textAlign:'center',float:'left'}}>
                                    01
                                </div>
                                <strong style={{marginLeft:'0.5rem',float:'left'}}>注册营业执照</strong>
                                <span style={{color:'#999999',fontSize:'0.8rem'}}>(三证合一)</span>
                            </div>
                            <div style={{marginTop:'1.5rem'}}>
                                <div style={{width:'2rem',height:'rem',background:'#f29600',
                                         color:'#ffffff',textAlign:'center',float:'left'}}>
                                    02
                                </div>
                                <strong style={{marginLeft:'0.5rem',float:'left'}}>营业执照副本</strong>
                                <span style={{color:'#999999',fontSize:'0.8rem'}}>&nbsp;</span>
                            </div>
                            <div style={{marginTop:'1.5rem'}}>
                                <div style={{width:'2rem',height:'rem',background:'#f29600',
                                         color:'#ffffff',textAlign:'center',float:'left'}}>
                                    03
                                </div>
                                <strong style={{marginLeft:'0.5rem',float:'left'}}>名称准核通知书</strong>
                                <span style={{color:'#999999',fontSize:'0.8rem'}}>&nbsp;</span>
                            </div>
                            <div style={{marginTop:'1.5rem'}}>
                                <div style={{width:'2rem',height:'rem',background:'#f29600',
                                         color:'#ffffff',textAlign:'center',float:'left'}}>
                                    04
                                </div>
                                <strong style={{marginLeft:'0.5rem',float:'left'}}>章</strong>
                                <span style={{color:'#999999',fontSize:'0.8rem'}}>(公章,法人章,xx章)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-gray">
                    <div><strong>服务流程&办理周期</strong></div>
                    <div className="box-img"><img src="/static/images/ser.png"/></div>
                    <div className="box-right"><img src="/static/images/right.png"/></div>
                    <div className="box-img"><img src="/static/images/pc-b.png"/></div>
                    <div className="box-right"><img src="/static/images/right.png"/></div>
                    <div className="box-img"><img src="/static/images/file.png"/></div>
                    <div className="box-right"><img src="/static/images/right.png"/></div>
                    <div className="box-img"><img src="/static/images/card.png"/></div>
                    <div className="box-right"><img src="/static/images/right.png"/></div>
                    <div className="box-img"><img src="/static/images/zhang.png"/></div>
                    <div className="bottom-text"><strong>核名</strong>
                        <div style={{fontSize:'0.1rem',color:'#999999'}}>@1-2工作日</div>
                    </div>
                    <div className="bottom-text"><strong>网上提交网审</strong>
                        <div style={{fontSize:'0.1rem',color:'#999999'}}>@1-2工作日</div>
                    </div>
                    <div className="bottom-text" style={{marginLeft:'0.2rem'}}><strong>工商文件</strong>
                        <div style={{fontSize:'0.1rem',color:'#999999'}}></div>
                    </div>
                    <div className="bottom-text"><strong>取执照</strong>
                        <div style={{fontSize:'0.1rem',color:'#999999'}}>@5-7工作日</div>
                    </div>
                    <div className="bottom-text" style={{marginLeft:'0.1rem'}}><strong>备案&刻章</strong>
                        <div style={{fontSize:'0.1rem',color:'#999999'}}>@1-2工作日</div>
                    </div>
                </div>
                <div className="box-bottom">
                    <strong style={{marginLeft:"-34rem"}}>所需材料</strong>
                    <div className="box-bottom-img" style={{textAlign:'left'}}>
                        <div><img src="/static/images/c_name.png"/>
                            <div style={{float:"left",width:'85%'}}>企业名称
                                <div style={{fontSize:'1rem',color:'#999999'}}>至少准备3个</div>
                            </div>
                        </div>
                        <div><img src="/static/images/print.png"/>
                            <div style={{float:"left",width:'85%'}}>股东身份证复印件<span
                                style={{fontSize:'1rem',color:'#999999'}}></span></div>
                        </div>
                        <div><img src="/static/images/house.png"/>
                            <div style={{float:"left",width:'85%'}}>经营地址<span
                                style={{fontSize:'1rem',color:'#999999'}}></span></div>
                        </div>
                        <div><img src="/static/images/print.png"/>
                            <div style={{float:"left",width:'85%'}}>监事身份证复印件
                                <span style={{fontSize:'1rem',float:"left",color:'#999999'}}>
                                必须清晰，如是二代需提供正反页</span>
                            </div>
                        </div>
                    </div>
                    <div className="box-bottom-img" style={{textAlign:'left'}}>
                        <div><img src="/static/images/print.png"/>
                            <div style={{float:"left",width:'85%'}}>法人身份证复印件
                                <div style={{fontSize:'1rem',color:'#999999'}}>银行开户时需法人身份证原件</div>
                            </div>
                        </div>
                        <div><img src="/static/images/aim.png"/>
                            <div style={{float:"left",width:'85%'}}>注册资本额<span
                                style={{fontSize:'1rem',color:'#999999'}}></span></div>
                        </div>
                        <div><img src="/static/images/charge.png"/>
                            <div style={{float:"left",width:'85%'}}>经营范围<span
                                style={{fontSize:'1rem',color:'#999999'}}></span></div>
                        </div>
                        <div><img src="/static/images/print.png"/>
                            <div style={{float:"left",width:'85%'}}>有关合同、章程、协议书复印件
                                <span style={{fontSize:'1rem',float:"left",color:'#999999'}}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/static/images/charge.png" style={{width:"100%"}}/>
            </div>
        )
    }
});
ReactDOM.render(
    <ProductDetail/>
    ,
    document.getElementById('tab1')
)

var Problem = React.createClass({
    render: function () {
        return (
            <div style={{padding:'0.8rem'}}>
                <div className="box-detail">
                    <div className="title-left">怎样设计企业名称,更容易通过核名?</div>
                    <div className="text-help">
                        怎样设计企业名称,更容易通过核名?怎样设计企业名称,更容易通过核名?
                        怎样设计企业名称,更容易通过核名?怎样设计企业名称,更容易通过核名?
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <Problem/>
    ,
    document.getElementById('tab2')
)
