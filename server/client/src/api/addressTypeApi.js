import { getPayload } from './callApi';

class AddressTypeApi {
  static getAllAddressTypes() {
    return getPayload(`${process.env.API_HOST}/api/AddressType`, 'GET', 'Address Type').then(addressTypes => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], addressTypes));
      });
    });
  }

  static getAddressTypeById(addressTypeId) {
    return getPayload(`${process.env.API_HOST}/api/AddressType/${addressTypeId}`, 'GET', 'Address Type')
      .then(addressType => {
      return new Promise((resolve, reject) => {
        resolve(addressType);
      });
    });
  }

  static saveAddressType(addressType) {
    addressType = Object.assign({}, addressType); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minaddressTypeNameLength = 5;
      if (addressType.description.length < minaddressTypeNameLength) {
        reject(`Description must be at least ${minaddressTypeNameLength} characters.`);
      }

      if (addressType.addressTypeId) {
        getPayload(`${process.env.API_HOST}/api/AddressType/${addressType.addressTypeId}`, 'PUT', 'Address Type', addressType)
          .then((addressType) => {
          resolve(addressType);
        });
      } else {
        getPayload(`${process.env.API_HOST}/api/AddressType`, 'POST', 'Address Type', addressType).then((addressType) => {
          resolve(addressType);
        });
      }
    });
  }

  static deleteAddressType(addressType) {
    return new Promise((resolve, reject) => {
      getPayload(`${process.env.API_HOST}/api/AddressType/${addressType.addressTypeId}`, 'PUT', 'Address Type', addressType);
      resolve();
    });
  }
}

export default AddressTypeApi;

