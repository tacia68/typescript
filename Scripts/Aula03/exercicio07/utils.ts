// utils.ts

function validarTamanhoMinimoCaracteres(minLength: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length < minLength) {
        throw new Error(`O atributo ${key} deve ter no mínimo ${minLength} caracteres.`);
      }
      value = newVal;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export { validarTamanhoMinimoCaracteres };
