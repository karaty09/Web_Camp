# Term Project | Camping@NST
<h3 align="center">ระบบจองลานกางเต็นท์ภายในจังหวัดนครศรีธรรมราช</h3>
<h4 align="center">ระบบจองลานกางเต็นท์โดยจะถูกออกแบบมาเพื่อผู้ใช้งานทั่วไป (Client) </h4> <br>
<h4> โดยในไฟล์ index.html จะมีตัวเลือกให้เลือก 2 ตัวเลือก</h4>
<b><u>(ซึ่งหากนำผลงานไป Implement จริงจะไม่มีการใส่หน้า Index.html ให้ผู้ใช้เลือก)</u></b>
<ul>
    <li>User Mode ผู้ใช้งานทั่วไปที่เข้ามายังเว็บไซต์ จะเป็น User Mode อัตโนมัติ โดยไม่มีการ login</li>
    <li>Admin Mode ในฝั่งของ Admin Mode จะเป็น Mode ที่เข้าถึงการแก้ไขข้อมูลในเชิงลึกจะมีปุ่มในการเข้าใช้งานที่หน้า index.html และลิงก์ไปยังหน้า Login  โดยอัตโนมัติ</li>
</ul>

# Data Dictionary 📖

```
{
  "usercamp": [
    {
      "place": "Lyn&Copter Chill ",
      "name": "thammakit",
      "phonenumber": "09523423423",
      "adults": "2",
      "children": "0",
      "datecome": "2023-01-14",
      "dateback": "2023-01-12",
      "room_selection": "Hotel",
      "id": 1
    },
    {
      "place": "MonHouse_Camping",
      "name": "Supanut",
      "phonenumber": "0923432342",
      "adults": "3",
      "children": "2",
      "datecome": "2023-01-05",
      "dateback": "2023-01-10",
      "room_selection": "Own Camping",
      "id": 6
    },
    {
      "place": "Copter_Chill_Resort",
      "name": "Ratchanon",
      "phonenumber": "0934534534",
      "adults": "6",
      "children": "3",
      "datecome": "2023-01-18",
      "dateback": "2023-01-26",
      "room_selection": "Camping of Resort",
      "id": 7
    }
  ]
}
```
<table style="border: red solid 1px;">
    <thead>
        <h2><b>booking :</b></h2>
    </thead>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
        <th>Data Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>id</td>
        <td>id การจองของผู้ใช้</td>
        <td>String</td>
        <td>1</td>
    </tr>
    <tr>
        <td>place</td>
        <td>สถานที่ในการจอง</td>
        <td>String</td>
        <td>Lyn&Copter Chill</td>
    </tr>
    <tr>
        <td>name</td>
        <td>ชื่อผู้จอง</td>
        <td>String</td>
        <td>Supanut Koomruck</td>
    </tr>
    <tr>
        <td>phonenumber</td>
        <td>เบอร์มือถือ</td>
        <td>String</td>
        <td>0954265568</td>
    </tr>
    <tr>
        <td>datecome</td>
        <td>วันที่ผู้ใช้จะ Check in</td>
        <td>Date</td>
        <td>2023-01-19</td>
    </tr>
    <tr>
        <td>dateback</td>
        <td>วันที่ผู้ใช้จะ Check out</td>
        <td>Date</td>
        <td>2023-01-20</td>
    </tr>
    <tr>
        <td>adult</td>
        <td>จำนวนคน(ผู้ใหญ่)</td>
        <td>Number</td>
        <td>1</td>
    </tr>
    <tr>
        <td>children</td>
        <td>จำนวนคน(เด็ก)</td>
        <td>Number</td>
        <td>1</td>
    </tr>
     <tr>
        <td>room_selection</td>
        <td>รูปแบบห้องที่ทำการจอง</td>
        <td>String</td>
        <td>Hotel</td>
    </tr>
    
</table>


# Languages and Tools: 🛠
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" width="42"
    alt="javascript logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" width="42"
    alt="html5 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" width="42"
    alt="css3 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" width="42"
    alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="30" width="42"
    alt="bootstrap logo" />
<img src="https://openai.com/content/images/2022/05/openai-avatar.png" height="30" width="30"
    alt="git logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="30" width="42"
    alt="vscode logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" width="42"
    alt="git logo" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/640px-Google_%22G%22_Logo.svg.png" height="30" width="30"
    alt="ChatGPT logo" />

<br><br>


# ลิงค์คลิป Youetube :
<div align="left">
    <a href="https://www.youtube.com/watch?v=Y0dvGvM5Rpo&ab_channel=PillJXYZ"> <img
            src="https://img.shields.io/static/v1?message=Youtube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=for-the-badge"
            height="35" alt="youtube logo" /></a>
</div>

# สมาชิคในกลุ่ม : 
- 64113889 ศุภณัฐ คุ้มรักษ์
- 64120280 รัชชานนท์ ชูเกียรติเถกิง
- 64106107 ธัมมกิตติ์ โชติช่วง
<br><br>

<img height="150" width="150"
    src="https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/241209828_1290026778106689_4611438546097415270_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEBM7n8RAAfvdqjBs5KTeVK56RrLMWoX7LnpGssxahfsnJwnigQSCRcFbod4zMG8aS0vWZDXw8WAvpclLy5FSgU&_nc_ohc=TKLyYrR7_i8AX-U9NZc&_nc_ht=scontent.furt3-1.fna&oh=00_AfCPTSNEaYhifKqpt24u9e6_Gmg6pFdK_ge61P1zMIChEw&oe=63BF1591" />
<img height="150" width="150"
    src="https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/81128653_2466777156896169_7219973610943807488_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE8hPT3Eq41eEufU--cHGxU0iF5BGXFz-PSIXkEZcXP4_S3chyQIeAbIF2_yZERb9wQyCPa6oF75x_IsBJpIWdk&_nc_ohc=gKQpKmpUv4kAX_gP4Lf&_nc_ht=scontent.furt3-1.fna&oh=00_AfAve3YnBqM2hfX7WmcWB1tpj4TsGnCwourKl7XIjnIHSA&oe=63E1E3E1" />
<img height="150" width="150"
    src="https://scontent.furt3-1.fna.fbcdn.net/v/t39.30808-6/324184370_1476159196245007_8414585612646709354_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEf08IWsnB2ZnP0bDumsovVVcuiurYOLn9Vy6K6tg4ufzLYuIK2PpcYMYz4IZC6Mvu1Eg83agCDCbmH0q_RdU7-&_nc_ohc=GoEqp52V61UAX-VfjHA&_nc_ht=scontent.furt3-1.fna&oh=00_AfDRMJ0gedMOJBzfwc700_QBMc-nBs_OhZSsGYzszenvlQ&oe=63BF0A7E" />

<br><br>


# หลักสูตรเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล สำนักวิชาสารสนเทศศาสตร์ 
<div>
    <img height="300" width="300"
        src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/279560270_5821053641244444_1641496247686643675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0EY1X0Qdhl07UJiFQsaVZWylXctbtv-pbKVdy1u2_6tf9k1Ytpc8jIphmM3ZHSVw5BcDktrmF-SyZmjBluAYm&_nc_ohc=cuLkhutHAIsAX-6WoFW&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfChkK43-YQ1dkymkyoYMlRPgTSO4xj8-EzDtsU5lP-ipw&oe=63BDC9E6" />