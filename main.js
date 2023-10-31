
/*********************************תרגול עצמי*********************************************************************** */ 
// document.getElementById('zimoonTorim').addEventListener('click', function () 
// {
//     alert(' 🤒 לחצת על קובית זימון תורים!');
// });
// document.getElementById('tashloomim').addEventListener('click', function () 
// {
//     alert(' 💰 לחצת על קובית התשלומים שלך!');
// });
// document.getElementById('hamlatzot').addEventListener('click', function () 
// {
//     alert(' 👌 לחצת על קובית המלצות רפואיות!');
// });
// document.getElementById('mishkal').addEventListener('click', function () 
// {
//     alert(' 🏋️ לחצת על קובית גובה ומשקל!');
// });
// document.getElementById('troofot').addEventListener('click', function () 
// {
//     alert(' 💊 לחצת על קובית הזמנת תרופות!');
// });
/*--------------------------הודעה קופצת בעת לחיצה על הקישור----------------------------------------------* */
document.getElementById('דרור').addEventListener('click', function () 
{
    alert(' 👨‍⚕️יוצר קשר עם ד"ר דרור');
});
document.getElementById('דותן').addEventListener('click', function () 
{
    alert(' 👨‍⚕️יוצר קשר עם ד"ר דותן');
});
document.getElementById('אילן').addEventListener('click', function () 
{
    alert(' 👨‍⚕️יוצר קשר עם ד"ר אילן');
});
document.getElementById('חן').addEventListener('click', function () 
{
    alert(' 👩‍⚕️יוצר קשר עם ד"ר חן');
});
document.getElementById('עדי').addEventListener('click', function () 
{
    alert(' 👩‍⚕️יוצר קשר עם ד"ר עדי');
});
/*--------------------------------תנאים למילוי הפרטים בטופס----------------------------------------* */
function createObject() 
{
  const userName = document.getElementById('name').value;
  const useremail = document.getElementById('email').value;
  const userphon = document.getElementById('phon').value;
  const userid = document.getElementById('id').value;
  const userdate = document.getElementById('date').value;
  const usersex = document.getElementById('sex').value;
  const userstatus = document.getElementById('status').value;
  if (userName.length > 10) 
  {
    alert("מצטערים 🫣 השם ארוך מידי ניתן להכניס עד 10 תווים");
    return false;
  }
  if (userid <= 99999999) 
  {
      alert("מצטערים 🫣 תעודת הזהות צריך לכלול 9 ספרות-נא להכניס 9 ספרות");
    return false;
  }
  if (userid >= 1000000000) 
  {
      alert("מצטערים 🫣 תעודת הזהות צריך לכלול 9 ספרות-נא להכניס 9 ספרות");
      return false;
  }
  if (userphon <= 999999999) 
  {
      alert("מצטערים 🫣 מספר הטלפון צריך לכלול 10 ספרות-נא להכניס 10 ספרות");
      return false;
  }
  if (userphon >= 10000000000) 
  {
    alert("מצטערים 🫣 מספר הטלפון צריך לכלול 10 ספרות-נא להכניס 10 ספרות");
    return false;
  }
/*--------------------------------------יצירת אובייקט טופס רישום-מציג הודעה לאחר מילוי הפרטים------------------------------------* */
  // יוצרים אלמנטי דיב להצגת השם והפרטים הנוספים
  const userGreeting = document.createElement("div");
  userGreeting.textContent = `שלום ${userName} שמחים על הצטרפותך 👏 - נא ודא/י שפרטיך נכונים.`;
  userGreeting.style.textAlign = "center";
  userGreeting.style.padding = "20px";
  userGreeting.style.fontSize = "35px";
  userGreeting.style.fontWeight = "bolder";
  userGreeting.style.fontFamily = "fantasy";
  userGreeting.style.marginTop = "2px";
  userGreeting.style.color = "rgb(6, 105, 116)";
  const current_div = document.getElementById("container")
  document.body.insertBefore(userGreeting, current_div);
  const userDetails = document.createElement("div");
  const userDetailItems = 
  [
    `שם: ${userName}`,
    `אימייל: ${useremail}`,
    `טלפון: ${userphon}`,
    `תעודת זהות: ${userid}`,
    `תאריך לידה: ${userdate}`,
    `מין : ${usersex}`,
    `מצב אישי : ${userstatus}`
  ];
  userDetails.style.textAlign = "center";
  userDetails.style.padding = "20px";
  userDetails.style.fontSize = "20px";
  userDetails.style.borderBottom = "3px solid rgb(5, 38, 106)"; /* קו חסימה עליון בעזרת צבע מסוים */
  userDetails.style.fontFamily = "inherit";
  userDetails.style.marginTop = "2px";
  userDetails.style.color = "rgb(6, 105, 116)";
  document.body.insertBefore(userDetails, current_div);
  userDetailItems.forEach(itemText => 
  {
    const item = document.createElement("p");
    item.textContent = itemText;
    userDetails.appendChild(item);
  });
  // מבטל את הכפתור אחרי שנוצר הדיב
  document.querySelector('input[type="submit"]').disabled = true;
}
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", createObject);

/*---------------------------------------------פונקציה להשמת תאריך נוכחי בראש העמוד------------------------------- */
//פונקציה להשמת תאריך נוכחי
document.addEventListener("DOMContentLoaded", function() 
{
  var dateElement = document.getElementById("תאריך-מקורי");
  var התאריך = new Date(); // התאריך המקורי
  dateElement.
  innerText = התאריך.toLocaleDateString(); // הצגת התאריך בתבנית מקומית
});
/**-----------------------------------------פונקציה להשמת זמן נוכחי בראש העמוד----------------------------------- */
//פונקציה להשמת זמן נוכחי
function updateLocalTime() 
{
const localTimeElement = document.getElementById("local-time");
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const formattedTime = `${hours}:${minutes}:${seconds}`;
localTimeElement.textContent = formattedTime;
}
// עדכון ראשון
updateLocalTime();
// כדי לעדכן את השעה כל שנייה, תשתמשי ב- setInterval
setInterval(updateLocalTime, 1000); // מעדכן כל שנייה
/**--------------------------------------הדיבים בשורה הראשונה---------------------------------- */
function createQuickAction1() 
{
  const quickActions1 = 
  [
    {
      name: "זימון תורים",
      imgUrl: "page/זימון תורים.png",
      link: "https://mushlam.clalit.co.il/he/Pages/default.aspx?ref=clalit"
    },
    {
      name: "התשלומים שלך",
      imgUrl: "page/התשלומים שלך.png",
      link: "https://mushlam.clalit.co.il/he/Pages/default.aspx?ref=clalit"
    },
    {
      name: "המלצות רפואיות",
      imgUrl: "page/המלצות רפואיות אישיות.png",
      link: "https://mushlam.clalit.co.il/he/Pages/default.aspx?ref=clalit"
    }
  ];
  const itemContainer = document.getElementById("item-container");
  quickActions1.forEach((action) => {
    const actionItem = document.createElement("div");
    actionItem.classList = "item-shadow1";
    const h2El = `<h2>${action.name}</h2>`;
    const linkEl = `<a href="${action.link}"><img width="180" src="${action.imgUrl}" alt=""></a>`; 
    actionItem.innerHTML = `${h2El}${linkEl}`;
    itemContainer.append(actionItem);
  })
}
document.addEventListener("DOMContentLoaded", function() {
  // הוסף כאן את הקריאה לפונקציה renderItem
  createQuickAction1();
});
/*--------------------------------------הדיבים בשורה השנייה---------------------------------------------- */
function createQuickAction2() 
{
  const quickActions2 = 
  [
    {
      name: "גובה ומשקל",
      imgUrl: "page/משקולות.png",
      link: "https://mushlam.clalit.co.il/he/Pages/default.aspx?ref=clalit",
      width: "230"
    },
    {
      name: "הזמנת תרופות",
      imgUrl: "page/הזמנת תרופות.png",
      link: "https://mushlam.clalit.co.il/he/Pages/default.aspx?ref=clalit",
      width: "280"
    }
  ];
  const itemContainer2 = document.getElementById("item-container1");
  quickActions2.forEach((action) => {
    const actionItem2 = document.createElement("div");
    actionItem2.classList = "item-shadow2";
    const h2El = `<h2>${action.name}</h2>`;
    const linkEl = `<a href="${action.link}"><img width=${action.width} src="${action.imgUrl}" alt=""></a>`; 
    actionItem2.innerHTML = `${h2El}${linkEl}`;
    itemContainer2.append(actionItem2);
  })
}
document.addEventListener("DOMContentLoaded", function() 
{
  // הוסף כאן את הקריאה לפונקציה renderItem
  createQuickAction2();
});

/**-------------------------------אפשרות בה ניתן לראות את החיפושים האחרונים בתיבת החיפוש------------------- */
const searchInput = document.querySelector(".search");
const recentSearchesContainer = document.querySelector(".recent-searches");
const recentSearches = [];
function showRecentSearches() 
{
    recentSearchesContainer.style.display = "block";
    recentSearchesContainer.style.padding = "20px";
    recentSearchesContainer.style.fontSize = "25px";
    recentSearchesContainer.style.border= "3px solid black"; 
    recentSearchesContainer.style.fontFamily = "inherit";
    recentSearchesContainer.style.font
    weight ="bold";
    recentSearchesContainer.innerHTML = "";
    for (let i = recentSearches.length - 1; i >= 0; i--) 
    {
      const recentSearch = document.createElement("div");
      recentSearch.textContent = recentSearches[i];
      recentSearchesContainer.appendChild(recentSearch);
    }
}
searchInput.addEventListener("mouseover", showRecentSearches);
searchInput.addEventListener("focus", showRecentSearches);
searchInput.addEventListener("mouseout", function () 
{
  recentSearchesContainer.style.display = "none";
});
searchInput.addEventListener("change", function () 
{
  const searchTerm = searchInput.value.trim();
  if (searchTerm) 
  {
    addRecentSearch(searchTerm);
  }
});
function addRecentSearch(searchTerm) 
{
  recentSearches.push(searchTerm);
  if (recentSearches.length > 5) 
  {
    recentSearches.shift();
  }
}
recentSearchesContainer.style.position = "absolute";
recentSearchesContainer.style.top = `${searchInput.offsetTop + searchInput.offsetHeight}px`;
recentSearchesContainer.style.left = `${searchInput.offsetLeft }px`;
recentSearchesContainer.style.width = `${searchInput.offsetWidth-45}px`;

/**------------------------פונקציה שגוללת אוטומטית כלפי מטה כאשר לוחצים על חץ..----------------- */
function scrollDown() 
{
    window.scrollTo({
        top: window.scrollY + 400, // גובה הגלילה שאת רוצה להוסיף
        behavior: 'smooth' // אנימציה חלקה של הגלילה
    });
}
/**------------------------------------פונקציה שסוגרת את הדיב כשלוחצים על איקס------------------------------- */
/*document.getElementById('openDivLink').addEventListener('click', function (e) 
{
  e.preventDefault();
  document.getElementById('popupDiv').style.display = 'block';
  document.getElementById('popupDiv').style.right = '0'; // שינוי ה- right ל-0
});
 closeButton = document.getElementById('closeButton');
var popupDiv = document.getElementById('popupDiv');
closeButton.addEventListener('click', function() 
{
  popupDiv.style.display = 'none';
});*/
document.getElementById('openDivLink').addEventListener('click', function (e) {
  e.preventDefault();
  var popupDiv = document.getElementById('popupDiv');
  popupDiv.style.display = 'block';
  // השמת timeout קטן לפני שמשנים את ה-right ל-0 בכדי ליצור השהיה ולאזן את האנימציה
  setTimeout(function () 
  {
    popupDiv.style.right = '0'; // שנה את ה-right ל-0
  }, 50); // זמן ההשהיה, כאשר 1000 מילישניות הן 1 שנייה
});

var closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', function() 
{
  var popupDiv = document.getElementById('popupDiv');
  popupDiv.style.right = '-40%'; 
});








