import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {VictoryLine, VictoryBar} from 'victory-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default function MainInfo3() {
  const datas = [
    {
      stockCode: 'EPS',
      stockValue: 10.5,
    },
    {
      stockCode: 'P/E',
      stockValue: 19.83,
    },
    {
      stockCode: 'BV',
      stockValue: 52.1,
    },
    {
      stockCode: 'P/B',
      stockValue: 4.01,
    },
    {
      stockCode: 'DPS',
      stockValue: 15.2,
    },
    {
      stockCode: 'DY%',
      stockValue: 7.25,
    },
    {
      stockCode: 'D/E',
      stockValue: 0,
    },
    {
      stockCode: 'ROE%',
      stockValue: 24.4,
    },
  ];

  const data = [
    {x: 1, y: 2},
    {x: 2, y: 3},
    {x: 3, y: 5},
    {x: 4, y: 7},
    {x: 5, y: 10},
    {x: 6, y: 11},
    {x: 7, y: 13},
    {x: 8, y: 15},
    {x: 9, y: 19},
    {x: 10, y: 12},
  ];
  return (
    <View
      style={{
        padding: 6,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>MainInfo</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={datas}
        renderItem={({item}) => {
          return (
            <View
              style={{
                marginTop: 6,
                marginLeft: 10,
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#d2d2d2',
              }}>
              <View>
                <Text style={{fontSize: 20}}>{item.stockCode}</Text>
                <View>
                  <Text style={{fontSize: 32, fontWeight: 'bold'}}>
                    {item.stockValue}
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}} />
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',

                  //,transform: [{rotate: '180deg'}],
                }}>
                {item.stockCode === 'EPS' ||
                item.stockCode === 'BV' ||
                item.stockCode === 'DPS' ? (
                  <VictoryBar
                    data={data}
                    height={150}
                    width={230}
                    barWidth={12}
                  />
                ) : (
                  <VictoryLine
                    style={{
                      data: {stroke: '#c43a31'},
                      parent: {border: '1px solid #ccc'},
                    }}
                    height={170}
                    width={210}
                    data={data}
                  />
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
