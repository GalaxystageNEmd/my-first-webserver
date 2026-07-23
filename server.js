const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Web Server</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:linear-gradient(135deg,#0f172a,#111827,#000);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow:hidden;
}

.card{
    width:700px;
    max-width:90%;
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(15px);
    border:1px solid rgba(255,255,255,.2);
    border-radius:25px;
    padding:40px;
    text-align:center;
    box-shadow:0 0 30px rgba(0,255,255,.25);
    animation:fadeIn 1s ease;
}

h1{
    font-size:42px;
    color:#00eaff;
    text-shadow:0 0 15px #00eaff;
    margin-bottom:20px;
}

h2{
    color:#fff;
    margin-bottom:15px;
}

p{
    font-size:20px;
    line-height:1.8;
    color:#ddd;
}

.badge{
    display:inline-block;
    margin-top:25px;
    padding:12px 25px;
    background:#00eaff;
    color:#000;
    font-weight:bold;
    border-radius:50px;
    box-shadow:0 0 20px #00eaff;
}

.footer{
    margin-top:25px;
    color:#aaa;
    font-size:15px;
}

@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}
</style>
</head>

<body>

<div class="card">
    <h1>🚀 WEB SERVER ONLINE</h1>

    <h2>Node.js + Railway</h2>

    <p>
        👤 <b>นายชัยวุรตย์ ธรรมศรี</b><br>
        🎓 รหัสนักศึกษา <b>69319010202</b>
    </p>

    <div class="badge">
        ✅ Server Running Successfully
    </div>

    <div class="footer">
        เครื่องแม่ข่ายกำลังทำงานปกติบน Railway
    </div>
</div>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
