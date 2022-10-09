//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const _ = require("lodash")

const aboutContent = "記断真闘負夜合碁左高報。良著済勉外見相界根周秋摯周検丸十続。成禁保米手水占掲原上師日大訃幻女鹿。能北葛炎月座作帯報伝解意加交。売論問井梨午念用母安禁体聞認月保気戦大。問図立能飾籍写事限共演治綬義率資謙遺獲真。夢銀既希注走間入観験選重。詳田合戸遅文高伸蜂低群予自組水行歳。載前手強盾作告問立額信計巡済歴著激年道上。"
const contactContent = "面神細落陣企更信辞。増治携掲端左誓鬼功阪総更購万問防成織高求。農緒毎盗写出会文自案稿支。内化経不議病発全国防見担。尊感判投関録半重装最座軽姿。売毎画思上通文前戦書益笑。代電山落統出抑康四終行緊供目管中郡編。証種冷丁日理幕置浸族句転新著編始注写健。外衆岡勧図院欲時芸真徳共辞経戦"
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const posts= []

app.get("/", function(req, res){
  res.render('home', {posts: posts})
})

app.get("/posts/:title", function(req, res){
  const postName = _.lowerCase(req.params.title)
  posts.forEach(function(post){
    if (_.lowerCase(post.title) === postName){
      res.render("post", {title: post.title, content: post.article})
    }
  }) 
})

app.get("/about", function(req, res){
  res.render('about', {aboutContent: aboutContent})
})

app.get("/contact", function(req, res){
  res.render('contact', {contactContent: contactContent})
})

app.get("/compose", function(req, res){
  res.render('compose')
})

app.post("/compose", function(req, res){
  const title = req.body.title
  const article = req.body.article
  const post = {
    title: title,
    article: article
  }
  posts.push(post)
  res.redirect("/")
})










app.listen(3000, function() {
  console.log("Server started on port 3000");
});
