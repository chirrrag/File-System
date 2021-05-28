let root = {
    name : "d10",
    children: [
        {
            name : "d20",
            children: [
                {
                    name : "d50",
                    children : []
                },
                {
                    name : "d60",
                    children : []
                }
            ]
        },
        {
            name : "d30",
            children : [
                {
                    name : "d70",
                    children : []
                },
                {
                    name : "d80",
                    children : []
                }
            ]
        },
        {
            name : "d40",
            children : [
                {
                    name : "d90",
                    children : []
                },
                {
                    name : "d100",
                    children : []
                }
            ]
        }
    ]
};


function printTree(node, spacing) {
    console.log(spacing + node.name);
    for(let i =0; i < node.children.length; i++) {
        let child = node.children[i];
        printTree(child, spacing + "\t");
    }
}

printTree(root , "");


