import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import {
  Title,
  Number,
  Name,
  Description,
  DeckriptionContainer,
  FaqItem,
} from "./FAQ.styled";
import { Section } from "sections/About/About.styled";
import { useWindowWidth } from "hooks/useWindowWidth";

const FAQ = ({ ref3 }) => {
  const [id, setId] = useState("1");
  const [width, setWidth] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth) setWidth(windowWidth);
  }, [windowWidth]);

  const handleClick = (e) => {
    setId(e.currentTarget.getAttribute("id"));
  };
  return (
    <Section ref={ref3}>
      <Title>FAQ</Title>
      <ul>
        <FaqItem
          onClick={handleClick}
          className={id === "1" ? "active" : ""}
          id="1"
        >
          {width >= 768 && <img src="" alt="" />}
          <div>
            <Number className={id === "1" ? "active" : ""}>[ 1 ]</Number>
          </div>
          <div>
            <Name className={id === "1" ? "active" : ""}>
              What is an nft collection?
            </Name>
            <DeckriptionContainer>
              <Description className={id === "1" ? "active" : ""}>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </Description>
            </DeckriptionContainer>
          </div>
        </FaqItem>
        <FaqItem
          onClick={handleClick}
          className={id === "2" ? "active" : ""}
          id="2"
        >
          {width >= 768 && <img src="" alt="" />}
          <div>
            <Number className={id === "2" ? "active" : ""}>[ 2 ]</Number>
          </div>
          <div>
            <Name className={id === "2" ? "active" : ""}>
              How do I purchase nfts from a collection?
            </Name>
            <DeckriptionContainer>
              <Description className={id === "2" ? "active" : ""}>
                To purchase nfts from a collection, you typically need to use
                cryptocurrency on a blockchain0based marketplace.
              </Description>
            </DeckriptionContainer>
          </div>
        </FaqItem>
        <FaqItem
          onClick={handleClick}
          className={id === "3" ? "active" : ""}
          id="3"
        >
          {width >= 768 && <img src="" alt="" />}
          <div>
            <Number className={id === "3" ? "active" : ""}>[ 3 ]</Number>
          </div>
          <div>
            <Name className={id === "3" ? "active" : ""}>
              Can I sell or trade nfts from a collection?
            </Name>
            <DeckriptionContainer>
              <Description className={id === "3" ? "active" : ""}>
                Yes, you can sell or trade NFTs from a collection like you would
                other digital assets.
              </Description>
            </DeckriptionContainer>
          </div>
        </FaqItem>
        <FaqItem
          onClick={handleClick}
          className={id === "4" ? "active" : ""}
          id="4"
        >
          {width >= 768 && <img src="" alt="" />}
          <div>
            <Number className={id === "4" ? "active" : ""}>[ 4 ]</Number>
          </div>
          <div>
            <Name className={id === "4" ? "active" : ""}>
              What rights do I have as an owner of an nft?
            </Name>
            <DeckriptionContainer>
              <Description className={id === "4" ? "active" : ""}>
                As an NFT owner, you can own, transfer, potentially access
                exclusive content, resell, but don't automatically get copyright
                or intellectual property rights.
              </Description>
            </DeckriptionContainer>
          </div>
        </FaqItem>
      </ul>
    </Section>
  );
};

FAQ.propTypes = {
  ref3: PropTypes.object,
};

export { FAQ };
