import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://media.istockphoto.com/id/1226021105/photo/taj-mahal-palace-hotel-in-mumbai.jpg?s=612x612&w=0&k=20&c=0Jh6bjKHvLVtXb3hTdhmwOgseTjFIZjmMcMiOIT_A_w="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel TAJ</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from $300</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1438119949/Domestic%20Hotels/Hotels_Somnath/Shri%20Lilavati%20Atithi%20Bhavan/Overview.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Lilavati</span>
        <span className="fpCity">Ahmedabad</span>
        <span className="fpPrice">Starting from $240</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn1.goibibo.com/voy_ing/t_g/436c51c05a8a11e984d40242ac110006.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel H</span>
        <span className="fpCity">Anand</span>
        <span className="fpPrice">Starting from $149</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://gos3.ibcdn.com/129941a88b7311e7a7ab0a4cef95d023.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Mountainview</span>
        <span className="fpCity">Sawai Madhopur</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
