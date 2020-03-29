<template>
    <div class="container" id="app">
        <div class="row">
            <div>
                <h3>The default directive</h3>
                <p v-text="'hello directive'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div>
                <h3>The custom directive</h3>
                <p v-hilight:background.delayed="'red'">
                    Hello custom directive
                </p>
                <p v-hilight:background="'pink'">Hello custom directive</p>
                <p v-hilight="'blue'">Hello custom directive</p>

                <p v-local-hilight:background="'pink'">
                    Hello custom directive
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        'local-hilight': {
            bind(el, binding) {
                let delay = 0;
                if (binding.modifiers['delayed']) {
                    delay = 3000;
                }
                setTimeout(() => {
                    if (binding.arg == 'background') {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                }, delay);
            }
        }
    }
};
</script>

<style></style>
