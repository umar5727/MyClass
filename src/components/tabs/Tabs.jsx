import React, { useState } from "react";
import Button from "../Button";
import ProductCard from "../ProductCard";

const Tabs = () => {
  const [tabState, setTabState] = useState(0);
  const tabInfo = [
    {
      title: "Web Design",
      content: [
        {
          id: 1,
          name: "Sketch from A to Z: for app designer",
          description:
            "Proposal indulged no do sociable he throwing settling.",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "All level",
          color:{primary:'text-primary-purple',light:'bg-primary-purple-light'},
          lectures:15,
        },
        {
          id: 2,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:65,
        },
        {
          id: 3,
          name: "Create a Design System in Figma",
          description:
            "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:40,
        },
        {
          id: 4,
          name: "Deep Learning with React-Native",
          description:
            "Far advanced settling say finished raillery. Offered chiefly farther",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:115,
        },
      ],
    },
    // web design ends 
    {
      title: "Development",
      content: [
        {
          id: 5,
          name: "JavaScript: Full Understanding",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "All level",
          color:{primary:'text-primary-purple',light:'bg-primary-purple-light'},
          lectures:15,
        },
        {
          id: 6,
          name: "Bootstrap 5 From Scratch",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Intermediate",
          color:{primary:'text-primary-info',light:'bg-primary-info-light'},
          lectures:15,
        },
        {
          id: 7,
          name: "Deep Learning with React-Native",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 8,
          name: "The Complete Web Development in python",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
      ],
    },
    // Development ends 
    {
      title: "Graphic Design",
      content: [
        {
          id: 9,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 10,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 11,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 12,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
      ],
    },
    // Graphic Design ends 
    {
      title: "Marketing",
      content: [
        {
          id: 13,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 14,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 15,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 16,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
      ],
    },
    // Marketing ends 
    {
      title: "Finance",
      content: [
        {
          id: 17,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 18,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 19,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
        {
          id: 20,
          name: "Graphic Design Masterclass",
          description:
            "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
          // price: 19.99,
          image:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
          category: "Beginner",
          color:{primary:'text-primary-green',light:'bg-primary-green-light'},
          lectures:15,
        },
      ],
    },
  
  ];
  const handleClick = (index) => {
    setTabState(index);
    // console.log(index);
  };
  return (
    <section className="mt-14 mb-12">
      <div className="text-center  dark:text-white pb-5">
        <h2 className="text-3xl font-bold ">Most Popular Courses</h2>
        <p>Choose from hundreds of courses from specialist organizations</p>
      </div>
      <div
        className={`flex flex-wrap gap-2 w-full lg:justify-center bg-primary-light py-4 rounded-lg text-primary`}
      >
        {tabInfo.map((item, index) => (
          <Button
            className={
              index === tabState
                ? " text-white bg-primary font-semibold border-none cursor-auto"
                : "bg-transparent font-semibold hover:text-black hover:bg-primary-light border-none"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 pt-5">
        {
        tabInfo.map((item, index) => {
          if (index === tabState) {
            return(
            item.content.map((course)=>{
              return(
               
                <ProductCard key={course.id} product={course} /> 
               
              )
            })
            )
          }else{
            return
          }
          
        })}
      </div>
    </section>
  );
};

export default Tabs;
