// Default theme
import "@splidejs/react-splide/css"

// or other themes
import "@splidejs/react-splide/css/skyblue"
import "@splidejs/react-splide/css/sea-green"

// or only core styles
import "@splidejs/react-splide/css/core"

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import { useParams } from "react-router-dom"

const splide = {
	type: "loop",
	focus: "center",
	drag: "free",
	autoWidth: true,
	height: "500px",
	gap: "1rem",
	arrows: false,
	autoStart: true,
	autoplay: "false",
	autoScroll: {
		speed: 1,
	},

	breakpoints: {
		640: {
			perPage: 2,
			gap: ".7rem",
		},
		480: {
			perPage: 1,
			gap: ".7rem",
			height: "300px",
		},
	},
}

export default function ImageGallery({ images, autoplay = true }) {
	return (
		<div className="ImageGallery">
			<Splide
				options={splide}
				extensions={autoplay && { AutoScroll }}
				hasTrack={false}
			>
				<SplideTrack>
					{images?.map((image) => {
						return (
							<SplideSlide key={images?.imagePath}>
								<div className="rounded-xl h-full overflow-hidden">
									<img className=" h-full" src={image?.imagePath} alt="" />
								</div>
							</SplideSlide>
						)
					})}
				</SplideTrack>
			</Splide>
		</div>
	)
}
