/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Box, Text, Pressable} from 'native-base';
import {VictoryBar} from 'victory-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TableContainer from './TableContainer';
import TableHead from './TableHead';
import TableData from './TableData';

const data = [
  {
    name: '<a href="/company?code=526299">MPHASIS LTD.</a>',
    score: [37.8, 94.6, 86.7, 78.7],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 9.7,
    link: '<a href="/broker/526299__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=500425">AMBUJA CEMENTS LTD.</a>',
    score: [38.0, 98.0, 96.7, 70.9],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 11.9,
    link: '<a href="/broker/500425__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532259">APAR INDUSTRIES LTD.</a>',
    score: [46.9, 86.3, 73.7, 54.9],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 16.6,
    link: '<a href="/broker/532259__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532541">NIIT TECHNOLOGIES LTD.</a>',
    score: [46.6, 91.4, 95.5, 86.9],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 2.5,
    link: '<a href="/broker/532541__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532174">ICICI BANK LTD.</a>',
    score: [38.0, 99.4, 64.2, 75.3],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 20.4,
    link: '<a href="/broker/532174__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532187">INDUSIND BANK LTD.</a>',
    score: [59.3, 88.8, 72.1, 84.8],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 29.0,
    link: '<a href="/broker/532187__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=500875">ITC LTD.</a>',
    score: [57.3, 99.1, 90.1, 86.0],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 21.5,
    link: '<a href="/broker/500875__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=533080">Mold-Tek Packaging Limited</a>',
    score: [33.4, 77.2, 86.3, 67.0],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 17.0,
    link: '<a href="/broker/533080__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=526299">MPHASIS LTD.</a>',
    score: [37.8, 94.6, 86.7, 78.7],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': -69.5,
    link: '<a href="/broker/526299__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=540719">SBI Life Insurance Company Ltd</a>',
    score: [32.2, 97.3, 80.0, 66.5],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 13.0,
    link: '<a href="/broker/540719__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=504067">ZENSAR TECHNOLOGIES LTD.</a>',
    score: [42.4, 90.9, 86.0, 83.8],
    date: '30-Jul-21',
    brokerage: 'Prabhudas Lilladher',
    'increase%': 5.7,
    link: '<a href="/broker/504067__20210730__Prabhudas_Lilladher.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=500570">TATA MOTORS LTD.</a>',
    score: [36.5, 93.4, 69.4, 72.8],
    date: '29-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 28.7,
    link: '<a href="/broker/500570__20210729__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=517506">TTK PRESTIGE LTD.</a>',
    score: [40.8, 84.2, 96.6, 87.4],
    date: '29-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 21.0,
    link: '<a href="/broker/517506__20210729__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=534976">V-MART RETAIL LTD.</a>',
    score: [51.7, 86.4, 92.5, 66.2],
    date: '29-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 25.3,
    link: '<a href="/broker/534976__20210729__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=504067">ZENSAR TECHNOLOGIES LTD.</a>',
    score: [42.4, 90.9, 86.0, 83.8],
    date: '29-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 25.8,
    link: '<a href="/broker/504067__20210729__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532500">MARUTI SUZUKI INDIA LTD.</a>',
    score: [67.2, 74.1, 90.1, 81.2],
    date: '29-Jul-21',
    brokerage: 'Sharekhan',
    'increase%': 20.1,
    link: '<a href="/broker/532500__20210729__Sharekhan.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=500790">NESTLE INDIA LTD.</a>',
    score: [55.6, 94.7, 95.5, 84.7],
    date: '29-Jul-21',
    brokerage: 'Sharekhan',
    'increase%': 13.4,
    link: '<a href="/broker/500790__20210729__Sharekhan.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=540768">Mahindra Logistics Ltd</a>',
    score: [41.2, 83.0, 92.5, 70.2],
    date: '29-Jul-21',
    brokerage: 'Sharekhan',
    'increase%': 18.8,
    link: '<a href="/broker/540768__20210729__Sharekhan.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532400">Birlasoft Ltd</a>',
    score: [37.4, 89.9, 89.7, 80.1],
    date: '29-Jul-21',
    brokerage: 'Sharekhan',
    'increase%': 22.6,
    link: '<a href="/broker/532400__20210729__Sharekhan.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=514162">WELSPUN INDIA LTD.</a>',
    score: [50.2, 93.7, 78.0, 63.3],
    date: '29-Jul-21',
    brokerage: 'Sharekhan',
    'increase%': 20.1,
    link: '<a href="/broker/514162__20210729__Sharekhan.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=500696">HINDUSTAN UNILEVER LTD.</a>',
    score: [60.2, 99.0, 77.8, 86.5],
    date: '28-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 16.6,
    link: '<a href="/broker/500696__20210728__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532814">INDIAN BANK</a>',
    score: [43.9, 83.4, 72.9, 74.4],
    date: '28-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 28.6,
    link: '<a href="/broker/532814__20210728__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=530019">JUBILANT LIFE SCIENCES LIMITED</a>',
    score: [60.6, 91.2, 69.4, 50.7],
    date: '28-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 22.0,
    link: '<a href="/broker/530019__20210728__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=532756">Mahindra CIE Automotive Limited</a>',
    score: [51.3, 94.4, 46.3, 52.7],
    date: '28-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 17.8,
    link: '<a href="/broker/532756__20210728__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
  {
    name: '<a href="/company?code=502157">MANGALAM CEMENT LTD.</a>',
    score: [44.4, 66.6, 64.4, 60.6],
    date: '28-Jul-21',
    brokerage: 'ICICIdirect.com',
    'increase%': 33.7,
    link: '<a href="/broker/502157__20210728__ICICIdirect_dot_com.pdf" target="_blank" >link</a>',
  },
];

const Table = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [curData, setCurData] = useState(
    data.length > max ? data.slice(min, max) : data,
  );

  useEffect(() => {
    const init = () => {
      if (min > 0) {
        setPrevDisabled(false);
      } else if (min <= 0) {
        setPrevDisabled(true);
      }
      if (max >= data.length) {
        setNextDisabled(true);
      } else if (max < data.length) {
        setNextDisabled(false);
      }
    };
    init();
  }, [min, max]);

  const handlePrev = () => {
    if (max === data.length) {
      setMax(min);
      setMin(min - 10);
    }
    if (min > 0) {
      setMax(min);
      setMin(min - 10);
    } else {
      setMin(0);
      setMax(10);
    }
  };

  const handleNext = () => {
    if (min < max) {
      if (max + 10 !== data.length) {
        setMin(max);
      }
      if (max + 10 < data.length) {
        setMax(max + 10);
      } else if (max + 10 >= data.length) {
        setMax(data.length);
      }
    }
  };

  const Pagination = () => {
    return (
      <Box flex={1} flexDirection="row" justifyContent="flex-end">
        {prevDisabled === false ? (
          <Pressable disabled={prevDisabled} onPress={() => handlePrev()} m={2}>
            <Icon name="chevron-left" color="#252932" size={30} />
          </Pressable>
        ) : null}
        {nextDisabled === false ? (
          <Pressable disabled={nextDisabled} onPress={() => handleNext()} m={2}>
            <Icon name="chevron-right" color="#252932" size={30} />
          </Pressable>
        ) : null}
      </Box>
    );
  };

  return (
    <TableContainer pagination={<Pagination />}>
      <Box width="50%">
        <TableHead title="Name" />
        {data &&
          data.slice(min, max).map((item, index) => {
            return (
              <TableData
                key={index}
                data={item.name.split('>')[1].split('<')[0]}
                type="tooltip"
              />
            );
          })}
      </Box>
      <Box>
        <TableHead title="Score" />
        {data &&
          data.slice(min, max).map((item, index) => {
            return (
              <TableData key={index}>
                <Box
                  style={{
                    transform: [
                      {
                        rotate: '-90deg',
                      },
                    ],
                  }}>
                  <VictoryBar
                    data={item.score}
                    style={{data: {fill: '#c43a31'}}}
                    height={30}
                    width={70}
                    barWidth={5}
                  />
                </Box>
              </TableData>
            );
          })}
      </Box>
      <Box>
        <TableHead title="Date" />
        {data &&
          data.slice(min, max).map((item, index) => {
            return <TableData key={index} data={item.date} />;
          })}
      </Box>
      <Box>
        <TableHead title="Brokerage" />
        {data &&
          data.slice(min, max).map((item, index) => {
            return <TableData key={index} data={item.brokerage} />;
          })}
      </Box>
      <Box>
        <TableHead title="Increase%" />
        {data &&
          data.slice(min, max).map((item, index) => {
            return <TableData key={index} data={`${item['increase%']}%`} />;
          })}
      </Box>
      <Box>
        <TableHead title="Link" />
        {data &&
          data.slice(min, max).map((item, index) => {
            return <TableData data="Link" type="link" />;
          })}
      </Box>
    </TableContainer>
  );
};

export default Table;
