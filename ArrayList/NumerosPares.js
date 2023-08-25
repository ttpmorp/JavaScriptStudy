const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < n.length; i = i + 2) {
    const par = n[i];
    if (par % 2 === 0){
        console.log(par);
    }
    
}