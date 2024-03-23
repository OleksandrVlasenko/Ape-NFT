import { Title } from "sections/FAQ/FAQ.styled";
import { Description, MindMapItem, Name } from "./MindMap.styled";

const MindMap = () => {
	return (
		<section>
			<Title>MIND map</Title>
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
		</section>
	);
};

export { MindMap };
