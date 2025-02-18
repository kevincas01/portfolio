import React, { useEffect, useRef, useState } from "react";

export const SlidingTabSelector = ({ onTabSelect, tabs, activeTab }) => (
  <div className="container">
    <SlideTabs onTabSelect={onTabSelect} tabs={tabs} activeTab={activeTab} />
  </div>
);

const SlideTabs = ({ onTabSelect, tabs, activeTab }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [tabClicked, setTabClicked] = useState(false);

  return (
    <ul className="tab-list">
      {tabs.map((tab) => (
        <Tab
          onTabSelect={onTabSelect}
          key={tab.value}
          activeTab={activeTab}
          tab={tab}
          setPosition={setPosition}
          tabClicked={tabClicked}
          setTabClicked={setTabClicked}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  onTabSelect,
  tab,
  activeTab,
  setPosition,
  tabClicked,
  setTabClicked,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!tabClicked && tab.value === activeTab && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
    }
  }, [activeTab]);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
  };

  return (
    <li
      onClick={() => {
        setTabClicked(true);
        onTabSelect(tab.ref);
        setTimeout(() => {
          setTabClicked(false);
        }, 300);
      }}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="tab-item tab-item-md"
    >
      {tab.value}
    </li>
  );
};

const Cursor = ({ position }) => (
  <div
    className="cursor"
    style={{
      left: `${position.left}px`,
      width: `${position.width}px`,
      opacity: position.opacity,
    }}
  />
);
