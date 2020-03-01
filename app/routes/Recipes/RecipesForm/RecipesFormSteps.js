import React from "react";
import {FastField, Field} from "formik";
import { object, string, number, boolean} from 'yup';
import {
    Col, DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input, InputGroup, InputGroupAddon,
    Label,
    Row,
    UncontrolledDropdown
} from "../../../components";
import {useFormikWizard} from "formik-wizard";


function Start() {
    return (
        <Row>
            <Col md={6}>
                <div>
                    <h3 className="mb-4">
                        Create your Recipe!
                    </h3>
                    <p>
                        Here you can specify the name of your Recipe and the plant you will be using.
                        We recommend using the scientific plant name.
                    </p>
                    <small>
                    </small>
                </div>
            </Col>
            <Col md={6}>
                <Form>
                    <h6 className="pb-3">
                        Recipe Name
                    </h6>
                    <Row className="pb-4">
                        <Col sm={12}>
                                <Label for="name">
                                    Name <span className="text-danger">*</span>
                                </Label>
                                <Field
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder='Plant Name...'
                                />
                        </Col>
                    </Row>

                    <h6 className="pb-3">
                        Plant
                    </h6>
                    <Row>
                        <Col sm={12}>
                                <Label for="plant">
                                    Plant <span className="text-danger">*</span>
                                </Label>
                                <Field className="form-control" id="plant" name="plant" placeholder='Plant Name...' />
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

function Daycycle() {
    return(
        <Row>
            <Col md={6}>
                <div>
                    <h3 className="mb-4">
                        Day Cycle and Temperature
                    </h3>
                    <p>
                        Day Cycle
                        Temperature
                    </p>
                    <small>
                    </small>
                </div>
            </Col>
            <Col md={6}>
                <Form>
                    <h6 className="pb-3">
                        Day Cycle
                    </h6>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="daytime">
                                Day Time <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="daytime"
                                name="daytime"
                                placeholder='Total Day Time...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-4">
                    <Col sm={12}>
                        <Label for="daytime_start">
                            Day Time Start<span className="text-danger">*</span>
                        </Label>
                        <Field
                            className="form-control"
                            id="daytime_start"
                            name="daytime_start"
                            placeholder='Start of the Day...'
                        />
                    </Col>
                </Row>

                    <h6 className="pb-3">
                        Temperature
                    </h6>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="temperature_day">
                                Day Temperature <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="temperature_day"
                                name="temperature_day"
                                placeholder='Day Temperature...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="temperature_night">
                                Night Temperature <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="temperature_night"
                                name="temperature_night"
                                placeholder='Night Temperature...'
                            />
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

function Light() {
    return(
        <Row>
            <Col md={6}>
                <div>
                    <h3 className="mb-4">
                        Light
                    </h3>
                    <p>
                        Light
                        Wavelength TODO: Find a more convenient way for Wavelength. Spectrum as function?
                    </p>
                    <small>
                    </small>
                </div>
            </Col>
            <Col md={6}>
                <Form>
                    <h6 className="pb-3">
                        Light
                    </h6>
                    <Row className="pb-4">
                        <Col sm={12}>
                            <Label for="light_intensity">
                                Light Intensity <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="light_intensity"
                                name="light_intensity"
                                placeholder='Light intensity in µmol/(s·m²)...'
                            />
                        </Col>
                    </Row>
                    <h6 className="pb-3">
                        Wavelength
                    </h6>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="light_wavelength400500">
                                400 - 500 nm<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="light_wavelength400500"
                                name="light_wavelength400500"
                                placeholder='Wavelength in %...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="light_wavelength500600">
                                500 - 600 nm<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="light_wavelength500600"
                                name="light_wavelength500600"
                                placeholder='Wavelength in %...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="light_wavelength600700">
                                600 - 700 nm<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="light_wavelength600700"
                                name="light_wavelength600700"
                                placeholder='Wavelength in %...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="light_wavelength700800">
                                700 - 800 nm<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="light_wavelength700800"
                                name="light_wavelength700800"
                                placeholder='Wavelength in %...'
                            />
                        </Col>
                    </Row>

                </Form>
            </Col>
        </Row>
    )
}

function Water() {
    return(
        <Row>
            <Col md={6}>
                <div>
                    <h3 className="mb-4">
                        Watering
                    </h3>
                    <p>
                        Watering
                        TODO: Water Pressure bar to kpa (DB)
                    </p>
                    <small>
                    </small>
                </div>
            </Col>
            <Col md={6}>
                <Form>
                    <h6 className="pb-3">
                        Watering
                    </h6>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="water_flowrate">
                                Flowrate <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="water_flowrate"
                                name="water_flowrate"
                                placeholder='Water Flowrate in l/h...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="water_pressure">
                                Pressure<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="water_pressure"
                                name="water_pressure"
                                placeholder='Water Pressure in kpa'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="water_interval">
                                Watering Interval<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="water_interval"
                                name="water_interval"
                                placeholder='Watering Interval in s...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="water_cycletime">
                                Watering Cycletime<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="water_cycletime"
                                name="water_cycletime"
                                placeholder='Watering Cycletime in s...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="water_ph">
                                pH <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="water_ph"
                                name="water_ph"
                                placeholder='pH...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="water_nozzle">
                                Nozzle <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="water_nozzle"
                                name="water_nozzle"
                                placeholder='Nozzle size in mm...'
                            />
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

function Atmosphere() {
    return(
        <Row>
            <Col md={6}>
                <div>
                    <h3 className="mb-4">
                        Atmosphere
                    </h3>
                    <p>
                        Atmosphere
                    </p>
                    <small>
                    </small>
                </div>
            </Col>
            <Col md={6}>
                <Form>
                    <h6 className="pb-3">
                        Ventilation
                    </h6>
                    <Row className="pb-4">
                        <Col sm={12}>
                            <Label for="ventilation_rpm">
                                Fan Speed <span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="ventilation_rpm"
                                name="ventilation_rpm"
                                placeholder='Fan Speed in RPM...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="ventilation_interval">
                                Interval<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="ventilation_interval"
                                name="ventilation_interval"
                                placeholder='Interval in minutes...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="ventilation_cycletime">
                                Cycle Time<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="ventilation_cycletime"
                                name="ventilation_cycletime"
                                placeholder='Cycletime in minutes...'
                            />
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col sm={12}>
                            <Label for="ventilation_daytimeonly">
                                Day Only?<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="ventilation_daytimeonly"
                                name="ventilation_daytimeonly"
                                placeholder='Is active during Daytime only...'
                            />
                        </Col>
                    </Row>
                    <h6 className="pb-3">
                        CO2
                    </h6>
                    <Row className="pb-2">
                        <Col sm={12}>
                            <Label for="co2_concentration">
                                Concentration<span className="text-danger">*</span>
                            </Label>
                            <Field
                                className="form-control"
                                id="co2_concentration"
                                name="co2_concentration"
                                placeholder='CO2 Concentration in ppm...'
                            />
                        </Col>
                    </Row>

                </Form>
            </Col>
        </Row>
    )
}

function Summary() {
    const { values } = useFormikWizard();
    return(
        <Row>
            <Col md={6}>
                <div>
                    <h3 className="mb-4">
                        Summary
                    </h3>
                    <p>
                        omegalul
                    </p>
                    <small>
                    </small>
                </div>
            </Col>
            <Col md={6}>
                <Form>
                    <h6 className="pb-3">
                        list
                    </h6>
                    <Row className="pb-4">
                        <Col sm={12}>
                            {JSON.stringify(values, null, 2)}
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}



export default [
    {
        id: 'start',
        component: Start,
        initialValues: {
            name: '',
            plant: '',
        },
        validationSchema: object().shape({
            name: string(),
            plant: string(),

        })
    },
    {
        id: 'daycycle',
        component: Daycycle,
        initialValues: {
            daytime: '',
            daytime_start: '',
            temperature_day: '',
            temperature_night: '',
        },
        validationSchema: object().shape({
            daytime: number(),
            daytime_start: number(),
            temperature_day: number(),
            temperature_night: number(),
        })
    },
    {
        id: 'light',
        component: Light,
        initialValues: {
            light_intensity: '',
            light_wavelength400500: '',
            light_wavelength500600: '',
            light_wavelength600700: '',
            light_wavelength700800: '',
        },
        validationSchema: object().shape({
            light_intensity: number(),
            light_wavelength400500: number(),
            light_wavelength500600: number(),
            light_wavelength600700: number(),
            light_wavelength700800: number(),
        })
    },
    {
        id: 'water',
        component: Water,
        initialValues: {
            water_flowrate: '',
            water_pressure: '',
            water_interval: '',
            water_cycletime: '',
            water_ph: '',
            water_nozzle: '',
        },
        validationSchema: object().shape({
            water_flowrate: number(),
            water_pressure: number(),
            water_interval: number(),
            water_cycletime: number(),
            water_ph: number(),
            water_nozzle: number(),
        })
    },
    {
        id: 'atmosphere',
        component: Atmosphere,
        initialValues: {
            ventilation_rpm: '',
            ventilation_interval: '',
            ventilation_cycletime: '',
            ventilation_daytimeonly: '',
            co2_concentration: '',
        },
        validationSchema: object().shape({
            ventilation_rpm: number(),
            ventilation_interval: number(),
            ventilation_cycletime: number(),
            ventilation_daytimeonly: number(),
            co2_concentration: number(),
        })
    },
    {
        id: 'summary',
        component: Summary,
    }
]
