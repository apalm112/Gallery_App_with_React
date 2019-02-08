import React from 'react';

import Loading from './exceeds/Loading';
import NotFound from './exceeds/NotFound';
import Photo from './Photo';

const PhotoContainer = (props) => {
	console.log('OVER HERE searchText:::::::::::', props.searchText);
	let pherters = props.flickrPhotos;

	return (
		<div className="photo-container">
			<h2>{props.searchText}</h2>
			<ul>
				{
					pherters.length > 0
						? pherters.map((photo) =>
							<Photo
								farm={photo.farm}
								server={photo.server}
								secret={photo.secret}
								id={photo.id}
								key={photo.id}
							/>)
						: <NotFound query={props.searchText}/>
				}
			</ul>
		</div>
	);
};

export default PhotoContainer;
