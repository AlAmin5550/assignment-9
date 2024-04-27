import trust from "../assets/trust.png"
import resort from "../assets/resort.png"
import good from "../assets/good.png"
import review from "../assets/customer-review.png"

const Company = () => {
    return (
        <div className="container mx-auto mt-16">
            <h1 className="text-4xl font-semibold text-blue-500">Why Us?</h1>
            <div className="flex flex-col lg:flex-row mt-3">
                <div className="items-center w-32  mx-auto">
                    <img className="w-28 " src={resort} alt="" />
                    <h1 className="text-xl font-thin ">6000 Luxury resorts sold.</h1>

                </div>
                <div className="items-center w-32  mx-auto">
                    <img className="w-28 " src={trust} alt="" />
                    <h1 className="text-xl font-thin ">Trusted all over world</h1>

                </div>
                <div className="items-center w-32  mx-auto">
                    <img className="w-28 " src={good} alt="" />
                    <h1 className="text-xl font-thin ">Best in the business</h1>

                </div>
                <div className="items-center w-32  mx-auto">
                    <img className="w-28 " src={review} alt="" />
                    <h1 className="text-xl font-thin ">Best rated agents</h1>

                </div>
            </div>
            
        </div>
    );
};

export default Company;