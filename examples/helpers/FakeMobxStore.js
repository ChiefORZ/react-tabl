import { action, computed, extendObservable, observable } from 'mobx';

import faker from 'faker';

export const SortTypes = {
  ASC: -1,
  DESC: 1,
};

class Model {
  constructor(data) {
    extendObservable(this, data);
  }

  toJSON() {
    return {
      id: this.id,
      avatar: this.avatar,
      city: this.city,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      zipCode: this.zipCode,
      date: this.date,
      bs: this.bs,
      catchPhrase: this.catchPhrase,
      companyName: this.companyName,
      words: this.words,
      sentence: this.sentence,
    };
  }
}

class Store {
  @observable items = [];
  @observable filterValue;
  @observable sortingColumn = 'id';
  @observable sortingDirection = SortTypes.DESC;

  constructor(size) {
    if (size) {
      for (let i = 0; i < size; i++) {
        this.items.push(
          new Model({
            id: i,
            avatar: faker.image.avatar(),
            city: faker.address.city(),
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            street: faker.address.streetName(),
            zipCode: faker.address.zipCode(),
            date: faker.date.past(),
            bs: faker.company.bs(),
            catchPhrase: faker.company.catchPhrase(),
            companyName: faker.company.companyName(),
            words: faker.lorem.words(),
            sentence: faker.lorem.sentence(),
          })
        );
      }
    }
  }

  @computed
  get filteredItems() {
    if (this.filterValue) {
      return this.items.filter(
        item => item.firstName.toLowerCase().indexOf(this.filterValue) !== -1
      );
    }
    return this.items;
  }

  @computed
  get sortedItems() {
    const sortedItems = this.filteredItems.slice();
    sortedItems.sort((a, b) => {
      const keyA = a[this.sortingColumn];
      const keyB = b[this.sortingColumn];
      if (keyA < keyB) {
        return -1 * this.sortingDirection;
      }
      return 1 * this.sortingDirection;
    });
    return sortedItems;
  }

  @action
  filter(value) {
    this.filterValue = value.trim().toLowerCase();
  }

  @action
  sort(columnKey) {
    if (this.sortingColumn === columnKey) {
      this.sortingDirection =
        this.sortingDirection === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
      return;
    }
    this.sortingColumn = columnKey;
    this.sortingDirection = SortTypes.DESC;
  }

  toJSON() {
    return this.filteredItems().map(item => item.toJSON());
  }
}

export default Store;
