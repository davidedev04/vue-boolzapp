const { createApp } = Vue;

createApp({

    data() {

        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/man.png',
                    classObject: {
                        active: true,
                    },
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/man(1).png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/man(2).png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Sofia',
                    avatar: 'img/woman.png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Francesca',
                    avatar: 'img/empathy.png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Sei andata a lezione di ballo oggi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, è andato alla grande',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Vittorio',
                    avatar: 'img/user.png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ci facciamo un giro in macchina più tardi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Scusa ma non posso, ho allenamento più tardi',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Marialaura',
                    avatar: 'img/woman(1).png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Oggi ti va di uscire?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, mi piacerebbe molto 😊',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Gloria',
                    avatar: 'img/girl.png',
                    classObject: {
                        active: false,
                    },
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ti serve un passaggio stasera per il ccompleanno?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No tranquillo, mi accompagna mia mamma',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Va bene',
                            status: 'sent'
                        }
                    ],
                },

            ],

            activeContactIndex: 0

        }

    },
    methods: {
        onClick(index) {
            this.contacts.forEach((item, i) => {
                item.classObject.active = i === index;
                this.activeContactIndex = index;
            });
        },
        addMessage() {

        }
    }

}).mount('.content')