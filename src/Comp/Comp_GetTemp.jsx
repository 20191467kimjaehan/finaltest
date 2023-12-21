import React, { useState, useEffect } from 'react';

const GetTemp = () => {
  const [obsrValue, setObsrValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const serviceKey = "bUzoH8tgNcCItuQCNtz0Hq8pyVrWa%2BudR3yDf6aTuerVdFgns5G6G%2BMgCMeCI%2FkeTwMiW7w0M%2BW7Y4QP4rrcQg%3D%3D";
      const baseUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
      const currentDate = new Date();
      const year = currentDate.getFullYear().toString();
      const month = (currentDate.getMonth() + 1).toString();
      const day = currentDate.getDate().toString();
      const baseDate = `${year}${month}${day}`;

    console.log(baseDate);

      const baseTime = "0000";
      const nx = 97;
      const ny = 75;

      const apiUrl = `${baseUrl}?serviceKey=${serviceKey}&pageNo=4&numOfRows=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const targetValue = data.response.body.items.item[0].obsrValue;

        setObsrValue(targetValue);
      } catch (error) {
        console.error("에러 발생:", error.message);
      }
    };

    fetchData();
  }, []);

  return obsrValue;
}

export default GetTemp;