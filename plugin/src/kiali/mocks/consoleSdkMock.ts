// Mock for @openshift-console/dynamic-plugin-sdk to avoid unresolvable internal deps in jest
export const consoleFetchJSON = jest.fn();
export const consoleFetch = jest.fn();
export const useK8sModel = jest.fn();
export const useK8sWatchResource = jest.fn();
export const useResolvedExtensions = jest.fn();
export const useActivePerspective = jest.fn();
export const GreenCheckCircleIcon = () => null;
export const RedExclamationCircleIcon = () => null;
export const YellowExclamationTriangleIcon = () => null;
export const ListPageBody = () => null;
export const ListPageFilter = () => null;
export const ListPageHeader = () => null;
export const VirtualizedTable = () => null;
export const TableColumn = () => null;
export const useListPageFilter = jest.fn(() => [[], [], jest.fn()]);
export default {};
