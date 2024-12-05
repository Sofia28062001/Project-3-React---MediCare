import api from "../Services/index";

// Obtener todas las citas
 const getAllAppointments = async () => {
    try {
        const { data } = await api.get("/appointments", {
            headers: {
                Authorization: localStorage.getItem("token"), // Añadir token desde localStorage
            },
        });

        return data; // Devolver los datos directamente
    } catch (error) {
        console.error("Error al obtener citas:", error);
        throw new Error("No se pudieron obtener las citas");
    }
};

// Obtener una cita por su ID
 const getOneAppointment = async (id) => {
    try {
        const { data } = await api.get(`/appointments/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener la cita con ID ${id}:`, error);
        throw new Error("No se pudo obtener la cita");
    }
};

// Crear una nueva cita
 const createAppointment = async (appointmentData) => {
    try {
        const { data } = await api.post("/appointments", appointmentData, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error("Error al crear cita:", error);
        throw new Error("No se pudo crear la cita");
    }
};

// Eliminar una cita
const deleteAppointment = async (id) => {
    try {
        const { data } = await api.delete(`/appointments/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al eliminar la cita con ID ${id}:`, error);
        throw new Error("No se pudo eliminar la cita");
    }
};

export {
    getAllAppointments,
    getOneAppointment,
    createAppointment,
    deleteAppointment
}