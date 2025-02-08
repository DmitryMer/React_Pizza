export const customStorage = (data) => {
    return localStorage.setItem("data", JSON.stringify(data));
};
