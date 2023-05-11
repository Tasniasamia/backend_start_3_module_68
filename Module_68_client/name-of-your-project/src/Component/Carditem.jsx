import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Carditem = (props) => {
    const handledelete=(_id)=>{
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log("delete confrim");
                fetch(`http://localhost:6600/coffee/${_id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
                 
                
                })
          
            }
          })
    }
    const propsdata=props.indexdata;
    console.log(propsdata)
    return (
        <div className="card card-side bg-base-100 shadow-xl flex justify-between p-4">
        <figure><img src={propsdata.Photo} alt="Movie"/></figure>
        <div className="card-body">
         <p>Name:{propsdata.coffename}</p>
         <p>Quantity:{propsdata.quantity}</p>
         <p>Taste:{propsdata.Taste}</p>  </div>
          <div className="card-actions">
          <div className="btn-group btn-group-vertical space-y-2">
  <button className="btn">View</button>
  <button className="btn"><Link to={`/UpdateCoffee/${propsdata._id}`}className='text-decoraton-none'>Update</Link> </button>
  <button className="btn bg-orange-900 "onClick={()=>handledelete(propsdata._id)}>Delete</button>
</div>
          </div>
      
      </div>
    );
};

export default Carditem;