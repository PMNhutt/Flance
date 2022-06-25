import React from 'react'

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="left">
                <div className="highlight-1"></div>
                <h1><span>Freelancer </span>tốt nhất phù hợp với nhu cầu của bạn</h1>
                <div className="search-item">
                    <div className="search-background">
                        <ion-icon name="search-outline"></ion-icon>
                        <input type="text" className="search-input" placeholder="Thử &quot;thiết kế đồ họa&quot;"></input>
                    </div>
                    <button>Tìm kiếm</button>
                </div>
                <div className="common-search">
                    <p>Phổ biến: </p>
                    <div className="tags">
                        <div className="tag">
                            Front End
                        </div>
                        <div className="tag">
                            UI/ UX
                        </div>
                        <div className="tag">
                            Logo
                        </div>
                    </div>
                </div>
            </div>
            <div className="right" />
        </div>
    )
}

export default HeroSection