const express=require('express');
const hbs=require('hbs')



const app=express()
app.use('view engine',"hbs");




app.get('/',function(req,res,next){
    res.render('acc');
})



const port=1000;
app.listen(1000,function(){
    console.log(`le server est lancer a cette adress http://localhost:${port}`);
})