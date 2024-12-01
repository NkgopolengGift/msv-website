import background from "/images/background.webp";
import Reliable from "/images/Reliable.png";
import Safety from "/images/safety.png";
import Fast from "/images/Fast.png";
import bushClearing from "/images/bush-clearing.jpeg";
import grassCutting from "/images/grass-cutting.jpeg";
import SlidingImages from "@/components/MyComponents/SlidingImages";
import RoadMaintenance from "/images/Road-maintenance.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const images = [
  { src: RoadMaintenance, title: "Road Maintenance" },
  { src: bushClearing, title: "Bush Clearing" },
  { src: grassCutting, title: "Grass Cutting" },
];

const HomePage: React.FC = () => {
  const [text] = useTypewriter({
    words: ["MSV (PTY) LTD"],
    loop: false,
    delaySpeed: 8000,
  });

  return (
    <div>
      <header
        className="relative bg-background py-20 h-[585px] bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 lg:flex lg:justify-center lg:items-center relative z-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white duration-300">
              Welcome to <br /> <span className="text-primary">{text}</span>
              <Cursor cursorColor="var(--primary-foreground)" />
            </h1>
            <p className="text-lg lg:text-2xl text-white mb-10 font-general">
              To be a leading construction and maintenance service provider by
              delivering exceptional quality and fostering community development
              through empowerment.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-800 text-white text-lg py-5 px-10 rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      <div className="border border-collapse border-green-500" />

      <section id="features" className="py-20 bg-card">
        <div className="container mx-auto px-1">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl text-primary font-bold mb-4 font-robert-medium underline">
              Who We Are
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-left">
              A company in Limpopo dedicated to providing top-notch construction
              and maintenance services. We are passionate about broad-based
              empowerment, employing youth and women to improve their quality of
              life.
              <br />
              <br />
              <b className="text-primary">Our vision</b> is to become a trusted
              provider of construction services, known for reliability and
              excellence, meeting the customized needs of our clients in Limpopo
              and beyond.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <img src={Reliable} alt="Reliable" className="h-24 w-24 mb-4" />
              <h4 className="text-xl font-semibold text-foreground">
                Reliable
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <img src={Safety} alt="Safety" className="h-24 w-24 mb-4" />
              <h4 className="text-xl font-semibold text-foreground">Safety</h4>
            </div>
            <div className="flex flex-col items-center">
              <img src={Fast} alt="Fast" className="h-24 w-24 mb-4" />
              <h4 className="text-xl font-semibold text-foreground">Fast</h4>
            </div>
          </div>
        </div>
      </section>

      <div className="border border-collapse border-green-500" />

      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 transition duration-300 underline">
              What we do
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 font-general">
              Our team excels in delivering exceptional construction services
              across residential, commercial, and industrial sectors, upholding
              the highest standards of quality and sustainability.
              <br />
              <b className="text-green-600">We provide:</b>
              <br />
              <b className="text-primary">-Road Maintenance:</b> Regular
              maintenance and repairs for safe, long-lasting roadways, utilizing
              advanced techniques and materials.
              <br />
              <b className="text-primary">-Bush Clearing:</b> Efficient removal
              of overgrown areas to enhance safety, accessibility, and aesthetic
              value. <br />
              <b className="text-primary">-Grass Cutting:</b> Professional
              services for both large and small areas, ensuring pristine and
              well-kept landscapes. We focus on building strong, lasting
              relationships with our clients, ensuring that our service delivery
              is always seamless and stress-free.
            </p>
            <a
              href="#features"
              className="bg-gradient-to-r from-green-500 to-green-800 text-primary-foreground py-4 px-8 rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative h-96 flex items-center justify-center overflow-hidden">
            <SlidingImages images={images} />
          </div>
        </div>
      </section>

      <div className="border border-collapse border-green-500 shadow-2xl shadow-green-600" />
    </div>
  );
};

export default HomePage;
