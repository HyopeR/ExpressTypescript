import EnvironmentService from '../services/EnvironmentService/EnvironmentService';

const EnvironmentModule = new EnvironmentService();
export const env = EnvironmentModule.initialize();
