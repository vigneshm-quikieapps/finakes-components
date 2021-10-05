import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
const tableData = {
  data: [
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
  ],
  trendColumn: {
    name: 'score',
    type: 'bar',
  },
  paginate: true,
};

const Table = () => {
  const ListHeaderComponent1 = () => {
    return (
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Text numberOfLines={1} style={styles.textStyle}>
            Company
          </Text>
        </View>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.container}>
        {/* <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            name
          </Text>
        </View> */}
        {/* <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            score
          </Text>
        </View> */}
        <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            date
          </Text>
        </View>
        <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            brokerage
          </Text>
        </View>
        <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            increase%
          </Text>
        </View>
        <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            link
          </Text>
        </View>
      </View>
    );
  };

  // const data = [
  //   {
  //     companyCode: 'TCS',
  //     companyName: 'Tata Consultancy services',
  //     lastPrice: '3,560.55',
  //     Dreturn: '6.5',
  //     Yreturn: '57.8',
  //     MarketCap: '13.2',
  //     AnalystsTarget: '3,508.11',
  //     Valuation: '38.5',
  //   },
  //   {
  //     companyCode: 'RELIANCE',
  //     companyName: 'Reliance Industrial',
  //     lastPrice: '2,172.65',
  //     Dreturn: '2.6',
  //     Yreturn: '1.9',
  //     MarketCap: '13.8',
  //     AnalystsTarget: '2235',
  //     Valuation: '33x',
  //   },
  //   {
  //     companyCode: 'INFY',
  //     companyName: 'Infosys',
  //     lastPrice: '7,733.45',
  //     Dreturn: '3.3',
  //     Yreturn: '80.7',
  //     MarketCap: '7.4',
  //     AnalystsTarget: '1760.53',
  //     Valuation: '35.9',
  //   },
  //   {
  //     companyCode: '500034',
  //     companyName: 'Bajaj Finance',
  //     lastPrice: '6544.45',
  //     Dreturn: '6.2',
  //     Yreturn: '92.0',
  //     MarketCap: '3.9',
  //     AnalystsTarget: '6235.55',
  //     Valuation: '88.2',
  //   },
  //   {
  //     companyCode: '500696',
  //     companyName: 'Hindustan Unilever',
  //     lastPrice: '2484.10',
  //     Dreturn: '3.9',
  //     Yreturn: '13.2',
  //     MarketCap: '5.8',
  //     AnalystsTarget: '2672.21',
  //     Valuation: '71.2',
  //   },
  // ];

  return (
    <>
      <HorizontalBarGraph
        data={[125, 100, 50, 75, 100, 125]}
        labels={[
          'Q1, 2019',
          'Q2, 2019',
          'Q3, 2019',
          'Q4, 2019',
          'Q1, 2020',
          'Q2, 2020',
        ]}
        barWidthPercentage={50}
        width={375}
        height={350}
        barRadius={15}
        baseConfig={{
          hasYAxisBackgroundLines: false,
          xAxisLabelStyle: {
            rotation: 0,
            fontSize: 12,
            width: 70,
            yOffset: 4,
            xOffset: -15,
          },
          yAxisLabelStyle: {
            rotation: 30,
            fontSize: 13,
            prefix: '$',
            position: 'bottom',
            xOffset: 15,
            decimals: 2,
            height: 100,
          },
        }}
      />
      <View horizontal={true} style={styles.row}>
        <FlatList
          ListHeaderComponent={ListHeaderComponent1}
          style={styles.headerContainer}
          data={tableData.data}
          renderItem={({item}) => {
            let itemName = item.name.split('>')[1].split('<')[0];
            return (
              <View style={styles.container}>
                <View style={styles.containerInner}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={styles.textStyle}>
                    {itemName}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <ScrollView horizontal>
          <FlatList
            ListHeaderComponent={ListHeaderComponent}
            style={styles.headerContainer}
            data={tableData.data}
            renderItem={({item}) => {
              return (
                <View style={styles.container}>
                  {/* <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    {'itemName'}
                  </Text>
                  <Text numberOfLines={1} style={styles.textStyle}>
                
                  </Text>
                </View> */}
                  {/* <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    {item.Dreturn}%
                  </Text>
                </View> */}
                  <View style={styles.headText}>
                    <Text numberOfLines={1} style={styles.textStyle}>
                      {item.date}
                    </Text>
                  </View>
                  <View style={styles.headText}>
                    <Text numberOfLines={1} style={styles.textStyle}>
                      {item.brokerage}
                    </Text>
                  </View>
                  <View style={styles.headText}>
                    <Text numberOfLines={1} style={styles.textStyle}>
                      {`${item['increase%']}%`}
                    </Text>
                  </View>
                  <View style={styles.headText}>
                    <TouchableOpacity>
                      <Text numberOfLines={1} style={styles.textStyle}>
                        Link
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  headText: {width: 100, alignItems: 'center', justifyContent: 'center'},
  textStyle: {color: '#ffffff'},
  containerInner: {width: 150, alignItems: 'center'},
  headerContainer: {paddingVertical: 6, backgroundColor: '#16172b'},
  row: {flexDirection: 'row'},
});

export default Table;
