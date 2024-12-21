import React from "react";

export default function LatestProduct() {
  return (
    <div className="latest-product">
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6">
            <a href="" className="text-decoration-none back-btn w-auto">
              <i class="bi bi-arrow-left me-2"></i> مشاهده همه
            </a>
          </div>
          <div className="col-md-6">
            <div className="main-title text-end">جدیدترین محصولات</div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="product-box">
              <img
                src="https://product-thumbnails.s3.ir-thr-at1.arvanstorage.com/web-1734525287543-534261905-K8UdYILGAplmsNOiI3JU5ctdKcljOr2FBbsJ2FbU.jpeg"
                alt=""
                className="w-100"
              />
              <h5>کفش طبی زیره پیو</h5>
              <p className="mb-0">30,000 عدد</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="product-box">
              <img
                src="https://product-thumbnails.s3.ir-thr-at1.arvanstorage.com/web-1734682322262-756834247-n5359rmrj4dc4VfcslZqVApOLsUebDbSxetRvoDU.jpeg"
                alt=""
                className="w-100"
              />
              <h5>مبلمان</h5>
              <p className="mb-0">30,000 عدد</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="product-box">
              <img
                src="https://product-thumbnails.s3.ir-thr-at1.arvanstorage.com/web-1734684560028-529334100-0j9j4uHWrCEN0RuDqlgiI26YV1ty4TovGBrQ29tz.jpeg"
                alt=""
                className="w-100"
              />
              <h5>گلاب سنتی</h5>
              <p className="mb-0">30,000 عدد</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="product-box">
              <img
                src="https://product-thumbnails.s3.ir-thr-at1.arvanstorage.com/web-1734686774993-713203465-1Pgxi7K2ly5i2qEjR1Sck44C77hQysMZQObpEPke.jpeg"
                alt=""
                className="w-100"
              />
              <h5>واکس سه کاره لاستیک ، داشبورد ، سپر خودرو</h5>
              <p className="mb-0">30,000 عدد</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="product-box">
              <img
                src="https://product-thumbnails.s3.ir-thr-at1.arvanstorage.com/web-1734684220076-245451184-jPIy51d0EHlpY9W3Ap91zD9nXLrGn2vWqcwnDzLh.jpeg"
                alt=""
                className="w-100"
              />
              <h5>چسب های صنعت ساختمان</h5>
              <p className="mb-0">30,000 عدد</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="product-box">
              <img
                src="https://product-thumbnails.s3.ir-thr-at1.arvanstorage.com/web-1734685925507-446821421-k9chAbXAqOhJP1LlG8n8VFjlpxER1EY7Facf9ZTo.jpeg"
                alt=""
                className="w-100"
              />
              <h5>پاک کننده گاز</h5>
              <p className="mb-0">30,000 عدد</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
