import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { Form } from 'react-formio';
import { getOneForm, resetForm } from '../../actions/formActions';
import { getOneSchema, resetSchema } from '../../actions/schemaActions';
import { updateOneDataRecord, resetDataRecord, getOneDataRecord } from '../../actions/dataRecordActions';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
function EditDataDataRecord(props) {
    const { formId, id } = useParams();
    const { getForm, form, currentSchema, getSchema, resetForm,
        resetSchema, editDataRecord, resetDataRecord, currentSubmission, getDataRecord } = props;
    useEffect(() => {
        getForm(formId);
        // getDataRecord(id)
    }, [getForm, formId]);

    useEffect(() => {
        return () => {
            resetForm();
            resetSchema();
            resetDataRecord();
        }
    }, [resetForm, resetSchema, resetDataRecord]);

    useEffect(() => {
        if (!currentSchema?._id && form?.currentSchemaId) {
            getSchema(form.currentSchemaId);
        }
    }, [getSchema, form, currentSchema]);

    useEffect(() => {
        getDataRecord(id)
    }, [getDataRecord, id, currentSchema]);
    const handleFormSubmit = (data) => {
        editDataRecord(data)
        //setFormData({ data: { submit: false } });
    }
    return (

        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <Row>
                            <Col sm="5">
                                <CardTitle className="mb-0">Collect Data Using {form?.name}:{form?.version}</CardTitle>
                            </Col>
                        </Row>
                        <Form
                            submission={currentSubmission}
                            form={currentSchema} onSubmit={handleFormSubmit} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

const mapStateTopProps = (state) => {
    return {
        form: state.form.form,
        loadingForm: state.form.loading,
        loadingDataRecord: state.dataRecord.loading,
        currentSubmission: { data: state.dataRecord.dataRecord },
        loadingSchema: state.schema.loading,
        currentSchema: state.schema.schema,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getForm: (id) => {
            dispatch(getOneForm(id));
        },
        editDataRecord: (payload) => {
            dispatch(updateOneDataRecord(payload));
        },
        getSchema: (id) => {
            dispatch(getOneSchema(id));
        },
        getDataRecord: (id) => {
            dispatch(getOneDataRecord(id));
        },
        resetForm: () => {
            dispatch(resetForm());
        },
        resetSchema: () => {
            dispatch(resetSchema());
        },
        resetDataRecord: () => {
            dispatch(resetDataRecord());
        },
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(EditDataDataRecord);
