import React, { useEffect, useState } from 'react';
import { FormBuilder } from 'react-formio';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, Col, Row, CardFooter, Button } from 'reactstrap';
import { useParams } from "react-router-dom";
import { getOneForm, updateOneForm, resetForm } from '../../actions/formActions';
import { fetchSchemas, createSchema, getOneSchema, resetSchema } from '../../actions/schemaActions';
function ViewForm(props) {
  const { id } = useParams();
  const { getForm, form, saveSchema, currentSchema,
    updateForm, getSchema, resetForm, resetSchema } = props;
  const [formSchema, setFormSchema] = useState({});
  useEffect(() => {
    getForm(id);
  }, [getForm, id]);

  useEffect(() => {
    return ()=>{
      resetForm();
      resetSchema();
    }
  }, [resetForm,resetSchema]);

  useEffect(() => {
    
    if (!currentSchema?._id && form?.currentSchemaId) {
      getSchema(form.currentSchemaId);
    }
  }, [getSchema, form,currentSchema]);

  useEffect(() => {
    if (currentSchema?._id && (currentSchema?._id !== form.currentSchemaId)) {
      const formPayload = { ...form, currentSchemaId: currentSchema._id }
      updateForm(formPayload);
    }
  }, [currentSchema, updateForm, form]);

  const handleSchemaSubmit = (evt) => {
    evt.preventDefault();
    const payload = { ...{ formId: id }, ...formSchema }
    saveSchema(payload);
  }
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <CardTitle className="mb-0">Latest Schema  for form {form?.name}</CardTitle>
              </Col>
            </Row>
            <FormBuilder form={currentSchema} onChange={(schema) => setFormSchema(schema)} />
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary"
              onClick={handleSchemaSubmit}
            ><i className="fa fa-dot-circle-o"></i> Save Schema</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
const mapStateTopProps = (state) => {
  return {
    form: state.form.form,
    loadingForm: state.form.loading,
    loadingSchema: state.schema.loading,
    currentSchema: state.schema.schema
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getForm: (id) => {
      dispatch(getOneForm(id));
    },
    getSchemas: (id) => {
      dispatch(fetchSchemas(id));
    },
    saveSchema: (payload) => {
      dispatch(createSchema(payload));
    },
    getSchema: (id) => {
      dispatch(getOneSchema(id));
    },
    updateForm: (payload) => {
      dispatch(updateOneForm(payload));
    },
    resetForm: () => {
      dispatch(resetForm());
    },
    resetSchema: () => {
      dispatch(resetSchema());
    },
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(ViewForm);