/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Picker,
} from 'react-native';
import FactoryService from '../services/FactoryService';
import {GetHubs, GetDistricts, GetWards} from '../mock-db/ghn';

// console.log('GetHubs', GetHubs);

export default class Setting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            districts: [],
            hubs: [],
            HubID: null,
            provinceID: null,
            DistrictID: null,
            FromDistrictID: null,
        };

        this.setSelectedValue = this.setSelectedValue.bind(this);
    }

    async componentDidMount(): * {
        const {navigation} = this.props;
        const {route} = this.props;
        const {params} = route;
        navigation.setOptions({title: 'Settings'});

        const request = FactoryService.request('GHNService', 'test');

        request.setDomain('https://dev-online-gateway.ghn.vn/apiv3-api/api/v1/apiv3');
        const hubs = await request.GetHubs(GetHubs);
        const districts = await request.GetDistricts(GetDistricts);
        const wards = await request.GetWards(GetWards);
        console.log('wards', wards)

        this.setState({
            hubs: hubs.data.data,
            districts: districts.data.data,
        });
    }

    render(): boolean | number | string | React$Element<*> | React$Portal | Iterable | null {
        let hubItems = this.state.hubs.map((s, i) => {
            return <Picker.Item key={i} value={s.HubID} label={s.Address}/>;
        });

        let provinces = {};

        let districtItems = this.state.districts.map((s, i) => {
            provinces[s.ProvinceID] = s.ProvinceName;
            return <Picker.Item key={i} value={s.DistrictID} label={s.DistrictName}/>;
        });

        console.log('provinces', provinces);

        let provinceArray = [];
        Object.keys(provinces).forEach(function (k) {
            provinceArray.push({id: k, name: provinces[k]});
        });

        let provinceItems = provinceArray.map((s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.name}/>;
        });

        return (
            <View>
                <Text>Setting</Text>
                <View>
                    <Text>
                        Danh sách kho
                    </Text>
                    <Picker selectedValue={this.state.HubID}
                            onValueChange={(itemValue, itemIndex) => this.setSelectedValue(itemValue)}
                    >
                        {hubItems}
                    </Picker>
                </View>

                <View>
                    <Text>
                        Tỉnh / Thanh phố
                    </Text>
                    <Picker selectedValue={this.state.provinceID}
                            onValueChange={(itemValue, itemIndex) => this.changeProvince(itemValue)}
                    >
                        {provinceItems}
                    </Picker>
                </View>

                <View>
                    <Text>
                        Quận huyện
                    </Text>
                    <Picker selectedValue={this.state.DistrictID}
                            onValueChange={(itemValue, itemIndex) => this.changeDistrict(itemValue)}
                    >
                        {districtItems}
                    </Picker>
                </View>

            </View>
        );
    }

    setSelectedValue(itemValue) {
        this.setState({
            HubID: itemValue,
        });

        const result = this.state.hubs.filter((s, i) => {
            return s.HubID === this.state.HubID;
        });

        this.setState({
            FromDistrictID: result.DistrictID,
        });
    }

    changeProvince(itemValue) {
        this.setState({
            provinceID: itemValue,
        });
    }

    changeDistrict(itemValue) {
        console.log('itemValue', itemValue);
        this.setState({
            DistrictID: itemValue,
        });
    }

    changeWards(itemValue) {
        this.setState({
            WardCode: itemValue,
        });
    }

    findService(value) {

    }
}

const styles = StyleSheet.create({
    container: {},
});
