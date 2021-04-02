export type Year = "1A" | "2A" | "3A";

export interface Module {
    id: string;
    name: string;
    description: string;
    teacher: string;
    year: Year;
    imageUrl: string;
}

class ModuleService {
    modules: Array<Module> = [
        {
            id: "1",
            year: "1A",
            name: "Introduction à la programmation",
            teacher: "P.A.Favier",
            description: "Module d'initiation à la programmation procédurale",
            imageUrl: "https://img.icons8.com/nolan/64/computer.png",
        },
        {
            id: "2",
            year: "1A",
            name: "Mathématiques",
            teacher: "J.Saracco",
            description: "Statistiques et probabilités",
            imageUrl: "https://img.icons8.com/nolan/64/math.png",
        },
        {
            id: "3",
            year: "2A",
            name: "Robotique",
            teacher: "J.M.Salotti",
            description: "Initiation à la robotique avec Nao",
            imageUrl: "https://img.icons8.com/nolan/64/robot-3.png",
        },
        {
            id: "4",
            year: "1A",
            name: "Outils de communication",
            teacher: "E.Clermont",
            description: "Communication et découverte des bases de données",
            imageUrl: "https://img.icons8.com/plasticine/100/000000/database.png",
        },
    ];

    // Load all modules asynchronously. Returns a Promise
    getAll(): Promise<Array<Module>> {
        return new Promise((resolve) => {
            resolve(this.modules);
        });
    }
}

export default new ModuleService();
