import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import BookingScreen from './screens/BookingScreen';
import TVScreen from './screens/TVScreen';
import ContactsScreen from './screens/ContactsScreen';

const screenList = [
  {name: 'Home', title: 'Магазин', component: HomeScreen},
  {name: 'Booking', title: 'Бронь столика', component: BookingScreen},
  {name: 'TV', title: 'Спортивні трансляції', component: TVScreen},
  {name: 'Contacts', title: 'Контакти', component: ContactsScreen},
  {name: 'Cart', title: 'Кошик', component: CartScreen},
];

export default screenList;
