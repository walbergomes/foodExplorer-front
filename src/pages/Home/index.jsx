import { useState } from "react";
import { Container } from "./styles";

import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Slogan } from "../../components/Slogan";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import { SideMenu } from "../../components/SideMenu";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <main>
        <Slogan />
        <Section title="Refeições">
          <Swiper
            slidesPerView={1.8}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              [parseInt(DEVICES_BREAKPOINTS.LAPTOP)]: {
                slidesPerView: 3.2,
              },
              [parseInt(DEVICES_BREAKPOINTS.LAPTOP_L)]: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>

        <Section title="Pratos principais">
        <Swiper
            slidesPerView={1.8}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              [parseInt(DEVICES_BREAKPOINTS.LAPTOP)]: {
                slidesPerView: 3.2,
              },
              [parseInt(DEVICES_BREAKPOINTS.LAPTOP_L)]: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>

        <Section title="Bebidas">
        <Swiper
            slidesPerView={1.8}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              [parseInt(DEVICES_BREAKPOINTS.LAPTOP)]: {
                slidesPerView: 3.2,
              },
              [parseInt(DEVICES_BREAKPOINTS.LAPTOP_L)]: {
                slidesPerView: 4.2,
              },
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
