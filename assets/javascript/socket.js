let websocket = new WebSocket('wss://echo.websocket.org');

websocket.onopen = (e) => {
    let conexion = document.getElementById("conexion");
    conexion.innerText = "Conexion al servidor exitosa"

};

websocket.onmessage = (e) => {
    let respuesta = document.getElementById("respuesta")
    respuesta.innerText = e.data;
}

websocket.onerror = (e) => {
    console.log("Error",e.data);
}

websocket.onclose = (e) => {
    console.log("Socket cerrado")
}

function sendMessage() {
    let mensage = document.getElementById("mensage");
    websocket.send(mensage.value);
}