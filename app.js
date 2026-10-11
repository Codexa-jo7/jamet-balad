const restaurant = {whatsapp:'962797191419',address:'عمّان، شارع الجامعة، مقابل البوابة الرئيسية، بناية رقم 271',maps:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('مطعم جمعة بلد عمان شارع الجامعة مقابل البوابة الرئيسية بناية 271')};
const groups=['شاورما','الوجبات العائلية','زنجر البلد','زرب ومندي','إضافات','الحبة الكاملة'];
const raw=[['وجبة عادي',2.25,0],['وجبة سوبر',2.75,0],['وجبة دبل',3.40,0],['وجبة دبل مكس',4,0],['وجبة تربل',4.50,0],['وجبة حلبي',3.75,0],['وجبة إيطالي',3.75,0],['ساندويش صغير',.65,0,'عادي / شراك'],['ساندويش كبير',1.20,0],['ساندويش فرنسي',1.50,0],['شاورما عائلية · 32 قطعة',7,1,'بطاطا + كولا لتر + مثومة عادي وحار + مخلل'],['شاورما عائلية · 48 قطعة',11,1,'بطاطا + كولا لتر + مثومة عادي وحار + مخلل'],['شاورما عائلية · 64 قطعة',13,1,'بطاطا + 2 كولا لتر + 3 مثومة عادي + 3 حار + 3 مخلل'],['ساندويش زنجر البلد',1.75,2],['وجبة زنجر البلد',2.75,2],['وجبة زنجر إيطالي',4.50,2],['ساندويش بطاطا فرنسي',1,2],['ربع دجاجة / فخذة مع رز',2.50,3,'لبن + دقوس'],['ربع دجاجة / سفينة مع رز',3,3,'لبن + دقوس'],['نصف دجاجة مع رز',4.25,3,'لبن + دقوس'],['دجاجة كاملة مع رز',8.50,3,'2 لبن + دقوس'],['دجاجة ونصف مع رز',11.50,3,'3 لبن + دقوس'],['دجاجتين مع رز',16,3,'4 لبن + دقوس'],['ربع دجاجة / فخذة بدون رز',1.75,3,'دقوس'],['ربع دجاجة / سفينة بدون رز',2,3,'دقوس'],['نصف دجاجة بدون رز',3.75,3,'دقوس'],['صحن رز بدون دجاج',1.75,3,'دقوس'],['كولا',.30,4],['كولا لتر',.70,4],['ماء',.30,4],['مثومة',.50,4],['مخلل',.50,4],['دبس رمان',.50,4],['شطة',.50,4],['جبنة سائلة',.75,4],['بطاطا صغير',.75,4,'كاتشب'],['بطاطا كبير',1.25,4,'كاتشب']];
raw.push(['ساندويش عادي (حبة كاملة)',0.80,5,'شاورما برغيف خبز لبناني دائري من القمح الكامل'],['وجبة عادي (حبة كاملة)',2.75,5,'شاورما برغيف خبز لبناني دائري من القمح الكامل'],['وجبة سوبر (حبة كاملة)',3.40,5,'شاورما برغيف خبز لبناني دائري من القمح الكامل'],['وجبة دبل (حبة كاملة)',4.40,5,'شاورما برغيف خبز لبناني دائري من القمح الكامل'],['وجبة تربل (حبة كاملة)',5.50,5,'شاورما برغيف خبز لبناني دائري من القمح الكامل']);

const groupOrder=[0,5,2,1,3,4];
const orderedGroups=groupOrder.map(id=>groups[id]);groups.splice(0,groups.length,...orderedGroups);
for(const item of raw)item[2]=groupOrder.indexOf(item[2]);
const englishNames=["Regular Shawarma Meal","Super Shawarma Meal","Double Shawarma Meal","Double Mix Shawarma Meal","Triple Shawarma Meal","Aleppo-style Shawarma Meal","Italian-style Shawarma Meal","Small Shawarma Sandwich","Large Shawarma Sandwich","French-bread Shawarma Sandwich","Family Shawarma · 32 Pieces","Family Shawarma · 48 Pieces","Family Shawarma · 64 Pieces","Balad Zinger Sandwich","Balad Zinger Meal","Italian-style Zinger Meal","French-bread Fries Sandwich","Quarter Chicken (Thigh) with Rice","Quarter Chicken (Breast) with Rice","Half Chicken with Rice","Whole Chicken with Rice","One and a Half Chickens with Rice","Two Chickens with Rice","Quarter Chicken (Thigh), No Rice","Quarter Chicken (Breast), No Rice","Half Chicken, No Rice","Rice without Chicken","Cola","Cola · 1 L","Water","Garlic Sauce","Pickles","Pomegranate Molasses","Chili Sauce","Cheese Sauce","Small Fries","Large Fries","Regular Sandwich (Whole-wheat Shawarma)","Regular Meal (Whole-wheat Shawarma)","Super Meal (Whole-wheat Shawarma)","Double Meal (Whole-wheat Shawarma)","Triple Meal (Whole-wheat Shawarma)"];
const englishNotes={"عادي / شراك":"Regular / shrak bread","بطاطا + كولا لتر + مثومة عادي وحار + مخلل":"Fries + 1 L cola + regular & spicy garlic sauce + pickles","بطاطا + 2 كولا لتر + 3 مثومة عادي + 3 حار + 3 مخلل":"Fries + 2 × 1 L cola + 3 regular & 3 spicy garlic sauces + 3 pickles","لبن + دقوس":"Yogurt + daqoos tomato sauce","2 لبن + دقوس":"2 yogurts + daqoos tomato sauce","3 لبن + دقوس":"3 yogurts + daqoos tomato sauce","4 لبن + دقوس":"4 yogurts + daqoos tomato sauce","دقوس":"Daqoos tomato sauce","كاتشب":"Ketchup","شاورما برغيف خبز لبناني دائري من القمح الكامل":"Shawarma in round Lebanese whole-wheat pita bread"};
const translations=[[".brand>span:last-child","مطعم جمعة بلد<small>طعم البلد… ولمّة أهلها</small>","Jamet Balad<small>Local flavors. Shared moments.</small>"],["nav a[href=\"#menu\"]","المنيو","Menu"],["nav a[href=\"#gathering\"]","لمّة العيلة","Family Meals"],["nav a[href=\"#location\"]","وين تلاقينا","Find Us"],[".hero .eyebrow","ـــ شاورما • زنجر • زرب ومندي","SHAWARMA • ZINGER • ZARB & MANDI"],[".hero h1","اللمّة الحلوة،<br>بدها <em>جمعة بلد.</em>","Good company.<br>Great food.<br><em>Jamet Balad.</em>"],[".hero p","من أول لقمة شاورما لآخر حبّة رز.<br>اختار اللي بتحبّه، وخلّي اللمّة علينا.","From the first bite of shawarma to the last grain of rice.<br>Find your favorite and bring everyone together."],[".hero-actions .primary","تصفّح المنيو <span>↖</span>","Explore the Menu <span>↗</span>"],[".hero-bottom span:first-child","منيو لكل الأذواق","Something for everyone"],[".hero-bottom span:last-child","وجبات فردية وعائلية","Individual & family meals"],[".round-stamp","الطعم اللي<strong>بجمعنا</strong>","Food that<strong>unites us</strong>"],[".ribbon span:nth-child(1)","جمعة ولقمة طيبة","Good food, good company"],[".ribbon span:nth-child(2)","شاورما على الأصول","Shawarma done right"],[".ribbon span:nth-child(3)","للجوع… وللجمعة","Made for sharing"],[".ribbon span:nth-child(4)","جمعة بلد","Jamet Balad"],[".section-heading .eyebrow","منيو جمعة بلد","THE JAMET BALAD MENU"],[".section-heading h2","شو عبالك اليوم؟","What are you craving?"],[".section-heading p","أسعار المنيو المرفق بالدينار الأردني.<br>السعر والتوفّر النهائيان عند تأكيد المطعم.","Prices in Jordanian dinars (JOD).<br>Please confirm prices and availability with the restaurant."],[".family .eyebrow","للصحاب والعيلة","FOR FRIENDS & FAMILY"],[".family h2","كبّر اللمّة.<br><em>والباقي علينا.</em>","Bring everyone.<br><em>We’ll bring the flavor.</em>"],[".family p","32، 48 أو 64 قطعة شاورما، مع البطاطا<br>والمثومة والمخلل. كل واحد إله نصيب.","32, 48 or 64 shawarma pieces, with fries,<br>garlic sauce and pickles. Plenty to share."],["#family-menu","شوف الوجبات العائلية <span>↖</span>","Explore Family Meals <span>↗</span>"],[".family-numbers>span","لمّة صغيرة، طعم كبير","Small gathering, big flavor"],[".family-numbers>strong","32<small>قطعة</small>","32<small>pieces</small>"],[".family-numbers>div>span","وجبة شاورما عائلية","Family shawarma meal"],[".family-numbers b","7.00 <small>د.أ</small>","7.00 <small>JOD</small>"],[".visit .eyebrow","أهلًا باللمّة","COME SAY HELLO"],[".visit h2","مكانك بيناتنا.","There’s a place for you."],[".visit>div>p","زورونا بشارع الجامعة في عمّان.<br>ولأي استفسار، احكوا معنا مباشرة.","Visit us on University Street in Amman.<br>Get in touch with any questions."],[".dark-button","اتصل فينا <span>↖</span>","Call Us <span>↗</span>"],["#address-title","عمّان، شارع الجامعة","Amman, University Street"],["#address-description","مقابل البوابة الرئيسية، بناية رقم 271.","Opposite the main gate, building 271."],["#maps-link","ابحث عن العنوان على خرائط Google ↖","Find the address on Google Maps ↗"],[".contact-numbers a:nth-child(1)","<bdi>0797191419</bdi> · اتصال","<bdi>0797191419</bdi> · Call"],[".contact-numbers a:nth-child(2)","<bdi>0789191419</bdi> · اتصال","<bdi>0789191419</bdi> · Call"],[".contact-numbers a:last-child","تواصل معنا على واتساب ↖","Chat with Us on WhatsApp ↗"],["footer .brand>span:last-child","جمعة بلد<small>الطعم اللي بجمعنا.</small>","Jamet Balad<small>Food that brings us together.</small>"],["footer p","شاورما • زنجر • زرب ومندي","Shawarma • Zinger • Zarb & Mandi"]];

const englishGroups=['Shawarma','Whole-wheat Shawarma','Balad Zinger','Family Meals','Zarb & Mandi','Extras'];
translations.push(['.social-title','خلّينا على تواصل','Let’s stay connected'],['.review-link .social-label','ذقت اللمّة؟ احكيلنا رأيك','Tasted the joy? Share your story'],['.instagram-link .social-label','إنستغرام','Instagram'],['.facebook-link .social-label','فيسبوك','Facebook']);
let language='ar', category=-1;
try { if(localStorage.getItem('jamet-language')==='en') language='en'; } catch {}
const cart = new Map();
try {
 const saved=JSON.parse(localStorage.getItem('jamet-cart')||'[]');
 if(Array.isArray(saved)) for(const entry of saved) if(Array.isArray(entry)) {
  const [id,qty]=entry;
  if(Number.isInteger(id)&&id>=0&&id<raw.length&&Number.isInteger(qty)&&qty>0&&qty<=99)cart.set(id,qty);
 }
} catch {}
function itemName(id){return language==='en'?englishNames[id]:raw[id][0]}
function money(value){return value.toFixed(2)+(language==='en'?' JOD':' د.أ')}
// Stable item IDs also identify cart entries. Each menu item has its own photo tile.
// Explicit image boundaries keep adjacent photographs out of each card.
const photoSheets = {
 'leg-rice':{width:1374,height:1145,x:[0,1374],y:[0,1145]},
 'leg-only':{width:1374,height:1145,x:[0,1374],y:[0,1145]},
 'one-half':{width:1374,height:1145,x:[0,1374],y:[0,1145]},
 meals:{width:1374,height:1145,x:[0,458,916,1374],y:[0,366,707,1145]},
 shawarma:{width:1564,height:1006,x:[0,521,1043,1564],y:[0,491,1006]},
 sandwiches:{width:1536,height:1024,x:[0,512,1024,1536],y:[0,512,1024]},
 chicken:{width:1254,height:1254,x:[0,418,836,1254],y:[0,394,795,1254]},
 'family-extras':{width:1536,height:1024,x:[0,508,1028,1536],y:[0,514,1024]},
 'whole-wheat':{width:1536,height:1024,x:[0,768,1536],y:[0,498,1024]},
 food:{width:1374,height:1145,x:[0,343,687,1030,1374],y:[0,286,572,858,1145]},
 drinks:{width:1254,height:1254,x:[0,627,1254],y:[0,627,1254]}
};
const itemPhotos = {
 0:['shawarma',0],1:['shawarma',1],2:['shawarma',2],3:['shawarma',3],4:['shawarma',4],
 5:['shawarma',5],6:['meals',6],14:['meals',7],15:['meals',8],
 7:['sandwiches',0],8:['sandwiches',1],9:['sandwiches',2],
 13:['sandwiches',3],16:['sandwiches',4],37:['sandwiches',5],
 17:['leg-rice',0],18:['chicken',1],19:['chicken',2],20:['chicken',3],
 21:['one-half',0],22:['chicken',5],23:['leg-only',0],24:['chicken',7],25:['chicken',8],
 10:['family-extras',0],11:['family-extras',1],12:['family-extras',2],
 35:['family-extras',3],36:['family-extras',4],27:['family-extras',5],
 38:['whole-wheat',0],39:['whole-wheat',1],40:['whole-wheat',2],41:['whole-wheat',3],
 26:['food',8],30:['food',10],31:['food',11],32:['food',12],33:['food',13],34:['food',14],
 28:['drinks',1],29:['drinks',2]
};
const sandwichIds = new Set([7,8,9,13,16,37]);
const mealSandwichCounts = {38:2,39:3,40:4,41:5};
const shawarmaPieceCounts = {0:10,1:15,2:20,3:25,4:25};
const specialDescriptions = {
 5:['شاورما بخبز تورتيا مطوي بشكل سداسي ومقطّع مثلثات، مع بطاطا','Shawarma in a hexagonal folded tortilla, cut into triangles, with fries'],
 6:['شاورما بخبز إيطالي دائري، مع بطاطا','Shawarma in round Italian bread, with fries'],
 7:['شاورما صغيرة بخبز عادي / شراك','Small shawarma in regular / shrak bread'],
 8:['شاورما كبيرة بالخبز الرقيق الملفوف','Large shawarma in thin rolled flatbread'],
 9:['شاورما بخبز فرنسي','Shawarma in French bread'],
 13:['زنجر البلد بخبز ساندويش','Balad zinger in sandwich bread'],
 14:['ساندويش زنجر البلد مع بطاطا','Balad zinger sandwich with fries'],
 15:['زنجر بخبز إيطالي دائري، مع بطاطا','Zinger in round Italian bread, with fries'],
 16:['خبز فرنسي محشي بطاطا','French bread filled with fries'],
 26:['رز أبيض وبرتقالي بدون دجاج','White and orange rice without chicken']
};
function itemDescription(id){
 const en=language==='en',item=raw[id];
 let description=specialDescriptions[id]?.[en?1:0] || (item[3]?(en?englishNotes[item[3]]:item[3]):(en?englishGroups:groups)[item[2]]);
 if(mealSandwichCounts[id]){
  const count=mealSandwichCounts[id];
  const bread=id>=38?(en?'round Lebanese whole-wheat pita bread':'رغيف لبناني دائري من القمح الكامل'):(en?'thin rolled shawarma flatbread':'خبز الشاورما الرقيق الملفوف');
  description=en?`${count} sandwiches, cut and served with fries · ${bread}`:`${count===2?'ساندويشتان':count+' ساندويشات'} مقطّعة مع بطاطا · ${bread}`;
 }
 if(shawarmaPieceCounts[id])description=en?`${shawarmaPieceCounts[id]} shawarma pieces in thin rolled flatbread, with fries`:`${shawarmaPieceCounts[id]} قطعة شاورما بالخبز الرقيق الملفوف، مع بطاطا`;
 if(id>=17&&id<=25)description=(en?'Red-browned chicken':'دجاج أحمر محمّر')+' · '+(id<=22?(en?'White and orange rice · ':'رز أبيض وبرتقالي · '):'')+description;
 return description+(sandwichIds.has(id)?(en?' · One sandwich, no side fries':' · ساندويشة واحدة، بدون بطاطا جانبية'):'');
}
function photo(id){
 const [sheet,index]=itemPhotos[id],atlas=photoSheets[sheet],cols=atlas.x.length-1;
 const col=index%cols,row=Math.floor(index/cols),left=atlas.x[col]+2,top=atlas.y[row]+2;
 const width=atlas.x[col+1]-left-2,height=atlas.y[row+1]-top-2;
 return `<div class="food-photo" role="img" aria-label="${itemName(id)}" style="background-image:url('assets/menu-${sheet}.png?v=20261011j');background-size:${atlas.width/width*100}% ${atlas.height/height*100}%;--photo-x:${left/(atlas.width-width)*100}%;--photo-y:${top/(atlas.height-height)*100}%"><span class="photo-sticker" aria-hidden="true">جمعة<br>بلد</span></div>`;
}
function renderMenu(){
 const en=language==='en',labels=en?englishGroups:groups;
 document.querySelector('#tabs').innerHTML=[en?'All Items':'كل الأصناف',...labels].map((label,index)=>'<button type="button" data-category="'+(index-1)+'" aria-pressed="'+(category===index-1)+'" class="'+(category===index-1?'selected':'')+'">'+label+'</button>').join('');
 document.querySelector('#menu-items').innerHTML=raw.map((item,id)=>({item,id})).sort((a,b)=>a.item[2]-b.item[2]).filter(({item})=>category===-1||item[2]===category).map(({item,id})=>`<article class="food-card">${photo(id)}<div class="food-copy"><h3>${itemName(id)}</h3><div class="food-bottom"><strong>${money(item[1])}</strong><button class="add-item" type="button" data-add="${id}" aria-label="${en?'Add':'أضف'} ${itemName(id)}">${en?'Add +':'أضف +'}</button></div></div></article>`).join('');
 renderCart();
}
function renderCart(){
 const en=language==='en';let count=0,total=0;
 for(const [id,qty] of cart){count+=qty;total+=Math.round(raw[id][1]*100)*qty;}
 document.querySelector('#cart-summary').textContent=(en?'Your order':'طلبك')+' · '+count+' · '+money(total/100);
 document.querySelector('#cart-items').innerHTML=[...cart].map(([id,qty])=>`<div class="cart-row"><div><strong>${itemName(id)}</strong><small>${money(raw[id][1]*qty)}</small></div><div class="quantity"><button type="button" data-change="${id}" data-delta="-1" aria-label="${en?'Decrease':'تقليل'} ${itemName(id)}">−</button><span>${qty}</span><button type="button" data-change="${id}" data-delta="1" aria-label="${en?'Increase':'زيادة'} ${itemName(id)}" ${qty===99?'disabled':''}>+</button></div><button type="button" class="remove-item" data-remove="${id}" aria-label="${en?'Remove':'حذف'} ${itemName(id)}">×</button></div>`).join('')||`<p class="cart-empty">${en?'Choose something delicious from the menu to start your order.':'اختار اللي بتحبّه من المنيو وابدأ طلبك.'}</p>`;
 document.querySelector('#order-total').textContent=money(total/100);
 document.querySelector('#send-order').disabled=count===0;
}
function saveCart(){try{localStorage.setItem('jamet-cart',JSON.stringify([...cart]))}catch{}renderCart()}
function setLanguage(){
 const en=language==='en';
 document.documentElement.lang=language; document.documentElement.dir=en?'ltr':'rtl';
 document.title=en?'Jamet Balad | Menu':'جمعة بلد | المنيو';
 document.querySelector('meta[name="description"]').content=en?'Jamet Balad restaurant menu in Amman, University Street. Shawarma, zinger, zarb, mandi and family meals.':'منيو مطعم جمعة بلد في عمّان، شارع الجامعة. شاورما، زنجر، زرب ومندي ووجبات عائلية.';
 for(const [selector,ar,english] of translations) document.querySelectorAll(selector).forEach(el=>el.innerHTML=en?english:ar);
 const toggle=document.querySelector('#language-toggle'); toggle.textContent=en?'العربية':'English'; toggle.lang=en?'ar':'en'; toggle.setAttribute('aria-label',en?'التبديل إلى العربية':'Switch to English');
 document.querySelector('nav').setAttribute('aria-label',en?'Main navigation':'التنقل الرئيسي'); document.querySelector('#tabs').setAttribute('aria-label',en?'Menu categories':'أقسام المنيو');
 document.querySelector('.hero-visual img').alt=en?'Family shawarma platter with fries':'صينية شاورما عائلية مع البطاطا';
 renderMenu();
}
document.querySelector('#language-toggle').addEventListener('click',()=>{language=language==='ar'?'en':'ar';try{localStorage.setItem('jamet-language',language)}catch{}setLanguage()});
document.querySelector('#tabs').addEventListener('click',e=>{const tab=e.target.closest('[data-category]');if(!tab)return;category=Number(tab.dataset.category);renderMenu();document.querySelector('[data-category="'+category+'"]').focus({preventScroll:true})});
document.querySelector('#family-menu').addEventListener('click',()=>{category=3;renderMenu()});
document.querySelector('#maps-link').href=restaurant.maps;
translations.push(
 ['#photo-note','صور توضيحية للأصناف؛ حجم الوجبة حسب اختيارك.','Illustrative food images; portion size depends on your selection.'],
 ['#order-title','طلبك من جمعة بلد','Your Jamet Balad order'],
 ['#name-label','الاسم (اختياري)','Name (optional)'],
 ['#method-label','طريقة الاستلام','Order method'],
 ['#pickup-option','استلام من المطعم','Pickup'],
 ['#delivery-option','توصيل','Delivery'],
 ['#address-label','عنوان التوصيل','Delivery address'],
 ['#notes-label','ملاحظات الطلب (اختياري)','Order notes (optional)'],
 ['#total-label','مجموع الأصناف','Items subtotal'],
 ['#order-note','يفتح طلبك على واتساب لتراجعه وترسله. تأكيد التوفّر والتوصيل ورسومه من المطعم.','Review and send your order in WhatsApp. The restaurant confirms availability, delivery and any delivery fees.'],
 ['#send-order','متابعة الطلب على واتساب ↗','Continue on WhatsApp ↗']
);
const orderDialog=document.querySelector('#order-dialog');
document.querySelector('#open-cart').addEventListener('click',()=>orderDialog.showModal());
document.querySelector('#close-cart').addEventListener('click',()=>orderDialog.close());
document.querySelector('#menu-items').addEventListener('click',e=>{
 const button=e.target.closest('[data-add]');if(!button)return;
 const id=Number(button.dataset.add);cart.set(id,Math.min(99,(cart.get(id)||0)+1));saveCart();
 document.querySelector('#cart-feedback').textContent=(language==='en'?'Added: ':'تمت إضافة: ')+itemName(id);
});
document.querySelector('#cart-items').addEventListener('click',e=>{
 const remove=e.target.closest('[data-remove]'),change=e.target.closest('[data-change]');
 if(remove)cart.delete(Number(remove.dataset.remove));
 else if(change){const id=Number(change.dataset.change),qty=(cart.get(id)||0)+Number(change.dataset.delta);if(qty<=0)cart.delete(id);else cart.set(id,Math.min(99,qty));}
 else return;
 saveCart();
 const next=change?document.querySelector(`[data-change="${change.dataset.change}"][data-delta="${change.dataset.delta}"]`):null;
 (next||document.querySelector('#close-cart')).focus();
});
document.querySelector('#order-method').addEventListener('change',e=>{
 const delivery=e.target.value==='delivery';document.querySelector('#address-field').hidden=!delivery;document.querySelector('#order-address').required=delivery;
});
document.querySelector('#order-form').action='https://wa.me/'+restaurant.whatsapp;
document.querySelector('#order-form').addEventListener('submit',e=>{
 if(!cart.size){e.preventDefault();return;}
 const en=language==='en',lines=[en?'Hello Jamet Balad! I would like to order:':'مرحبا جمعة بلد، بدي أطلب:'];let cents=0;
 for(const [id,qty] of cart){lines.push(`${qty} × ${itemName(id)} — ${money(raw[id][1]*qty)}`);cents+=Math.round(raw[id][1]*100)*qty;}
 lines.push((en?'Items subtotal: ':'مجموع الأصناف: ')+money(cents/100));
 const name=document.querySelector('#order-name').value.trim(),notes=document.querySelector('#order-notes').value.trim(),delivery=document.querySelector('#order-method').value==='delivery';
 if(name)lines.push((en?'Name: ':'الاسم: ')+name);
 lines.push(delivery?(en?'Delivery':'توصيل'):(en?'Pickup from restaurant':'استلام من المطعم'));
 if(delivery)lines.push((en?'Address: ':'العنوان: ')+document.querySelector('#order-address').value.trim());
 if(notes)lines.push((en?'Notes: ':'ملاحظات: ')+notes);
 lines.push(en?'Please confirm availability and final total including any delivery fees.':'يا ريت تأكدوا التوفّر والمجموع النهائي مع رسوم التوصيل إن وجدت.');
 document.querySelector('#whatsapp-text').value=lines.join('\n');
});
setLanguage();


