import res from './data/airbnb/search_results.json';
import { names, superhostNames } from './index';

it('can list all names of listing', () => {
  expect(names(res)).toEqual(
    [
      'modern double room, 5 min to MRT',
      'Taipei i trip❤4mins MRT❤Xingtian temple❤homey apt',
      'only5 secand to Xingtian Temple MRT',
      'Bright, cozy and clean private room',
      'Baloo\'s home',
      '地鐵與機場都超方便的和室套房',
      'North-Europe LOFT High Ceiling Room',
      'S.H中山國小捷運站5分鐘精緻C室可小團體8人套房月租',
      'Taipei MRT Studio 到站即到家 MRT1 분',
      '台北市市中心五星級小豪宅飯店式管理-捷運松江南京站就在家門口',
      'HELLO 6-persons MRT Songjiang Nanjing 5 minutes',
      'suite A6 @Xingtian Temple Station ',
      '5★ location city centre MRT apt',
      'MRT Apartment-SongjiangNanjing*TWO',
      '行天宮正對面 溫馨雅房',
      'New open!! Zhongshan Elementary school MRT-Z STAR',
      'Taipei Manor I',
      'MRT松江南京全新裝潢雙人房',
    ],
  );
});
it('can list all names of listing where its primary_host.is_superhost is true', () => {
  expect(superhostNames(res)).toEqual([
    'Baloo\'s home',
    'Taipei MRT Studio 到站即到家 MRT1 분',
  ]);
});
