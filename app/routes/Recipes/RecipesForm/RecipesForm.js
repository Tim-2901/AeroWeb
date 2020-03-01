import React from "react";
import PropTypes from 'prop-types'
import {Formik} from "formik";
import * as Yup from "yup"
import {
    Button,
    Label,
    Input

} from "reactstrap"
import _ from "lodash";
import {
    Card,
    CardBody,
    CardFooter,
    Col,
    Container, DropdownItem, DropdownMenu, DropdownToggle,
    Form,
    FormGroup, InputGroup, InputGroupAddon,
    Row,
    UncontrolledDropdown,
    Wizard
} from "../../../components";
import {HeaderMain} from "../../components/HeaderMain";
import FormikWizard from 'formik-wizard';
import steps from "./RecipesFormSteps";


function FormWrapper({
     children,
     isLastStep,
     status,
     goToPreviousStep,
     canGoBack,
     actionLabel,
 }) {
        return (
            <Container>
                <HeaderMain
                    title="Create Recipe"
                    className="my-4"
                />
                <Card>
                    <CardBody className="d-flex justify-content-center pt-5">
                        <h5>{status && (status.message)} </h5><br/>
                        TODO: Top buttons
                    </CardBody>

                    <CardBody className="p-5">
                        {children}
                    </CardBody>

                    <CardFooter className="p-4 bt-0">
                        <div className="d-flex">
                            <Button type="button" onClick={goToPreviousStep} disabled={!canGoBack} color="link" className='mr-3'>
                                <i className='fa fa-angle-left mr-2'></i>
                                Previous
                            </Button>
                            <Button type="submit" color='primary' className="ml-auto px-4">
                                {actionLabel || (isLastStep ? 'Submit' : 'Next step')}
                                <i className='fa fa-angle-right ml-2'></i>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
        );
}

function bundleJSON(values) {
    return _.assign({}, values.start, values.daycycle, values.light, values.water, values.atmosphere)
}

function postAPI(message) {
    fetch('http://debian:3000/api/recipes',
        {method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
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

export default function RecipesForm() {
const handleSubmit = React.useCallback((values) => {
    console.log('full values: ', values);
    console.log(bundleJSON(values));
    postAPI(bundleJSON(values));
        return {
            message: 'Thanks for submitting!',
        }
    }, []);

    return (
        <FormikWizard steps={steps} onSubmit={handleSubmit} render={FormWrapper}/>
    )

}
