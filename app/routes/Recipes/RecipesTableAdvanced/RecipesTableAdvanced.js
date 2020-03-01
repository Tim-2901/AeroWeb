import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';

import {
    Button,
    ButtonGroup,
    Row,
    Col
} from './../../../components';
import { CustomExportCSV } from './CustomExportButton';
import _ from "lodash";



const sortCaret = (order) => {
    if (!order)
        return <i className="fa fa-fw fa-sort text-muted"/>;
    if (order)
        return <i className={`fa fa-fw text-muted fa-sort-${order}`}/>
};


function minutesToDate(minutes) {
    const date = new Date(1000 * 60 * minutes);
    return date.toISOString().substr(11, 5);

}

export class RecipesTableAdvanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            selected: []
        };
        console.log("constructed");
        this.getAPI = this.getAPI.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.tableActionButtons = this.tableActionButtons.bind(this);
    }

    handleDeleteRow(id) {
        this.deleteAPI(id);
        this.deleteState(id);
        console.log( 'DELETED ROW ID' + id);

    }

    deleteAPI(id) {
        const jsonObj = { id: id};
        fetch('http://debian:3000/api/recipes',
            {method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonObj),
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                },
                (error) => {
                    console.log(error)
                }
            );

    }

    deleteState(id) {
        this.setState({
            recipes: _.filter(this.state.recipes, recipe =>
                !_.includes({id: id}, recipe.id))
        });
    }

    getAPI() {
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

    componentDidMount() {
        this.getAPI()
    }

    tableActionButtons(cell ,row) {
        return(
            <div>
                <Button className="btn-table-action"
                >
                    <i className="material-icons edit">edit</i>
                </Button>
                <Button className="btn-table-action"
                        onClick={() => {this.handleDeleteRow(row.id)}}
                >
                    <i className="material-icons delete">close</i>
                </Button>
            </div>
        )
    }




    handleAddRow() {

    }



    handleEditRow() {

    }


    columns = [
        {
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'name',
            text: 'Name',
            sort: true,
            sortCaret
        }, {
            dataField: 'plant',
            text: 'Plant',
            sort: true,
            sortCaret
        }, {
            dataField: 'daytime',
            text: 'Day Cycle',
            sort: true,
            sortCaret,
            formatter(cell) {
                return minutesToDate(cell);
            }
        }, {
            dataField: 'temperature_day',
            text: 'Temperature',
            sort: true,
            sortCaret
        }, {
            dataField: 'light_intensity',
            text: 'Light',
            sort: true,
            sortCaret,
        }, {
            dataField: 'water_flowrate',
            text: 'Watering',
            sort: true,
            sortCaret
        }, {
            dataField: 'ventilation_rpm',
            text: 'Ventilation',
            sort: true,
            sortCaret,
        }, {
            dataField: 'co2_concentration',
            text: 'CO2',
            sort: true,
            sortCaret,
        }, {
            dataField: 'actions',
            isDummyField: 'true',
            headerClasses: "bt-0",
            formatter: this.tableActionButtons.bind(this),


        }];

    render() {

        const expandRow = {
            renderer: row => (
                <Row>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col >
                        <dl className="row">
                            <dt className="col-sm-6 text-right">On</dt>
                            <dd className="col-sm-6">{ minutesToDate(row.daytime_start) }</dd>

                            <dt className="col-sm-6 text-right">Off</dt>
                            <dd className="col-sm-6">{ minutesToDate((row.daytime + row.daytime_start) % 1440)}</dd>
                        </dl>
                    </Col>
                    <Col >
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Day</dt>
                            <dd className="col-sm-6">{ row.temperature_day }</dd>

                            <dt className="col-sm-6 text-right">Night</dt>
                            <dd className="col-sm-6">{ row.temperature_night }</dd>
                        </dl>
                    </Col>
                    <Col >
                        <dl className="row">
                            <dt className="col-sm-6 text-right">400 nm</dt>
                            <dd className="col-sm-6">{ row.light_wavelength400500 }</dd>

                            <dt className="col-sm-6 text-right">500 nm</dt>
                            <dd className="col-sm-6">{ row.light_wavelength500600 }</dd>

                            <dt className="col-sm-6 text-right">600 nm</dt>
                            <dd className="col-sm-6">{ row.light_wavelength600700 }</dd>

                            <dt className="col-sm-6 text-right">700 nm</dt>
                            <dd className="col-sm-6">{ row.light_wavelength700800 }</dd>
                        </dl>
                    </Col>
                    <Col >
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Pressure</dt>
                            <dd className="col-sm-6">{ row.water_pressure }</dd>

                            <dt className="col-sm-6 text-right">Interval</dt>
                            <dd className="col-sm-6">{ row.water_interval }</dd>

                            <dt className="col-sm-6 text-right">Cycletime</dt>
                            <dd className="col-sm-6">{ row.water_cycletime }</dd>

                            <dt className="col-sm-6 text-right">pH</dt>
                            <dd className="col-sm-6">{ row.water_ph }</dd>

                            <dt className="col-sm-6 text-right">Nozzle</dt>
                            <dd className="col-sm-6">{ row.water_nozzle }</dd>
                        </dl>
                    </Col>
                    <Col >
                        <dl className="row">
                            <dt className="col-sm-6 text-right">Interval</dt>
                            <dd className="col-sm-6">{ row.ventilation_interval }</dd>

                            <dt className="col-sm-6 text-right">Cycletime</dt>
                            <dd className="col-sm-6">{ row.ventilation_cycletime }</dd>

                            <dt className="col-sm-6 text-right">Daytime Only</dt>
                            <dd className="col-sm-6">{ row.ventilation_daytimeonly }</dd>
                        </dl>
                    </Col>
                    <Col >
                    </Col>
                </Row>
            ),
            showExpandColumn: true,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => isAnyExpands ? (
                <i className="fa fa-angle-down fa-fw fa-lg text-muted"/>
            ) : (
                <i className="fa fa-angle-right fa-fw fa-lg text-muted"/>
            ),
            expandColumnRenderer: ({ expanded }) =>
                expanded ? (
                    <i className="fa fa-angle-down fa-fw fa-lg text-muted"/>
                ) : (
                    <i className="fa fa-angle-right fa-fw fa-lg text-muted"/>
                )
        };

        return (
            <ToolkitProvider
                keyField="id"
                data={ this.state.recipes }
                columns={ this.columns }
                exportCSV
            >
            {
                props => (
                    <React.Fragment>
                        <div className="d-flex justify-content-end align-items-center mb-2">
                            <h6 className="my-0">
                                 Recipes
                            </h6>
                            <div className="d-flex ml-auto">

                                <ButtonGroup>
                                    <CustomExportCSV
                                        { ...props.csvProps }
                                    >
                                        Export
                                    </CustomExportCSV>
                                    <Button
                                        size="sm"
                                    >
                                        Add
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <BootstrapTable
                            classes="table-responsive-lg"
                            bordered={ false }
                            expandRow={ expandRow }
                            responsive
                            hover
                            { ...props.baseProps }
                        />
                    </React.Fragment>
                )
            }
            </ToolkitProvider>
        );
    }
}
