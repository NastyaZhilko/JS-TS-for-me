console.log('Request data...')

/*setTimeout(()=>{
    console.log('Preparing data...')
    const backendData = {
        server: 'aws',
        port: 2000,
        status:'working'
    }
    setTimeout(()=>{
        backendData.modified=true
        console.log('Data received', backendData)
    })
},2000)*/

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)//вызывая ф-ию resolve, мы говорим промису, что он завершил свое выполнение
    }, 2000)
})
//ф-ия resolve вызывается тогда, когда успешно закончена асинхронная операция


//методы промиса
//1) .then
//2) .catch в случае, если есть ошибка, мы будем попадаь в метод catch
//3) .finally будет вызван в любом случае
p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then((clientData) => {
        console.log('Data received', clientData)
        clientData.fromPromise = true
        return clientData
    })
    .then(data => {
        console.log('Modified', data)
    })
    .catch(err => console.error('Error', err))
    .finally(()=>{
        console.log('Finally')
    })

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
sleep(2000).then(()=>console.log('Alert 2 sec'))
sleep(3000).then(()=>console.log('Alert 3 sec'))

//методы глобального класса Promise
//1) .all возвращает промис, и данный промис будет выполнен только тогда, когда завершаться все промисы в эом массиве
//2) .race  когда выполнится первый промис, он сразу же отработает
Promise.all([sleep(2000), sleep(5000)].then(()=>{
    console.log('All promises')
}))
Promise.race([sleep(2000), sleep(5000)].then(()=>{
    console.log('Race promises')
}))

export default () => {
};