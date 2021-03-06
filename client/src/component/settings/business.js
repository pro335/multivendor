import React, { Component ,Fragment} from 'react'

import designer from '../../assets/images/dashboard/designer.jpg';
import Tabset_profile from './tabset_business';
import Breadcrumb from '../common/breadcrumb';
import { connect } from 'react-redux'
import { makeStoreList } from '../../services/index'
export class Profile extends Component {
    render() {
        const { vendor,stores} = this.props
        return (
            <Fragment>
                <Breadcrumb title="Profile" parent="Settings" />
                 <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-details text-center">
                                    <img src={designer} alt="" className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                    <h5 className="f-w-600 f-16 mb-0">{vendor.firstName + " " + vendor.lastName }</h5>
                                    <span>{vendor.email}</span>
                                    <div className="social">
                                        <div className="form-group btn-showcase">
                                            <button className="btn social-btn btn-fb d-inline-block"> <i className="fa fa-facebook"></i></button>
                                            <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google"></i></button>
                                            <button className="btn social-btn btn-google d-inline-block mr-0"><i className="fa fa-twitter"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {
                                    stores.map((store,index) =>
                                        <div key={index}>
                                            <h2 className="f-w-600 f-16 mb-0">{"Store Name:  " + store.name }</h2>
                                            <hr></hr>
                                            <h3 className="f-w-600 f-16 mb-0">{"Store Location: " + store.location}</h3>
                                            <hr/>
                                            
                                        </div>
                                    )
                                }
                             
               
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card profile-card">
                            <div className="card-body">
                                <Tabset_profile vendor = {vendor}/>
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
    stores: makeStoreList(state.store.stores,state.auth.currentUser._id),
    vendor:state.auth.currentUser
})

export default connect(
    mapStateToProps
)(Profile)
