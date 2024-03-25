import PropTypes from "prop-types";

import { Title } from "sections/FAQ/FAQ.styled";
import {
  Section,
  Description,
  MindMapItem,
  Name,
  MindMapLink,
  IconContainer,
} from "./MindMap.styled";
import { Slider } from "components/Slider/Slider";
import { ArrowIcon } from "components/svg/ArrowIcon/ArrowIcon";
import React, { useState, useEffect } from "react";
import { useWindowWidth } from "hooks/useWindowWidth";

const MindMap = ({ ref2 }) => {
  const [width, setWidth] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth) setWidth(windowWidth);
  }, [windowWidth]);
  return (
    <Section ref={ref2}>
      <Title>MIND map</Title>
      {width < 768 ? (
        <Slider>
          <div>
            <MindMapItem>
              <Description>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </Description>
              <Name>YAPE DROP</Name>
            </MindMapItem>
          </div>
          <div>
            <MindMapItem>
              <Description>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </Description>
              <Name>New Collection</Name>
            </MindMapItem>
          </div>
          <div>
            <MindMapItem>
              <Description>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </Description>
              <Name>Token</Name>
            </MindMapItem>
          </div>
          <div>
            <MindMapLink
              href="https://google.com"
              target="blank"
              rel="nofollow noreferrer noopener"
            >
              <IconContainer>
                <ArrowIcon width={24} height={24} />
              </IconContainer>

              <Name>Learn more in mind map</Name>
            </MindMapLink>
          </div>
        </Slider>
      ) : (
        <ul>
          <li>
            <MindMapItem>
              <Description>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </Description>
              <Name>YAPE DROP</Name>
            </MindMapItem>
          </li>
          <li>
            <MindMapItem>
              <Description>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </Description>
              <Name>New Collection</Name>
            </MindMapItem>
          </li>
          <li>
            <MindMapItem>
              <Description>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </Description>
              <Name>Token</Name>
            </MindMapItem>
          </li>
          <li>
            <MindMapLink
              href="https://google.com"
              target="blank"
              rel="nofollow noreferrer noopener"
            >
              <IconContainer>
                <ArrowIcon width={24} height={24} />
              </IconContainer>

              <Name>Learn more in mind map</Name>
            </MindMapLink>
          </li>
        </ul>
      )}
    </Section>
  );
};

MindMap.propTypes = {
  ref2: PropTypes.object,
};

export { MindMap };
