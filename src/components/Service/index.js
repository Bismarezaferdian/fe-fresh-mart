import React from "react";
import Sayur from "../../images/sayur.svg";
import Daging from "../../images/daging.svg";
import Beras from "../../images/beras.svg";
import Bounce from "react-reveal/Bounce";

import {
  ServiceContainer,
  ServiceWrapp,
  ServiceCard,
  ServiceH1,
  ServiceIcon,
  ServiceTitle,
  ServiceDesc,
} from "./ServiceElement";

const service = () => {
  return (
    <ServiceContainer id="product">
      <ServiceH1>Products</ServiceH1>
      <ServiceWrapp>
        <Bounce left delay={900}>
          <ServiceCard>
            <ServiceIcon src={Sayur} />
            <ServiceTitle>Sayuran & Buah</ServiceTitle>
            <ServiceDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores, fuga.
            </ServiceDesc>
          </ServiceCard>
        </Bounce>
        <Bounce left delay={600}>
          <ServiceCard>
            <ServiceIcon src={Daging} />
            <ServiceTitle>Daging</ServiceTitle>
            <ServiceDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              beatae?
            </ServiceDesc>
          </ServiceCard>
        </Bounce>
        <Bounce left delay={100}>
          <ServiceCard>
            <ServiceIcon src={Beras} />
            <ServiceTitle>Sembako</ServiceTitle>
            <ServiceDesc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              beatae?
            </ServiceDesc>
          </ServiceCard>
        </Bounce>
      </ServiceWrapp>
    </ServiceContainer>
  );
};

export default service;
