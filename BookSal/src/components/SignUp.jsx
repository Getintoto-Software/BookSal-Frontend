import React,{useState} from "react";
import "../App.css"

const SignUp = () =>{
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
  };
    return(
        <form className="space-y-4">
            <div>
                <h2 className="text-3xl font-bold mb-2 text-[#347723] mt-8">SignUp</h2>
                <div className="border-2 w-10 border-[#347723] inline-block mb-6"></div>
                <div className="text-start">
                    <label 
                    className={`block mb-1 ${isLogin ? 'mb-1':'mb'} text-sm text-[#347723]`}
                    >Number</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Number"
                    />
                </div>
            </div>
            <div className="text-start">
            <label className="flex flex-col mb-1 text-sm justify-start text-[#347723]">Password</label>
            <input
                type="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Password"
            />
            </div>
            <div className="text-start">
                <label className="flex flex-col mb-1 text-sm justify-start text-[#347723]"> Confirm Password</label>
                    <input
                    type="password"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-10"
                    placeholder="Password"
                    />
            </div>
            <button
            type="submit"
            className="border-2 border-[#347723] text-[#347723] rounded-full px-10 py-2 inline-block font-semibold hover:text-white hover:bg-[#347723]"
            >
            Submit
            </button>
        </form>
    );
}
export default SignUp;