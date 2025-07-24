import {useNavigate, useLocation} from "react-router-dom";
import Logo from "../components/Logo";
import {
  AnimatedCardStack,
  Container,
  ScrollScaleReveal,
} from "../components/index";

const Service = () => {
  const navigate = useNavigate();
  const locition = useLocation();

  return (
    <section id="service" className="py-10 px-4 sm:px-6 md:py-5 mb-20">
      <Container>
        {locition.pathname === "/service" && (
          <div className="flex items-center p-6 justify-between ">
            <p
              onClick={() => navigate("/")}
              className="text-[1.1rem] hover:cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i> Back
            </p>
            <Logo />
          </div>
        )}

        <ScrollScaleReveal>
          <div className="flex flex-col p-6 sm:p-10 font-bold text-center max-w-5xl mx-auto">
            <h1 className="text-xl sm:text-3xl md:text-4xl text-gray-400 leading-tight">
              From grooming to gadgets, get trained
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-5xl  text-gray-400 leading-snug flex items-center justify-center flex-wrap gap-2">
              <span className="bg-green-500 rounded-full px-2 text-black">
                👷
              </span>
              <span className="text-black">
                Professionals{" "}
                <span className="text-gray-400"> at your convenience.</span>
              </span>
            </h1>
          </div>
        </ScrollScaleReveal>

        <AnimatedCardStack />
      </Container>
    </section>
  );
};

export default Service;
