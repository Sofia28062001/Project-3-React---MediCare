import api from "../Services/index";


// Iniciar sesión como paciente
const loginPatient = async (credentials) => {
    try {
        const { data } = await api.post("/auth/loginPatient", credentials);
        return data;
    } catch (error) {
        console.error("Error al iniciar sesión como paciente:", error);
        throw new Error("No se pudo iniciar sesión");
    }
};

// Registrarse como paciente
const signupPatient = async (userData) => {
    try {
        const { data } = await api.post("/auth/signupPatient", userData);
        return data;
    } catch (error) {
        console.error("Error al registrarse como paciente:", error);
        throw new Error("No se pudo completar el registro");
    }
};

// Iniciar sesión como doctor
const loginDoctor = async (credentials) => {
    try {
        const { data } = await api.post("/auth/loginDoctor", credentials);
        return data;
    } catch (error) {
        console.error("Error al iniciar sesión como doctor:", error);
        throw new Error("No se pudo iniciar sesión");
    }
};

// Registrarse como doctor
const signupDoctor = async (userData) => {
    try {
        const { data } = await api.post("/auth/signupDoctor", userData);
        return data;
    } catch (error) {
        console.error("Error al registrarse como doctor:", error);
        throw new Error("No se pudo completar el registro");
    }
};

export {
    loginPatient,
    signupPatient,
    loginDoctor,
    signupDoctor
}