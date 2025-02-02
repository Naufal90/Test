<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontrol Bot Minecraft</title>
    <style>
        body { text-align: center; font-family: Arial, sans-serif; }
        .controls { margin-top: 20px; }
        button { margin: 5px; padding: 10px; font-size: 16px; }
        #status { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>Kontrol Bot Minecraft</h1>
    <div class="controls">
        <button onclick="sendCommand('move_forward')">Maju</button>
        <button onclick="sendCommand('move_back')">Mundur</button>
        <button onclick="sendCommand('jump')">Lompat</button>
        <button onclick="sendCommand('build')">Bangun</button>
    </div>
    <h2>Status Bot:</h2>
    <div id="status">Menunggu data...</div>

    <script>
        const ws = new WebSocket("ws://utopia.pylex.xyz:9253");

        ws.onmessage = (event) => {
            const status = JSON.parse(event.data);
            document.getElementById("status").innerText = 
                `Posisi: (${status.x.toFixed(2)}, ${status.y.toFixed(2)}, ${status.z.toFixed(2)}) | ` +
                `Health: ${status.health} | Food: ${status.food}`;
        };

        function sendCommand(action) {
            ws.send(JSON.stringify({ action }));
        }
    </script>
</body>
</html>
