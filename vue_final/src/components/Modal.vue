<template>
    <transition name="modalTransition">
        <div class="background">
            <div class="modal">
                <div class="title">
                    <slot name="close">
                        <button class="close" @click="close">&times;</button>
                    </slot>
                    <slot name="title"/>
                </div>
                <div class="body">
                    <slot name="body"/>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'Modal',
        methods: {
            close() {
                this.$emit('close');
            },
        },
    };
</script>

<style scoped>
    .background {
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modal {
        background: #2c3e50;
        width: 50%;
    }

    .title {
        color: #ffffff;
    }

    .body {
        margin-right: 85%;
        color: #ffffff;
        margin-bottom: 10%;
    }

    .close {
        background-color: transparent;
        border: none;
        font-size: 4em;
        cursor: pointer;
        margin-right: 95%;
        margin-top: -2%;
    }

    .close:hover {
        color: red;
    }

    .modalTransition-enter, .modalTransition-leave-active {
        opacity: 0;
    }

    .modalTransition-enter-active, .modalTransition-leave-active {
        transition: .5s;
    }

</style>
