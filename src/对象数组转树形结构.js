function arrayToTree(array) {
    const map = {}
    const result = []
    for(let a of array) {
        map[a.id] = { ...a, children:[] }
    }
    for(let a of array) {
        if(a.parentId === null) {
            result.push(map[a.id])
        } else {
            if(map[a.parentId]) {
                map[a.parentId].children.push(map[a.id])
            }
        }
    }
    return result
}

const data = [
    { id: 6, name: 'Node 6', parentId: 5 },
    { id: 2, name: 'Node 2', parentId: 1 },
    { id: 3, name: 'Node 3', parentId: 1 },
    { id: 1, name: 'Node 1', parentId: null },
    { id: 4, name: 'Node 4', parentId: 2 },
    { id: 5, name: 'Node 5', parentId: 3 },
];
const tree = arrayToTree(data);
console.log(JSON.stringify(tree, null, 2));