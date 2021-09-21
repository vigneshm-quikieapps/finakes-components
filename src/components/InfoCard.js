import React, {useState} from 'react';
import { Text, View, Switch, Dimensions, TouchableOpacity, Modal, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {
    StackedBarChart, graphStyle
  } from "react-native-chart-kit";
import { Images } from '../core/constants';
const InfoCard=()=>{
       
    const screenWidth = Dimensions.get("window").width;
    const [isEnabled, setIsEnabled] = useState(false);
    const [select,setSelect]=useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const data = {
    labels: ["2012-03",
             "2012-03",
             "2012-03",
             "2012-03",
             "2012-03",
             "2012-03",
             "2012-03",
             "2012-03",
             "2012-03",
             "2012-03"],
    
   
    data: [
      [20, 60],
      [30, 30],
      [20, 60],
      [30, 30],
      [20, 60],
      [30, 30],
      [20, 60],
      [30, 30],
      
    ],
    barColors: ["#fef3bd", "#8ed1fc"],
    strokeWidth: [50,20],
   
    
  
  };

  

  const chartConfig = {
    
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => "black",
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.9,
    useShadowColorFromDataset: false, // optional,
    decimalPlaces:0,
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: "#e3e3e3",
      strokeDasharray: "0",
    },
    propsForLabels: {
      fontSize:9
    },
   
    

  };
  return (
           <View style={{padding:6,backgroundColor:"#ffffff",borderRadius:6,shadowColor: "#000",
           shadowOffset: {
               width: 0,
               height: 2,
           },
           shadowOpacity: 0.25,
           shadowRadius: 3.84,
           
           elevation: 5,}}> 
              
              <View style={{flexDirection:"row",justifyContent:"center"}}>
                  <View >
                      <Text style={{fontWeight:"bold"}}>Revenue & Profit <Text style={{fontSize:8}}>consolidated</Text></Text>
                  </View>
                  <View style={{position:"absolute",right:0,top:-3}}>
                  <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
                  </View>
              </View>

              <ScrollView horizontal style={{width:"100%"}}>
  <StackedBarChart
   
 graphStyle={{width:2}}
  data={data}
  width={screenWidth*1.5}
  height={220}
  chartConfig={chartConfig}
  yAxisSuffix="k"
  
  

/>
</ScrollView>

<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>

<View style={{flexDirection:"row",alignItems:"center"}}>
    <View style={{height:8,width:8,borderRadius:4,backgroundColor:"#8ed1fc"}}/>
    <View style={{marginLeft:6}}>
        <Text>Revenue</Text>
    </View>
</View>


<View style={{marginLeft:12,flexDirection:"row",alignItems:"center"}}>
    <View style={{height:8,width:8,borderRadius:4,backgroundColor:"#fef3bd"}}/>
    <View style={{marginLeft:6}}>
        <Text>Profit</Text>
    </View>
</View>
    

</View>

<TouchableOpacity onPress={()=>setSelect(true)}  style={{marginTop:12,backgroundColor:"#dcedc8",padding:4}}>
    <Text style={{fontSize:10}}>Picture perfect revenue growth, with CAGR of 4.4% over last 5 years.</Text>
    <Text style={{fontSize:10}}>Tobacco Prod. industry leader in terms of revenue.</Text>
</TouchableOpacity>



<Modal   animationType={'true'} transparent={true} visible={select} onRequestClose={()=>setSelect(false)}  >
  <TouchableOpacity onPress={()=>setSelect(false)} activeOpacity={1}  style={{flex:1,backgroundColor:"rgba(33, 33, 33, 0.7)",justifyContent:"center",alignItems:"center",paddingTop:65,paddingLeft:25,paddingRight:25,paddingBottom:65}}>
                     <TouchableWithoutFeedback>
                      <View style={{padding:6,backgroundColor:"#ffffff",borderRadius:8}}>
                          <Text>More Info</Text>
                          <Image style={{height:300,width:300,borderRadius:8 }} source={Images.revenue}/>

                          <View style={{marginTop:6,flexDirection:"row"}}>
                              <Image style={{height:25,width:25}} source={Images.dislike}/>
                              <Image style={{marginLeft:8,height:25,width:25}} source={Images.comments}/>
                              <Image style={{marginLeft:8,height:25,width:25}} source={Images.share}/>
                             
                              </View>
                          </View>
                          </TouchableWithoutFeedback>
                          </TouchableOpacity>
                          </Modal>
            </View>
            )
}
export default InfoCard;
