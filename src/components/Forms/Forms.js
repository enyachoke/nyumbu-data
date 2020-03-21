import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { fetchForms, deleteOneForm } from '../../actions/formActions';
function Forms(props) {
    const { getForms } = props;
    useEffect(() => {
        getForms();
    }, [getForms]);
    console.log(props.forms);
    return (
        <div className="animated fadeIn">
            <Row>
                <Col md={12}>
                    <Button tag={Link} to="/forms/new" color="primary" className="float-right mb-2">Create Form</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>

                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                        </CardHeader>
                        <CardBody>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th scope="col">name</th>
                                        <th scope="col">version</th>
                                        <th scope="col">published</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )} */}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    )
}

const mapStateTopProps = (state) => {
    return {
        forms: state.form.forms,
        loading: state.form.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getForms: () => {
            dispatch(fetchForms());
        },

        deleteForm: (formId) => {
            dispatch(deleteOneForm(formId));
        },
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Forms);