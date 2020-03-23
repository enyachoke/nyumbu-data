import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { fetchDataRecords, deleteOneDataRecord } from '../../actions/dataRecordActions';
function DataRecordRow(props) {
    const { dataRecord } = props;
    const editLink = `/data-records/${dataRecord?.form?._id}/edit/${dataRecord?._id}`
    return (
        <tr key={dataRecord?._id?.toString()}>
            <td><Link to={editLink}>{dataRecord?._id?.toString()}</Link></td>
            <td><pre>{JSON.stringify(dataRecord)}</pre></td>
        </tr>
    );
}
function DataRecords(props) {
    const { getDataRecords } = props;
    useEffect(() => {
        getDataRecords();
    }, [getDataRecords]);
    return (
        <div className="animated fadeIn">
            <Row>
                <Col md={12}>
                    <Button tag={Link} to="/forms" color="primary" className="float-right mb-2">Create DataRecord</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>

                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> DataRecords
                        </CardHeader>
                        <CardBody>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th scope="col">name</th>
                                        <th scope="col">version</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.dataRecords.map((dataRecord, index) =>
                                            <DataRecordRow key={index} dataRecord={dataRecord} deleteDataRecord={props.deleteDataRecord} />
                                        )
                                    }
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
        dataRecords: state.dataRecord.dataRecords,
        loading: state.dataRecord.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataRecords: () => {
            dispatch(fetchDataRecords());
        },

        deleteDataRecord: (dataRecordId) => {
            dispatch(deleteOneDataRecord(dataRecordId));
        },
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(DataRecords);