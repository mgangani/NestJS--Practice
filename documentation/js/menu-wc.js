'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' :
                                            'id="xs-controllers-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' :
                                        'id="xs-injectables-links-module-AppModule-15d0b280cdb8e8c6bc7b4790e4387a43a7f689511aebcd3f5c5f5bbc2f8865a5581afd7db2de0fede00dd3684fe482fe780f6a9785da046480cd147c6724f85f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' :
                                            'id="xs-controllers-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' :
                                        'id="xs-injectables-links-module-AuthModule-c574f1181110417c89c0a10b634979f5254f3c954e391fcf1426278992e9bbd75ecd837d40a17ecb92ad91d4a7ada177b3e74250a3be292786908c67e83940ec"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' :
                                            'id="xs-controllers-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' :
                                        'id="xs-injectables-links-module-PostsModule-abca29bad512ac74abd18212a48bac308b8acf7d4b88624675de651cbd3611f55e1bc872ce41cd567b779c2fe9dce2bd8f38b669a52a859e821e3d60ab5e6580"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' :
                                            'id="xs-controllers-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' :
                                        'id="xs-injectables-links-module-UsersModule-7ae64cbaf25ee7d704ed3f4ac38669c1dec98665b9e53258ae4b41e21f3b79beebb34fd5f524019e76c8feb8e79c966013b287b039915788e084221535bcbceb"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});