import React, { useState, useRef } from 'react';

const ButtonScroller = ({ items }) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (delta) => {
    const maxScrollPosition =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    let newScrollPosition = Math.max(0, Math.min(scrollPosition + delta, maxScrollPosition));
    setScrollPosition(newScrollPosition);
    scrollRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
  };

  return (
    <div className="button-scroller">
      <div
        className="button-scroller__scroll-container"
        ref={scrollRef}
        onWheel={(e) => handleScroll(e.deltaY)}
      >
        {items.map((item, i) => (
          <button key={i} className="button-scroller__button">
            {item}
          </button>
        ))}
      </div>
      <div className="button-scroller__arrow-container">
        <button
          className={`button-scroller__arrow ${scrollPosition === 0 ? 'disabled' : ''}`}
          onClick={() => handleScroll(-100)}
          disabled={scrollPosition === 0}
        >
          {'<'}
        </button>
        <button
          className={`button-scroller__arrow ${scrollPosition >= scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth ? 'disabled' : ''}`}
          onClick={() => handleScroll(100)}
          disabled={scrollPosition >= scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ButtonScroller;