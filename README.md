Question 1.1 donner la liste des en-têtes de la réponse HTTP du serveur

connection:keep-alive
date:Mon, 30 Sep 2024 11:57:53 GMT
keep-alive:timeout=5
transfer-encoding:chunked


Question 1.2 donner la liste des en-têtes qui ont changé depuis la version précédente

content-length:20
content-type:application/json
date:Mon, 30 Sep 2024 12:00:35 GMT
keep-alive:timeout=5


Question 1.3 que contient la réponse reçue par le client ?
{"message":"I'm OK"}

Question 1.4 quelle est l’erreur affichée dans la console ? Retrouver sur https://nodejs.org/api le code d’erreur affiché.

Error: ENOENT: no such file or directory, open 'C:\Users\monpc\Desktop\dev web\tp5\index.html'
    at async open (node:internal/fs/promises:639:25)
    at async Object.readFile (node:internal/fs/promises:1242:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\monpc\\Desktop\\dev web\\tp5\\index.html'   
}

Le fichier index.html n'est pas trouvé


function requestListener(_request, response) {
  fs.readFile("index.html", "utf8")
    .then((contents) => {
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      return response.end(contents);
    })
    .catch((error) => {
        response.writeHead(500);
        response.end("<html><h1>No file index.html<h1></html>");
    });
}

Question 1.5 donner le code de requestListener() modifié avec gestion d’erreur en async/await.

function readfile(){
    return fs.readFile("index.html", "utf8")
}

async function requestListener(_request, response) {
    try{
        const contents = await readfile();
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        return response.end(contents);
    } catch(error) {
        response.writeHead(500);
        response.end("<html><h1>No file index.html<h1></html>");
    };
}

Question 1.6 indiquer ce que cette commande a modifié dans votre projet.
Il nous a rajouté une liste deroulantes de node_modules

Question 1.7 quelles sont les différences entre les scripts http-dev et http-prod ?
http-dev lance le script en mode developpement (la page est relancé dès que l'on change le script) et http-prod lance en mode production (ne relance pas la page automatiquement)

Question 1.8 donner les codes HTTP reçus par votre navigateur pour chacune des quatre pages précédentes


http://localhost:8000/index.html
200
http://localhost:8000/random.html
200
http://localhost:8000/
404
http://localhost:8000/dont-exist
404