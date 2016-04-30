var SuccessBox = React.createClass({
    render: function () {
        return (
            <div className="">
                <div style={{margin:'1rem auto 1rem 0.8rem',borderTop:'0.17rem solid #f296000',float:'left'}}>
                    <div style={{float:'left',marginTop:'1rem'}}>
                        <img src="../static/images/20160427  图片素材-15.png" style={{width:'10rem',height:'6rem'}}/>
                        <div style={{float:'right',width:'62%',marginRight:'0.8rem'}}>
                            <h3 style={{fontSize:'1.4rem',margin:'0.5rem auto 0.5rem'}}>镇江占座宝信息技术有限公司</h3>
                            <span style={{fontSize:'1.2rem',color:'#999999'}}><span
                                style={{marginRight:'0.5rem',paddingRight:'0.5rem',borderRight:'0.1rem solid #999999'}}>客户声音
                            </span>
                                服务到位,人事财务上帮助我们解决问题
                            </span>
                            <span style={{fontSize:'1.2rem',color:'#999999'}}><span
                                style={{marginRight:'0.5rem',paddingRight:'0.5rem',borderRight:'0.1rem solid #999999'}}>合作业务
                            </span>
                                代理记账
                            </span>
                        </div>
                    </div>
                    <div style={{float:'left',marginTop:'1rem'}}>
                        <img src="../static/images/20160427  图片素材-16.png" style={{width:'10rem',height:'6rem'}}/>
                        <div style={{float:'right',width:'62%',marginRight:'0.8rem'}}>
                            <h3 style={{fontSize:'1.4rem',margin:'0.5rem auto 0.5rem'}}>有限责任公司注册</h3>
                            <span style={{fontSize:'1.2rem',color:'#999999'}}>帮助您完成有限责任公司注册有限责任公司注册有限责任公司注册</span>
                        </div>
                    </div>
                    <div style={{float:'left',marginTop:'1rem'}}>
                        <img src="../static/images/20160427  图片素材-17.png" style={{width:'10rem',height:'6rem'}}/>
                        <div style={{float:'right',width:'62%',marginRight:'0.8rem'}}>
                            <h3 style={{fontSize:'1.4rem',margin:'0.5rem auto 0.5rem'}}>有限责任公司注册</h3>
                            <span style={{fontSize:'1.2rem',color:'#999999'}}>帮助您完成有限责任公司注册有限责任公司注册有限责任公司注册</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <SuccessBox/>,
    document.getElementById('success')
);
