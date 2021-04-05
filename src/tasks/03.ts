import {StudentType} from "./02";

export const sum = (a:number, b:number) => {
    return a+b
}
export function sum2 (a:number, b:number) {
    return a+b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({id:new Date().getTime(),
    title: skill})
}
export const makeStudentActive =(s: StudentType)=>{
    s.isActive=true
}
export function doesStudentLiveIn (s: StudentType,cityName: string){
    return s.address.city.title===cityName
}