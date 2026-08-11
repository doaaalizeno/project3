// الكود الخاص بالوضع الليلي والنهاري
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }




    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

// Animation
ScrollReveal().reveal('.hero-info' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة
});

ScrollReveal().reveal('.hero-img' , {
     delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'top',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة
});

ScrollReveal().reveal('.boxes' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});

ScrollReveal().reveal('.categories' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});


ScrollReveal().reveal('.about-info' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'top',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});

ScrollReveal().reveal('.about-img' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة
});

ScrollReveal().reveal('.coursrs' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});

ScrollReveal().reveal('.faq-info' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});

ScrollReveal().reveal('.faq-img' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'top',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});

ScrollReveal().reveal('.blogs' , {
    delay:400,          // تاخير الصورة
    duration:800,      // مدة الحركة بالمللي ثانية
    distance:'50px',   // مقدار التحريك قبل الظهور
    origin:'bottom',   // جهة الحركة اسفل
    easing:'ease-in-out',   // نوع الحركة

});







// end Animation





const swiper = new Swiper(".swiper", {

  slidesPerView: 1,
  spaceBetween: 12,

  slidesOffsetBefore: 16, // 👈 مسافة من اليمين
  slidesOffsetAfter: 16,  // 👈 مسافة من اليسار

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

});


  
