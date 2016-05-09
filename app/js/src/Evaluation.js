/**
 * Created by Shine on 16/5/1.
 */
var Evaluation = React.createClass({
    render: function () {
        return (
            <div style={{padding:'0.8rem'}}>
                <div className="box-detail" style={{height:'10rem',marginTop:'1rem'}}>
                    <div className="title-left" style={{background:'#f29600',color:'#ffffff'}}>总体评价</div>
                    <div style={{borderRight:"0.1rem solid #e0e0e0",width:'44%'}}>
                        <div style={{color:'#f29600',fontSize:'3rem',margin:"3rem 0 0 3rem"}}>98.1%</div>
                        <div style={{color:"#999999",marginLeft:'4.2rem'}}>好评率</div>
                    </div>
                    <div style={{margin:"-6.5rem 0 0 15rem",fontSize:"1rem"}} className="star">
                        <div style={{fontSize:'1rem'}}>
                            <img src="/static/images/star5.png"/>
                            <span style={{color:"#f29600",marginLeft:'2rem'}}>521人</span>非常满意
                        </div>
                        <div>
                            <img src="/static/images/star4.png"/>
                            <span style={{color:"#f29600",marginLeft:'2rem'}}>231人</span>满意
                        </div>
                        <div>
                            <img src="/static/images/star3.png"/>
                            <span style={{color:"#f29600",marginLeft:'2rem'}}>21人</span>一般
                        </div>
                        <div>
                            <img src="/static/images/star2.png"/>
                            <span style={{color:"#f29600",marginLeft:'2rem'}}>10人</span>不满意
                        </div>
                        <div>
                            <img src="/static/images/star1.png"/>
                            <span style={{color:"#f29600",marginLeft:'2rem'}}>0人</span>非常不满意
                        </div>
                    </div>
                </div>
                <div className="box-detail" style={{height:'10rem',marginTop:'1rem'}}>
                    <div className="title-left" style={{background:'#f29600',color:'#ffffff'}}>我的评价</div>

                    <div>
                        <img style={{width:'16rem',margin:'3rem 0 0 1rem'}} src="/static/images/star0.png"/>
                    </div>
                    <div style={{width:'100%',textAlign:'center'}}>您的评价会鼓励我们提供更优质的服务</div>
                </div>
                <div className="box-detail" style={{height:'25rem',marginTop:'1rem'}}>
                    <div className="title-left" style={{background:'#f29600',color:'#ffffff'}}>详细评价</div>
                    <div style={{float:"left",width:"100%"}}>
                        <button className="evaluation">服务态度好</button>
                        <button className="evaluation">和描述一致</button>
                        <button className="evaluation">创业好帮手</button>
                        <button className="evaluation">速度快</button>
                        <button className="evaluation">服务态度好</button>
                        <button className="evaluation">创业好帮手</button>
                    </div>
                    <div className="eva-in">
                        <div className="eva-img">
                            <img src="/static/images/fast.png"/>
                            <img src="/static/images/fast.png"/>
                        </div>
                        如果是新公司还未办理税务报道。则国税还会收一个120元/年的CA证书费用，地
                        税的是280元/年（个别地区地税免费）。这两个证书是供企业网上缴税使用的，免
                        除了每次都得跑银行的烦恼。
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <Evaluation/>
    ,
    document.getElementById('tab3')
)