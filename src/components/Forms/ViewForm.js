import React from 'react';
import { FormBuilder } from 'react-formio';
function ViewForm() {
    return (
        <FormBuilder form={{ display: 'form' }} onChange={(schema) => console.log(schema)} />
    );
}
export default ViewForm;