import './style.css'

const BaseImagePath = 'https://image.tmdb.org/t/p/original';

export const FeaturedMovie = ({movie}) => {
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
                            <span style={{color: 'green'}}>
                                {`${movie.vote_average} pontos`}
                            </span>
                            <span>
                                {movie.first_air_date?.slice(0,4)}
                            </span>
                            <span>
                                {`${movie.number_of_seasons} Temporada${movie.number_of_seasons > 1 ? 's' : ''}`}
                            </span>
                        </div>
                        <p className="featured-movie__overview">
                            {movie.overview?.length > 250 ? `${movie.overview?.slice(0,250)} [...]` : movie.overview}
                        </p>

                        <div className="featured-movie__cta">
                            <button className="button-white">Assistir</button>
                            <button className="button-black">+ Minha Lista</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}