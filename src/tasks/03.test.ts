import {StudentType} from "./02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Nastya",
        age: 31,
        isActive: false,
        address: {
            streetTitle: "Rechnaya",
            city: {
                title: "Ratomka",
                country: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "JS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})
test("new tech skill should be added to added", () => {
    addSkill(student, "CSS")
    expect(student.technologies[3].title).toBe("CSS")
    expect(student.technologies.length).toBe(4)
})

test("student should be made active", ()=>{
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test("student lives is city?", ()=>{
   let result1 = doesStudentLiveIn(student, "Minsk")
   let result2 = doesStudentLiveIn(student, "Ratomka")
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})