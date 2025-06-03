import { Component } from "react";

// class Student extends Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h2>Hello,{name}</h2>
//       </>
//     );
//   }
// }

function Student(props) {
  const { name } = props;
  return (
    <>
      <h2>Hello,{name}</h2>
    </>
  );
}

export default Student;
