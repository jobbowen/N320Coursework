<template>
    <div id="app">
        <transition name="fade" enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutUpBig">
            <router-view v-bind:wonderWoman="wonderWoman" v-bind:mIFallout="MIFallout" v-bind:galGadot="galGadot"
                         v-bind:tomCruise="tomCruise"
                         v-bind:theMartian="Martian" v-bind:mattDamon="mattDamon" v-bind:interstellar="Interstellar"
                         v-bind:mattMC="mattMC" v-bind:facts="quickFacts">
            </router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                wonderWoman: [
                    {
                        id: 1,
                        title: 'Wonder Woman',
                        name: 'Gal Gadot',
                        images: {
                            'poster': [
                                {'main': 'https://i.pinimg.com/originals/55/c7/99/55c799e3637ac8da03181c9b4da372d1.jpg'}
                            ],
                            'movieImages': [
                                {'first': 'https://cdn.vox-cdn.com/thumbor/GU-2ctCyvae3DQDz1z0WhWuE600=/0x0:1024x683/1200x800/filters:focal(0x0:1024x683)/cdn.vox-cdn.com/uploads/chorus_image/image/48614541/wonderwoman.0.jpg'},
                                {'second': 'https://image.businessinsider.com/592d8af4b74af426208b4613?width=1100&format=jpeg&auto=webp'},
                                {'third': 'https://laughingsquid.com/wp-content/uploads/2016/02/a-fan-made-teaser-trailer-for-th.jpg'},
                                {'fourth': 'https://m.media-amazon.com/images/M/MV5BMjIyMzkzNTE0N15BMl5BanBnXkFtZTgwMjYzOTA4NDM@._V1_SX1777_CR0,0,1777,999_AL_.jpg'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'release': 'June 2, 2017'},
                                {'rottenTomatoes': '93%'},
                                {'boxOffice': '$821.8 million'}
                            ],
                            'extInfo': [
                                {'description': 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny (google.com).'}
                            ]
                        }
                    }
                ],
                galGadot: [
                    {
                        id: 2,
                        name: 'Gal Gadot',
                        images: {
                            'mainImages': [
                                {'first': 'https://media.glamour.com/photos/59d79b00e71865756e407c23/6:7/w_1998,h_2331,c_limit/gal-gadot-wonder-woman-jimmy-fallon.jpg'},
                                {'second': 'https://thenypost.files.wordpress.com/2019/12/wonder-woman-gal-gadot-1a.jpg?quality=90&strip=all&w=1200'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'dob': 'April 30, 1985'},
                                {'place': 'Petah Tikva, Israel'}
                            ],
                            'extInfo': [
                                {'description': 'Gal Gadot Varsano is an Israeli actress and model. At age 18, she was crowned Miss Israel 2004. She then served two years in the Israel Defense Forces as a combat instructor, and she began studying law and international relations at IDC Herzliya college while building up her modeling and acting careers (wikipedia.com).'}
                            ]
                        }
                    }
                ],
                MIFallout: [
                    {
                        id: 3,
                        title: 'Mission Impossible: Fallout',
                        images: {
                            'poster': [
                                {'main': 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg'}
                            ],
                            'movieImages': [
                                {'first': 'https://pmcvariety.files.wordpress.com/2018/07/mcj-00440ra-pk.jpg?w=1000'},
                                {'second': 'https://image.businessinsider.com/5a77a577dd484a1d008b5036?width=1100&format=jpeg&auto=webp'},
                                {'third': 'https://s25468.pcdn.co/wp-content/uploads/2018/08/MI6-1.jpg'},
                                {'fourth': 'https://www.woodstockvt.com/sites/default/files/styles/hero_x_large/public/media-images/MI%206%20-%20%C2%A9%202018%20Paramount%20Pictures.%20All%20rights%20reserved%20LARGE.jpg?h=afaced13&itok=miw1RlCI'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'release': 'July 27, 2018'},
                                {'rottenTomatoes': '97%'},
                                {'boxOffice': '$791.1 million'}
                            ],
                            'extInfo': [
                                {'description': 'Ethan Hunt and the IMF team join forces with CIA assassin August Walker to prevent a disaster of epic proportions. Arms dealer John Lark and a group of terrorists known as the Apostles plan to use three plutonium cores for a simultaneous nuclear attack on the Vatican, Jerusalem and Mecca, Saudi Arabia. When the weapons go missing, Ethan and his crew find themselves in a desperate race against time to prevent them from falling into the wrong hands. (google.com).'}
                            ]
                        }
                    }
                ],
                tomCruise: [
                    {
                        id: 4,
                        name: 'Tom Cruise',
                        images: {
                            'mainImages': [
                                {'first': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg'},
                                {'second': 'https://cdn.vox-cdn.com/thumbor/O-6Um0Qd4VS_xthF6F7H2az98Qg=/0x0:2700x1800/1200x800/filters:focal(1169x240:1601x672)/cdn.vox-cdn.com/uploads/chorus_image/image/62626121/mi6_c_353e_532.0.jpg'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'dob': 'July 3, 1962'},
                                {'place': 'Syracuse, New York, U.S.'}
                            ],
                            'extInfo': [
                                {'description': 'Tom Cruise is an American actor and film producer. He has received several accolades for his work, including three Golden Globe Awards and nominations for three Academy Awards. Cruise is one of the best-paid actors in the world, and his films have grossed over $4 billion in North America and over $10.1 billion worldwide, making him one of the highest-grossing box-office stars of all time. (wikipedia.com).'}
                            ]
                        }
                    }
                ],
                Martian: [
                    {
                        id: 5,
                        title: 'The Martian',
                        images: {
                            'poster': [
                                {'main': 'https://cdn.shopify.com/s/files/1/1416/8662/products/martian_2015_styleA_intl_original_film_art_2000x.jpg?v=1551891934'}
                            ],
                            'movieImages': [
                                {'first': 'https://cms.qz.com/wp-content/uploads/2015/08/matt-damon-martian.jpg?quality=75&strip=all&w=1600&h=900&crop=1'},
                                {'second': 'https://media.architecturaldigest.com/photos/56ba6b4fd33292707c632cfd/master/w_2174,h_1156,c_limit/martian-movie-set-design-006.jpg'},
                                {'third': 'http://www.dailypublic.com/sites/default/files/2015/Oct/THE%20MARTIAN_0.jpg'},
                                {'fourth': 'https://s3.amazonaws.com/bncore/wp-content/uploads/2015/10/129928.jpg'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'release': 'October 2, 2015'},
                                {'rottenTomatoes': '91%'},
                                {'boxOffice': '$630.2 million'}
                            ],
                            'extInfo': [
                                {'description': 'When astronauts blast off from the planet Mars, they leave behind Mark Watney (Matt Damon), presumed dead after a fierce storm. With only a meager amount of supplies, the stranded visitor must utilize his wits and spirit to find a way to survive on the hostile planet. Meanwhile, back on Earth, members of NASA and a team of international scientists work tirelessly to bring him home, while his crew mates hatch their own plan for a daring rescue mission. (google.com).'}
                            ]
                        }
                    }
                ],
                mattDamon: [
                    {
                        id: 6,
                        name: 'Matt Damon',
                        images: {
                            'mainImages': [
                                {'first': 'https://upload.wikimedia.org/wikipedia/commons/8/83/Matt_Damon_TIFF_2015.jpg'},
                                {'second': 'https://pmcvariety.files.wordpress.com/2019/09/shutterstock_editorial_10230923ad.jpg?w=1000'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'dob': 'October 8, 1970'},
                                {'place': 'Cambridge, MA, U.S.'}
                            ],
                            'extInfo': [
                                {'description': 'Matthew Paige Damon is an American actor, film producer and screenwriter. He is ranked among Forbes magazine\'s most bankable stars and is one of the highest-grossing actors of all time (google.com).'}
                            ]
                        }
                    }
                ],
                Interstellar: [
                    {
                        id: 7,
                        title: 'Interstellar',
                        images: {
                            'poster': [
                                {'main': 'https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_2000x.jpg?v=1574284010'}
                            ],
                            'movieImages': [
                                {'first': 'https://www.indiewire.com/wp-content/uploads/2014/11/interstelllar.black_.hole_.png?w=780'},
                                {'second': 'https://media.npr.org/assets/img/2014/11/07/fl-29933r_wide-1c020f33e73e594b54d28fcd90f09f2ede336c78-s800-c85.jpg'},
                                {'third': 'https://i.ytimg.com/vi/0vxOhd4qlnA/maxresdefault.jpg'},
                                {'fourth': 'https://spacequotations.com/wp-content/uploads/2019/01/interstellar-810x456.jpg'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'release': 'October 26, 2014'},
                                {'rottenTomatoes': '72%'},
                                {'boxOffice': '$677.5 million'}
                            ],
                            'extInfo': [
                                {'description': 'In Earth\'s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth\'s population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind\'s new home.. (google.com).'}
                            ]
                        }
                    }
                ],
                mattMC: [
                    {
                        id: 8,
                        name: 'Matthew McConaughey',
                        images: {
                            'mainImages': [
                                {'first': 'https://www.biography.com/.image/t_share/MTQyNjA5MzczMDc4NzU4NzI3/matthew-mcconaughey-gettyimages-589532902_1600jpg.jpg'},
                                {'second': 'https://timedotcom.files.wordpress.com/2016/08/matthew-mcconaughey-kubo.jpg'}
                            ]
                        },
                        information: {
                            'basicInfo': [
                                {'dob': 'November 4, 1969'},
                                {'place': 'Uvalde, TX, U.S.'}
                            ],
                            'extInfo': [
                                {'description': 'Matthew McConaughey is an American actor and producer. He first gained notice for his supporting performance in the coming-of-age comedy Dazed and Confused, which is considered by many to be the actor\'s breakout role (wikipedia.org).'}
                            ]
                        }
                    }
                ],
                quickFacts: [
                    {
                        id: 9,
                        facts: [
                            {'fact1': 'South Park: Bigger Longer and Uncut only uses the f-word 199 times (nme.com).'},
                            {'fact2': 'The Dark Knight made more money in its first six days in the US than Batman Begins made in its entire domestic run (nme.com).'},
                            {'fact3': 'Despite pulling in over $240m My Big Fat Greek Wedding never once topped the US box office chart (nme.com).'},
                            {'fact4' : 'Steven Spielberg pops up for a cameo in Vanilla Sky wearing a Pre-Crime baseball cap (nme.com).'}
                        ]
                    }
                ]
            }
        },
    }
</script>

<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";

    body {
        background-color: #2c3e50;
        background-image: url("assets/lens.jpg");
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .fade-enter-active, .fade-leave-active {
        transition: ease .25s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .transition {
        position: fixed;
        width: inherit;
    }

    video {
        position: fixed;
        top: 0%;
        left: 0%;
        min-height: 100%;
        min-width: 100%;
        width: auto;
        height: auto;
        z-index: -1;
        overflow: hidden;
    }
</style>
