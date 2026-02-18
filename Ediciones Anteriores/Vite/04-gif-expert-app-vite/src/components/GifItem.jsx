import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {
    return(
        <div className="w-60 h-64 flex-col items-center justify-center bg-gray-100 p-1.5 m-2 rounded-xl shadow-2xl">
            <img
                className="w-full h-4/5 object-cover"
                src={url}
                alt={title}
            />
            <p className="w-full h-1/5 flex items-center justify-center text-center text-sm font-medium">
                {title}
            </p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}