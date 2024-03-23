import {NavList, NavLink } from "./NavMenu.styled";

const NavMenu = () => {
  return (
			<nav>
				<NavList>
					<li>
						<NavLink>About</NavLink>
					</li>
					<li>
						<NavLink>M-Map</NavLink>
					</li>
					<li>
						<NavLink>FAQ</NavLink>
					</li>
					<li>
						<NavLink>Arts</NavLink>
					</li>
					<li>
						<NavLink>Mint</NavLink>
					</li>
				</NavList>
      </nav>
	);
}

export { NavMenu };