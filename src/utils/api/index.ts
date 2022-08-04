import axios from "axios";
import useSWR from "swr";

interface ApiInterface {
  config: object;
  data: object;
  headers: object;
  status: number;
}

/**
 * @dsc setting aixos instance
 * @param params:object
 * @returns {AxiosInstance}
 */

function createInstance() {
  let headers = {};
  const instance = axios.create({
    headers,
    timeout: 5000,
  });
  return instance;
}
const instance = createInstance();
/**
 * @param {String} url
 * @param {Object} params
 * @param {Object} data
 */
async function $_post(url: string, params: object, data: object) {
  const res = await instance.post(url, data, { params });
  return res;
}
/**
 * @param {String} url
 * @param params
 */
async function $_get(url: string, params: object) {
  const res = await instance.get(url, { params });
  const format: ApiInterface = {
    status: res.status,
    config: res.config,
    data: res.data,
    headers: res.headers,
  };
  return format;
}

const $_useSwr = (path: string, fetcher: any, options?: object) => {
  const { data, error } = useSWR(
    path,
    fetcher,
    options ?? {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 10) return;
        // 5초에 한 번 재검증합니다.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    }
  );
  return {
    data: data?.data,
    isError: !!error,
    origin: data,
  };
};

// const styles = {
//   console: [
//     "background: yellow",
//     "border: 1px solid #3E0E02",
//     "color: red",
//     "display: block",
//     "line-height: 40px",
//     "text-align: center",
//     "font-weight: bold",
//     "font-size: 20px",
//   ].join(";"),
// };

export { $_post, $_get, $_useSwr };
