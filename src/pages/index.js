import React from 'react'

import Layout from '../components/layout'

import img1 from '../images/placeholder-1.jpg'
import img2 from '../images/placeholder-2.jpg'
import img3 from '../images/placeholder-3.jpg'
import img4 from '../images/placeholder-4.jpg'
import img5 from '../images/placeholder-5.jpg'
import img6 from '../images/placeholder-7.jpg'

const IndexPage = () => (
  <Layout>
    <h1 className="mt0 mb4 pt5 f1">Hi Kyle :)</h1>
    <p className="measure lh-copy f4">
      I've included enough global CSS to show you the FOUC in development (when
      global CSS is loaded via a link tag).
    </p>
    <p className="mb5 measure lh-copy f4">
      The issue disappears in production (when the styles are inlined).
    </p>

    <Images />
  </Layout>
)

const Images = ({ images }) => (
  <>
    <h2 className="mt0 mb1 f2">Some images:</h2>
    <p className="mb4 f4">
      (No gatsby-image for simplicity, though I'd usually use it!)
    </p>
    <ul
      className="list mv0 pl0 pb5"
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
        gridGap: `2rem`,
      }}
    >
      <li>
        <img src={img1} />
      </li>
      <li>
        <img src={img2} />
      </li>
      <li>
        <img src={img3} />
      </li>
      <li>
        <img src={img4} />
      </li>
      <li>
        <img src={img5} />
      </li>
      <li>
        <img src={img6} />
      </li>
    </ul>
  </>
)

export default IndexPage
