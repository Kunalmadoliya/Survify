import React from "react";
import {Container} from "../components/index";

import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

const Testimonials = () => {
  const items = [
    {
      title: "Aarav Sharma",
      image:
        "https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rt2Un4fAZ7ky3zK0cxpUUcxKj8p23c7D_CkUwh4JuT0=",
      className: "absolute top-10 left-[50%] rotate-[-5deg]",
      description:
        "The attention to detail and speed of service was unmatched. Truly impressive!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Neha Kapoor",
      image:
        "https://images.unsplash.com/photo-1594679085391-0ea2baba0145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1c3RvbWVycyUyMGhhcHB5JTIwZmFjZSUyMGRhcmtlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      description:
        "Professional, punctual, and exceeded expectations. Highly recommend!",
      stars: "⭐⭐⭐⭐",
    },
    {
      title: "Rahul Verma",
      image:
        "https://images.unsplash.com/photo-1573289271755-98a7a8b16e62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGN1c3RvbWVycyUyMGhhcHB5JTIwZmFjZSUyMGRhcmtlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      description:
        "Loved the smooth experience. Everything was done with great care.",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Ishita Mehra",
      image:
        "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGN1c3RvbWVycyUyMGhhcHB5JTIwZmFjZSUyMGRhcmtlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      description: "Super friendly team and the service quality was excellent!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Kabir Anand",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      description:
        "It felt very personalized. They really understand customer needs.",
      stars: "⭐⭐⭐⭐",
    },
    {
      title: "Priya Nair",
      image:
        "https://plus.unsplash.com/premium_photo-1669138140804-a593bab110d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHl8ZW58MHx8MHx8fDA%3D",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
      description:
        "Amazing experience. Fast, clean, and reliable — what else do you need?",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Kunal Madoliya (Owner)",
      image:
        "https://images.unsplash.com/photo-1651613543604-195861551d15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhhcHB5fGVufDB8fDB8fHww",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
      description:
        "Thank you Sheriyans! Main yeh course religiously follow kar raha hoon 5 mahino se. Maine Day 1 mein hi yeh course le liya tha and I made this website. I am so overwhelmed. Thanks a lot for making me capable that I made this by myself.",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <>
      <Container>
        <div className=" bg-blue-600 mb-10  mt-5 rounded-lg">
          <div className="py-16">
            <h1 className="text-center text-6xl  font-extrabold text-neutral-800 dark:text-white">
              Here's What Our{" "}
              <span className="text-black bg-green-500 px-3 rounded-md">
                Family
              </span>{" "}
              Say
            </h1>

            <DraggableCardContainer className="relative flex h-[600px] w-full items-center justify-center overflow-clip rounded-md">
              <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-3xl font-black text-white md:text-4xl dark:text-white">
                IT'S Pure 10 Days Of HardWork!!!!
              </p>

              {items.map((item, index) => (
                <DraggableCardBody key={index} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-60 w-80 object-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-2xl font-bold text-white ">
                      {item.title}
                    </h3>
                    <p className="text-xl mt-1">{item.stars}</p>

                    <p className="mt-2 text-base font-medium text-white  max-w-xs mx-auto">
                      {item.description}
                    </p>
                  </div>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Testimonials;
