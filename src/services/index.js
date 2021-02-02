import * as actions from "../actions";
import { setSAGA } from "../sagas";
import * as common from "@bgroves/common";

const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const auth = require("@feathersjs/authentication-client");

// seting dispatch as a global variable works, but setting
// store as a global variable in Saga messes up the generator functions
const setupServices = async (dispatch) => {
  common.log(
    `In settupServices: ${process.env.REACT_APP_FEATHERS_HOSTNAME}`
  );

  /*
  The Nginx reverse proxy server will redirect calls to motorest to port 3030
  */
  // const connectionString = `https://motorest`;

  // const connectionString = `https://${process.env.REACT_APP_FEATHERS_HOSTNAME}`;
  // common.log(`connectionString: ${connectionString}`);
  // const socket = io(connectionString);
  // const socket = io(connectionString);
  //const socket = io('https://motorest');
  //  const socket = io('http://10.1.0.100:3030');
  const srv = feathers();
  srv.configure(socketio(io(`https://${process.env.REACT_APP_FEATHERS_HOSTNAME}`)));
  // srv.configure(socketio(io('https://motorest.local')));

  // Setup the transport (Rest, Socket, etc.) here
  // srv.configure(socketio(socket));

  // Available options are listed in the "Options" section
  srv.configure(
    auth({
      storageKey: "auth",
    })
  );

  // seting dispatch as a global variable works, but setting
  // store as a global variable messes up the generator functions
  setSAGA(srv, dispatch);

  return srv;
};

export default setupServices;
