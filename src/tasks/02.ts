type LocalCityType={
    title: string
    country: string
}
type AddressType={
    streetTitle: string
    city:LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType={
    id: number
    name: string
    age: number
    isActive: boolean
    address:AddressType
    technologies: Array<TechnologiesType>
}
export const student: StudentType = {
    id: 1,
    name: "Nastya",
    age: 31,
    isActive: false,
    address:{
        streetTitle: "Rechnaya",
        city: {
            title:"Ratomka",
            country: "Belarus"
        }
    },
    technologies:[
        {
            id:1,
            title: "HTML"
        },
        {
            id:2,
            title:"JS"
        },
        {
            id:3,
            title:"React"
        }
    ]
}
console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)
