import { Container, Nav, Navbar } from 'react-bootstrap';

export const Header = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<header>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="bg-primary"
				data-bs-theme="dark"
				fixed="top"
			>
				<Container>
					<Navbar.Brand href="#about" onClick={handleScrollToTop}>Portfolio</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<Nav.Link href="#about" onClick={handleScrollToTop}>About</Nav.Link>
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
