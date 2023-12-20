import React from "react";
import Li from "./Li";
import H2 from "./heading/H2";
import Container from "./Container";
import Logo from "./header/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const items = [
    {
      title: "Company",
      content: [
        { name: "About us", slug: "#" },
        { name: "Contact us", slug: "#" },
        { name: "News and Blogs", slug: "#" },
        { name: "Library", slug: "#" },
        { name: "carrer", slug: "#" },
      ],
    },
    {
      title: "Community",
      content: [
        { name: "Documation", slug: "#" },
        { name: "Faq", slug: "#" },
        { name: "Forum", slug: "#" },
        { name: "Sitemap", slug: "#" },
      ],
    },
    {
      title: "Teaching",
      content: [
        { name: "Become a teacher", slug: "#" },
        { name: "How to guide", slug: "#" },
        { name: "Terms & Conditions", slug: "#" },
      ],
    },
  ];

  return (
    <footer className="py-10">
      <Container>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-6 gap-5">
          <div className="col-span-full flex flex-col gap-2 pr-40 lg:col-span-2 lg:pr-0">
            <Logo />
            <p>
              MyClass education theme, built specifically for the education
              centers which is dedicated to teaching and involve learners.
            </p>
            <div className="flex gap-2">
              <div className= "shadow-icon cursor-pointer bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faFacebookF} className="text-primary" />
              </div>
              <div className="shadow-icon cursor-pointer dark:bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faInstagram} className="text-red-600" />
              </div>
              <div className="shadow-icon cursor-pointer dark:bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faTwitter} className="text-primary" />
              </div>
              <div className="shadow-icon cursor-pointer dark:bg-white px-2 rounded-sm transition-transform duration-300 hover:-translate-y-1">
                <FontAwesomeIcon icon={faLinkedin} className="text-primary" />
              </div>
            </div>
          </div>

          {items.map((category, index) => (
            <ul key={index}>
              <H2 className="mb-3">{category.title}</H2>
              {category.content.map((item, index) => (
                <Li key={index} className="px-0 py-0 hover:bg-transparent">
                  <a href="">{item.name}</a>
                </Li>
              ))}
            </ul>
          ))}
          <ul>
            <H2 className="mb-3">Contact</H2>

            <Li className="px-0 py-0 hover:bg-transparent">
              <span>Toll free: </span>
              <span>+123456789</span>
              <p className="text-sm">(9:AM to 8:PM IST)</p>
            </Li>
            <Li className="px-0 py-0 hover:bg-transparent">
              <span>Email: </span>
              <span>umerkhan5727@gmail.com</span>
            </Li>
            
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
