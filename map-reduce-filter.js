const arr =[1,2,3,4,5,6,7,8];



const arr2=arr.map(
    function double(item){
        return item*2;
    }
)

console.log(arr2);

const sum=arr.reduce(
    function addAll(a,b)
    {
        return a+b;
    }
)

console.log(sum);


const even=arr.filter(
    function evenNumber(item){
        if(item%2===0)
        {
            return item;
        }
    }
)

console.log(even);