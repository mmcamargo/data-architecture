import { DataSource } from 'typeorm';
import config from './ormConfig';

const dataSource = new DataSource(config);

export default dataSource;
