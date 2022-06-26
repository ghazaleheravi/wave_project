import React, { useState } from 'react';
import Edit from '../components/Edit';

function Customers(props) {
  const [isEditing, setEditing] = useState(false);

  const viewTemplate = (
    <div className="customer_container">
        <ul>
          <div className="customer_ul">
            <li>{props.name}</li>
            <li>{props.email}</li>
            <li>{props.phone}</li>
            <button 
              type="button"
              className="edit_btn"
              onClick={() => setEditing(true)}
              >edit
            </button>
          </div>
        </ul>
        <hr className="breaker"/>
    </div>
  );

  const editingTemplate = (
    <div>
    <Edit 
      data={props} 
      setEditing={setEditing} 
    /> 
    <hr />
    </div>
  )

  return (
    <div>
      {isEditing ? editingTemplate : viewTemplate}
    </div>
  );
}

export default Customers;