import { useState } from "react";
import {
	Title,
	Number,
	Name,
	Description,
	DeckriptionContainer,
} from "./FAQ.styled";
import { Section } from "sections/About/About.styled";

const FAQ = () => {
	const [id, setId] = useState("1");

	const handleClick = e => {
		setId(e.currentTarget.getAttribute("id"));
	};
	return (
		<Section>
			<Title>FAQ</Title>
			<ul>
				<li onClick={handleClick} id="1">
					<img src="" alt="" />
					<Number>[ 1 ]</Number>
					<Name>What is an nft collection?</Name>
					<DeckriptionContainer>
						<Description className={id === "1" ? "active" : ""}>
							An NFT collection is a group of unique digital assets, each
							represented by a non-fungible token, typically created around a
							specific theme or style.
						</Description>
					</DeckriptionContainer>
				</li>
				<li onClick={handleClick} id="2">
					<img src="" alt="" />
					<Number>[ 2 ]</Number>
					<Name>How do I purchase nfts from a collection?</Name>
					<DeckriptionContainer>
						<Description className={id === "2" ? "active" : ""}>
							To purchase nfts from a collection, you typically need to use
							cryptocurrency on a blockchain0based marketplace.
						</Description>
					</DeckriptionContainer>
				</li>
				<li onClick={handleClick} id="3">
					<img src="" alt="" />
					<Number>[ 3 ]</Number>
					<Name>Can I sell or trade nfts from a collection?</Name>
					<DeckriptionContainer>
						<Description className={id === "3" ? "active" : ""}>
							Yes, you can sell or trade NFTs from a collection like you would
							other digital assets.
						</Description>
					</DeckriptionContainer>
				</li>
				<li onClick={handleClick} id="4">
					<img src="" alt="" />
					<Number>[ 4 ]</Number>
					<Name>What rights do I have as an owner of an nft?</Name>
					<DeckriptionContainer>
						<Description className={id === "4" ? "active" : ""}>
							As an NFT owner, you can own, transfer, potentially access
							exclusive content, resell, but don't automatically get copyright
							or intellectual property rights.
						</Description>
					</DeckriptionContainer>
				</li>
			</ul>
		</Section>
	);
};

export { FAQ };
