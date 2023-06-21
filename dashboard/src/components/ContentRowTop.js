import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg'
import { ContentRowMovies } from './ContentRowMovies';
import { LastMovieInDb } from './LastMovieInDb';
import { GenresInDb } from './GenresInDb';
function ContentRowTop() {
	return (
		<>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<ContentRowMovies />


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					<LastMovieInDb ruta={imagenFondo} />

					{/*<!-- Genres in DB -->*/}
					<GenresInDb />

				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</>
	)

}
export default ContentRowTop;