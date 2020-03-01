import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import { Container, Row, Col, Button, Card, CardBody, CardHeader } from 'reactstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


const { SearchBar } = Search;
const { ExportCSVButton } = CSVExport;

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerClasses: "bt-0",
    sort: true,

}, {
    dataField: 'name',
    text: 'Name',
    headerClasses: "bt-0",
    sort: true,
    filter: textFilter()
}, {
    dataField: 'plant',
    text: 'Plant',
    headerClasses: "bt-0",
    sort: true,
    filter: textFilter()
}, {
    dataField: 'pressure',
    text: 'Pressure',
    headerClasses: "bt-0",
}, {
    dataField: 'daytime',
    text: 'Daytime',
    headerClasses: "bt-0",
}, {
    dataField: 'actions',
    isDummyField: 'true',
    headerClasses: "bt-0",
    formatter: () => {
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
                                        <CardBody>
                                            <h5 className="card-title">Recipes<span className="small ml-1 text-muted">#1.01</span></h5>
                                        </CardBody>
                                        <BootstrapTable
                                            headerClasses="bt-0"
                                            bordered={ false }
                                            hover
                                            {...props.baseProps}
                                            filter={ filterFactory() }
                                        />
                                        <Button btn><i className="material-icons">edit</i></Button>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                }
            </ToolkitProvider>

        );
    }
}
