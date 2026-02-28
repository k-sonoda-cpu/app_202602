const box = document.querySelector(".box");
const seibunbox = document.querySelector(".seibun-box");
const rootStyle=getComputedStyle(document.documentElement);

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");

const sibn1 = document.getElementById("seibun1");
const sibn2 = document.getElementById("seibun2");
const sibn3 = document.getElementById("seibun3");

const COLOR_zutsu=rootStyle.getPropertyValue("--color-zutsu").trim();
const COLOR_sekidome=rootStyle.getPropertyValue("--color-sekidome").trim();
const COLOR_icho=rootStyle.getPropertyValue("--color-icho").trim();

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

item1.addEventListener("click", function() {
  box.style.backgroundColor = COLOR_zutsu;
    sibn1.setAttribute("data-text", "アセトアミノフェン");
    img1.src="acet.png";
    sibn2.setAttribute("data-text", "イブプロフェン");
    img2.src="ibup.png";
    sibn3.setAttribute("data-text", "ロキソプロフェン");
    img3.src="loxo.png";
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
});

item2.addEventListener("click", function() {
  box.style.backgroundColor = COLOR_sekidome;
    sibn1.setAttribute("data-text", "デキストロメトルファン");
    img1.src="dext.png";
    sibn2.setAttribute("data-text", "ジヒドロコデインリン酸塩");
    img2.src="dihydro.png";
    sibn3.setAttribute("data-text", "コデインリン酸塩");
    img3.src="codeine.png";
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
});

item3.addEventListener("click", function() {
  box.style.backgroundColor = COLOR_icho;
    sibn1.setAttribute("data-text", "ジアスターゼ");
    img1.src="diastase.png";
    sibn2.setAttribute("data-text", "リパーゼ");
    img2.src="lipase.png";
    sibn3.setAttribute("data-text", "プロテアーゼ");
    img3.src="protease.png";
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";
});

const KOKA = {
  "アセトアミノフェン": "効果：発熱を下げる・痛みをやわらげる（解熱鎮痛）",
  "イブプロフェン": "効果：痛みを抑える・炎症を抑える・熱を下げる（解熱鎮痛＋抗炎症）",
  "ロキソプロフェン": "効果：痛みを抑える・炎症を抑える（解熱鎮痛＋抗炎症）",
  "デキストロメトルファン": "効果：咳を抑える（鎮咳）",
  "ジヒドロコデインリン酸塩": "効果：咳を抑える・痛みを抑える（鎮咳＋鎮痛）",
  "コデインリン酸塩": "効果：咳を抑える・痛みを抑える（鎮咳＋鎮痛）",
  "ジアスターゼ": "効果：消化を助ける（主にデンプン分解）",
  "リパーゼ": "効果：脂肪の消化を助ける（脂肪分解）",
  "プロテアーゼ": "効果：タンパク質の消化を助ける（タンパク質分解）"
};

const GAIYO = {
  "アセトアミノフェン": "概要：頭痛・歯痛・生理痛・発熱などに広く使われます。胃への負担が比較的少なく、子ども用にもよく使われる「やさしめ鎮痛成分」です。",
  "イブプロフェン": "概要：炎症を抑える力が強く、頭痛・関節痛・生理痛などに向きます。ただし胃を荒らしやすいことがあるので、空腹時は注意されることが多いです。",
  "ロキソプロフェン": "概要：「効きが強め」な鎮痛成分として有名です。頭痛・歯痛・腰痛などでよく使われます。",
  "デキストロメトルファン": "概要：脳の咳中枢に働いて咳を止めるタイプ。「乾いた咳（コンコン咳）」に使われやすい成分です。",
  "ジヒドロコデインリン酸塩": "概要：コデイン系の咳止めで、咳をしっかり止める力があります。",
  "コデインリン酸塩": "概要：咳止めとして強めに働く成分です。",
  "ジアスターゼ": "概要：胃腸薬によく入っている消化酵素。炭水化物（ご飯・パン・麺など）を分解して消化を助けます。食べすぎ・胃もたれに使われます。",
  "リパーゼ": "概要：脂っこい食事のあとに活躍する消化酵素です。揚げ物や肉料理で胃が重いときに、消化を助けます。",
  "プロテアーゼ": "概要：肉・魚・卵などのタンパク質を分解する酵素。胃の負担を軽くし、胃もたれ改善に役立ちます。"
};

const CHUI = {
  "アセトアミノフェン": "",
  "イブプロフェン": "注意：胃を荒らしやすいことがあるので、空腹時は注意されることが多いです。",
  "ロキソプロフェン": "注意：イブプロフェン同様、胃への刺激が出やすいタイプです。",
  "デキストロメトルファン": "注意：概要：眠気が出ることも。",
  "ジヒドロコデインリン酸塩": "注意：概要：眠気・便秘などに注意。",
  "コデインリン酸塩": "注意：眠気が出たり、便秘になりやすいことがあるので注意されます。",
  "ジアスターゼ": "",
  "リパーゼ": "",
  "プロテアーゼ": ""
};

const seibunmei = document.querySelector(".seibunmei");

const textBox = document.querySelector(".text-box");

function showSeibun(key){
  seibunmei.textContent=key;
  document.getElementById("koka").textContent=KOKA[key];
  document.getElementById("gaiyo").textContent=GAIYO[key];
  document.getElementById("chui").textContent=CHUI[key];
}

sibn1.addEventListener("click",function(){
  showSeibun(sibn1.dataset.text);
});
img1.addEventListener("click",function(){
  showSeibun(sibn1.dataset.text);
});
sibn2.addEventListener("click",function(){
  showSeibun(sibn2.dataset.text);
});
img2.addEventListener("click",function(){
  showSeibun(sibn2.dataset.text);
});
sibn3.addEventListener("click",function(){
  showSeibun(sibn3.dataset.text);
});
img3.addEventListener("click",function(){
  showSeibun(sibn3.dataset.text);
});

function mojiSize(sizemoji){
  textBox.classList.remove("s","m","l");
  textBox.classList.add(sizemoji);
}