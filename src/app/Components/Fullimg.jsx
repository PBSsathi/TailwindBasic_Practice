export default function Fullimg() {
    const skills = [
        {
            name: "C",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
            name: "C++",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
            name: "DSA",
            img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
        },
        {
            name: "Java",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
            name: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "AWS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <h1 className="text-3xl font-semibold text-center mx-auto">
                Our Latest Creations
            </h1>

            <div className="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto ">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full bg-white border shadow-md"
                    >
                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <img
                                className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                                src={skill.img}
                                alt={skill.name}
                            />

                            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
                                {skill.name}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}