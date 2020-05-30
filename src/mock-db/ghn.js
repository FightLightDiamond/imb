const CalculateFee = {
    'token': 'TokenStaging',
    'Weight': 10000,
    'Length': 10,
    'Width': 110,
    'Height': 20,
    'FromDistrictID': 1443,
    'ToDistrictID': 1452,
    'ServiceID': 53319,
    'OrderCosts': [
        {
            'ServiceID': 100022,
        },
        {
            'ServiceID': 53337,
        },
    ],
    'CouponCode': 'COUPONTEST',
    'InsuranceFee': 1000003,
};

const GetDistricts = {
    'token': 'TokenStaging',
};

const FindAvailableServices = {
    'token': 'TokenStaging',
    'Weight': 10000,
    'Length': 10,
    'Width': 110,
    'Height': 20,
    'FromDistrictID': 1455,
    'ToDistrictID': 1462,
};

const ServiceList = {
    'normal': {
        '53319': '6h',
        '53320': '1d',
        '53321': '2d',
        '53322': '3d',
        '53323': '4d',
        '53324': '5d',
        '53327': '6d',
    },
    'extra': {
        '16': 'Phí khai giá',
        '53328': 'Phí yêu cầu giao lại',
        '53331': 'SMS báo phát',
        '53337': 'Gửi hàng tại điểm',
        '53338': 'Nhận hàng tại điểm',
        '53342': 'Tiền khuyến mãi',
        '100021': 'Phí thay đổi gói dịch vụ',
        '100022': 'Phí thay đổi khối lượng/ kích thước',
        '100026': 'Trả hàng nội tỉnh (giống địa chỉ lấy)',
        '100027': 'Trả hàng nội tỉnh (khác địa chỉ lấy)',
        '100028': 'Trả hàng liên tỉnh (giống chỉ lấy)',
        '100029': 'Trả hàng liên tỉnh (khác chỉ lấy)',
        '100030': 'Phí thay đổi địa chỉ giao',
        '100032': 'Phí chênh lệch thay đổi đơn hàng',
    },
};
const CreateOrder = {
    'token': 'TokenStaging',
    'PaymentTypeID': 1,
    'FromDistrictID': 1455,
    'FromWardCode': '21402',
    'ToDistrictID': 1462,
    'ToWardCode': '21609',
    'Note': 'Tạo ĐH qua API',
    'SealCode': 'tem niêm phong',
    'ExternalCode': '',
    'ClientContactName': 'Giao Hang Nhanh',
    'ClientContactPhone': '19001206',
    'ClientAddress': '70 Lữ Gia',
    'CustomerName': 'GHN',
    'CustomerPhone': '18006328',
    'ShippingAddress': '70 Lữ Gia',
    'CoDAmount': 1500000,
    'NoteCode': 'CHOXEMHANGKHONGTHU',
    'InsuranceFee': 0,
    'ClientHubID': 299650,
    'ServiceID': 53319,
    'ToLatitude': 1.2343322,
    'ToLongitude': 10.54324322,
    'FromLat': 1.2343322,
    'FromLng': 10.54324322,
    'Content': 'Test nội dung',
    'CouponCode': '',
    'Weight': 10200,
    'Length': 10,
    'Width': 10,
    'Height': 10,
    'CheckMainBankAccount': false,
    'ShippingOrderCosts':
        [
            {
                'ServiceID': 53337,
            },
        ],
    'ReturnContactName': 'Giao Hang Nhanh',
    'ReturnContactPhone': '19001206',
    'ReturnAddress': '70 Lữ Gia',
    'ReturnDistrictID': 1455,
    'ExternalReturnCode': 'GHN',
    'IsCreditCreate': true,
    'AffiliateID': 252905,
};
const GetHubs = {
    'token': 'TokenStaging',
};
const OrderInfo = {
    'token': 'TokenStaging',
    'OrderCode': '23FNQY46',
};

const UpdateOrder = {
    'token': 'TokenStaging',
    'ShippingOrderID': 268583,
    'OrderCode': '23QAX56N',
    'PaymentTypeID': 1,
    'FromDistrictID': 1452,
    'FromWardCode': '21015',
    'ToDistrictID': 1452,
    'ToWardCode': '21015',
    'Note': 'Lưu ĐH qua API ',
    'NoteCode': 'CHOTHUHANG',
    'ClientContactName': 'client name',
    'ClientContactPhone': '0987654321',
    'ClientAddress': '140 Lê Trọng Tấn',
    'CustomerName': 'Nguyễn Văn Update',
    'CustomerPhone': '01666666666',
    'ShippingAddress': '137 Lê Quang Định',
    'CoDAmount': 12500000,
    'InsuranceFee': 0,
    'ClientHubID': 0,
    'ServiceID': 53320,
    'Content': 'Test nội dung',
    'CouponCode': '',
    'Weight': 10200,
    'Length': 10,
    'Width': 10,
    'Height': 10,
    'OrderCosts': [
        {
            'ServiceID': 53327,
        },
        {
            'ServiceID': 53320,
        },
    ],
    'ReturnContactName': '',
    'ReturnContactPhone': '',
    'ReturnAddress': '',
    'ReturnDistrictCode': '',
    'ExternalReturnCode': '',
};

const CancelOrder = {
    'token': 'TokenStaging',
    'OrderCode': '23FNQY46',
};
const ReturnOrder = {
    'token': 'TokenStaging',
    'OrderCode': '237DLN66',
};

const AddHubs = {
    'token': 'TokenStaging',
    'Address': '140 Lê Trọng Tấn',
    'ContactName': 'GHN - TPT',
    'ContactPhone': '0988111111',
    'DistrictID': 1461,
    'Email': 'tientp@ghn.vn',
    'IsMain': true,
    'Latitude': 10.0000001,
    'Longitude': 108.00000032,
};

const UpdateHubs = {
    'token': 'TokenStaging',
    'HubID': 298735,
    'Address': '140 Lê Trọng Tấn',
    'ContactName': 'GHN Client Hubs',
    'ContactPhone': '0988777777',
    'DistrictID': 1461,
    'Email': 'tientp@ghn.vn',
    'IsMain': false,
    'Latitude': 10.0000001,
    'Longitude': 108.00000032,
};

const SignIn = {
    'token': 'TokenStaging',
    'Email': 'support@chuchanh.com',
    'Password': 'anhvinh1',
};
const GetWards = {
    'code': 1,
    'msg': 'Success',
    'data': {
        'Wards': [
            {
                'WardCode': '21015',
                'WardName': 'Phường 15',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21013',
                'WardName': 'Phường 13',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21014',
                'WardName': 'Phường 14',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21012',
                'WardName': 'Phường 12',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21011',
                'WardName': 'Phường 11',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21010',
                'WardName': 'Phường 10',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21009',
                'WardName': 'Phường 9',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21001',
                'WardName': 'Phường 1',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21008',
                'WardName': 'Phường 8',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21002',
                'WardName': 'Phường 2',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21004',
                'WardName': 'Phường 4',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21007',
                'WardName': 'Phường 7',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21005',
                'WardName': 'Phường 5',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21006',
                'WardName': 'Phường 6',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
            {
                'WardCode': '21003',
                'WardName': 'Phường 3',
                'DistrictCode': '0210',
                'ProvinceID': 202,
                'DistrictID': 1452,
            },
        ],
    },
};
const SetConfigClient = {
    'token': 'TokenStaging',
    'TokenClient': [
        'TokenTest',
    ],
    'ConfigCod': true,
    'ConfigReturnData': true,
    'URLCallback': 'https://hook.serverapi.host/realtimelog',
    'ConfigField': {
        'CoDAmount': true,
        'CurrentWarehouseName': true,
        'CustomerID': true,
        'CustomerName': true,
        'CustomerPhone': true,
        'Note': true,
        'OrderCode': true,
        'ServiceName': true,
        'ShippingOrderCosts': true,
        'Weight': true,
        'ExternalCode': true,
        'ReturnInfo': true,
    },
    'ConfigStatus': {
        'ReadyToPick': true,
        'Picking': true,
        'Storing': true,
        'Delivering': true,
        'Delivered': true,
        'WaitingToFinish': true,
        'Return': true,
        'Returned': true,
        'Finish': true,
        'LostOrder': true,
        'Cancel': true,
    },
};
const GetOrderLogs = {
    'token': 'TokenStaging',
    'FromTime': 1,
    'ToTime': 15093584059811,
    'Condition': {
        'CustomerID': 192803,
        'ShippingOrderID': 276516,
        'OrderCode': '28RX1AU4',
        'CurrentStatus': 'Storing',
    },
    'Skip': 0,
};
const SignUp = {
    'token': 'TokenStaging',
    'Email': 'demo@company.com',
    'Password': '1234567890',
    'ContactPhone': '01658263536',
    'ContactName': 'My company',
}

export {
    CalculateFee, GetDistricts,
    FindAvailableServices,
    GetHubs,
    CreateOrder,
    ServiceList,
    OrderInfo,
    UpdateOrder,
    CancelOrder,
    ReturnOrder,
    AddHubs, UpdateHubs, SignIn,
    GetWards, SetConfigClient, GetOrderLogs,
    SignUp,
};
