export function sealed(param: string) {
  return function(target: Function): void {
    console.log(`Sealing the constructor ${param}`);
    Object.seal(target.prototype);
    Object.seal(target);
  };
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    console.log('Creating new instance');
    console.log(`Target name: ${target.name}`);

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
  };

  return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
  return function(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    /* console.log(target);
    console.log(methodName);
    console.log(descriptor); */

    descriptor.writable = isWritable;

    /* console.log(descriptor); */

    return descriptor;
  };
}

export function timeout(ms: number = 0) {
  return function(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  };
}

export function logParameter(target: Object, methodName: string, paramIndex: number) {
  const key = `${methodName}_decor_params_indexes`;

  if (Array.isArray[target[key]]) {
    target[key].push(paramIndex)
  } else {
    target[key] = [paramIndex];
  }
}

export function logMethod(target: Object, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args) {
    const key = `${methodName}_decor_params_indexes`;
    const indexes = target[key];

    if (Array.isArray(indexes)) {
      args.forEach((arg, index) => {
        if (indexes.indexOf(index) !== -1) {
          console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
        }
      });
    }

    const result = originalMethod.apply(this, args);
    return result;
  };
}

function makeProperty<T>(prototype: any, propertyName: string, getTransformer: (value: any) => T, setTransformer: (value: any) => T) {
  const values = new Map<any, T>();
  Object.defineProperty(prototype, propertyName, {
    set(firstValue: any) {
      Object.defineProperty(this, propertyName, {
        get() {
          if (getTransformer) {
            return getTransformer(values.get(this));
          } else {
            values.get(this);
          }
        },
        set(value: any) {
          if (setTransformer) {
            values.set(this, setTransformer(value));
          } else {
            values.set(this, value);
          }
        },
        enumerable: true
      });
      this[propertyName] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}


export function format(prefix: string = '') {
  return function(target: Object, propertyName: string) {
    makeProperty(target, propertyName, value => `${prefix}${value}`, value => value);
  };
}

export function positiveInteger(target: Object, propertyName: string, descriptor: PropertyDescriptor) {
  const originalSet = descriptor.set;

  descriptor.set = function(value: number) {
    if (value < 1 || !Number.isInteger(value)) {
      throw new Error('Invalid value');
    }

    originalSet.call(this, value);
  };

  return descriptor;
}

export function Confirmable(message: string) {
  return function (target: Object, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const allow = confirm(message);

      if (allow) {
        const result = original.apply(this, args);
        return result;
      } else {
        return null;
      }
    };

    return descriptor;
  };
}