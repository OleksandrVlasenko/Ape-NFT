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

const MindMap = () => {
	return (
		<Section>
			<Title>MIND map</Title>
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
							Launch of the 2nd YACHT Collection Releasing the first version of
							the Ape Slam Game
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
			{false && (
				<ul>
					<MindMapItem>
						<Description>
							All owners of APE NFTs and all future collections will receive a
							percentage of sales based on the number of NFTs they own
						</Description>
						<Name>YAPE DROP</Name>
					</MindMapItem>
					<MindMapItem>
						<Description>
							Launch of the 2nd YACHT Collection Releasing the first version of
							the Ape Slam Game
						</Description>
						<Name>New Collection</Name>
					</MindMapItem>
					<MindMapItem>
						<Description>
							Launch your own token, the proceeds of which will go to a global
							fund to LAUNCH YACHT CLUB AND PROMOTE it
						</Description>
						<Name>Token</Name>
					</MindMapItem>
					<MindMapItem>
						<Description>Arrow</Description>
						<Name>Learn more in mind map</Name>
					</MindMapItem>
				</ul>
			)}
		</Section>
	);
};

export { MindMap };
