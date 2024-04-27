import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cards = ({ estate }) => {
    const {id, estate_title,segment_name,price,status,area,location,image } = estate;

    return (
        <div className="">
            <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <p rel="noopener noreferrer"  className="mb-0 capitalize text-gray-800">{location}</p>
                    </div>
                    <p rel="noopener noreferrer" >{status}</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>{segment_name}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold text-default-600">{estate_title}</h3>
                        </a>
                        <p className="leading-snug text-gray-600">${price}</p>
                        <p className="leading-snug text-gray-600">{area}</p>
                        
                        <Link to={`/cardDetails/${id}`}><button className='btn glass'>View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;

Cards.propTypes={
    estate: PropTypes.object,
}