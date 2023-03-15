import { DatabaseConnection } from './main/database';
import { runServer } from './main/server';

Promise.all([DatabaseConnection.connect()])
	.then(runServer)
	.catch((error: any) => {
		console.log(error);
	});
