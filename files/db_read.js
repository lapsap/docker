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
				queryDatabase();
			}
		});

function queryDatabase()
{
	// Declare array to hold query result set
	const results = [];

	console.log("Running query to PostgreSQL server:" + config.host);

	// Perform query
	var query = client.query('SELECT * FROM inventory;');

	// Print result set
	query.on('row', function(row)
			{
				console.log("Read " + JSON.stringify(row));
			});

	// Exit program after execution
	query.on('end', function(row)
			{
				console.log("Finished execution, exiting now");
				process.exit()
			});
}
