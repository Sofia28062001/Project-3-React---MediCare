import api from "../Services/index";

// Obtener todas las recetas
const getAllPrescriptions = async () => {
    try {
        const { data } = await api.get("/prescriptions", {
            headers: {
                Authorization: localStorage.getItem("token"), // Añadir token desde localStorage
            },
        });

        return data; // Devolver los datos directamente
    } catch (error) {
        console.error("Error al obtener recetas:", error);
        throw new Error("No se pudieron obtener las recetas médicas");
    }
};

// Obtener una receta por su ID
const getOnePrescription = async (id) => {
    try {
        const { data } = await api.get(`/prescriptions/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener la receta con ID ${id}:`, error);
        throw new Error("No se pudo obtener la receta médica");
    }
};

// Crear una nueva receta
const createPrescription = async (prescriptionData) => {
    try {
        const { data } = await api.post("/prescriptions", prescriptionData, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error("Error al crear receta:", error);
        throw new Error("No se pudo crear la receta médica");
    }
};

// Eliminar una receta
const deletePrescription = async (id) => {
    try {
        const { data } = await api.delete(`/prescriptions/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al eliminar la receta con ID ${id}:`, error);
        throw new Error("No se pudo eliminar la receta médica");
    }
};


export {
    getAllPrescriptions,
    getOnePrescription,
    createPrescription,
    deletePrescription
}