import React, { useState } from 'react'
import '../CSS/Home.css'
import LoginModal from './LoginModal'


export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="block1">
      <div className="block2">
        <h1 className="outer">
          <span className="investmentItem" style={{ "--delay": -1, color: "#00D09C" }}>Mutual Funds</span>
          <span className="investmentItem" style={{ "--delay": -6, color: "#5367FF" }}>Stocks</span>
          <span className="investmentItem" style={{ "--delay": -5, color: "#FFB61B" }}>Future and Options</span>
          <span className="investmentItem" style={{ "--delay": -4, color: "#EB5B3C" }}>US Stocks</span>
          <span className="investmentItem" style={{ "--delay": -3, color: "#800080" }}>IPO</span>
          <span className="investmentItem" style={{ "--delay": -2, color: "#D2AB66" }}>FDs</span>
        </h1>
        <LoginModal show={show} handleClose={() => setShow(false)} />
        <div className='block3'>
          Trusted by <strong>2.5 Million</strong> Indians. Start Investing today.
          <div><button className="btn" onClick={() => setShow(true)}>Get Started</button></div>
        </div>
      </div>
      <div className='block4'>
        <div className="grid">
          <div className='gridItem'><div className="card" style={{ color: "#00D09C" }}>Mutual Funds</div></div>
          <div className='gridItem'><div className="card" style={{ color: "#5367FF" }}>Stocks</div></div>
          <div className='gridItem'><div className="card" style={{ color: "#FFB61B" }}>Future and Options</div></div>
          <div className='gridItem'><div className="card" style={{ color: "#EB5B3C" }}>US Stocks</div></div>
          <div className='gridItem'><div className="card" style={{ color: "#800080" }}>IPO</div></div>
          <div className='gridItem'><div className="card" style={{ color: "#D2AB66" }}>FDs</div></div>
        </div>
      </div>
    </div>
  )
}
