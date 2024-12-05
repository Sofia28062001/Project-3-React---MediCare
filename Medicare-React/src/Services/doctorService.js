import api from "../Services/index";


// Obtener todos los médicos
 const getAllDoctors = async () => {
    try {
        const { data } = await api.get("/doctors", {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });
        return data;
    } catch (error) {
        console.error("Error al obtener médicos:", error.message);
        throw new Error("No se pudieron obtener los médicos");
    }
};

// Obtener un médico por su ID
 const getOneDoctor = async (id) => {
    try {
        const { data } = await api.get(`/doctors/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener el médico con ID ${id}:`, error);
        throw new Error("No se pudo obtener el médico");
    }
};


// Obtener todas las citas de un médico
 const getDoctorAppointments = async (medicoID) => {
    try {
        const { data } = await api.get(`/doctors/${medicoID}/appointments`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener las citas del médico con ID ${medicoID}:`, error);
        throw new Error("No se pudieron obtener las citas del médico");
    }
};


// Obtener un paciente específico de un médico
 const getOnePatient = async (medicoID, pacienteID) => {
    try {
        const { data } = await api.get(`/doctors/${medicoID}/patients/${pacienteID}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener el paciente con ID ${pacienteID} para el médico ${medicoID}:`, error);
        throw new Error("No se pudo obtener el paciente");
    }
};



// Crear una prescripción para un paciente asignado a un médico
 const createPrescriptionByDoctor = async (medicoID, pacienteID, prescriptionData) => {
    try {
        const { data } = await api.post(
            `/doctors/${medicoID}/patients/${pacienteID}/prescriptions`,
            prescriptionData,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            }
        );

        return data;
    } catch (error) {
        console.error(`Error al crear una prescripción para el paciente ${pacienteID} y médico ${medicoID}:`, error);
        throw new Error("No se pudo crear la prescripción");
    }
};

// Obtener todas las prescripciones de un paciente asignado a un médico
 const getPatientPrescriptionsByDoctor = async (medicoID, pacienteID) => {
    try {
        const { data } = await api.get(`/doctors/${medicoID}/patients/${pacienteID}/prescriptions`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(
            `Error al obtener las prescripciones del paciente ${pacienteID} y médico ${medicoID}:`,
            error
        );
        throw new Error("No se pudieron obtener las prescripciones");
    }
};

export {
    getAllDoctors,
    getOneDoctor,
    getDoctorAppointments,
    getOnePatient,
    createPrescriptionByDoctor,
    getPatientPrescriptionsByDoctor
}