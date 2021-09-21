import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Input from '../components/Form/Input';
import Header from '../components/Header';
import {colorConstants} from '../core/constants';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
  {
    item: 'Barcelona',
    id: 'BR',
  },
  {
    item: 'PSG',
    id: 'PSG',
  },
  {
    item: 'FC Bayern Munich',
    id: 'FBM',
  },
  {
    item: 'Manchester United FC',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Everton FC',
    id: 'EVE',
  },
  {
    item: 'Tottenham Hotspur FC',
    id: 'TOT',
  },
  {
    item: 'Chelsea FC',
    id: 'CHE',
  },
  {
    item: 'Liverpool FC',
    id: 'LIV',
  },
  {
    item: 'Arsenal FC',
    id: 'ARS',
  },

  {
    item: 'Leicester City FC',
    id: 'LEI',
  },
];

const DownArrow = (
  <Feather name="chevron-down" size={25} color={colorConstants.darkTheme} />
);

const CrossIcon = (
  <Entypo name="cross" size={20} color={colorConstants.lightBlack} />
);

const FilterPage = () => {
  const [valScore, setValScore] = useState('0');
  const [sizeScore, setSizeScore] = useState('0');
  const [durScore, setDurScore] = useState('0');
  const [GnMScore, setGnMScore] = useState('0');
  const [CMP, setCMP] = useState('0');
  const [industries, setIndustries] = useState([]);
  const [excludeIndustry, setExcludeIndustry] = useState([]);
  const [sector, setSector] = useState([]);
  const [excludeSector, setExcludeSector] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [enableScrollViewScroll, setEnableScrollViewScroll] = useState(true);
  const [_myScroll, setMyScroll] = useState();

  const onCompaniesChange = item => {
    setSelectedCompanies(xorBy(selectedCompanies, [item], 'id'));
  };
  const onIndustryChange = item => {
    setIndustries(xorBy(industries, [item], 'id'));
  };
  const onExcludeIndustryChange = item => {
    setExcludeIndustry(xorBy(excludeIndustry, [item], 'id'));
  };

  const onSectorChange = item => {
    setSector(xorBy(sector, [item], 'id'));
  };

  const onExcludeSectorChange = item => {
    setExcludeSector(xorBy(excludeSector, [item], 'id'));
  };
  return (
    <View
      onStartShouldSetResponderCapture={() => {
        setEnableScrollViewScroll(true);
      }}>
      <ScrollView
        scrollEnabled={enableScrollViewScroll}
        ref={myScroll => setMyScroll(myScroll)}>
        <Header title={'Finakes'} />
        <View style={styles.body}>
          <Text style={styles.heading}>Finakes - Advanced Filter</Text>
          <View
            onStartShouldSetResponderCapture={() => {
              setEnableScrollViewScroll(false);
              if (
                _myScroll.contentOffset === 0 &&
                enableScrollViewScroll === false
              ) {
                setEnableScrollViewScroll(true);
              }
            }}>
            <SelectBox
              inputPlaceholder=""
              label="Company With"
              labelStyle={styles.label}
              options={K_OPTIONS}
              selectedValues={selectedCompanies}
              onMultiSelect={onCompaniesChange}
              onTapClose={onCompaniesChange}
              isMulti
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowHeaderText}>Parameter</Text>
              </View>
              <View style={[styles.col, {alignSelf: 'center', marginLeft: 10}]}>
                <Text style={styles.rowHeaderText}>Min Score</Text>
              </View>
              <View style={[styles.col, {alignSelf: 'center', marginLeft: 10}]}>
                <Text style={styles.rowHeaderText}>Max Score</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowText}>Val Score</Text>
              </View>
              <View style={styles.col}>
                <Input
                  value={valScore}
                  placeholder={'Min value'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={styles.col}>
                <Input
                  placeholder={'Max value'}
                  value={'100'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowText}>Size Score</Text>
              </View>
              <View style={styles.col}>
                <Input
                  value={sizeScore}
                  placeholder={'Min value'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={styles.col}>
                <Input
                  placeholder={'Max value'}
                  value={'100'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowText}>Dur Score</Text>
              </View>
              <View style={styles.col}>
                <Input
                  value={durScore}
                  placeholder={'Min value'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={styles.col}>
                <Input
                  placeholder={'Max value'}
                  value={'100'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowText}>G & M Score</Text>
              </View>
              <View style={styles.col}>
                <Input
                  value={GnMScore}
                  placeholder={'Min value'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={styles.col}>
                <Input
                  placeholder={'Max value'}
                  value={'100'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          {/* <View>
            <Input
              value={company}
              label={'Select Industries (Blank will include all)'}
              rightIcon={() => {
                return (
                  <TouchableOpacity>
                    <View>{DownArrow}</View>
                  </TouchableOpacity>
                );
              }}
            />
          </View> */}

          <View
            onStartShouldSetResponderCapture={() => {
              setEnableScrollViewScroll(false);
              if (
                _myScroll.contentOffset === 0 &&
                enableScrollViewScroll === false
              ) {
                setEnableScrollViewScroll(true);
              }
            }}>
            <SelectBox
              inputPlaceholder=""
              label={'Select Industries (Blank will include all)'}
              labelStyle={styles.label}
              options={K_OPTIONS}
              selectedValues={industries}
              onMultiSelect={onIndustryChange}
              onTapClose={onIndustryChange}
              isMulti
            />
          </View>

          <View
            onStartShouldSetResponderCapture={() => {
              setEnableScrollViewScroll(false);
              if (
                _myScroll.contentOffset === 0 &&
                enableScrollViewScroll === false
              ) {
                setEnableScrollViewScroll(true);
              }
            }}>
            <SelectBox
              inputPlaceholder=""
              label={'Exclude Industries'}
              labelStyle={styles.label}
              options={K_OPTIONS}
              selectedValues={excludeIndustry}
              onMultiSelect={onExcludeIndustryChange}
              onTapClose={onExcludeIndustryChange}
              isMulti
            />
          </View>

          <View
            onStartShouldSetResponderCapture={() => {
              setEnableScrollViewScroll(false);
              if (
                _myScroll.contentOffset === 0 &&
                enableScrollViewScroll === false
              ) {
                setEnableScrollViewScroll(true);
              }
            }}>
            <SelectBox
              inputPlaceholder=""
              label={'Select Sector (Blank will include all)'}
              labelStyle={styles.label}
              options={K_OPTIONS}
              selectedValues={sector}
              onMultiSelect={onSectorChange}
              onTapClose={onSectorChange}
              isMulti
            />
          </View>

          <View
            onStartShouldSetResponderCapture={() => {
              setEnableScrollViewScroll(false);
              if (
                _myScroll.contentOffset === 0 &&
                enableScrollViewScroll === false
              ) {
                setEnableScrollViewScroll(true);
              }
            }}>
            <SelectBox
              inputPlaceholder=""
              label={'Exclude Sector'}
              labelStyle={styles.label}
              options={K_OPTIONS}
              selectedValues={excludeSector}
              onMultiSelect={onExcludeSectorChange}
              onTapClose={onExcludeSectorChange}
              isMulti
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowHeaderText}>Price</Text>
              </View>
              <View style={[styles.col, {alignSelf: 'center', marginLeft: 10}]}>
                <Text style={styles.rowHeaderText}>Min Price</Text>
              </View>
              <View style={[styles.col, {alignSelf: 'center', marginLeft: 10}]}>
                <Text style={styles.rowHeaderText}>Max Price</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.col1}>
                <Text style={styles.rowText}>CMP</Text>
              </View>
              <View style={styles.col}>
                <Input
                  value={CMP}
                  placeholder={'Min value'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={styles.col}>
                <Input
                  placeholder={'Max value'}
                  value={'10000'}
                  rightIcon={() => {
                    return (
                      <TouchableOpacity>
                        <View>{CrossIcon}</View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Button title="Get Stocks" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  body: {
    //
  },
  label: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  formContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowHeaderText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowText: {
    fontSize: 16,
  },
  col1: {
    height: 50,
    justifyContent: 'center',
    width: '25%',
  },
  col: {
    width: '35%',
  },

  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    width: '50%',
  },
});

export default FilterPage;
