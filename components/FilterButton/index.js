import React, { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { useTransition, animated } from 'react-spring';


const menuItems = ['Football', 'Basketball', 'Tennis', 'Rugby', 'Volleyball', 'Crossfit / Bootcamp'];

function FilterButton() {

  const [menuOpen, set] = useState(true);

  const handleBtnClick = () => set(!menuOpen);

  const transitions = useTransition(menuOpen, null, {
    from: { opacity: 0, transform: 'translateY(-2%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-2%)' },
  });

  return (
    <div>
      <button className="bg-transparent py-2 px-4 border focus:outline-none rounded flex flex-row " onClick={handleBtnClick}>Pick a sport <div className="ml-2 self-center"><MdExpandMore /></div></button>
      {transitions.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div
              style={{ ...props }}
              className="mt-1 px-4 py-2 border rounded"
              key={key}
            >
              {menuItems.map(menuItem => (
                <div className="py-1" key={menuItem}>
                  {menuItem}
                </div>
              ))}
            </animated.div>
          )
        );
      })}
    </div>
  );
}


export default FilterButton


