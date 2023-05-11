import React from 'react';
import Swal from 'sweetalert2'



// import 'sweetalert2/src/sweetalert2.scss'
const AddCoffee = () => {
    const getinputvalue=(event)=>{
        event.preventDefault();
        const coffename=event.target.Coffee_Name.value;
        const quantity=event.target.available_quantity.value;
        const supplies=event.target.Supplier.value;
        const Taste=event.target.Taste.value;
        const Catagory=event.target.Catagory.value;
        const Details=event.target.Details.value;
        const Photo=event.target.Photo.value;
        const user={
            coffename,quantity,supplies,Taste,Catagory,Details,Photo
        }
        fetch('http://localhost:6600/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'You have done Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
        
        })

    }
    return (
        <div style={{background:"#F4F3F0"}}className='p-20'>
            <h1 className='text-3xl font-extrabold'>AddCoffee Item</h1>
            <form onSubmit={getinputvalue}>
                <div className='md:flex mb-6'>
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Coffee Name"name="Coffee_Name" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Available Quantity"name="available_quantity" className="input input-bordered w-full" />
  </label>
</div>
</div>


<div className='md:flex mb-6'>
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Supplier</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Supplier"name="Supplier" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Taste</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Coffee Taste"name="Taste" className="input input-bordered w-full" />
  </label>
</div>
</div>



<div className='md:flex mb-6'>
        <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Catagory</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Catagory"name="Catagory" className="input input-bordered w-full" />
  </label>
</div>
<div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Details"name="Details" className="input input-bordered w-full" />
  </label>
</div>
</div>



<div className=' mb-6'>
        <div className="form-control md:w-full">
  
<div className="form-control md:w-full ">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <label className="input-group">

    <input type="text" placeholder="Enter Photo"name="Photo" className="input input-bordered w-full" />
  </label></div>
</div>
</div>
<button className="btn btn-block">Add Coffee</button>
</form>
</div>
    );
};

export default AddCoffee;