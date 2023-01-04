import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(title,body) {
  return `<html>
  <head>
  <title>
  ${title}
  </title>
  <style>
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
  let pathname = ctx.request.url.pathname
  if (pathname.startsWith("/login")) {
    ctx.response.body = page('login',`
       <form action="" method="post">
         <input type="text" name="user" value="" placeholder="User Name"/>
         <input type="password" name="password" value="" placeholder="Password"/>
         <input type="button" href="/home" name = "submit" value = "提交" id="btn"/>
       </form>
    `)
  } else {
    ctx.response.body = page('mywebsite',`
      <h1>Nelson's website</h1>
      <h2>資工三 張繼光</h2>
    `)
  }
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
