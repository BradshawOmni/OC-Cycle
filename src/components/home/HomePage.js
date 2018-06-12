import React from 'react';
import { Link } from 'react-router';
import * as actions from '../../actions/accountActions';
class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">
          <div className="row">
          <div className="col-sm-6 col-lg-3">
              <div className="card text-white blueBox">
                <div className="card-body pb-0">
                  <div className="btn-group float-right">
                    <button type="button" className="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="icon-settings"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                  <div className="text-value">9.823</div>
                  <div>Members online</div>
                </div>
                <div className="chart-wrapper mt-3 mx-3" >
                  <canvas id="card-chart1" className="chart" ></canvas>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white greenBox">
                <div className="card-body pb-0">
                  <button type="button" className="btn btn-transparent p-0 float-right">
                    <i className="icon-location-pin"></i>
                  </button>
                  <div className="text-value">9.823</div>
                  <div>Members online</div>
                </div>
                <div className="chart-wrapper mt-3 mx-3" >
                  <canvas id="card-chart2" className="chart" ></canvas>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white pinkBox">
                <div className="card-body pb-0">
                  <div className="btn-group float-right">
                    <button type="button" className="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="icon-settings"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                  <div className="text-value">9.823</div>
                  <div>Members online</div>
                </div>
                <div className="chart-wrapper mt-3" >
                  <canvas id="card-chart3" className="chart" ></canvas>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card text-white orangeBox">
                <div className="card-body pb-0">
                  <div className="btn-group float-right">
                    <button type="button" className="btn btn-transparent dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="icon-settings"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                  <div className="text-value">9.823</div>
                  <div>Members online</div>
                </div>
                <div className="chart-wrapper mt-3 mx-3" >
                  <canvas id="card-chart4" className="chart" ></canvas>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
