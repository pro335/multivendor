import React, { Component, Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/rates';
import Datatable from './datatable'
import {makeCurrencyData} from '../../services/index'
import {connect} from 'react-redux'
export class Rates extends Component {
    render() {
        const {rate} = this.props
        return (
            <Fragment>
                <Breadcrumb title="Currency Rates" parent="Localization" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Currency Details</h5>
                                </div>
                                <div className="card-body">
                                    <div id="basicScenario" className="product-list translation-list">
                                        <Datatable
                                            multiSelectOption={false}
                                            myData={rate}
                                            pageSize={6}
                                            pagination={false}
                                            class="-striped -highlight"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    rate:makeCurrencyData(state.data.rate.currency)
})

export default connect(
    mapStateToProps, {}
)(Rates)

