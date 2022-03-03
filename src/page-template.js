function generatePage(data) {

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Builder</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Your Team</h1>
        </header>
        <section class="cards">
        <div class="card">
            <div class="container">
              <h2><b>${data.name}</b></h2>
              <h3>${data.role}</h3>
                <div class="container-content">
                    <p>${data.id}</p>
                    <hr>
                    <p>${data.email}</p>
                    <hr>
                    <p>${data.info}</p>
                </div>
            </div>
          </div>
          </section>
        
    </body>
    </html>
    `;

}

module.exports = generatePage;