

const Info = () => {
    return (
        <div className="mt-16 container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <div className="" data-aos="fade-right">
                    <img className="w-full" src="https://ssl.cdn-redfin.com/v520.1.0/images/homepage/banners/premier.jpg" alt="" />
                </div>
                <div className="space-y-5 items-center lg: ml-20" data-aos="fade-left">
                    <h1 className="font-semibold text-3xl">Local expertise for luxury Villas</h1>
                    <p className="text-xl">Seaside Premier agents have years of experience buying and selling high-end homes. Get the highest level of service from our best agents.</p>
                    <button className="btn bg-blue-500 rounded-none text-white">Read More</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-10">
                <div className="space-y-5 items-center w-full" data-aos="fade-right">
                    <h1 className="font-semibold text-3xl">Resort for your perfect vacation</h1>
                    <p className="text-xl">Choose from a wide variety of resorts all over the world to spend the perfect vacation.</p>
                    <button className="btn bg-blue-500 rounded-none text-white">Read More</button>
                </div>
                <div className=" border lg:ml-20" data-aos="fade-left" >
                    <img className="w-full" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-10">
                <div className="" data-aos="fade-right">
                    <img className="w-full" src="https://images.unsplash.com/photo-1677879454954-2e4fcd3e1e58?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className="space-y-5 items-center lg: ml-20" data-aos="fade-left">
                    <h1 className="font-semibold text-3xl">Private islands and beachfront Properties</h1>
                    <p className="text-xl">Only we can provide you with a plethora of beachfront properties in private or public island which is full of luxury.</p>
                    <button className="btn bg-blue-500 rounded-none text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Info;