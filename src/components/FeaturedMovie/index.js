import './style.css'

const BaseImagePath = 'https://image.tmdb.org/t/p/original';

export const FeaturedMovie = ({movie}) => (
    <>
        <div className="featured-movie" style={{
            backgroundImage: `url('${BaseImagePath}${movie.backdrop_path}')`,
            backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
            <div className="featured-movie__box">
                
            </div>
        </div>
    </>
)