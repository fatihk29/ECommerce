export const productHelpers = {
  productsSortedByTime: (products: any[], productTimings: any[]) => {
    const newArray = productTimings.slice().sort(function (a, b) {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    // console.log('newArray', newArray);

    return newArray.reverse().map((item) => {
      return {...item, ...products.find((p) => p.id == item.productId)};
    });
  },
  productIDSortedByTime: (products: any[], productID: any[]) => {
    return productID.reverse().map((item) => {
      return {...item, ...products.find((p) => p.id == item.productId)};
    });
  },
};
