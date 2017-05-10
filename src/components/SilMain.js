import React from 'react';

class SilMain extends React.Component{
    render(){
        return(
            <div>
                <div className="taught-by-leaders">
                    <div className="taught-by-leaders__inner">
                        <h2 className="taught-by-leaders__title">AI Platform의 교육리더들과 함께하세요.</h2>
                        <h3 className="taught-by-leaders__subtitle">실무영역에서 적용되는 꼭 필요한 강좌를 들어보세요.</h3>
                        <div className="taught-by-leaders__cards-holder">
                            <div className="taught-by-leaders__card">
                                <a href="/si2">
                                    <img className="instructor__photo" src="/static/img/silmoo/Graphic_Design.png" alt="" />
                                </a>
                                <div className="instructor__info-holder">
                                    <div className="instructor__title_box">
                                        <a href="">

                                            <h4 className="instructor__title">디자인 툴 과정</h4>
                                        </a>
                                    </div>
                                    <div className="instructor__about">
                                        <li>포토샵</li>
                                        <li>일러스트레이터</li>
                                        <li>인디자인</li>
                                    </div>
                                </div>
                                <div className="instructor__teaching-technologies">
                                    <span>Design</span>
                                </div>
                            </div>
                            <div className="taught-by-leaders__card">
                                <a href="/currisilmoo/java">
                                    <img className="instructor__photo" src="/static/img/silmoo/Java_Spring.png" alt="" />
                                </a>
                                <div className="instructor__info-holder">
                                    <div className="instructor__title_box">
                                        <a href="">

                                            <h4 className="instructor__title">자바 스프링 과정</h4>
                                        </a>
                                    </div>
                                    <div className="instructor__about">
                                        <li>자바코어</li>
                                        <li>오브젝트 오리엔티드 프로그래밍</li>
                                        <li>의존성 결합 과정</li>
                                    </div>
                                </div>
                                <div className="instructor__teaching-technologies">
                                    <span>JAVA Developer</span>
                                </div>
                            </div>
                            <div className="taught-by-leaders__card">
                                <a href="/currisilmoo/javascript">
                                    <img className="instructor__photo" src="/static/img/silmoo/React_Express.png" alt="" />
                                </a>
                                <div className="instructor__info-holder">
                                    <div className="instructor__title_box">
                                        <a href="">

                                            <h4 className="instructor__title">모던 자바스크립트 과정</h4>
                                        </a>
                                    </div>
                                    <div className="instructor__about">
                                        <li>리액트 컴포넌트</li>
                                        <li>Express JS</li>
                                        <li>리덕스</li>
                                    </div>
                                </div>
                                <div className="instructor__teaching-technologies">
                                    <span>Javascript Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="taught-by-leaders__cards-holder">
                            <div className="taught-by-leaders__card">
                                <a href="/currisilmoo/java">
                                    <img className="instructor__photo" src="/static/img/silmoo/database.png" alt="" />
                                </a>
                                <div className="instructor__info-holder">
                                    <div className="instructor__title_box">
                                        <a href="">

                                            <h4 className="instructor__title">데이터베이스 고급과정</h4>
                                        </a>
                                    </div>
                                    <div className="instructor__about">
                                        <li>데이터베이스 아키텍처 설계</li>
                                        <li>데이터베이스 쿼리 튜닝</li>
                                        <li>NoSQL 활용</li>
                                    </div>
                                </div>
                                <div className="instructor__teaching-technologies">
                                    <span>DATABASE</span>
                                </div>
                            </div>
                            <div className="taught-by-leaders__card">
                                <a href="/currisilmoo/python">
                                    <img className="instructor__photo" src="/static/img/silmoo/learning.png" alt="" />
                                </a>
                                <div className="instructor__info-holder">
                                    <div className="instructor__title_box">
                                        <a href="">

                                            <h4 className="instructor__title">머신러닝 과정</h4>
                                        </a>
                                    </div>
                                    <div className="instructor__about">
                                        <li>고급 파이썬</li>
                                        <li>Open CV</li>
                                        <li>TensorFlow 머신러닝 프로젝트 적용</li>
                                    </div>
                                </div>
                                <div className="instructor__teaching-technologies">
                                    <span>Artifact Intelligence. AI</span>
                                </div>
                            </div>
                            <div className="taught-by-leaders__card">
                                <a href="/currisilmoo/android">
                                    <img className="instructor__photo" src="/static/img/silmoo/mobile.png" alt="" />
                                </a>
                                <div className="instructor__info-holder">
                                    <div className="instructor__title_box">
                                        <a href="">
                                            <h4 className="instructor__title">모바일 네이티브 과정</h4>
                                        </a>
                                    </div>
                                    <div className="instructor__about">
                                        <li>안드로이드</li>
                                        <li>아이폰</li>
                                        <li>하이브리드</li>
                                    </div>
                                </div>
                                <div className="instructor__teaching-technologies">
                                    <span>Mobile DEVELOPER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SilMain;
