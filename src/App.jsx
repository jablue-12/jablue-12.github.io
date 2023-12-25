import { Container } from 'react-bootstrap';
import { Header } from './components/Navbar';
import { Experience } from './components/Experience';
import { Project } from './components/Projects';



function App() {
	return (
		<>
			<Header />
			<Container className="mt-5 pt-3">
				<Experience/>
				<Project/>
				<div>
					{/* TODO: delete */}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas suscipit adipisci deserunt, perspiciatis minus expedita magni, reiciendis dolore ea, recusandae sint eius aliquam? Tempora ut at fugiat iste error voluptatem, earum id molestiae maxime modi veritatis? Consequatur nisi reprehenderit in provident incidunt. Quibusdam architecto quas, voluptas iure nulla soluta nam odio expedita natus pariatur consequuntur doloribus molestias. Distinctio, ipsa. Asperiores quo voluptatibus, voluptatum recusandae corporis consectetur aut tempora repellat expedita ratione illo corrupti dolores! Porro dignissimos debitis error culpa! Consequatur quia nihil nulla. Ullam tenetur asperiores delectus assumenda nobis ut molestias mollitia vel. Dignissimos repudiandae dolore praesentium, assumenda atque animi.
				</div>
			</Container>
		</>
	);
}

export default App;
