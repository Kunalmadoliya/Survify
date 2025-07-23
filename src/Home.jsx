import {
  Hero,
  About,
  Service,
  ScrollFloat,
  Testimonials,
} from "./components/index";

const Home = () => {
  return (
    <>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=100%"
        scrollEnd="bottom bottom-=100%"
        stagger={0.09}
      >
        <Hero />
      </ScrollFloat>

      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=100%"
        scrollEnd="bottom bottom-=100%"
        stagger={0.09}
      >
        <Service />
      </ScrollFloat>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=100%"
        scrollEnd="bottom bottom-=100%"
        stagger={0.09}
      >
        <About />
      </ScrollFloat>
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=100%"
        scrollEnd="bottom bottom-=100%"
        stagger={0.09}
      >
        <Testimonials />
      </ScrollFloat>
    </>
  );
};

export default Home;
