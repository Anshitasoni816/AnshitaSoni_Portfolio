import React, { useState } from "react";
import NptelCertificate from '../../assets/NPTEL_Certificate.jpg'
import ReactCertificate from '../../assets/certificate_page-0001.jpg'
import JSCertificate from '../../assets/JavaScriptCertificate.webp'
import NptelBigDataComputing from '../../assets/NPTEL_BIGDATA_COMPUTING_CERTIFICATE_page-0001.jpg'
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
            image: NptelCertificate, title: "Achieved 81% in Foundation of Cloud IoT Edge ML certification.", credentials: "https://1drv.ms/b/c/4a75efa212f547d5/ESgbaAQI-2lCtgCrjyipLdsB5qlKEB_ldLhafKCPb3hqxQ?e=eT79ED"
        },
        {
            image: ReactCertificate, title: "", credentials: "https://1drv.ms/b/c/4a75efa212f547d5/IQDVJwqCbaMLQqYDlgXMXe5dARCeK6aNKY6QQ_Ixx8QNtBQ?e=7oQhdw"
        },
        {
            image: JSCertificate, title: "", credentials: "https://1drv.ms/b/c/4a75efa212f547d5/IQCGEqgbeUcZQruP0cL-f2GeAQioDjkaqlatGfbX7oXPkG4?e=aNmiaR"
        },
        {
            image: NptelBigDataComputing, title: "", credentials: "https://1drv.ms/i/c/4a75efa212f547d5/IQBknW_mvhNoSZcK6m4zcuwAATuMZafFYwqdQUfZX8o4Tr8?e=vBcnkX"
        },
    ];

    return (
        <section
            id="Certificates"
            className="py-24 px-[10vw] md:px-[7vw] lg:px-[20vw]">
            <h2 className="font-bold text-4xl md:text-5xl text-center bg-gradient-to-b from-[#ff00cc]  to-[#3333ff] bg-clip-text text-transparent tracking-wider">Certificates</h2>
            <p className="text-center mt-8 text-white tracking-wide text-lg">Certifications reflecting my commitment to continuous learning and professional skill development.</p>

            <div className="text-white flex justify-center items-center md:gap-5 gap-3 mt-10">

                <div className="font-extrabold md:text-5xl text-xl cursor-pointer text-[#8345ec] hover:text-[#5713cd] transition duration-200"
                    onClick={Previous}> &lt; </div>

                <div>

                    <a href={certificates[currentIndex].credentials}
                        target='_blank'
                        rel='noopener noreferrer'>
                            <img
                            src={certificates[currentIndex].image}
                            alt={`${currentIndex + 1} certificates`}
                            className="md:h-[29vw] md:w-[40vw] object-cover border-2 border-white rounded-xl transition duration-700 transform hover:scale-103" /></a>

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
