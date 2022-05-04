var prompt = require('prompt')

let fibSeq = [];
function generateF(len, n1, n2) {
    //check if this is the first two digits in the sequence
    if (!n2) {
        fibSeq.push(0, 1);
        generateF(len - 2, 0, 1);
        return;
    }
    //generate Fibonacci sequence.  
    //n2 becomes input 1, n1+n2 becomes input 2.
    else if (len > 0) {
        let nextF = n1 + n2;
        fibSeq.push(nextF)
        generateF(len - 1, n2, nextF);
    } else {
        console.log(fibSeq);
        console.log("FINISHED");
    }

}

prompt.get(['length'], (err, res) => {
    let len = res.length;

    generateF(len, undefined, undefined);

    if (err) { console.log(err) };
});