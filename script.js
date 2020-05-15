const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const allText = document.body;

const strong = /функци./g;
const strong1 = "<strong>функция</strong>";
const time = /[0-9]{2}:[0-9]{2}/g;
const marks = /"[^"]*"|'[^']*'/g;

task1.innerHTML = task1.innerHTML.replace(strong, strong1);
task2.innerHTML = task2.innerHTML.replace(time, "<b>$&</b>");
allText.innerHTML = allText.innerHTML.replace(marks, "<mark>$&</mark>");

createLinksFromText = (text) => {
    return (text || "").replace(
      /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
      (match, space, url) => {
        const hyperlink = url
        if (!hyperlink.match('^https?:\/\/')) {
          hyperlink = 'http://' + hyperlink
        }
        return space + '<a href="' + hyperlink + '">' + url + '</a>'
      }
    )
  }
  
  allText.innerHTML = createLinksFromText(allText.innerHTML);
 
const newArr = allText.innerHTML.match(/#[a-fA-F0-9]{6}\b/gi);
newArr.forEach((el) => {
    console.log(el);
})