<template>
    <div class="logo">
        <a
            class="logo__link"
            href="#"
            rel="noopener norefferer"
        >
            <svg
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 14V0H5.50341C6.55686 0 7.45594 0.189128 8.20062 0.567383C8.94985 0.941081 9.51971 1.47201 9.91022 2.16016C10.3053 2.84375 10.5028 3.64811 10.5028 4.57324C10.5028 5.50293 10.303 6.30273 9.90341 6.97266C9.50382 7.63802 8.92487 8.14844 8.16656 8.50391C7.4128 8.85938 6.5001 9.03711 5.42848 9.03711H1.74365V6.6582H4.9517C5.51476 6.6582 5.98246 6.58073 6.3548 6.42578C6.72714 6.27083 7.00413 6.03841 7.18576 5.72852C7.37193 5.41862 7.46502 5.03353 7.46502 4.57324C7.46502 4.1084 7.37193 3.71647 7.18576 3.39746C7.00413 3.07845 6.72487 2.83691 6.34799 2.67285C5.97565 2.50423 5.50568 2.41992 4.93808 2.41992H2.94923V14H0ZM7.53313 7.62891L11 14H7.74427L4.35232 7.62891H7.53313Z"
                    fill="#111111"
                />
            </svg>
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppLogo extends Vue {}
</script>

<style scoped lang="scss">
    .logo {
        display: inline-flex;
        background-color: $color-primary-white;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        justify-content: center;
        align-items: center;

        @include middle-desktop {
            width: 22px;
            height: 22px;
        }

        @include small-desktop {
            width: 24px;
            height: 24px;
        }

        @include wide-tablet {
            width: 26px;
            height: 26px;
        }

        @include wide-phone {
            width: 28px;
            height: 28px;
        }

        &__link {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
        }
    }
</style>