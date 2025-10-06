export class BaseEntity{
id!: number;


constructor() {
  }

public  map<T>(data?: Partial<T>) {
    if (!data) return this;

    Object.keys(this).forEach((k) => {
      if ((data as any)[k] !== undefined) {
        (this as any)[k] = (data as any)[k];
      }
    });

    return this;
  }

}
