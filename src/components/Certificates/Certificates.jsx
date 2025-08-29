import React, { useState } from "react";
import NptelCertificate from '../../assets/NPTEL_Certificate.jpg'

const CertificatesSlider = () => {

    const [currentIndex, setcurrentIndex] = useState(0);


    const Previous = () => {

        if (currentIndex != 0) {
            setcurrentIndex(currentIndex - 1);
        }
        else {
            setcurrentIndex(certificates.length - 1);
        }
    }

    const Next = () => {

        if (currentIndex != certificates.length - 1) {
            setcurrentIndex(currentIndex + 1);
        }
        else {
            setcurrentIndex(0);
        }

    }

    const OpenSlide = (value) => {
        setcurrentIndex(value)

    }
    const certificates = [
        {
            image: NptelCertificate , title: "Achieved 81% in Foundation of Cloud IoT Edge ML certification."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRhqzydl6pybN8ilTVoHSnVYb5SVq-WzIQQ&s", title: "Achieved 81% in Foundation of Cloud IoT Edge ML certification."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjwR4e4hMXd_lKAYUEKOaIxoy0mNe1ahJIw&s", title: "Achieved 81% in Foundation of Cloud IoT Edge ML certification."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCYEVIaqIz-_VsZmeNtrAgQ7yfns4qLbwxw&s", title: "Achieved 81% in Foundation of Cloud IoT Edge ML certification."
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0L4BZXZS6GeIdKyuMqMhhWYBkqRN_oo4Meg&s", title: "Achieved 81% in Foundation of Cloud IoT Edge ML certification."
        }
    ];

    return (
        <section 
        id = "Certificates"
        className="py-24 px-[10vw] md:px-[7vw] lg:px-[20vw]">
            <h2 className="font-bold text-4xl md:text-5xl text-center bg-gradient-to-b from-[#ff00cc]  to-[#3333ff] bg-clip-text text-transparent tracking-wider">Certificates</h2>
            <p className="text-center mt-8 text-white tracking-wide text-lg">Currently, I hold one certificate. To demonstrate the slider functionality, I’ve included sample images, which will be replaced with actual certificates as I earn them.</p>

            <div className="text-white flex justify-center items-center md:gap-5 gap-3 mt-10">

                <div className="font-extrabold md:text-5xl text-xl cursor-pointer text-[#8345ec] hover:text-[#5713cd] transition duration-200"
                    onClick={Previous}> &lt; </div>

                <div>

                    <img
                     src={certificates[currentIndex].image} 
                     alt={`${currentIndex + 1} certificates`}
                     className="md:h-[29vw] md:w-[40vw] object-cover border-2 border-white rounded-xl transition duration-700 transform hover:scale-103"/>

                    <p className="leading-tight text-center italic text-sm md:text-lg font-medium mt-3">{certificates[currentIndex].title}</p>

                </div>

                <div className="font-extrabold md:text-5xl text-xl cursor-pointer text-[#8345ec] hover:text-[#5713cd] transition duration-200"
                    onClick={Next}> &gt; </div>

            </div>


            <div className="text-white flex justify-center items-center text-5xl md:gap-2 gap-1 font-bold cursor-pointer">
                
                    {
                        certificates.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => OpenSlide(index)}
                                className={`transition duration-300 transform hover:scale-100 ${currentIndex === index ? "text-[#8345ec]" : ""}`}
                            > 
                                .
                            </div>
                        ))
                    }

                
            </div>



        </section>
    );
};


export default CertificatesSlider;
