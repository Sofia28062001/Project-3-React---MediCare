import api from "../Services/index";

// Obtener todos los medicamentos
 const getAllMedications = async () => {
    try {
        const { data } = await api.get("/medications", {
            headers: {
                Authorization: localStorage.getItem("token"), // Añadir token desde localStorage
            },
        });

        return data; // Devolver los datos directamente
    } catch (error) {
        console.error("Error al obtener medicamentos:", error);
        throw new Error("No se pudieron obtener los medicamentos");
    }
};

// Obtener un medicamento por su ID
 const getOneMedication = async (id) => {
    try {
        const { data } = await api.get(`/medications/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener el medicamento con ID ${id}:`, error);
        throw new Error("No se pudo obtener el medicamento");
    }
};


// Eliminar un medicamento
 const deleteMedication = async (id) => {
    try {
        const { data } = await api.delete(`/medications/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al eliminar el medicamento con ID ${id}:`, error);
        throw new Error("No se pudo eliminar el medicamento");
    }
};


export {
    getAllMedications,
    getOneMedication,
    deleteMedication
}