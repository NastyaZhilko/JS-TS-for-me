import {mult, splitIntoWords, sum} from "./01";

//data
let a:number;
let b:number;
let c:number;
beforeEach(()=>{
     a=1;
     b=2;
     c=3;
})
test('sum should be correct', ()=>{

    //action
    const result1 = sum(a,b)
    const result2 = sum(b,c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)

})
test('multiply should be correct', ()=>{
    //data

    //action
    const result1 = mult(a,c)
    const result2 = mult(b,c)
    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(6)
})
test('splitting into words should be correct', ()=>{
    //data
    const sent1 = "Hello my friends!"
    const sent2 = "JS - the best programming language"
    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)
    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")
    expect(result2.length).toBe(5)
    expect(result2[2]).toBe("best")
})

