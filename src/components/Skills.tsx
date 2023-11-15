import { useState } from "react"

const arrSkills = [
    {
        caminho: "./public/javascript.png",
        name: "Javascript",
        information: "Descrição de Javascript aqui"
    },
    {
        caminho: "./public/typescript.png",
        name: "Typescript",
        information: "Descrição de Typescript aqui"
    },
    {
        caminho: "./public/react.png",
        name: "React",
        information: "Descrição de React aqui"
    },
    {
        caminho: "./public/python.png",
        name: "Python",
        information: "Descrição de Python aqui"
    },
    {
        caminho: "./public/sql.png",
        name: "SQL",
        information: "Descrição de SQL aqui"
    },
    {
        caminho: "./public/rpa.png",
        name: "RPA",
        information: "Descrição de RPA aqui"
    }
]

export default function Skills() {
    const [indexShowCard, setIndexShowCard] = useState(-1);

    const showCard = (index: number) => {
        setIndexShowCard(index)
      };
    
    const hideCard = () => {
        return setTimeout(() => { setIndexShowCard(-1)}, 2000);
      };

    const renderSkills = arrSkills.map((skill, index)=> {
        return (
            <div className="bg-white mx-16 my-5 p-6 rounded-xl shadow-lg shadow-emerald-800 " onMouseOver={() => showCard(index)} onMouseLeave={hideCard} key={index}>
                {
                    indexShowCard === index ? 
                        <div className="max-w-[160px] flex flex-col items-center min-h-[160px] ">
                            <h2 className="text-black text-3xl">
                                {skill.name}
                            </h2>
                            <p className="text-black text-center">
                                {skill.information}
                            </p>
                        </div> 
                    : 
                        <div className="w-40 h-40 bg-cover text-black" style={{ backgroundImage: `url(${skill.caminho})` }}>
                        </div>
                }
            </div>
        )
    })

    return (
        <div className="max-w-full">
            <h1 className="text-center p-10 text-5xl">
                Minhas Habilidades
            </h1>
            <div className="flex justify-center items-center">
                <div className="max-w-6xl flex flex-wrap items-center justify-center">
                    {renderSkills}
                </div>

                
            </div>
        </div>

    )
}