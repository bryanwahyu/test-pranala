prime=async (req,res,next)=>{
    const {limit}= req.body()
    if (limit<2){
        return res.status(200).json({
            message:'tidak  bilangan prima ',
            data:null
        })
    } 
    let prime =[]
    let i=2;
     while (i<limit){
        if(this.isPrime(i)){
            prime.push(i)
        }
        i++
     }
     return res.status(200).json({
        message:"Prime number",
        data:prime
        })
}
odd=async (req,res,next)=>{
    const {limit}=req.body()
    let i=1
    let odd=[]
    while(i<limit){
        if(this.isOdd(i)){
            odd.push(i)
        }
        i++
    }
    return res.status(200).json({
        message:"odd number",
        data:odd
    })

}
formatNumber=async (req,res,next)=>{
    let  {num}=req.body()
    let array=this.isFormatedNumber(num)
    return res.status(200).json({
        message:"num",
        data:array
    })
}
isFormatedNumber=(num)=>{
    const string=num.toString()
    let array=[]
    for(let i=0; i<string.length;i++){
        const digitValue= string[i]
        const padded= digitValue.toString().padStart(i,'0')
        array.push(padded)
    }
    return array
}
isOdd= (num)=>{
    if(num%2===1)return true;
    return false
}
isPrime =(num)=>{
    if(num<=1) return false;
    if(num<=3) return true;
     
    if(num % 2 === 0  || num %3 ===0) return false;
    for(let i=5; i*i <=num;i+=6){
        if(num % i===0 || num*(i+2)===0) return false;
    } 
    return true;
}
module.exports={
    isOdd,
    isPrime,
    isFormatedNumber,
    formatNumber,  
    odd,
    prime
}