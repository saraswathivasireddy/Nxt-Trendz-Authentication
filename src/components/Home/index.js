// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = props => (
  <div>
    <Header />
    <div className="home-route-container">
      <div>
        <h1 className="home-route-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-route-para">
          Fashion is part of the daily air Fashion is a term used interchangeably to describe the creation of
          clothing, footwear, accessories, cosmetics, and jewellery of different
          cultural aesthetics and their mix and match into outfits that depict
          distinctive ways of dressing (styles and trends) as signifiers of
          social status, self-expression, and group belonging. As a multifaceted
          term, fashion describes an industry, styles, aesthetics, and trends.
        </p>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"  alt="clothes that get you noticed" />
    </div>
  </div>
)

export default Home
