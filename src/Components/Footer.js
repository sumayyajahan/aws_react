import { React, useState, Component } from "react";
import axios from "axios";

export default function Footer() {
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleForm = () => {
    // console.log("Message: " + message)
    // console.log("fullName: " + fullName)
    // console.log(message)

    const json = {
      "name": fullName,
      "email": emailAddress,
      "messageBody": message
    };
    axios
      .post(
        "https://uvrkyotbvauumxsn2a2jj3igxy0dywdq.lambda-url.us-east-1.on.aws/",
        json,
        {
          headers: { 
            'Access-Control-Allow-Origin' : '*'
          },
        }
      )
      .then((response) => {return (response)})
      .catch((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
        <br />
        <br />

        <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <br />
        <br />

        <input
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <br />
        <br />

        <input type="submit" />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

// export default function Footer () {
//   const [message, setMessage] = useState();
//   const [fullName, setFullName] = useState();
//   const [emailAddress, setEmailAddress] = useState();

//   const handleMessage = (e) => {
//     console.log(e)
//     axios
//       .post(
//         "https://uvrkyotbvauumxsn2a2jj3igxy0dywdq.lambda-url.us-east-1.on.aws/",
//         { message,fullName, emailAddress }
//       )
//       .then((response) => console.log(response))
//       .catch((response) => console.log(response));
//   };

//   return (
//     <div className="contact-me" id="contact">
//       <h3 className="text-center slideanim">Contact Me</h3>
//       <p className="text-center slideanim">
//         Contact me through filling up the form:
//       </p>
//       <div className="container">
//         <footer>
//           <div className="row">
//             <div className="col-md-6 slideanim">
//               <div className="contact-details">
//                 <form onSubmit={handleMessage} action="#" method="post">
//                   <div className="row">
//                     <div className="col-sm-12 form-group">
//                       <input
//                         className="form-control"
//                         id="name"
//                         name="name" value={fullName}
//                         placeholder="Name"
//                         type="text"
//                         onChange={(e => setFullName(e.target.value))}
//                         required
//                       />
//                     </div>
//                     <div className="col-sm-12 form-group">
//                       <input
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={emailAddress}
//                         placeholder="Email"
//                         type="email"
//                         onChange={(e => setEmailAddress(e.target.value))}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <textarea
//                     className="form-control"
//                     id="comments"
//                     name="comments"
//                     placeholder="Comment"
//                     value={message}
//                     onChange={e => setMessage(e.target.value)}
//                     rows="5"
//                   ></textarea>
//                   <br />
//                   <div className="row">
//                     <div className="col-sm-12 form-group">
//                       <input className="btn btn-default btn-lg" type="submit" />
//                         Send
//                         <span className="glyphicon glyphicon-menu-right"></span>

//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="col-md-6 slideanim">
//               <div className="contact-info">
//                 <h4>Contact Info</h4>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry.
//                 </p>
//                 <div className="footer-info">
//                   <div>
//                     <i className="glyphicon glyphicon-globe"></i>
//                     <p className="p1">77 Jack Street</p>
//                     <p className="p2">Chicago, USA</p>
//                   </div>
//                   <div>
//                     <i className="glyphicon glyphicon-phone-alt"></i>
//                     <p className="p1">+1 515 151515</p>
//                     <p className="p2">+00 1010101010</p>
//                   </div>
//                   <div>
//                     <i className="glyphicon glyphicon-envelope"></i>
//                     <p className="p1">
//                       <a href="mailto:myemail@something.com">
//                         myemail1@example.com
//                       </a>
//                     </p>
//                     <p className="p2">
//                       <a href="mailto:myemail@nothing.com">
//                         myemail2@example.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//                 <h5>Personal Profile</h5>
//                 <p>
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <hr />
//           <div className="copyright">
//             <p className="text-center">
//               © 2016 My Profile. All Rights Reserved | Design by{" "}
//               <a href="http://w3layouts.com">W3layouts</a>
//             </p>
//           </div>
//           <a href="#myPage" title="To Top">
//             <span className="glyphicon glyphicon-chevron-up"></span>
//           </a>
//         </footer>
//       </div>
//     </div>

//     // <div>
//     //   <form onSubmit={handleMessage}>

//     //     <input value={message} onChange={(e => setMessage(e.target.value))} />

//     //     <input type="submit" />
//     //   </form>
//     // </div>
//   );
// }

// // function Footer extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       name : null,
// //       email : null,
// //       comments : null
// //     };
// //   }

// //   nameChangeHandler = (event) => {
// //       console.log(event.target.value);
// //   }

// //   submitHandler = (event) => {
// //     event.preventDefault();

// //     console.log(this.state);
// //     const name = event.target.name.value;
// //     const email = event.target.email.value;
// //     const comments = event.target.comments.value;
// //     this.setState({name, email, comments}, () => {
// //       console.log(this.state);
// //       event.target.name.value = "";
// //       event.target.email.value = "";
// //       event.target.comments.value = "";
// //     });
// //   }

// //   render() {
// //     return (
// //       <div className="contact-me" id="contact">
// //       <h3 className="text-center slideanim">Contact Me</h3>
// //       <p className="text-center slideanim">
// //         Contact me through filling up the form:
// //       </p>
// //       <div className="container">
// //         <footer>
// //           <div className="row">
// //             <div className="col-md-6 slideanim">
// //               <div className="contact-details">
// //                 <form onSubmit={this.submitHandler} action="#" method="post">
// //                   <div className="row">
// //                     <div className="col-sm-12 form-group">
// //                       <input className="form-control" id="name" name="name" placeholder="Name" type="text" onKeyUp={this.nameChangeHandler} required/>
// //                     </div>
// //                     <div className="col-sm-12 form-group">
// //                       <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
// //                     </div>
// //                   </div>
// //                   <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
// //                   <br />
// //                   <div className="row">
// //                     <div className="col-sm-12 form-group">
// //                       <button className="btn btn-default btn-lg" type="submit">
// //                        Send
// //                         <span className="glyphicon glyphicon-menu-right"></span>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //             <div className="col-md-6 slideanim">
// //               <div className="contact-info">
// //                 <h4>Contact Info</h4>
// //                 <p>
// //                   Lorem Ipsum is simply dummy text of the printing and
// //                   typesetting industry.
// //                 </p>
// //                 <div className="footer-info">
// //                   <div>
// //                     <i className="glyphicon glyphicon-globe"></i>
// //                     <p className="p1">77 Jack Street</p>
// //                     <p className="p2">Chicago, USA</p>
// //                   </div>
// //                   <div>
// //                     <i className="glyphicon glyphicon-phone-alt"></i>
// //                     <p className="p1">+1 515 151515</p>
// //                     <p className="p2">+00 1010101010</p>
// //                   </div>
// //                   <div>
// //                     <i className="glyphicon glyphicon-envelope"></i>
// //                     <p className="p1">
// //                       <a href="mailto:myemail@something.com">
// //                         myemail1@example.com
// //                       </a>
// //                     </p>
// //                     <p className="p2">
// //                       <a href="mailto:myemail@nothing.com">
// //                         myemail2@example.com
// //                       </a>
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <h5>Personal Profile</h5>
// //                 <p>
// //                   Lorem Ipsum is simply dummy text of the printing and
// //                   typesetting industry.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <hr />
// //           <div className="copyright">
// //             <p className="text-center">
// //               © 2016 My Profile. All Rights Reserved | Design by{" "}
// //               <a href="http://w3layouts.com">W3layouts</a>
// //             </p>
// //           </div>
// //           <a href="#myPage" title="To Top">
// //             <span className="glyphicon glyphicon-chevron-up"></span>
// //           </a>
// //         </footer>
// //       </div>
// //     </div>
// //     );
// //   }
// // }

// // export default Footer;
