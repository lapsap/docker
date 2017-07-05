var http = require("http");
const pg = require('pg');

var config =
{
	host: 'mypgserv.postgres.database.azure.com',
	user: 'lapsap@mypgserv',
	password: 'Test123!',
	database: 'postgres',
	port: 5432,
	ssl: true
};

const client = new pg.Client(config);

client.connect(function (err)
		{
			if (err)
				throw err;
			else
			{
				console.log("Connected to Azure Database for PostgreSQL server:" + config.host);
			}
		});


http.createServer(function (request, response) {

	// Send the HTTP header 
	// HTTP Status: 200 : OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	queryDatabase(response);

	// Send the response body as "Hello World"
//	response.end('Hello World\n');
//	dont end here or cause blocking/nonblocking web problem
}).listen(80);

// Console will print the message
console.log('Server running at http://127.0.0.1/');

function queryDatabase(response)
{
	// Declare array to hold query result set
	const results = [];

	console.log("Running query to PostgreSQL server:" + config.host);

	// Perform query
	var query = client.query('SELECT * FROM inventory;');

	// Print result set
	query.on('row', function(row)
			{
				var temp = JSON.stringify(row);
				response.write(temp + "\n");
				console.log(temp);
			});

	// Exit program after execution
	query.on('end', function(row)
			{
				response.end('End web session \n');
				console.log("Finished execution, exiting now");
//				process.exit()
			});
}
