import React, { useState, useEffect } from "react";
import { postData, verification } from "./logic";

const Form = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const isModalOpen = props.isModalOpen;
    const setIsModalOpen = props.setIsModalOpen;
    const [isValidated, setIsValidated] = useState(false);
    const [mortalMessage, setMessage] = useState("Form submitted successfully!");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const isVerified = await verification(inputValue);
        console.log(isVerified, "form");
        if (!isVerified) {
            setMessage("Invalid User Name || Network Error");
        } else {
            const isPosted = await postData(inputValue);
            if (isPosted) {
                setMessage("Data registered and submitted");
            } else {
                setMessage("Network Error while submitting data");
            }
        }
        setIsValidated(true);
        setIsLoading(false);
    };


    useEffect(() => {
        if (isValidated) {
            // Automatically close the modal after 5 seconds
            const timeout = setTimeout(() => {
                setIsModalOpen(false);
                setIsValidated(false);
                setInputValue("");
            }, 3000);
            // setMessage("Form submitted successfully!");
            // Clear the timeout when the component unmounts or when isModalOpen changes
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [isValidated, setIsModalOpen]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-yellow-50 p-4 rounded shadow-md md:w-96 w-80">
                        {isValidated ? (
                            <p className="text-green-500 text-center">{mortalMessage}</p>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-zinc-800 text-2xl font-bold mb-4 text-center">Welcome to Rank List</h2>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-2 border-2 rounded text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 ${isValidated ? "border-green-500" : ""
                                            }`}
                                        placeholder="Your CodeForce's Id"
                                        required
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="submit"
                                        className={`mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Loading..." : "Submit"}
                                    </button>

                                    <button
                                        className={`mt-4 w-full px-4 py-2 bg-red-500 text-white rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                            }}`}
                                        onClick={() => setIsModalOpen(false)}
                                        disabled={isLoading}
                                    >
                                        Close
                                    </button>

                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Button */}
            {/* <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setIsModalOpen(true)}
            >
                Open Form
            </button> enable button when what to test from route */}
        </div>
    );
};

export default Form;
