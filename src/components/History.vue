<template>
    <div id="history">
        <div class="history__banner">
            <div class="history__banner-text"><h1 class=" display-1 text--accent font-weight-black text-center pa-0 ma-0">Regional History</h1></div>
        </div>
        <div class="history__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin ac sem at tristique. Nulla sed rutrum dui. Praesent a ornare orci. In posuere lectus eleifend ante sollicitudin, id ullamcorper massa molestie. Integer ultricies dui at semper dapibus. Suspendisse porttitor odio sed turpis volutpat, at tincidunt augue auctor. Proin dignissim porttitor lacus, sit amet consequat justo eleifend sit amet. Quisque velit justo, lobortis eu est et, fermentum volutpat est. Proin quis finibus lectus. Phasellus dapibus tellus eget dapibus bibendum. Morbi at malesuada mauris. Sed interdum eros nec dignissim vehicula. Sed neque velit, sodales at enim id, laoreet convallis sem. Integer sit amet neque augue.

Mauris gravida ex libero, ac pellentesque orci porta a. Suspendisse varius laoreet aliquet. Fusce viverra lorem ut nibh bibendum consectetur. Cras non erat id augue tincidunt ullamcorper eget vel massa. Ut tortor lacus, semper ut posuere quis, posuere vel nibh. Nulla at metus ut ligula scelerisque scelerisque a non nulla. Nullam bibendum vulputate orci vitae euismod. Suspendisse ac erat at dui bibendum vestibulum.

Mauris aliquet tellus non lacus laoreet ultricies ut a dolor. Etiam pretium dui quis tincidunt vehicula. Suspendisse ornare bibendum consectetur. Aenean tortor nisl, bibendum nec ante eu, faucibus congue massa. Vestibulum malesuada justo sed risus ullamcorper, sit amet laoreet risus auctor. Nam mollis lorem in ante lobortis, in ultrices urna varius. Fusce ac quam dolor. In pharetra erat at venenatis mattis. Vestibulum eu dolor nisl.

Vestibulum diam magna, dictum id nunc nec, ornare sagittis orci. Phasellus tristique porttitor pharetra. Ut aliquam interdum augue et bibendum. Cras sed leo eu massa gravida pulvinar. Quisque velit urna, commodo sed tortor ut, efficitur gravida sem. Sed arcu quam, convallis sed orci condimentum, vehicula maximus lectus. Proin varius neque nec tincidunt vulputate. Donec vitae erat quis massa commodo facilisis dictum cursus mauris. Pellentesque at mauris euismod, luctus est eu, tincidunt mauris. Proin sed euismod odio.

Nam lorem massa, accumsan in neque quis, ullamcorper ultrices dui. Donec scelerisque urna eu libero tristique rutrum. Phasellus diam lectus, ultrices at nulla pellentesque, cursus faucibus massa. Praesent pulvinar semper urna et viverra. Aliquam purus arcu, tempor quis malesuada quis, bibendum vitae quam. Quisque ornare odio vitae nulla consectetur euismod. Suspendisse velit ex, consequat ut gravida eu, porta in ante. Vestibulum arcu ipsum, tempor ut iaculis et, lobortis eget est. Quisque euismod nunc quis ante bibendum, venenatis scelerisque dui rutrum. Etiam quis libero ac leo rutrum venenatis. Donec sit amet mauris ex. Phasellus dignissim, libero sit amet porttitor posuere, ipsum lectus condimentum lorem, a venenatis neque nulla at lectus. In sed libero faucibus, posuere ipsum nec, placerat purus. Donec ut purus velit. Donec in mattis nulla, vitae condimentum turpis.
        </div>
        <div class="history__banner text-center">
            <v-icon :key="i"  v-for="i in 50" class="px-2" color="#E9DEC1">mdi-star</v-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'History',
};
</script>

<style scoped lang="scss">
#history {
    height: 100%;
    background: #E9DEC1;
}
.history {
    &__banner{
        background: #339193;
        border-bottom: double #E9DEC1 15px;
        border-top: double #E9DEC1 15px;
        padding: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
    }
    &__content {
        margin: 1rem 2rem;
        padding: 1rem 2rem;
    }
}
</style>
