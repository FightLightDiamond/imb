import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {Picker} from "@react-native-community/picker"
import FactoryService from '../services/FactoryService';
import {GetHubs, GetDistricts, GetWards} from '../mock-db/ghn';
import {List} from "react-native-paper"

export default class SettingScreen extends React.Component {
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

        let provinceArray = [];
        Object.keys(provinces).forEach(function (k) {
            provinceArray.push({id: k, name: provinces[k]});
        });

        let provinceItems = provinceArray.map((s, i) => {
            return <Picker.Item key={i} value={s.id} label={s.name}/>;
        });

        const {navigation} = this.props;

        return (
            <View>
                <List.Item
                    onPress={() => navigation.navigate('Login')}
                    title="Login"
                   />
                <List.Item
                    onPress={() => navigation.navigate('Todo')}
                    title="Todo"
                   />
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
