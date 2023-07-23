let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let rocks2 = document.getElementById('rocks2');
        let water2 = document.getElementById('water2');
        let Forest4 = document.getElementById('Forest4');
        let header = document.getElementById('header');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;

            text.style.top = 35 + value * -0.1 + '%';
            btn.style.marginTop = value * 1.0 + 'px';
            rocks2.style.top = value * -0.12 + 'px';
            Forest4.style.top = value * 0.25 + 'px';
            /* btn.style.marginTop = value * -1.5 + 'px'; */
        })