function getError404() {

    fetch("https://http.cat/500")
    .then((response) => response.blob())
    .then((blob) => {
        const url = URL.createObjectURL(blob);
        document.getElementById("errorImage").src = url;
    })
    .catch((error) => {
        console.error("Error al obtener la imagen:", error);
        setTimeout(() => {
            window.location.href = "./error-pages/error404.html";
        }, 10000)
    });

}

function getError502() {

    fetch("https://http.cat/500")
    .then((response) => response.blob())
    .then((blob) => {
        const url = URL.createObjectURL(blob);
        document.getElementById("errorImage").src = url;
    })
    .catch((error) => {
        console.error("Error al obtener la imagen:", error);
        setTimeout(() => {
            window.location.href = "./error-pages/error502.html";
        }, 10000)
    });
    
}
 
function getError504() {

    fetch("https://http.cat/500")
    .then((response) => response.blob())
    .then((blob) => {
        const url = URL.createObjectURL(blob);
        document.getElementById("errorImage").src = url;
    })
    .catch((error) => {
        console.error("Error al obtener la imagen:", error);
        setTimeout(() => {
            window.location.href = "./error-pages/error504.html";
        }, 10000)
    });
    
}