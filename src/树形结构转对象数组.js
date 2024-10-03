
function treeToArray(tree) {
    const ans = []

    function deep(node) {
        ans.push({
            id: node.id,
            name: node.name
        })
        if(node.children) {
            for(let x of node.children) {
                deep(x)
            }
        }
    }

    deep(tree)
    return ans
}

const tree = {
    id: '1',
    name: 'node1',
    children: [
        {
            id: '2',
            name: 'node2',
            children: [
                {
                    id: '3',
                    name: 'node3'
                },
                {
                    id: '5',
                    name: 'node5'
                }
            ]
        }, 
        {
            id: '4',
            name: 'node4',
            children: [
                {
                    id: '6',
                    name: 'node6',
                    children: [
                        {
                            id: '7',
                            name: 'node7'
                        }
                    ]
                }
            ]
        }
    ]
}
console.log(treeToArray(tree))
