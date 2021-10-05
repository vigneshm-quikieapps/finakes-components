import React from 'react';
import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native';

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
        <View style={styles.headText}>
          <Text numberOfLines={1} style={styles.textStyle}>
            score
          </Text>
        </View>
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

  const data = [
    {
      companyCode: 'TCS',
      companyName: 'Tata Consultancy services',
      lastPrice: '3,560.55',
      Dreturn: '6.5',
      Yreturn: '57.8',
      MarketCap: '13.2',
      AnalystsTarget: '3,508.11',
      Valuation: '38.5',
    },
    {
      companyCode: 'RELIANCE',
      companyName: 'Reliance Industrial',
      lastPrice: '2,172.65',
      Dreturn: '2.6',
      Yreturn: '1.9',
      MarketCap: '13.8',
      AnalystsTarget: '2235',
      Valuation: '33x',
    },
    {
      companyCode: 'INFY',
      companyName: 'Infosys',
      lastPrice: '7,733.45',
      Dreturn: '3.3',
      Yreturn: '80.7',
      MarketCap: '7.4',
      AnalystsTarget: '1760.53',
      Valuation: '35.9',
    },
    {
      companyCode: '500034',
      companyName: 'Bajaj Finance',
      lastPrice: '6544.45',
      Dreturn: '6.2',
      Yreturn: '92.0',
      MarketCap: '3.9',
      AnalystsTarget: '6235.55',
      Valuation: '88.2',
    },
    {
      companyCode: '500696',
      companyName: 'Hindustan Unilever',
      lastPrice: '2484.10',
      Dreturn: '3.9',
      Yreturn: '13.2',
      MarketCap: '5.8',
      AnalystsTarget: '2672.21',
      Valuation: '71.2',
    },
  ];

  return (
    <View horizontal={true} style={styles.row}>
      <FlatList
        data={data}
        ListHeaderComponent={ListHeaderComponent1}
        style={styles.headerContainer}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <View style={styles.containerInner}>
                <Text style={styles.textStyle}>{item.companyCode}</Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={styles.textStyle}>
                  {item.companyName}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <ScrollView horizontal>
        <FlatList
          data={data}
          ListHeaderComponent={ListHeaderComponent}
          style={styles.headerContainer}
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    ₹{item.lastPrice}
                  </Text>
                  <Text numberOfLines={1} style={styles.textStyle}></Text>
                </View>
                <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    {item.Dreturn}%
                  </Text>
                </View>
                <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    {item.Yreturn}%
                  </Text>
                </View>
                <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    ₹{item.MarketCap}t
                  </Text>
                </View>
                <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    ₹{item.AnalystsTarget}
                  </Text>
                </View>
                <View style={styles.headText}>
                  <Text numberOfLines={1} style={styles.textStyle}>
                    P/E {item.Valuation}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  headText: {width: 100, alignItems: 'center'},
  textStyle: {color: '#ffffff'},
  containerInner: {width: 150, alignItems: 'center'},
  headerContainer: {paddingVertical: 6, backgroundColor: '#16172b'},
  row: {flexDirection: 'row'},
});

export default Table;
