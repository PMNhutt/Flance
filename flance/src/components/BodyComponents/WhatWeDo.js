import React from 'react';
import Grid from '@mui/material/Grid';


function WhatWeDo() {
  return (
    <div className="what-we-do">
      <div className="title-container">
        <div className="title-bar"></div>
        <p className="title">Chúng tôi có gì?</p>
      </div>

      <div className="content">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className="box1">
              <div className="box-content">

                <p>Chúng tôi cung cấp dịch vụ giúp freelancer tìm được công việc phù hợp cũng như giúp cá nhân,
                  tổ chức doanh nghiệp có thể tìm kiếm được freelancer tốt nhất cho dự án của mình</p>
                <div className="buttons">
                  <button className="btn-hire">Thuê Freelancer</button>
                  <button className="btn-job">Tìm việc</button>

                </div>
              </div>
              <div className="handraw-arrow"></div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="box2">
              <div className="box-content-no-row">
                <div className="box-content-col">
                  <div className="handraw-hightlight3"></div>
                  <h3>Gói dịch vụ hấp dẫn</h3>
                  <p>Khi cá nhân/doanh nghiệp mua theo gói dịch vụ 
                    đăng bài tuyển Freelancer, người mua sẽ được miễn phí trong 3
                     - 4 bài đăng đầu tiên</p>
                </div>
                <div className="packs"></div>
                <div className="handraw-underline"></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="box3">
              <div className="box-content-no-row">
                <div className="box-content-col">
                  <div className="handraw-hightlight3"></div>
                  <h3>Nhanh chóng & An toàn</h3>
                  <p>Chúng tôi sẽ đảm bảo việc thanh toán của khách hàng được
                    diễn ra một cách an toàn nhất có thể. Quý khách hoàn toàn
                    có thể yên tâm về vấn đề kết quả nhận được không được
                    như cam kết vì khi đó chúng tôi sẽ hoàn trả lại 100%
                    số tiền mà bạn đã nạp</p>
                </div>
                <div className="hand-shake">
                  <div className="handraw-misc1"></div>
                  <div className="handraw-misc2"></div>

                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="box4">
              <div className="box-content-no-row">
                <div className="box-content-col">
                  <div className="handraw-hightlight3"></div>
                  <h3>Freelancers chuyên nghiệp</h3>
                  <p>Doanh nghiệp vừa đăng bài tuyển Freelancer.
                     Freelancer cũng có trang cá nhân để chia sẻ, mô tả 
                     những sản phẩm của mình. Tạo sự tin cậy cho người mua, 
                     tăng khả năng có việc cho freelancer</p>
                </div>
                <div className="freelancers">
                  <div className="handraw-misc1"></div>
                  <div className="handraw-misc2"></div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default WhatWeDo