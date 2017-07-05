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
		queryDatabase();
		}   
		});

function queryDatabase()
{
	client.query('DELETE FROM inventory WHERE name=\'apple\';', function (err, result)
			{
			console.log("Connection established");

			if (err)
			throw err;
			else
			{
			client.end(function (err)
					{
					if (err)
					throw err;

					// Else closing connection finished without error
					console.log("Closed client connection");
					});

			console.log("Finished execution, exiting now");
			process.exit()          
			}
			}); 
}
