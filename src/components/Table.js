import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'

export default function Table() {
    

    const ListHeaderComponent1=()=>{
        return(
            <View style={{flexDirection:"row",paddingVertical:20,borderBottomColor:"#ffffff",borderBottomWidth:1}}>
                 <View style={{width:150,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>Company</Text>
               </View>
               </View>
               )
               }

    const ListHeaderComponent=()=>{
        return(
            
               
            
            <View style={{flexDirection:"row",paddingVertical:20,borderBottomColor:"#ffffff",borderBottomWidth:1}}>
              
               <View style={{width:100,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>LastPrice</Text>
               </View>
               <View style={{width:100,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>7D Return</Text>
               </View>
               <View style={{width:100,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>1Y Return</Text>
               </View>
               <View style={{width:100,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>Market Cap</Text>
               </View>
               <View style={{width:100,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>Analysts Target</Text>
               </View>
               <View style={{width:100,alignItems:"center"}}>
                   <Text numberOfLines={1} style={{color:"#ffffff"}}>Valuation</Text>
               </View>
            </View>
            
        )
    }

const data=[{
    companyCode:"TCS",
    companyName:"Tata Consultancy services",
    lastPrice:"3,560.55",
    Dreturn:"6.5",
    Yreturn:"57.8",
    MarketCap:"13.2",
    AnalystsTarget:"3,508.11",
    Valuation:"38.5"


},
{
    companyCode:"RELIANCE",
    companyName:"Reliance Industrial",
    lastPrice:"2,172.65",
    Dreturn:"2.6",
    Yreturn:"1.9",
    MarketCap:"13.8",
    AnalystsTarget:"2235",
    Valuation:"33x"
},
{
companyCode:"INFY",
companyName:"Infosys",
lastPrice:"7,733.45",
Dreturn:"3.3",
Yreturn:"80.7",
MarketCap:"7.4",
AnalystsTarget:"1760.53",
Valuation:"35.9"
},
{
    companyCode:"500034",
    companyName:"Bajaj Finance",
    lastPrice:"6544.45",
    Dreturn:"6.2",
    Yreturn:"92.0",
    MarketCap:"3.9",
    AnalystsTarget:"6235.55",
    Valuation:"88.2"
    },
    {
        companyCode:"500696",
        companyName:"Hindustan Unilever",
        lastPrice:"2484.10",
        Dreturn:"3.9",
        Yreturn:"13.2",
        MarketCap:"5.8",
        AnalystsTarget:"2672.21",
        Valuation:"71.2"
        }
]

    return (
        <View horizontal={true} style={{flexDirection:"row"}}>
            <FlatList data={data}  ListHeaderComponent={ListHeaderComponent1} style={{paddingVertical:6,backgroundColor:"#16172b"}} data={data} renderItem={({item})=>{
                return(
                    <View style={{flexDirection:"row",paddingVertical:20,borderBottomColor:"#ffffff",borderBottomWidth:1}}>
                    <View style={{width:150,alignItems:"center"}}>
                        <Text style={{color:"#ffffff"}}>{item.companyCode}</Text>
                        <Text numberOfLines={1} ellipsizeMode={"tail"} style={{color:"#ffffff"}}>{item.companyName}</Text>
                    </View>
                    </View>

                )}}/>
                <ScrollView horizontal>
            <FlatList data={data}  ListHeaderComponent={ListHeaderComponent} style={{paddingVertical:6,backgroundColor:"#16172b"}} data={data} renderItem={({item})=>{
                return(
                    <View style={{flexDirection:"row",paddingVertical:20,borderBottomColor:"#ffffff",borderBottomWidth:1}}>
                    
                    <View style={{width:100,alignItems:"center"}}>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}>₹{item.lastPrice}</Text>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}></Text>
                    </View>
                    <View style={{width:100,alignItems:"center"}}>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}>{item.Dreturn}%</Text>
                    </View>
                    <View style={{width:100,alignItems:"center"}}>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}>{item.Yreturn}%</Text>
                    </View>
                    <View style={{width:100,alignItems:"center"}}>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}>₹{item.MarketCap}t</Text>
                    </View>
                    <View style={{width:100,alignItems:"center"}}>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}>₹{item.AnalystsTarget}</Text>
                    </View>
                    <View style={{width:100,alignItems:"center"}}>
                        <Text numberOfLines={1} style={{color:"#ffffff"}}>P/E {item.Valuation}</Text>
                    </View>
                 </View>
                )
            }}/>
            </ScrollView>
        </View>
    )
}
