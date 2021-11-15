import _ from 'lodash';


export default class CriptoDTO {
    static getViewCriptoDTO(data,dataImg) {

        const CriptosDTO = [];
    for (let i = 0; i < 5; i++) {

            let obj = {};
            obj.asset_id = data[i].asset_id;
            obj.name =data[i].name;
            obj.type_is_crypto = data[i].type_is_crypto;
            obj.data_quote_start = data[i].data_quote_start;
            obj.data_quote_end = data[i].data_quote_end;
            obj.data_orderbook_start = data[i].data_orderbook_start;
            obj.data_orderbook_end = data[i].data_orderbook_end;
            obj.data_trade_start = data[i].data_trade_start;
            obj.data_trade_end = data[i].data_trade_end;
            obj.data_symbols_count = data[i].data_symbols_count;
            obj.volume_1hrs_usd =  data[i].volume_1hrs_usd;
            obj.volume_1day_usd =  data[i].volume_1day_usd;
            obj.volume_1mth_usd =  data[i].volume_1mth_usd;
            obj.price_usd =  data[i].price_usd;
            obj.id_icon =  data[i].id_icon;
            obj.data_start =  data[i].data_start;
            obj.data_end =  data[i].data_end;
            obj.url = _.filter(dataImg, x => x.asset_id === data[i].asset_id);
            CriptosDTO.push(obj);
        }

        return CriptosDTO;
    }
}