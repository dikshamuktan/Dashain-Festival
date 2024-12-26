import axios from "axios"

const api= axios.create({
    baseURL:"https://13.126.44.173/api",
});

api.interceptors.request.use((config)=>{
    const token= localStorage.getItem("token");
    if(token){
        config.headers.Authorization= `Bearer ${token}`
    }
    return config;
})

export default api;