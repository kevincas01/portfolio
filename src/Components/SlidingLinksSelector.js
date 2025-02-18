import React, { useEffect, useRef, useState } from "react";

export const SlidingTabSelector = ({ onTabSelect, tabs, activeTab }) => (
  <div className="container">
    <SlideTabs onTabSelect={onTabSelect} tabs={tabs} activeTab={activeTab} />
  </div>
);

const SlideTabs = ({ onTabSelect, tabs, activeTab }) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const tabRefs = useRef({}); // Store refs dynamically
  const [tabClicked, setTabClicked] = useState(false);

  // Function to reset position to the active tab
  const resetToActiveTab = () => {
    const activeTabRef = tabRefs.current[activeTab]; // Get ref of active tab
    if (activeTabRef) {
      const { width } = activeTabRef.getBoundingClientRect();
      setPosition({ left: activeTabRef.offsetLeft, width, opacity: 1 });
    }
  };

  return (
    <ul className="tab-list" onMouseLeave={resetToActiveTab}>
      {tabs.map((tab) => (
        <Tab
          key={tab.value}
          tab={tab}
          activeTab={activeTab}
          setPosition={setPosition}
          onTabSelect={onTabSelect}
          setTabRef={(el) => (tabRefs.current[tab.value] = el)} // Capture ref
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
  setTabRef,
  tabClicked,
  setTabClicked,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setTabRef(ref.current);
    }
  }, [setTabRef]);

  useEffect(() => {
    if (!tabClicked && tab.value === activeTab && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
    }
  }, [activeTab, setPosition]);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
  };

  return (
    <li
      ref={ref}
      onClick={() => {
        setTabClicked(true);
        onTabSelect(tab.ref);
        setTimeout(() => {
          setTabClicked(false);
        }, 300);
      }}
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
