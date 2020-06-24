import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Platform, DeviceEventEmitter, NativeModules, NativeEventEmitter} from 'react-native';
import RNMomosdk from 'react-native-momosdk';

const RNMomosdkModule = NativeModules.RNMomosdk;
const EventEmitter = new NativeEventEmitter(RNMomosdkModule);

const merchantname = 'CGV Cinemas';
const merchantcode = 'MOMOSWGM20200616';
const merchantNameLabel = 'Nhà cung cấp';
const billdescription = 'Fast and Furious 8';
const amount = 50000;
const enviroment = '0'; //"0": SANBOX , "1": PRODUCTION


export default class OrdersScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount(): * {
        const {navigation} = this.props;
        // const {route} = this.props;
        // const {params} = route;
        navigation.setOptions({title: 'Orders'});

        EventEmitter.addListener('RCTMoMoNoficationCenterRequestTokenReceived', (response) => {
            try {
                console.log('<MoMoPay>Listen.Event::' + JSON.stringify(response));
                if (response && response.status == 0) {
                    //SUCCESS: continue to submit momoToken,phonenumber to server
                    let fromapp = response.fromapp; //ALWAYS:: fromapp==momotransfer
                    let momoToken = response.data;
                    let phonenumber = response.phonenumber;
                    let message = response.message;
                    let orderId = response.refOrderId;
                } else {
                    alert('RCTMoMoNoficationCenterRequestTokenReceived' + response.message)
                    //let message = response.message;
                    //Has Error: show message here
                }
            } catch (ex) {
            }
        });
        //OPTIONAL
        EventEmitter.addListener('RCTMoMoNoficationCenterRequestTokenState', (response) => {
            console.log('<MoMoPay>Listen.RequestTokenState:: ' + response.status);
            alert(response.message)
            // status = 1: Parameters valid & ready to open MoMo app.
            // status = 2: canOpenURL failed for URL MoMo app
            // status = 3: Parameters invalid
        });
    }

    // TODO: Action to Request Payment MoMo App
    onPay = async () => {
        let jsonData = {};
        jsonData.enviroment = enviroment; //SANBOX OR PRODUCTION
        jsonData.action = 'gettoken'; //DO NOT EDIT
        jsonData.merchantname = merchantname; //edit your merchantname here
        jsonData.merchantcode = merchantcode; //edit your merchantcode here
        jsonData.merchantnamelabel = merchantNameLabel;
        jsonData.description = billdescription;
        jsonData.amount = amount;//order total amount
        jsonData.orderId = 'ID201811231flspz';
        jsonData.orderLabel = 'Ma don hang';
        jsonData.appScheme = 'momoswgm20200616';
        // iOS App Only , match with Schemes Indentify from your
        // Info.plist > key URL types > URL Schemes
        console.log('data_request_payment ' + JSON.stringify(jsonData));
        if (Platform.OS === 'android') {
            let dataPayment = await RNMomosdk.requestPayment(jsonData);
            this.momoHandleResponse(dataPayment);
        } else {
            // alert('IOS')
            RNMomosdk.requestPayment(jsonData);
        }
    };

    async momoHandleResponse(response) {
        try {
            if (response && response.status == 0) {
                //SUCCESS continue to submit momoToken,phonenumber to server
                let fromapp = response.fromapp; //ALWAYS:: fromapp == momotransfer
                let momoToken = response.data;
                let phonenumber = response.phonenumber;
                let message = response.message;

            } else {
                //let message = response.message;
                alert(response.message);
                //Has Error: show message here
            }
        } catch (ex) {
        }
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        return (
            <View>
                <Text onPress={this.onPay}>Order</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
});
