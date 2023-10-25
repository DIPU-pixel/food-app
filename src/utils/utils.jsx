export function getFiltervalue(serachInput, filterdata) {
    const getFilterValue = filterdata?.filter((x) =>
      x?.info?.name?.toLowerCase()?.includes(serachInput?.toLowerCase())
    );
    return getFilterValue;
  }