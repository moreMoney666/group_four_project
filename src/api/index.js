import Ajax from "@/ajax/ajax";

//登录接口
export const reqLogin = (phone, password) =>{
    return Ajax.post("/login", { phone, password });
}
//注册接口
export const reqRegister = (userInfo) => {
    return Ajax.post("/register", userInfo);
}

export const reqCode = (phone)=>{
    return Ajax.post('/code',phone)
}