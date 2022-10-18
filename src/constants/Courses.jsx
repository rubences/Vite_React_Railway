import { cursoPython, portadaSolid } from "./Images"

export const courses = [
    {
        id: 1,
        img: cursoPython,
        title: 'Python',
        subtitle: 'Curso backend python3 desde cero con proyecto real, APIs, JWT, SQL y GIT',
        description: 'Aprende a programar desde cero con Python y conviertete en desarrollador backend con Python y SQL creando una api rest',
        type: 'Curso',
        date: '20/08/2022',
        icon: <i className="fab fa-python text-light fs-2 align-self-center me-3"></i>
    },
    {
        id: 2,
        img: portadaSolid,
        title: 'Python',
        subtitle: 'Patrones de diseño y principios solid con Python',
        description: 'Aprende los patrones de diseño mas importantes y los principios solid, todo con Python y ejemplos con un proyecto real',
        type: 'Curso',
        date: '20/08/2022',
        icon: <i className="fab fa-python text-light fs-2 align-self-center me-3"></i>
    }
]