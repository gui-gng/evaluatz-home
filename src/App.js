import './App.css';
import Header from './components/00-General/header'
import Chart from './components/Charts/chartSample';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="evaluatz-content">
        <div class="evaluatz-home-header d-flex align-items-center  justify-content-center flex-column">
          <img src="http://localhost:3000/logo192.png" ></img>
          <p class="p-3">Evaluating the values</p>
          <p class="p-3">Creating predictions</p>
        </div>
        <div class="evaluatz-stocks-header bg-secondary">
          <div className="evaluatz_index container shadow-lg">
            <div className="evaluatz_index_container jumbotron jumbotron-fluid bg-secondary text-white pt-3 pb-3 mb-0 ">
              <h1 className="display-4">Forecast for stocks</h1>
              <p className="lead">Find the best predictions for stocks</p>
              <Chart />
              <a href="https://stocks.evaluatz.com" class="d-flex justify-content-center">
                    <div class="evaluatz-link-main" >
                        Go to stocks
                    </div>
                </a>
            </div>
          </div>
        </div>
        <div class="evaluatz-esports-header d-flex align-items-center flex-column bg-dark">
          <p class="p-2">Prevision for E-sports</p>
          <a href="https://esports.evaluatz.com" class="d-flex justify-content-center mt-auto">
                    <div class="evaluatz-link-main" >
                        Go to e-sports
                    </div>
                </a>
        </div>
        <div class="evaluatz-footer p-3 d-flex align-items-center flex-column bg-dark border-top">
          <p class="p-3 text-light">© 2018-2021 Evaluatz.</p>
       
        </div>

      </div>
    </div>
  );
}

export default App;
