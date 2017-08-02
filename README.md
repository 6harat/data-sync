
DESCRIPTION OF VARIOUS COMPONENTS:

	• Aggregator: Aggregates the Diff Objects and stitches them up in a tree composed of Block as its node.
	• Compressor: Compresses/Uncompresses the data being transferred over the network.
	• Differentiator: Generates the Diff Object between two sources of data.
	• Parser: Parses the data after it being uncompressed by the Compressor based on the relevant information about the Content-Type as mentioned in the header.
	• Processor: Main thread that takes care of managing the workflow.
	• Router: Gateway to the external network to be able to connect to other devices for listening and sending requests.
	• Transactor: Transaction Management to ensure that a file contents does not get changed (or if it allows that to happen, manage it gracefully) during the synchronization procedure by keeping appropriate locks for the same and providing a staging area to store those changes which can be later on added to the destined file later on.
	• Utils: Stores the common objects and implementations such as Validation, Error codes, Block's definition, etc.

