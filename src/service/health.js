import { get } from "@/utils/apiHelper";

// 門店店點
const getstorelist = function() {
  return get(
    `https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json`
  );
};
// 行政區域更新
const getarealist = function() {
  return get(
    `https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json`
  );
};

export { getstorelist, getarealist };
