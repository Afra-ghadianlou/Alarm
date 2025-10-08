//گرفتن کلاس ها
// const selectMenu = document.querySelectorAll('select')
// const timeBox = document.querySelector('.timer')
// const SetAlarmBtn = document.querySelector('button')
// const Content = document.querySelector('.content')
//اعلان متغیر
// let  AlarmTime , AlarmState = 'noset';
//وارد کردن موزیک
// const ringtone = new Audio("./file/ringtone.mp3")

//ایجاد حلقه برای ساعت
// for(let i = 23 ; i >= 0 ; i--){
    //اگر ساعت از ۱۰ کوچکتر باشد قبل عدد0اضافه میکند
    // i = i < 10 ? '0' + i : i;
    //عددی ک حلقه ایجاد کرده است داخل اپشن ذخیره میشود 
    // let option = `<option value="${i}">${i}</option>`;
    //محتوای متغیر اپشن بعد از اپشنی که در صفحه اصلی وجود دارد قرار میگیرد
    //insertAdjacentHTML => این متد کد اچ تی ام الی اضافه میکند
    //afterend => این ورودی ینی کدی ک میخواهیم اضافه کنیم بعد از کد فعلی ک در اچ تی ام ال وجود دارد ایجاد شود
    // selectMenu[0].firstElementChild.insertAdjacentHTML('afterend' , option)
// }

//ایجاد حلقه برای دقیقه
// for(let i = 59 ; i >= 0 ; i--){
//     i = i < 10 ? '0' + i : i;
//     let option = `<option value="${i}">${i}</option>`;
//     selectMenu[1].firstElementChild.insertAdjacentHTML('afterend' , option)
// }

//ایجاد فانکشن برای دریافت ساعت از سیستم و ذخیره ساعت,دقیقه وثانیه در متغیر های موجود
// setInterval(() => {
//     let date = new Date();
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();

//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     s = s < 10 ? '0' + s : s;

    //ساعتی که از سیستم دریافت شد و داخل متغیر های مربوطه ذخیره شد در متغیر تایم باکس که از صفحه اچ تی ام ال گرفتیم ذخیره میشود
    // timeBox.innerHTML = `${h}:${m}:${s}`;
    //نوشتن شرط برای پلی شدن موزیک
    // if (AlarmTime == `${h}:${m}`) {
    //     ringtone.play();
    //     ringtone.loop == true;
    // }
    // کدهای داخل این تابع هر 1000میلی ثانیه یا هر 1ثانیه تکرار میشوند
// }, 1000);

//نوشتن فانکشن برای رویداد کلیک دکمهای ک از سند داکیومنت گرفتیم
// SetAlarmBtn.addEventListener('click' , ()=>{
    //مقداری ک در اپشن ها ذخیرهه شده در متغیر ذخیره میشود
    // AlarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
    //نوشتن شرط برای ایجاد هشدار درصورت کوک نکدن ساعت
    // if(AlarmTime.includes('Hour') || AlarmTime.includes('Minute')){
    //     return alert('زمان هشدار را به درستی مشخص کنید!')
    // }
    //صدا کردن تابع
//     checkState(AlarmState)
// })

//ایجا فانکشن برای دکمه و وضعیت کوک بودن یا نبودن ساعت
// function checkState(state){
    //اگر ساعت کوک شده باشد این شرط اجرا میشود
    // state == 'noset' =‌>در حالت پیش فرض ساعت کوک نشده و وقتی روی دکمه کلیک میشود وضعیت متغیر تغیر میکند و ساعت کوک میشود و کدهای داخل شرط اجرا میشوند 
    // if(state == 'noset'){
    //     AlarmState = 'set'
    //     Content.classList.add('disable')
    //     SetAlarmBtn.innerText = 'Clear Alarm'
    // }
    //اگر ساعت از حالت کوک شدن خارج شود این شرط اجرا میشود
    // else{
    //     AlarmState = 'noset'
    //     Content.classList.remove('disable')
    //     AlarmTime = ''
    //     ringtone.pause()
    //     SetAlarmBtn.innerText = 'Set Alarm'
    // }
    //تو حالت پیش فرض مقدار متغیر نوست هست
// }


// گرفتن کلاس‌ها
const selectMenu = document.querySelectorAll('select');
const timeBox = document.querySelector('.timer');
const SetAlarmBtn = document.querySelector('button');
const Content = document.querySelector('.content');

// اعلان متغیرها
let AlarmTime, AlarmState = 'noset';

// وارد کردن موزیک
const ringtone = new Audio("./file/ringtone.mp3");
ringtone.loop = true; // فعال‌سازی پخش مداوم

// ایجاد حلقه برای ساعت
for (let i = 23; i >= 0; i--) {
  let hour = i < 10 ? '0' + i : i;
  let option = `<option value="${hour}">${hour}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}

// ایجاد حلقه برای دقیقه
for (let i = 59; i >= 0; i--) {
  let minute = i < 10 ? '0' + i : i;
  let option = `<option value="${minute}">${minute}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

// دریافت ساعت سیستم و بررسی آلارم
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  timeBox.innerHTML = `${h}:${m}:${s}`;

  if (AlarmState === 'set' && AlarmTime === `${h}:${m}`) {
    ringtone.play().catch(err => console.log("پخش صدا بلاک شد:", err));
  }
}, 1000);

// رویداد کلیک دکمه ست آلارم
SetAlarmBtn.addEventListener('click', () => {
  AlarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;

  if (AlarmTime.includes('Hour') || AlarmTime.includes('Minute')) {
    return alert('زمان هشدار را به درستی مشخص کنید!');
  }

  // تعامل صوتی اولیه برای گرفتن اجازه پخش در موبایل
  ringtone.play();
  ringtone.pause();
  ringtone.currentTime = 0;

  checkState(AlarmState);
});

// تابع بررسی وضعیت آلارم
function checkState(state) {
  if (state === 'noset') {
    AlarmState = 'set';
    Content.classList.add('disable');
    SetAlarmBtn.innerText = 'Clear Alarm';
  } else {
    AlarmState = 'noset';
    Content.classList.remove('disable');
    AlarmTime = '';
    ringtone.pause();
    ringtone.currentTime = 0;
    SetAlarmBtn.innerText = 'Set Alarm';
  }
}
