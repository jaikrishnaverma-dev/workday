/**
 * For make POST API call
 */
export async function postReq(apiurl, body, header = {}) {
  try {
    let res = await fetch(apiurl, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      res = await res.text();
      return {
        message: "",
        success: true,
        data: JSON.parse(res),
      };
    }
  } catch (er) {
    console.log({ er });
    return {
      message: "Something went wrong on client side.",
      success: false,
    };
  }
}
/**
 *
 * @param {*} obj Object
 * @returns New Object Without refrence
 */
export const noRef = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
export const toTitle = (str) => {
  return str.split("_").join(" ");
};

/**
 * filter rules
 */
export const initialFilterState = {
  Min_Experience: {
    options: [
      {
        label: 0,
        val: 0,
      },
      {
        label: 1,
        val: 1,
      },
      {
        label: 2,
        val: 2,
      },
      {
        label: 3,
        val: 3,
      },
      {
        label: 4,
        val: 4,
      },
      {
        label: 5,
        val: 5,
      },
      {
        label: 6,
        val: 6,
      },
      {
        label: 7,
        val: 7,
      },
      {
        label: 8,
        val: 8,
      },
      {
        label: 9,
        val: 9,
      },
    ],
    key: "minExp",
    value: [],
  },

  Company: {
    options: [
      {
        label: "Dropbox",
        val: "Dropbox",
      },
      {
        label: "LG",
        val: "LG",
      },
      {
        label: "Sony",
        val: "Sony",
      },
      {
        label: "Adobe Systems",
        val: "Adobe Systems",
      },
      {
        label: "HP",
        val: "HP",
      },
      {
        label: "eBay",
        val: "eBay",
      },
      {
        label: "Tencent",
        val: "Tencent",
      },
      {
        label: "Apple",
        val: "Apple",
      },
      {
        label: "Asus",
        val: "Asus",
      },
      {
        label: "Intel Corporation",
        val: "Intel Corporation",
      },
      {
        label: "Rakuten",
        val: "Rakuten",
      },
      {
        label: "Samsung",
        val: "Samsung",
      },
      {
        label: "Dell Technologies",
        val: "Dell Technologies",
      },
      {
        label: "Cisco",
        val: "Cisco",
      },
      {
        label: "Oracle",
        val: "Oracle",
      },
      {
        label: "Baidu",
        val: "Baidu",
      },
      {
        label: "Amazon",
        val: "Amazon",
      },
      {
        label: "Olympus",
        val: "Olympus",
      },
      {
        label: "Alibaba",
        val: "Alibaba",
      },
      {
        label: "GoPro",
        val: "GoPro",
      },
      {
        label: "Twitter",
        val: "Twitter",
      },
      {
        label: "ZTE",
        val: "ZTE",
      },
      {
        label: "Netflix",
        val: "Netflix",
      },
      {
        label: "MasterCard",
        val: "MasterCard",
      },
      {
        label: "Facebook",
        val: "Facebook",
      },
      {
        label: "IBM",
        val: "IBM",
      },
      {
        label: "Intel",
        val: "Intel",
      },
      {
        label: "Google",
        val: "Google",
      },
      {
        label: "Huawei",
        val: "Huawei",
      },
      {
        label: "Adobe",
        val: "Adobe",
      },
      {
        label: "Pandora",
        val: "Pandora",
      },
      {
        label: "Nikon",
        val: "Nikon",
      },
      {
        label: "Lyft",
        val: "Lyft",
      },
      {
        label: "Spotify",
        val: "Spotify",
      },
      {
        label: "PayPal",
        val: "PayPal",
      },
      {
        label: "Visa",
        val: "Visa",
      },
      {
        label: "Adobe Inc.",
        val: "Adobe Inc.",
      },
      {
        label: "Sharp",
        val: "Sharp",
      },
      {
        label: "Qualcomm",
        val: "Qualcomm",
      },
      {
        label: "Yahoo",
        val: "Yahoo",
      },
      {
        label: "Panasonic",
        val: "Panasonic",
      },
      {
        label: "Xiaomi",
        val: "Xiaomi",
      },
      {
        label: "Microsoft",
        val: "Microsoft",
      },
      {
        label: "Tesla",
        val: "Tesla",
      },
      {
        label: "Epson",
        val: "Epson",
      },
      {
        label: "Airbnb",
        val: "Airbnb",
      },
      {
        label: "Canon",
        val: "Canon",
      },
      {
        label: "Vimeo",
        val: "Vimeo",
      },
      {
        label: "Uber",
        val: "Uber",
      },
      {
        label: "LinkedIn",
        val: "LinkedIn",
      },
    ],
    key: "companyName",
    value: [],
  },

  Location: {
    options: [
      {
        label: "delhi ncr",
        val: "delhi ncr",
      },
      {
        label: "mumbai",
        val: "mumbai",
      },
      {
        label: "remote",
        val: "remote",
      },
      {
        label: "chennai",
        val: "chennai",
      },
      {
        label: "bangalore",
        val: "bangalore",
      },
    ],
    key: "location",
    value: [],
  },
  Tech_Stack: {
    options: [
      { label: "React", option: "react" },
      { label: "Javascript", option: "javascript" },
      { label: "java", option: "java" },
    ],
    key: false,
    value: [],
  },
  Role: {
    options: [
      {
        label: "frontend",
        val: "frontend",
      },
      {
        label: "ios",
        val: "ios",
      },
      {
        label: "android",
        val: "android",
      },
      {
        label: "tech lead",
        val: "tech lead",
      },
      {
        label: "backend",
        val: "backend",
      },
    ],
    key: "jobRole",
    value: [],
  },
  Min_Base_Pay: {
    options: [
      {
        label: "0L",
        val: 0,
      },
      {
        label: "10L",
        val: 10,
      },
      {
        label: "20L",
        val: 20,
      },
      {
        label: "30L",
        val: 30,
      },
      {
        label: "40L",
        val: 40,
      },
      {
        label: "50L",
        val: 50,
      },
      {
        label: "60L",
        val: 60,
      },
      {
        label: "70L",
        val: 70,
      },
    ],
    key: "minJdSalary",
    value: [],
  },
};

/**
 * filter callbacks
 */
export const filter_callbacks = {
  minExp: (el, data) => el?.minExp == data,
  companyName: (el, data) =>
    el?.companyName?.toLowerCase().includes(data?.toLowerCase()),
  location: (el, data) =>
    el?.location?.toLowerCase().includes(data?.toLowerCase()),
  jobRole: (el, data) =>
    el?.jobRole?.toLowerCase()?.includes(data?.toLowerCase()),
  minJdSalary: (el, data) => data <= el?.minJdSalary,
};
