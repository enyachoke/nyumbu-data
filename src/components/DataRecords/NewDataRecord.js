import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Form } from 'react-formio';
import { getOneForm, resetForm } from '../../actions/formActions';
import { getOneSchema, resetSchema } from '../../actions/schemaActions';
import { createDataRecord, resetDataRecord } from '../../actions/dataRecordActions';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
function NewDataDataRecord(props) {
    const { formId } = useParams();
    //const [formData, setFormData] = useState({ data: { submit: false } });
    const { getForm, form, currentSchema, getSchema, resetForm,
        resetSchema, createDataRecord, resetDataRecord, currentDataRecord } = props;
    useEffect(() => {
        getForm(formId);
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

    if (currentDataRecord?._id) {
        const editLink = `/data-records/${currentDataRecord?.form?._id}/edit/${currentDataRecord?._id}`
        return <Redirect to={editLink} />
    }
    const handleFormSubmit = (data) => {
        data.data.form = { _id: formId};
        createDataRecord(data)
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
                        <Form submission={{ data: currentDataRecord }}
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
        loadingSchema: state.schema.loading,
        currentSchema: state.schema.schema,
        loadingDataRecord: state.dataRecord.loading,
        currentDataRecord: state.dataRecord.dataRecord
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getForm: (id) => {
            dispatch(getOneForm(id));
        },
        createDataRecord: (payload) => {
            dispatch(createDataRecord(payload));
        },
        getSchema: (id) => {
            dispatch(getOneSchema(id));
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
export default connect(mapStateTopProps, mapDispatchToProps)(NewDataDataRecord);
