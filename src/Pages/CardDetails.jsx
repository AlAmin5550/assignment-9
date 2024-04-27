import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const paramsObject = useParams();
    const estateId = paramsObject.id
    const details = useLoaderData();

    const requiredDetails = details.find(detail => detail.id == estateId);
    const { estate_title, segment_name, price, status, area, location, image, facilities, description } = requiredDetails;
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen  " style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white">{estate_title}</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row  ">
                <div className="space-y-4 lg:w-2/3">
                <h1 className="text-xl text-gray-600">For: {status}</h1>
                <h1 className="text-xl text-gray-900">Location: {location}</h1>
                <hr />
                <h1 className="text-2xl font-bold">About this Estate</h1>
                <div className="flex flex-col lg:flex-row space-x-4">{
                    facilities.map((facility, id) => <p className="bg-gray-100 p-1 rounded-lg " key={id}>{facility}</p>)
                }</div>
                <p className="text-xl font-medium"> {description}</p>
                

                </div>
                
                <div className="flex flex-col space-y-4 lg:mt-10 ml-20">
                    <h1 className="text-2xl font-semibold "><span className="text-2xl font-thin text-blue-500 ">Price:</span>${price}</h1>
                    <h1 className="text-2xl font-semibold "><span className="text-2xl font-thin text-blue-500 ">Type:</span>{segment_name}</h1>
                    <p className="text-2xl font-semibold"><span className="text-2xl font-thin text-blue-500 ">Area:</span>{area}</p>
                </div>
               

            </div>
        </div>
    );
};

export default CardDetails;