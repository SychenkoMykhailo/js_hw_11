const pmotionFinish = document.querySelector(".promo__finish");
const pmotionTimer = document.querySelector(".promo__timer");
const inputDate = document.querySelector("#input-date");
const promoFinishBtn = document.querySelector("#choosePromoFinish");
const inputTime = document.querySelector("#input-time");
class Timer {
  constructor() {
    this.dateFinish = "";
    this.promo = "";
  }

  startPromo() {
    pmotionFinish.innerText = `Promotion will finish on: ${this.dateFinish}`;
    this.promo = new Date(this.dateFinish).getTime();
    let id = setInterval(() => {
      let now = new Date().getTime();
      let distance = this.promo - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(id);
        pmotionFinish.innerText = "";
        pmotionTimer.innerText = "Promotion has already finished :(";
      } else {
        pmotionTimer.innerText = `Until the end of promotion left: Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
      }
    }, 1000);
  }
  choosePromoFinish() {
    if (inputDate.value && inputTime.value) {
      this.dateFinish = `${inputDate.value}, ${inputTime.value}:00`;
      this.startPromo();
    } else {
      pmotionTimer.innerText = "Please choose promotion finish date and time";
    }
  }
  init() {
    promoFinishBtn.addEventListener("click", this.choosePromoFinish.bind(this));
  }
}
const MyTimer = new Timer();
MyTimer.init();
