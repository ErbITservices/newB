const mongoose=require('mongoose');

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,    
    },
    email:{
        type:String,
        required:true,    
    },
    phone:{
        type:String,
        required:true,    
    },
    password:{
        type:String,
        required:true,    
    },
    isAsmin:{
        type:Boolean,
        default:false,
    },
});

const Admin = mongoose.model('Admin',adminSchema);

module.exports=Admin;







