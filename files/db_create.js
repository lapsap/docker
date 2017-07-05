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
	client.query(
			' \
			DROP TABLE IF EXISTS inventory; \
			CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER); \
			INSERT INTO inventory (name, quantity) VALUES (\'banana\', 150); \
			INSERT INTO inventory (name, quantity) VALUES (\'orange\', 154); \
			INSERT INTO inventory (name, quantity) VALUES (\'apple\', 100); \
			',
			function (err)
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
