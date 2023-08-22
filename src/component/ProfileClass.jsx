import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      count2:20
    };
    console.log(this.state.count);
  }
  async componentDidMount(){
    try{
      const url=await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const res= await url.json();
      console.log(res);

    }catch(error){
      console.error(error)
    }
 
  }
  render() {
    const {count,count2} =this .state
    console.log("render");
    return (
      <div>
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <button onClick={()=>this.setState({count :count +1})}>Count</button>
        <button onClick={()=>this.setState({count2 :count2 -1})}>Count</button>
      </div>
    );
  }
}
export default Profile;
