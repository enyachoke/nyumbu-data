import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';

import { updateOneForm, resetForm, getOneForm, updateNameInput, updateVersionInput } from '../../actions/formActions';
function EditForm(props) {
    const { id } = useParams();
    const { resetForm, form, updateForm, updateNameInput,
        updateVersionInput, getForm, editing } = props;
    useEffect(() => {
        return resetForm
    }, [resetForm]);

    useEffect(() => {
        getForm(id)
    }, [getForm, id]);

    if (form?._id && editing) {
        const formLink = `/forms/${form._id}/schema`
        return <Redirect to={formLink} />
    }
    const handleNameChange = (value) => {
        updateNameInput(value);
    }
    const handleVersionChange = (value) => {
        updateVersionInput(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateForm(form);
    }
    return (
        <div>
            <Row>
                <Col xs="12" md="12">
                    <Card>
                        <CardHeader>
                            <strong>New</strong> Form
              </CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="nf-name">Name</Label>
                                    <Input type="text" id="nf-name" name="name"
                                        defaultValue={form.name}
                                        onChange={e => handleNameChange(e.target.value)}
                                        placeholder="Test Form" autoComplete="name" />
                                    <FormText className="help-block">Form name</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="nf-version">Version</Label>
                                    <Input type="text" id="nf-version" name="version" placeholder="V1"
                                        defaultValue={form.version}
                                        onChange={e => handleVersionChange(e.target.value)}
                                        autoComplete="version" />
                                    <FormText className="help-block">Form version</FormText>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"
                                onClick={handleSubmit}
                            ><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}
const mapStateTopProps = (state) => {
    return {
        form: state.form.form,
        loading: state.form.loading,
        error: state.form.error,
        editing: state.form.editing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getForm: (id) => {
            dispatch(getOneForm(id));
        },
        updateForm: (payload) => {
            dispatch(updateOneForm(payload));
        },
        resetForm: () => {
            dispatch(resetForm());
        },
        updateNameInput: (input) => {
            dispatch(updateNameInput(input));
        },
        updateVersionInput: (input) => {
            dispatch(updateVersionInput(input));
        },
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(EditForm);