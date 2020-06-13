import { Company } from './Company';
import { User } from './User';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap();
const user = new User();
const company = new Company();

customMap.addMarker(user)
customMap.addMarker(company)
