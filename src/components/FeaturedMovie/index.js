import './style.css'

const BaseImagePath = 'https://image.tmdb.org/t/p/original';

export const FeaturedMovie = ({movie}) => {
    console.log(movie)
    return (
        <>
            <div className="featured-movie" style={{
                backgroundImage: `url('${BaseImagePath}${movie.backdrop_path}')`,
                backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
                <div className="featured-movie__box">
                    <div className="featured-movie__details">
                        <h1 className="featured-movie__title">
                            {movie.name}
                        </h1>
                        <div className="featured-movie__info">
                            <span>
                                {movie.first_air_date?.slice(0,4)}
                            </span>
                            <span>
                                {`${movie.number_of_seasons} Temporada${movie.number_of_seasons > 1 ? 's' : ''}`}
                            </span>
                            <span>
                                {`${movie.vote_average} / 10`}
                            </span>
                        </div>
                        <p className="featured-movie__overview">
                            {movie.overview?.length > 250 ? `${movie.overview?.slice(0,250)} [...]` : movie.overview}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}