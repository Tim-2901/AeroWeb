import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import { Container, Row, Col, Button, Card, CardBody, CardHeader } from 'reactstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import { MdClose, MdEdit } from 'react-icons/md';

const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
}, {
    dataField: 'name',
    text: 'Name',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'plant',
    text: 'Plant',
    sort: true,
    filter: textFilter()
}, {
    dataField: 'pressure',
    text: 'Pressure',
}, {
    dataField: 'daytime',
    text: 'Daytime',
}, {
    dataField: 'actions',
    isDummyField: 'true',
    formatter: (row) => {
        return(
            <div>
                <Button className="btn-table-action"><i className="material-icons edit">edit</i></Button>
                <Button className="btn-table-action"><i className="material-icons delete">close</i></Button>
            </div>
        )
    }
}];

export class RecipesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            selected: []
        };
        console.log("constructed")
    }

    componentDidMount() {
        fetch('http://debian:3000/api/recipes')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        recipes: result
                    });
                    console.log(result)
                },
                (error) => {
                    console.log(error)
                }
            )


    }

    render() {
        return (
            <ToolkitProvider
                bootstrap4
                keyField="id"
                data={this.state.recipes}
                columns={columns}
                search
                exportCSV
            >
                {
                    props =>
                        <Container fluid={true}>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardHeader className="bg-primary"><h5 className="text-white">Recipes</h5></CardHeader>
                                        <CardBody>
                                            <Row>
                                                <ExportCSVButton  { ...props.csvProps } >Export</ExportCSVButton>
                                                <SearchBar { ...props.searchProps} >Search</SearchBar>
                                            </Row>
                                            <BootstrapTable
                                                headerWrapperClasses="thead-light"
                                                bordered={ false }
                                                hover
                                                {...props.baseProps}
                                                filter={ filterFactory() }
                                            />
                                            <Button><MdClose color="red" /></Button>
                                            <Button className="btn-table-action"><MdEdit color="blue" /></Button>
                                            <Button btn><i className="material-icons">edit</i></Button>

                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                }
            </ToolkitProvider>

        );
    }
}
