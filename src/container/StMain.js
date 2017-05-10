import React from 'react';
import {Header, Hero} from '../components';

class StMain extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Hero coname="스타IT 코스">
                    <p className="tech-intro">star IT 기업코스는 회사업무시 필요한 기능을 축약하여 배워 숙달하는 과정입니다</p>

                    <p className="tech-intro-content">목표설정을 바로 하여 효율적인 강의가 될수 있도록 구성하였습니다.</p>
                </Hero>
            </div>
        );
    }
}

export default StMain;