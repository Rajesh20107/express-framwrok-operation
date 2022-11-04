import framework from 'express'
const application=framework();

application.get('/Rajesh',(req,res)=>{
    res.send(JSON.stringify({message:"Welcome to Node JS Book",
    Books:{
        BookList: "programming books available",
        category:"NodeJS, JAVA,DOTNET",
        status: "Available"
    },
    endingMessage:" first Nodejs Express Book"  }))
    
})
application.listen(3000,()=>{
    console.log("Server is listening Books availability")
});