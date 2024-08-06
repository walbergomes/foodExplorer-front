import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Slogan } from "../../components/Slogan";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu"

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Home() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto", spacing: 15 },
  })

  return (
    <Container>
      {/* <SideMenu /> */}

      <Header />
      <Slogan />

      <main>
        
        <Section title="Refeições">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
            <div className="keen-slider__slide number-slide2"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
            <div className="keen-slider__slide number-slide3"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
          </div>
        </Section>

        <Section title="Pratos Principais">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
            <div className="keen-slider__slide number-slide2"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
            <div className="keen-slider__slide number-slide3"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
          </div>
        </Section>

        <Section title="Bebidas">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
            <div className="keen-slider__slide number-slide2"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
            <div className="keen-slider__slide number-slide3"
                style={{ maxWidth: 240, minWidth: 240 }}
            >
              <Card />
            </div>
          </div>
        </Section>

      </main>

      <Footer />
    </Container>
  );
}
