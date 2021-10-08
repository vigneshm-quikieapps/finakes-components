import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {VictoryBar} from 'victory-native';

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

const optionsPerPage = [2, 3, 4];

const Table1 = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  const [tableData, setTableData] = useState(data);
  const [cSortDirection, setCSortDirection] = useState('ascending');
  const [dSortDirection, setDSortDirection] = useState('ascending');
  const [bSortDirection, setBSortDirection] = useState('ascending');
  const [iSortDirection, setISortDirection] = useState('ascending');

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const sortArray = option => {
    if (option == 'name') {
      data.sort((a, b) => {
        let oA = a.name.split('>')[1].split('<')[0].toLowerCase(),
          oB = b.name.split('>')[1].split('<')[0].toLowerCase();
        if (oA < oB) {
          return -1;
        } else if (oA > oB) {
          return 1;
        }
        return 0;
      });
      if (cSortDirection == 'ascending') {
        setTableData(data);
      } else {
        var x = data.reverse();
        setTableData(x);
      }
    } else if (option == 'brokerage') {
      data.sort((a, b) => {
        let oA = a.brokerage.toLowerCase(),
          oB = b.brokerage.toLowerCase();
        if (oA < oB) {
          return -1;
        } else if (oA > oB) {
          return 1;
        }
        return 0;
      });
      if (bSortDirection == 'ascending') {
        setTableData(data);
      } else if (bSortDirection == 'descending') {
        var x = data.reverse();
        setTableData(x);
      }
    } else if (option == 'date') {
      data.sort((a, b) => {
        let dA = new Date(a.date),
          dB = new Date(b.date);
        return dA - dB;
      });
      if (dSortDirection == 'ascending') {
        setTableData(data);
      } else if (dSortDirection == 'descending') {
        var x = data.reverse();
        setTableData(x);
      }
    } else if (option == 'increase') {
      data.sort((a, b) => {
        return a['increase%'] - b['increase%'];
      });
      if (iSortDirection == 'ascending') {
        setTableData(data);
      } else if (iSortDirection == 'descending') {
        var x = data.reverse();
        setTableData(x);
      }
    }
  };

  return (
    <ScrollView horizontal>
      <DataTable>
        <DataTable.Header style={styles.header}>
          <DataTable.Title
            onPress={() => {
              sortArray('name');
              if (cSortDirection == 'ascending') {
                setCSortDirection('descending');
              } else if (cSortDirection == 'descending') {
                setCSortDirection('ascending');
              }
            }}
            style={[styles.column, {width: 250}]}
            sortDirection={cSortDirection}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Company</Text>
          </DataTable.Title>
          <DataTable.Title style={styles.column}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Score</Text>
          </DataTable.Title>
          <DataTable.Title
            onPress={() => {
              sortArray('date');
              if (dSortDirection == 'ascending') {
                setDSortDirection('descending');
              } else if (dSortDirection == 'descending') {
                setDSortDirection('ascending');
              }
            }}
            style={styles.column}
            sortDirection={dSortDirection}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Date</Text>
          </DataTable.Title>
          <DataTable.Title
            onPress={() => {
              sortArray('brokerage');
              if (bSortDirection == 'ascending') {
                setBSortDirection('descending');
              } else if (bSortDirection == 'descending') {
                setBSortDirection('ascending');
              }
            }}
            style={[styles.column, {width: 250}]}
            sortDirection={bSortDirection}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Brokerage</Text>
          </DataTable.Title>
          <DataTable.Title
            onPress={() => {
              sortArray('increase');
              if (iSortDirection == 'ascending') {
                setISortDirection('descending');
              } else if (iSortDirection == 'descending') {
                setISortDirection('ascending');
              }
            }}
            style={[styles.column]}
            sortDirection={iSortDirection}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Increase%</Text>
          </DataTable.Title>
          <DataTable.Title style={styles.column}>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>More Info</Text>
          </DataTable.Title>
        </DataTable.Header>
        <View>
          {tableData.map((item, index) => {
            console.log(item.name.split('>')[1].split('<')[0]);
            return (
              <View key={index}>
                <DataTable.Row style={{backgroundColor: '#16172b'}}>
                  <DataTable.Cell style={[styles.column, {width: 250}]}>
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                      {item.name.split('>')[1].split('<')[0]}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.column}>
                    <View
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
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.column}>
                    <Text style={styles.text}>{item.date}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={[styles.column, {width: 250}]}>
                    <Text style={styles.text}>{item.brokerage}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.column}>
                    <Text style={[styles.text]}>{`${item['increase%']}%`}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.column}>
                    <Text style={styles.text}>Link</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            );
          })}
        </View>
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={p => setPage(p)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationStyle: 'solid',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    margin: 5,
  },
  header: {
    backgroundColor: '#16172b',
  },
  column: {
    // borderWidth: 2,
    // borderColor: '#fff',
    padding: 10,
    width: 100,
  },
});

export default Table1;
