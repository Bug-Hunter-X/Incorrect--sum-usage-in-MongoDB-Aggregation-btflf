# MongoDB Aggregation Error: Incorrect $sum Usage

This repository demonstrates a common error encountered when using the `$sum` operator within the `$group` stage of a MongoDB aggregation pipeline.  The incorrect usage involves providing a string literal instead of a valid field name to the `$sum` operator, resulting in an error.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.  This example highlights the importance of using the correct field references within MongoDB aggregation queries.