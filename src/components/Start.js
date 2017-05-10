import React from 'react';
import { NavLink } from 'react-router-dom';
import './Start.css';

class Start extends React.Component{
    render(){
        return(
            <div>
                <header className="top-header section-bg banner-v2">
                    <div className="verticle-center">
                        <div className="container">
                            <div className="row">
                                <div className="display-flex">
                                    <div className="col-md-10 col-md-offset-1 text-center">
                                        <a className="logo" href="/"><img src="/static/img/logo_white.png"/></a>
                                        <h1>인공지능 바이트 사이즈 <br /> 동영상 튜토리얼 </h1>
                                        <div className="button-group">
                                            <a className="btn btn-orange" href="/main">AI코스 바로가기</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-wrap">
                    <div id="intro-area" className="section section-padding-extra">
                        <div className="container">
                            <div className="row">
                                <div className="intros">
                                    <div className="col-sm-4">
                                        <NavLink to="/ai">
                                            <div className="intro text-center wow animated fadeInUp" data-wow-duration="1.5s">
                                                <span className="intro-icon"><i className="fa fa-eye"></i></span>
                                                <h4 className="intro-heading">AI 코스</h4>
                                                <p>프로그래밍의 핵심적인 배경지식을 AI가이드에 따라 프로그램 배경지식과 툴을 사용하는 방법을 습득하는 코스입니다.</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className="col-sm-4">
                                        <a href="/main2">
                                            <div className="intro text-center wow animated fadeInUp" data-wow-delay="0.5s" data-wow-duration="1.5s">
                                                <span className="intro-icon"><i className="fa fa-area-chart"></i></span>
                                                <h4 className="intro-heading">실무 코스</h4>
                                                <p>AI코스를 마무리 하시면 AI는 당신에 대해 잘 알게 됩니다. 핵심코스는 AI가 당신에게 필요한 실무내용을 안내해드리는 코스입니다.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-4">
                                        <a href="/star">
                                            <div className="intro text-center wow animated fadeInUp" data-wow-delay="1s" data-wow-duration="1.5s">
                                                <span className="intro-icon"><i className="fa fa-star"></i></span>
                                                <h4 className="intro-heading">IT 스타기업 코스</h4>
                                                <p>필요한 분야에 대해 깊게 알려주는 코스입니다. 기업에서 필요한 기술 요강에 맞춘 필수적 요강에 맞춘 가이드 입니다.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="more-features-area" className="section section-padding-extra">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 text-center">
                                    <div className="section-heading">
                                        <h2 className="section-title">많은 꿈 그리고 Ai</h2>
                                        <p className="section-subtitle">10년의 데이터로 축적된 AI의 IT교육의 퀄리티!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="display-flex">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="mock-group mock-group-2">
                                            <img className="front-mock wow animated fadeInLeft" data-wow-delay="0.5s" data-wow-duration="1.5s" src=""/>
                                            <img className="back-mock wow animated fadeInUp" data-wow-duration="1.5s" src="/static/img/maincarosel/phonegap.svg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-offset-1">
                                        <div className="more-features">
                                            <div className="more-feature">
                                                <span className="more-feature-icon"><i className="fa fa-users"></i></span>
                                                <div className="more-feature-content">
                                                    <h4 className="more-feature-title">사람 그리고 AI.</h4>
                                                    <p>AI는 짧게 핵심만 알려드립니다. 실행이 바로되니 재미가 납니다.</p>
                                                </div>
                                            </div>
                                            <div className="more-feature">
                                                <span className="more-feature-icon"><i className="fa w-1x fa-gears"></i></span>
                                                <div className="more-feature-content">
                                                    <h4 className="more-feature-title">틱앤런! Tic And Run!</h4>
                                                    <p>3분만 듣고 실행하고 리듬을 타면서 해보세요~</p>
                                                </div>
                                            </div>
                                            <div className="more-feature">
                                                <span className="more-feature-icon"><i className="fa fa-tablet"></i></span>
                                                <div className="more-feature-content">
                                                    <h4 className="more-feature-title">한번에 업그레이드</h4>
                                                    <p>모든 디바이스 사용해보세요.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Start;

