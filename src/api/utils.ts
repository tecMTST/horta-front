export enum BackendEntities {
  LOGIN = 'login',
  USER = 'user',
  HORTA = 'garden',
  CANTEIRO = 'lot',
  PLANTA = 'crop',
  SENSOR = 'sensor',
  SENSOR_DATA = 'sensor-data',
}

export function AddEntity(entity: BackendEntities) {
  return `add-${entity}`;
}

export function GetEntity(entity: BackendEntities, id?: string) {
  const get = `get-${entity}`;
  if (id) return `${get}/${id}`;
  return get;
}

export function UpdateEntity(entity: BackendEntities, id: string) {
  return `update-${entity}/${id}`;
}

export function RemoveEntity(entity: BackendEntities) {
  return `remove-${entity}`;
}

export function ListEntity(entity: BackendEntities) {
  return `list-${entity}s`;
}

export function CombineEntity(
  entity: BackendEntities,
  related: BackendEntities,
) {
  return `${entity}-${related}`;
}
