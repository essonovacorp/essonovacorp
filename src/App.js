import Layout from "./components/layout/Layout";
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


function App() {
    return ( 
       <div>
       <Layout/>
       </div>
    );
}

export default App;