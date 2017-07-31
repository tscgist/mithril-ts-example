import * as m from 'mithril'
import nav from './nav'

export default {
    view (vnode) {
        return [
            m("nav.navbar.navbar-fixed-top.navbar-dark.bg-primary",
                m(".container",
                    [
                        m("ul.nav.navbar-nav",
                            [
                                m("li.nav-item",
                                    m("a.nav-link[href='#home']",
                                        [
                                            "Home ",
                                            m("span.sr-only",
                                                "(current)"
                                            )
                                        ]
                                    )
                                ),
                                m("li.nav-item",
                                    m("a.nav-link[href='#about']",
                                        "About"
                                    )
                                ),
                                m("li.nav-item",
                                    m("a.nav-link[href='#speakers']",
                                        "Speakers"
                                    )
                                ),
                                m("li.nav-item",
                                    m("a.nav-link[href='#schedule']",
                                        "Schedule"
                                    )
                                )
                            ]
                        ),
                        m("a.navbar-brand.pull-sm-right.m-r-0.hidden-xs-down[href='http://referrals.trhou.se/jasonchan2']", "Presented By Thomas"
                        )
                    ]
                )
            ),
            m(".jumbotron.jumbotron-fluid.bg-info",
                m(".container.text-sm-center.p-t-3",
                    [
                        m("h1.display-2",
                            "Full Stack Conf 2017"
                        ),
                        m("p.lead",
                            "One day conference about everything js."
                        ),
                        m(".btn-group.m-t-2[aria-label='Basic example'][role='group']",
                            [
                                m("button.btn.btn-primary.btn-lg[data-target='#register'][data-toggle='modal'][type='button']",
                                    "Register Now"
                                ),
                                m("a.btn.btn-secondary.btn-lg[href='#speakers']",
                                    "See Speakers"
                                )
                            ]
                        )
                    ]
                )
            ),
            m(".container.p-t-2",
                [
                    m(".row[id='about']",
                        [
                            m(".col-sm-4",
                                [
                                    m("h3.m-b-2",
                                        "About Full Stack Conf"
                                    ),
                                    m("img.m-b-1.img-fluid.img-rounded.hidden-xs-down[alt='PortLand'][src='http://static1.squarespace.com/static/557e58f2e4b071274fc579d1/t/5580e16be4b032e0bb2f1adc/1434509740680/From-Above-Pittock-Mansion-Portland-Oregon.jpg?format=1500w']"),
                                    m("p",
                                        "The beautiful city of Portland, Oregon will be the host city for Full Stack Conf!"
                                    ),
                                    m("p",
                                        "Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to advance your career as a web developer."
                                    )
                                ]
                            ),
                            m(".col-sm-4",
                                [
                                    m("h3.m-b-2",
                                        "Expert Speakers"
                                    ),
                                    m("p",
                                        "Our expert speaker lineup was just announced, so don't wait too long before grabbing your tickets!"
                                    ),
                                    m("p",
                                        "Want to meet the international JavaScript community and share skills with some of the world's top experts, hackers, and makers? Be the first to know what to expect for the future of JavaScript."
                                    ),
                                    m("p",
                                        "Full Stack Conf is committed to being inclusive and welcoming for everyone. We look forward to another intensive day of learning and sharing."
                                    )
                                ]
                            ),
                            m(".col-sm-4",
                                [
                                    m("h3.m-b-2",
                                        "What You'll Learn"
                                    ),
                                    m(".list-group",
                                        [
                                            m("a.list-group-item[href='#']",
                                                [
                                                    m("strong",
                                                        "MongoDB"
                                                    ),
                                                    ": NoSQL database"
                                                ]
                                            ),
                                            m("a.list-group-item[href='#']",
                                                [
                                                    m("strong",
                                                        "Angular"
                                                    ),
                                                    ": JavaScript framework "
                                                ]
                                            ),
                                            m("a.list-group-item[href='#']",
                                                [
                                                    m("strong",
                                                        "Express"
                                                    ),
                                                    ": Framework for Node"
                                                ]
                                            ),
                                            m("a.list-group-item[href='#']",
                                                [
                                                    m("strong",
                                                        "Node.js"
                                                    ),
                                                    ": JavaScript environment"
                                                ]
                                            ),
                                            m("a.list-group-item[href='#']",
                                                [
                                                    m("strong",
                                                        "ES2015"
                                                    ),
                                                    ": Latest version of JavaScript"
                                                ]
                                            ),
                                            m("a.list-group-item[href='#']",
                                                [
                                                    m("strong",
                                                        "Babel"
                                                    ),
                                                    ": JavaScript compiler"
                                                ]
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    m("h1.display-4.text-xs-center.m-y-3.text-muted[id='speakers']",
                        "Speakers"
                    ),
                    m(".row",
                        [
                            m(".col-md-6.col-lg-4",
                                m(".card",
                                    [
                                        m("img.card-img-top.img-fluid[alt='Card image cap'][src='//via.placeholder.com/350x150']"),
                                        m(".card-block",
                                            [
                                                m("h4.card-title",
                                                    "Angie McAngular"
                                                ),
                                                m("p.card-text",
                                                    "Angie is a web developer and teacher who is passionate about building scalable, data driven web apps, especially ones that address old problems with new tech!"
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ),
                            m(".col-md-6.col-lg-4",
                                m(".card",
                                    [
                                        m("img.card-img-top.img-fluid[alt='Card image cap'][src='//via.placeholder.com/350x150']"),
                                        m(".card-block",
                                            [
                                                m("h4.card-title",
                                                    "NodeStradamus"
                                                ),
                                                m("p.card-text",
                                                    "\"NodeStra\" is a software engineer and philosopher trying to leave the world better than he found it. He codes for non-profits, eCommerce, and large-scale web apps."
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ),
                            m(".col-md-6.col-lg-4",
                                m(".card",
                                    [
                                        m("img.card-img-top.img-fluid[alt='Card image cap'][src='//via.placeholder.com/350x150']"),
                                        m(".card-block",
                                            [
                                                m("h4.card-title",
                                                    "Geo \"Lo\" Cation"
                                                ),
                                                m("p.card-text",
                                                    "Geo is a JavaScript developer working on large-scale applications. He's also a teacher who strives to support students in removing all barriers to learning code."
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ),
                            m(".col-md-6.col-lg-4",
                                m(".card",
                                    [
                                        m("img.card-img-top.img-fluid[alt='Card image cap'][src='//via.placeholder.com/350x150']"),
                                        m(".card-block",
                                            [
                                                m("h4.card-title",
                                                    "Ecma Scriptnstuff"
                                                ),
                                                m("p.card-text",
                                                    "Ecma found her passion for computers and programming over 15 years ago. She is excited to introduce people to the wonderful world of JavaScript."
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ),
                            m(".col-md-6.col-lg-4",
                                m(".card",
                                    [
                                        m("img.card-img-top.img-fluid[alt='Card image cap'][src='//via.placeholder.com/350x150']"),
                                        m(".card-block",
                                            [
                                                m("h4.card-title",
                                                    "Jay Query"
                                                ),
                                                m("p.card-text",
                                                    [
                                                        "Jay is a developer, author of CSS: The Missing Manual, JavaScript ",
                                                        m.trust("&amp;"),
                                                        " jQuery: The Missing Manual, and web development teacher."
                                                    ]
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ),
                            m(".col-md-6.col-lg-4",
                                m(".card",
                                    [
                                        m("img.card-img-top.img-fluid[alt='Card image cap'][src='//via.placeholder.com/350x150']"),
                                        m(".card-block",
                                            [
                                                m("h4.card-title",
                                                    "Json Babel"
                                                ),
                                                m("p.card-text",
                                                    "All of his professional life, Json has worked with computers online; he is a polyglot programmer and likes using the right tools for the job."
                                                )
                                            ]
                                        )
                                    ]
                                )
                            )
                        ]
                    ),
                    m("h1.display-4.text-xs-center.m-y-3.text-muted[id='schedule']",
                        "Schedule"
                    ),
                    m("li.list-group-item.list-group-item-success",
                        m("h4.list-group-item-heading",
                            [
                                "Lunch Break ",
                                m("span.label.label-info.label-pill.pull-xs-right",
                                    "12:00am"
                                )
                            ]
                        )
                    ),
                    m("li.list-group-item",
                        m("h4.list-group-item-heading",
                            [
                                "Introducing ES2015 ",
                                m("span.label.label-info.label-pill.pull-xs-right",
                                    "1:00pm"
                                )
                            ]
                        )
                    ),
                    m("li.list-group-item",
                        m("h4.list-group-item-heading",
                            [
                                "Gettin' MEAN ",
                                m("span.label.label-info.label-pill.pull-xs-right",
                                    "2:00pm"
                                )
                            ]
                        )
                    ),
                    m("li.list-group-item",
                        m("h4.list-group-item-heading",
                            [
                                "What's Babel? ",
                                m("span.label.label-info.label-pill.pull-xs-right",
                                    "3:00pm"
                                )
                            ]
                        )
                    ),
                    m("button.btn.btn-info-outline.btn-lg.center-block.m-y-3[data-target='#register'][data-toggle='modal'][type='button']",
                        "Don't miss out, register now"
                    ),
                    m("hr"),
                    m(".row.p-y-2.text-muted",
                        [
                            m(".col-md-6.col-xl-5",
                                [
                                    m("p",
                                        m("strong",
                                            "About Treehouse"
                                        )
                                    ),
                                    m("p",
                                        "Treehouse brings affordable technology education to people everywhere to help them achieve their dreams and change the world."
                                    )
                                ]
                            ),
                            m(".col-md-6.col-xl-5.col-xl-offset-2",
                                [
                                    m("p",
                                        m("strong",
                                            "Stay up-to-date on Full Stack Conf"
                                        )
                                    ),
                                    m(".input-group",
                                        [
                                            m("input.form-control[placeholder='Email'][type='text']"),
                                            m("span.input-group-btn",
                                                m("button.btn.btn-primary[type='button']",
                                                    "Sign up"
                                                )
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    ),
                    m("hr"),
                    m(".row.p-y-1",
                        [
                            m(".col-md-7",
                                m("ul.nav.nav-inline",
                                    [
                                        m("li.nav-item",
                                            m("a.nav-link[href='#']",
                                                "Community"
                                            )
                                        ),
                                        m("li.nav-item",
                                            m("a.nav-link[href='#']",
                                                "Tracks"
                                            )
                                        ),
                                        m("li.nav-item",
                                            m(".btn-group.dropup",
                                                [
                                                    m("button.btn.btn-secondary[type='button']",
                                                        "Other Confs"
                                                    ),
                                                    m("button.btn.btn-secondary.dropdown-toggle[aria-expanded='false'][aria-haspopup='true'][data-toggle='dropdown'][type='button']",
                                                        m("span.sr-only",
                                                            "Toggle Dropdown"
                                                        )
                                                    ),
                                                    m(".dropdown-menu",
                                                        [
                                                            m("a.dropdown-item[href='#']",
                                                                "CSS Conf"
                                                            ),
                                                            m("a.dropdown-item[href='#']",
                                                                "Python Conf"
                                                            ),
                                                            m("a.dropdown-item[href='#']",
                                                                "Java Conf"
                                                            ),
                                                            m("a.dropdown-item[href='#']",
                                                                "Swift Conf"
                                                            )
                                                        ]
                                                    )
                                                ]
                                            )
                                        )
                                    ]
                                )
                            ),
                            m(".col-md-5.text-md-right",
                                m("small",
                                    [
                                        m.trust("&copy;"),
                                        " 2016 Full Stack Conf ",
                                        m.trust("&amp;"),
                                        " Treehouse"
                                    ]
                                )
                            )
                        ]
                    )
                ]
            ),
            m(".modal.fade[id='register']",
                m(".modal-dialog[role='document']",
                    m(".modal-content",
                        [
                            m(".modal-header.bg-info",
                                [
                                    m("button.close[aria-label='Close'][data-dismiss='modal'][type='button']",
                                        m("span[aria-hidden='true']",
                                            m.trust("&times;")
                                        )
                                    ),
                                    m("h4.modal-title",
                                        "Register for full stack conf"
                                    )
                                ]
                            ),
                            m(".modal-body",
                                [
                                    m(".alert.alert-warning.alert-dismissible.fade.in[role='alert']",
                                        [
                                            m("button.close[aria-label='Close'][data-dismiss='alert'][type='button']",
                                                m("span[aria-hidden='true']",
                                                    m.trust("&times;")
                                                )
                                            ),
                                            m("strong",
                                                "Hurry!"
                                            ),
                                            " Early bird registration ends in 2 days.\
                "
                                        ]
                                    ),
                                    m("form[class='']",
                                        [
                                            m("h5.m-b-2",
                                                "Basic Info"
                                            ),
                                            m("fieldset.form-group",
                                                [
                                                    m("label[for='name']",
                                                        "Name:"
                                                    ),
                                                    m("input.form-control[id='name'][type='text']")
                                                ]
                                            ),
                                            m("fieldset.form-group.has-danger",
                                                [
                                                    m("label.form-control-label[for='mail']",
                                                        "Email:"
                                                    ),
                                                    m("input.form-control.form-control-danger[id='mail'][type='email']")
                                                ]
                                            ),
                                            m("fieldset.form-group",
                                                [
                                                    m("label[for='role']",
                                                        "Job Role:"
                                                    ),
                                                    m("select.c-select.form-control[id='role'][name='user_role']",
                                                        [
                                                            m("option[value='full stack js developer']",
                                                                "Full Stack JavaScript Developer"
                                                            ),
                                                            m("option[value='front end developer']",
                                                                "Front End Developer"
                                                            ),
                                                            m("option[value='back end developer']",
                                                                "Back End Developer"
                                                            ),
                                                            m("option[value='designer']",
                                                                "Designer"
                                                            ),
                                                            m("option[value='student']",
                                                                "Student"
                                                            )
                                                        ]
                                                    )
                                                ]
                                            ),
                                            m("hr.m-y-2"),
                                            m("h5.m-b-2",
                                                "Which Topics Interest You Most?"
                                            ),
                                            m(".form-group.c-inputs-stacked",
                                                [
                                                    m("label.c-input.c-checkbox",
                                                        [
                                                            m("input[type='checkbox']"),
                                                            m("span.c-indicator")
                                                        ]
                                                    ),
                                                    m("label.c-input.c-checkbox",
                                                        [
                                                            m("input[type='checkbox']"),
                                                            m("span.c-indicator")
                                                        ]
                                                    ),
                                                    m("label.c-input.c-checkbox",
                                                        [
                                                            m("input[type='checkbox']"),
                                                            m("span.c-indicator")
                                                        ]
                                                    ),
                                                    m("label.c-input.c-checkbox",
                                                        [
                                                            m("input[type='checkbox']"),
                                                            m("span.c-indicator")
                                                        ]
                                                    ),
                                                    m("label.c-input.c-checkbox",
                                                        [
                                                            m("input[type='checkbox']"),
                                                            m("span.c-indicator")
                                                        ]
                                                    )
                                                ]
                                            ),
                                            m("hr.m-b-2"),
                                            m("h5.m-b-2",
                                                "Payment Info"
                                            ),
                                            m(".row",
                                                [
                                                    m(".col-lg-6.form-group.has-success",
                                                        [
                                                            m("label.form-control-label.p-l-0[for='cc-num']",
                                                                "Card Number:"
                                                            ),
                                                            m("input.form-control.form-control-success[id='cc-num'][type='text']")
                                                        ]
                                                    ),
                                                    m(".col-lg-3.form-group",
                                                        [
                                                            m("label[for='zip']",
                                                                "Zip Code:"
                                                            ),
                                                            m("input.form-control[id='zip'][type='text']")
                                                        ]
                                                    ),
                                                    m(".col-lg-3.form-group",
                                                        [
                                                            m("label[for='cvv']",
                                                                "CVV:"
                                                            ),
                                                            m("input.form-control[id='cvv'][type='text']")
                                                        ]
                                                    )
                                                ]
                                            ),
                                            m(".row",
                                                [
                                                    m("label.col-lg-12",
                                                        "Expiration Date:"
                                                    ),
                                                    m(".col-lg-8.form-group",
                                                        m("select.c-select.form-control[id='exp-month']",
                                                            [
                                                                m("option[value='1']",
                                                                    "1 - January"
                                                                ),
                                                                m("option[value='2']",
                                                                    "2 - February"
                                                                ),
                                                                m("option[value='3']",
                                                                    "3 - March"
                                                                ),
                                                                m("option[value='4']",
                                                                    "4 - April"
                                                                ),
                                                                m("option[value='5']",
                                                                    "5 - May"
                                                                ),
                                                                m("option[value='6']",
                                                                    "6 - June"
                                                                ),
                                                                m("option[value='7']",
                                                                    "7 - July"
                                                                ),
                                                                m("option[value='8']",
                                                                    "8 - August"
                                                                ),
                                                                m("option[value='9']",
                                                                    "9 - September"
                                                                ),
                                                                m("option[value='10']",
                                                                    "10 - October"
                                                                ),
                                                                m("option[value='11']",
                                                                    "11 - November"
                                                                ),
                                                                m("option[value='12']",
                                                                    "12 - December"
                                                                )
                                                            ]
                                                        )
                                                    ),
                                                    m(".col-lg-4.form-group",
                                                        m("select.c-select.form-control[id='exp-year']",
                                                            [
                                                                m("option[value='2016']",
                                                                    "2016"
                                                                ),
                                                                m("option[value='2017']",
                                                                    "2017"
                                                                ),
                                                                m("option[value='2018']",
                                                                    "2018"
                                                                ),
                                                                m("option[value='2019']",
                                                                    "2019"
                                                                ),
                                                                m("option[value='2020']",
                                                                    "2020"
                                                                )
                                                            ]
                                                        )
                                                    )
                                                ]
                                            ),
                                            m("hr.m-b-2"),
                                            m("button.btn.btn-primary.btn-lg[type='submit']",
                                                "Register"
                                            )
                                        ]
                                    )
                                ]
                            )
                        ]
                    )
                )
            )
        ]
    }
} as m.Component < {}, {} >
