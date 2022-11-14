import react, {Component} from 'react';
import logo192 from '../logo192.png';
export default class Gallery extends Component {
  constructor(props){
    console.log("Contructor of Gallery called");
    super(props);
    this.state = {
      number:0
    }
  }

  increment() {
    this.setState({number:this.state.number+1});
    console.log(this.state.number);
  }

  static getDerivedStateFromProps() {
    console.log("get props of Gallery called");
  }
  componentDidMount()
  {
    console.log("Comp did mount of Gallery called");
  }

  componentDidUpdate() {
    console.log("Comp did update of Gallery called");
  }

  render() {
    console.log("render of Gallery called");
    return (
      <>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat vulputate tellus non consectetur. In aliquet massa ac sodales lacinia. Cras vehicula venenatis tellus, in dapibus orci consectetur ut. In sit amet leo nibh. Duis eu nulla sapien. Phasellus bibendum, lectus sit amet efficitur rhoncus, turpis ex congue erat, a feugiat nunc velit ut diam. Vivamus rutrum nulla at orci pretium, ac laoreet tortor fringilla. Morbi neque ex, laoreet gravida pharetra eget, auctor a justo. Sed elementum commodo mauris, vel commodo nisl iaculis at. Vestibulum nec justo vel quam luctus aliquam in et lorem.

Vestibulum nec enim ante. Duis convallis consequat urna ut placerat. Fusce quam justo, maximus a sollicitudin in, maximus sed purus. Suspendisse ornare magna quis blandit posuere. Nunc nec volutpat orci. Curabitur volutpat sem et justo suscipit aliquet eu id dolor. Curabitur vel tincidunt enim, eu aliquam felis. Praesent urna nisi, lobortis et condimentum sit amet, imperdiet vitae risus. Morbi semper purus sem, non pharetra tellus egestas eu. Donec id tempus massa. Nulla vitae dolor orci. Proin ornare mattis aliquet. Pellentesque blandit justo eget arcu cursus pharetra.</p>
            </div>
            <div className='col-md-3'>
              <img src={logo192}></img>
            </div>
          </div>
          {/* <button onClick={()=>{this.increment()}}>Click</button>
          <p>{this.state.number}</p> */}
        </div>


      </>
      
    )
  }
}
