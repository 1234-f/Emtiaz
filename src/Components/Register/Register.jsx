
const Register = () => {
    return (
        <div className="mt-16 flex flex-col gap-7 justify-center items-center">
            {/* header section */}
            <h1 className="text-5xl font-medium">Registration</h1>
            <div className="w-full">
                <hr className="m-4 h-[6px] bg-[#376576] rounded" />
            </div>
            {/* form section */}
            <div>
                <div className="form-control">
                    <label className="input-group">
                        <select className="select select-bordered bg-[#376576] text-base text-white font-medium mr-2 rounded">
                            <option disabled selected>Mr</option>
                            <option>Mrs</option>
                            <option>Mr</option>
                        </select>
                        <input type="text" placeholder="First name" className="input text-lg input-bordered border-2 pl-8 w-4/5 md:pr-[176px]" />
                    </label>
                </div>
            </div>
            <div className="flex justify-start">
                <input type="text" placeholder="Last name" className="input text-lg input-bordered border-2 pl-8 md:pr-[17rem]" />
            </div>
            <div>
                <div className="form-control">
                    <label className="input-group">
                        <select className="select select-bordered bg-[#376576] text-base text-white font-medium">
                            <option disabled selected>+880</option>
                            <option>+93</option>
                            <option>+355</option>
                        </select>
                        <input type="text" placeholder="Contact Number" className="input input-bordered border-2  w-4/5 md:pr-[219px]" />
                    </label>
                </div>
            </div>
            <div className="flex justify-start">
                <input type="text" placeholder="Email" className="input text-lg input-bordered border-2 pl-8 md:pr-[17rem]" />
            </div>
            <div className="flex justify-start flex-col md:flex-row gap-4">
                <input type="text" placeholder="Password" className="input text-lg input-bordered border-2 " />
                <input type="text" placeholder="Repeat Password" className="input text-lg input-bordered border-2" />
            </div>
        </div>
    );
};

export default Register;