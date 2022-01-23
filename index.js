let myEach = (collection, iteratee) => {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

    for (let idx = 0; idx < newCollection.length; idx++)
      iteratee(newCollection[idx])
    
    return collection 
}

let myMap = (collection, iteratee) => {
    if (!(collection instanceof Array))
      collection = Object.values(collection)

    const newArr = [ ]

    for (let idx = 0; idx < collection.length; idx++)
      newArr.push(iteratee(collection[idx]))

    return newArr 
}

let myReduce = (col = [], callback = () => {}, acc) => {
    let collection = col.slice(0)

    if (!acc){
      acc = collection[0]
      collection = collection.slice(1)
    }

    let len = collection.length;

    for (let i = 0; i < len; i++){
      acc = callback(acc, collection[i], collection)
    }
    return acc 
}

let myFind = (collection, predicate) => {
    if (!(collection instanceof Array))
    collection = Object.values(collection)

    for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) return collection[idx]

    return undefined
}

let myFilter = (collection, predicate) => {
    if (!(collection instanceof Array))
      collection = Object.values(collection)

    const newArr = []

    for (let idx = 0; idx < collection.length; idx++)
      if (predicate(collection[idx])) newArr.push(collection[idx])

    return newArr 
}

let mySize = (collection) => {
    return (collection instanceof Array) ? collection.length : Object.keys(collection).length
}

let myFirst = (collection, stop=false) => {
    return (stop) ? collection.slice(0, stop) : collection[0]
}

let myLast = (collection, start=false) => {
    return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
}

let myKeys = (obj) => {
    const keys = []
    for (let key in obj) {
        keys.push(key)
    }
    return keys
}

let myValues = (obj) => {
    const values = []
    for (let key in obj){
        values.push(obj[key])
    }
    return values
}