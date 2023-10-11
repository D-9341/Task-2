const seconds = 100;
const hours = Math.floor(seconds / 60 / 60);
const minutes = Math.floor((seconds / 60) - (hours * 60));
const sec = seconds % 60;
const time = `${hours} ч, ${minutes} мин, ${sec} сек`
console.log(`Время: ${time}`);