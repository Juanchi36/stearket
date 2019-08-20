<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Lumen + React simple Todo App</title>
	<link rel="stylesheet" href="semantic/semantic.min.css">
	<style>
		/* Im not a good designer :D */
		#app {
			width: 450px;
			margin: auto;
			padding-top: 60px;
		}
		.todo-done {
			text-decoration: line-through;
		}
	</style>
</head>
<body>
	<div id="app"></div>
	<script>
		var API_URL = '{{url('/games')}}';
	</script>
	<script src="js/build/build.js"></script>
</body>
</html>