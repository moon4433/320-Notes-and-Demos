

// this is any object that can be sent over the network...

exports.NetworkObject = class NetworkObject {

	static _idCount = 0; // pls dont use

	constructor(){

		this.classID = "NWOB";
		this.networkID = ++NetworkObject._idCount;
	}
}


