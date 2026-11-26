
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <p>Ghar Se Door Ghar Jaisa</p>

        <h1>Feel at Home, With Every Meal.</h1>

        <p>
          Fresh, delicious and homely vegetarian food,
          prepared with love at Rasoi Katta.
        </p>

        <Link to="/about">Discover Our Story</Link>
      </section>

      <section className="home-welcome">
        <h2>A Taste of Home, Every Day</h2>
        <p>
          Enjoy comforting meals and the warmth of
          homemade food.
        </p>
      </section>
    </div>
  )
}

export default Home
