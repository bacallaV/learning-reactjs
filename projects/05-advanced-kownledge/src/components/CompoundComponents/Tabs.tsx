import React from "react";

import classes from "./CompoundComponents.module.css";

type TabsProps = {
  children: React.ReactNode;
};
export default function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleTabClick(index: number) {
    setActiveIndex(index);
  }

  const elements = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
          {elements.map((element, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeIndex === index ? classes.TabActive : ""}
            >
              {(element as React.ReactElement<{ label: string }>).props.label}
            </li>
          ))}
      </ul>
      <p className={classes.Tabcontent}>
        {elements[activeIndex]}
      </p>
    </div>
  );
};
