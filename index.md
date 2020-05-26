<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nacionalidade</title>
    <link rel="stylesheet" type="text/css" href="Ex009-Desafio.css" media="screen" />
    <script src="Ex009.js"></script>
</head>
<body>
    <h1>Digite a sua nacionalidade</h1>
    <div id="form" class="form">
        <input type="text" name="txtName" id="txtName" onkeydown="ifKey()">
        <input type="button" value="Ok" id="button" onclick="nacionalidade()">
    </div>
    <div id="Resultado">
    </div>
</body>
</html>
