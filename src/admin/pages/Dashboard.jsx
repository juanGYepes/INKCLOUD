import Aside from '../components/Aside';
import Content from '../components/Content';
function Dashboard() {
  return (
    <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Aside/>
        <Content/>
      </div>
    </div>
  );
}

export default Dashboard;
