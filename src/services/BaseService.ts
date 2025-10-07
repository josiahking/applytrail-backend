export abstract class BaseService<T, CreateDto, UpdateDto> {
  abstract create(_data: CreateDto): Promise<T>;
  abstract findAll(): Promise<T[]>;
  abstract findById(_id: string): Promise<T | null>;
  abstract update(_id: string, _data: UpdateDto): Promise<T | null>;
  abstract delete(_id: string): Promise<void>;
}
