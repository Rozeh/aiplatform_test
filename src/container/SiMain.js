import React from 'react';
import {Header, Hero, SilMain} from '../components';


class SiMain extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Hero coname="실무코스">
                    <p className="tech-intro">실무코스는 AI Platform의 업선된 업계 리더들의 실력을 <br /> 알려드리는 프리미엄 서비스입니다.</p>

                    <p className="tech-intro-content">실무코스의 기술된 강좌는 실무에 적용시 힘들었던 부분을 해결해드립니다.</p>
                </Hero>
                <SilMain/>
            </div>
        )
    }
}

export default SiMain;