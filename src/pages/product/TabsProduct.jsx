import React, { useState } from "react";

import { Button } from "../../components";

const TabsProduct = () => {
  const [tabState, setTabState] = useState(0);
  const tabInfo = [
    {
      title: "Description",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Curriculum",
      content:
        "Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque.Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque.",
    },
    {
      title: "FAQ",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque.Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque.",
    },
    {
      title: "Review",
      content:
        "Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ullam ex aliquam autem asperiores vel voluptatibus magni commodi facilis! Magnam sit accusantium porro at optio quis fugit consequuntur alias cumque.",
    },
  ];
  const handleClick = (index) => {
    setTabState(index);
    // console.log(index);
  };
  return (
    <section className=" mb-12">
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 w-full lg:justify-center   rounded-lg text-primary`}
      >
        {tabInfo.map((item, index) => (
          <Button
            className={
              index === tabState
                ? "py-3  text-white bg-primary font-semibold border cursor-auto"
                : "py-3  bg-transparent font-semibold hover:text-black hover:bg-primary-light border-primary-border-light"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className=" pt-5">
        {tabInfo.map((item, index) => {
          if (index === tabState) {
            return (
              <div className=" p-2 ">
                <h2 className="font-bold text-2xl">{item.title}</h2>
                <p>{item.content}</p>
              </div>
            );
          } else {
            return;
          }
        })}
      </div>
    </section>
  );
};

export default TabsProduct;
