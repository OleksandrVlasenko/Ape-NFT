import { Title, Number, Name, Description } from "./FAQ.styled";

const FAQ = () => {
	return (
		<section>
			<Title>faq</Title>
			<ul>
				<li>
					<img src="" alt="" />
					<Number>[ 1 ]</Number>
					<Name>What is an nft collection?</Name>
					<Description>
						An NFT collection is a group of unique digital assets, each
						represented by a non-fungible token, typically created around a
						specific theme or style.
					</Description>
				</li>
				<li>
					<img src="" alt="" />
					<Number>[ 2 ]</Number>
					<Name>How do I purchase nfts from a collection?</Name>
					<Description>
						To purchase nfts from a collection, you typically need to use
						cryptocurrency on a blockchain0based marketplace.
					</Description>
				</li>
				<li>
					<img src="" alt="" />
					<Number>[ 3 ]</Number>
					<Name>Can I sell or trade nfts from a collection?</Name>
					<Description>
						Yes, you can sell or trade NFTs from a collection like you would
						other digital assets.
					</Description>
				</li>
				<li>
					<img src="" alt="" />
					<Number>[ 4 ]</Number>
					<Name>What rights do I have as an owner of an nft?</Name>
					<Description>
						As an NFT owner, you can own, transfer, potentially access exclusive
						content, resell, but don't automatically get copyright or
						intellectual property rights.
					</Description>
				</li>
			</ul>
		</section>
	);
};

export { FAQ };
