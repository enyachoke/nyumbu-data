import React, { useState, useEffect } from "react";
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

import { createForm, resetForm } from '../../actions/formActions';
function CreateForm(props) {
    const { resetForm , form ,createForm} = props;
    useEffect(() => {
        return resetForm
    }, [resetForm]);
    const [name, setName] = useState("");
    const [version, setVersion] = useState("");

    if (form?._id) {
        const formLink = `/forms/${form._id}/schema`
        return <Redirect to={formLink} />
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = { name, version }
        createForm(form);
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
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Test Form" autoComplete="name" />
                                    <FormText className="help-block">Form name</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="nf-version">Version</Label>
                                    <Input type="text" id="nf-version" name="version" placeholder="V1"
                                        value={version}
                                        onChange={e => setVersion(e.target.value)}
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
        error: state.form.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createForm: (payload) => {
            dispatch(createForm(payload));
        },
        resetForm: () => {
            dispatch(resetForm());
        },
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(CreateForm);