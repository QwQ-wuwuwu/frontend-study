
function transform(tree, id) {
    const obj = {}
    
    function deep(node, pres) {
        for(let t of node) {
            const key = t.id
            for(let p of pres) {
                obj[p].push(key)
            }
            obj[key] = []
            if(t.children) {
                deep(t.children, [...pres, key])
            }
        }
    }
    deep(tree, [])
    console.log(obj)

    return [...obj[id]]
}

const tree = [
  {
    id: "1",
    children: [
      {
        id: "2",
        children: [
          {
            id: "3",
            children: [{ id: '0' }]
          },
          {
            id: "4",
          },
        ],
      },
      {
        id: "5",
        children: [{ id: "6" }],
      },
    ],
  },
  {
    id: "7",
    children: [{ id: "8" }],
  },
];

console.log(transform(tree, 1))