import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s后",
    past: "%s前",
    s: "几秒",
    m: "一分钟",
    mm: "%d分钟",
    h: "一小时",
    hh: "%d小时",
    d: "一天",
    dd: "%d天",
    M: "一个月",
    MM: "%d个月",
    y: "一年",
    yy: "%d年"
  }
});

/**
 * 显示两天内的时间差
 * @param timeStr
 * @returns {string}
 */
export function formattedRecentTime(timeStr) {
  let date = dayjs(timeStr);
  let time = date.valueOf();
  let now = dayjs().valueOf();
  let subtract = now - time;
  if (subtract < 1000 * 60 * 60 * 48) {
    return date.fromNow();
  } else {
    return date.format("YYYY.MM.DD");
  }
}
