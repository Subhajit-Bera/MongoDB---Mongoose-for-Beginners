const mongoose = require("mongoose");
mongoose.connect( "mongodb://localhost:27017/sample").then(()=>{console.log( "Connected to mongoDB successfully")}).catch((err)=>{console.log(err)});
//sample is database name

//Schema: Here we declare the fields of document/record
const student=new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
});

//Model means Collection
const Student=new mongoose.model("Student",student);



//Feeding data into Collection, means we are insert a document into the collection 
//We use async and await 
// Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.

const adder=async()=>{
//     //Method 1:
// //     const ss=new Student({
// //         name:"Subha",
// //         workout:true,
// //         height:6
// //     });
// //     //We can add multiple data, but we have to give a different name rather than ss.
    
// //    await ss.save(); // It will return a promise(fulfilled/rejected) ->until it returns further more execution will stop


    //Method 2: preferable
    const ss= await Student.create({
        name:"Rohit",
        workout:true,
        height:6
    });
}

adder(); //Calling the adder function to add data



//Read data:
const reader=async()=>{

    //Find all the documents and return an array
    // const ss= await Student.find();
    // console.log(ss);
    
    
    //Find records where heigh= 6;
    // const ss2= await Student.find({height:{$eq:6}});
    // console.log(ss2);


    const ss3= await Student.find({name:{$eq:"Subha"}});
    console.log(ss3);

    // comparison operator: https://www.mongodb.com/docs/manual/reference/operator/query/
    // $eq  -> Equal
    // $gt -> Greater than
    // $gte -> Greater than equal to 
    // $lt -> Less than
    // $lte -> less than equal to
    // $in -> Matches any of the values specified in array.
    // $nin -> Rather than the values present in the array. [5,6]-> despite of 5,6 it will show everything

    const ss4= await Student.find({height:{$nin:[5,6]}}); //return all the documents where height is neither 5 or 6
    console.log(ss4);

    const ss5= await Student.find({height:{$nin:[5,6]}}); //Despite of height 5,6 it will return all other documents
    console.log(ss5);
}

reader(); //Calling the reader function to add data