const usersList = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'}
]

const getUniqueBy = (arr, prop) => {
    const foundValues = new Set();
    return arr.filter(el => !foundValues.has(el[prop]) && foundValues.add(el[prop]));
};

console.log(getUniqueBy(usersList, 'id'));
