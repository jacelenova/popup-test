import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
    imagesrc: string = '';
    show = false;
    browser = '';

    constructor(private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.setImage(params['logo']);
        });
        
        this.browser = this.detectBrowser();
    }

    goToSecureStatements() {
        this.newWindow('http://securestatements.com.au');
    }

    goToDocuSign() {
        this.newWindow('https://test.1231951919.com.au/');
    }

    newWindow(url) {
        let newWindow = window.open(url);

        setTimeout(() => {
            if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined' || newWindow.outerWidth == 0) {
                // alert('Turn off pop-up blocker and try again.');
                this.show = true;
            }
            else {
                newWindow.focus();
            }
        }, 500);
    }

    setImage(logo) {
        switch (logo) {
            case 'axsess': {
                this.imagesrc = '../assets/axsess.jpg';
                break;
            }
            case 'google': {
                this.imagesrc = '../assets/google.png';
                break;
            }
            case 'yahoo': {
                this.imagesrc = '../assets/yahoo.png';
                break;
            }
            default: {
                this.imagesrc = '../assets/axsess.jpg';
                break;
            }
        }
    }

    warningToggle(show) {
        this.show = show;
    }

    detectBrowser(): string {
        var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    }
}