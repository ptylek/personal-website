<template>
    <footer class="footer">
        <div class="footer_content">
            <div class="footer_photo">
                <Avatar />
            </div>
            <ContentRendererMarkdown v-if="links" class="footer_links" :value="links" />
        </div>
        <div class="footer_copyright">Copyright {{ currentYear }} Paweł Tylek</div>
    </footer>
</template>

<script setup lang="ts">
const { data:links } = await useAsyncData('links-data', () => queryContent('/_footer-links').findOne())
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    height: 650px;
    background: var(--color-primary);
    color: var(--color-background);
    width: 100%;
}

.footer_content {
    max-width: var(--page-max-width);
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer_photo {
    margin-bottom: 50px;
}

.footer_links {
    font-size: 26px;
    text-align: center;
}

@media screen and (min-width: 768px) {
    .footer {
        height: 450px;
    }

    .footer_content {
        flex-direction: row;
        justify-content: space-between;
    }

    .footer_photo {
        flex-basis: 35%;
        margin-bottom: 0;
    }
    
    .footer_links {
        flex-basis: 65%;
        font-size: 48px;
        text-align: left;
    }
}

.footer_copyright {
    text-align: center;
}
</style>

<style>
.footer_links ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

@media screen and (min-width: 768px) {
    .footer_links ul {
        float: right;
    }
}

.footer_links li {
    margin: 0 0 20px;
}

.footer_links a {
    text-decoration: none;
    box-shadow: inset 0 0 0 0 var(--color-secondary);
    color: var(--color-text-dark);
    padding: 0 .5rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

.footer_links a:hover {
    box-shadow: inset 420px 0 0 0 var(--color-secondary);
    color: var(--color-primary);

}
</style>