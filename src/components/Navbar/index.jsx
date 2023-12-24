import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" className="bg-primary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="#about">Portfolio</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mx-auto">
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#experience">Experience</Nav.Link>
					<Nav.Link href="#skills">Skills</Nav.Link>
					<Nav.Link href="#projects">Projects</Nav.Link>
					<Nav.Link href="#education">Education</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
			</Navbar>
		</header>
	);
};
