export const fruitMixin = {
    data() {
        return {
            filterText: '',
            fruits: ['Banana', 'Apple', 'Mango', 'Melon']
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(element => {
                return element.match(this.filterText);
            });
        }
    },
    created() {
        console.log('Mixin was created');
    }
};
