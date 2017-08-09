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
    html5Support = true;
    dlLink = '';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.setImage(params['logo']);
        });
        
        this.html5Support = this.detectHTML5Support();
        this.browser = this.detectBrowser();
        this.dlLink = this.getDownloadLink();
    }

    goToSecureStatements(): void {
        this.newWindow('http://securestatements.com.au');
    }

    goToDocuSign(): void {
        this.newWindow('https://test.1231951919.com.au/');
    }

    newWindow(url): void {
        let newWindow = window.open(url);

        setTimeout(() => {
            if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined' || newWindow.outerWidth == 0) {
                // alert('Turn off pop-up blocker and try again.');
                if (!this.browser.includes('IE')) {
                    this.show = true;
                } 
            }
            else {
                newWindow.focus();
            }
        }, 500);
    }

    setImage(logo): void {
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

    warningToggle(show): void {
        this.show = show;
    }

    detectBrowser(): string {
        let ua= navigator.userAgent, tem,
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

    detectHTML5Support(): boolean {
        const elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

    getDownloadLink(): string {
        const browser = this.detectBrowser();
        if (browser.includes('Chrome')) {
            return 'https://www.google.com/chrome/browser/desktop/index.html';
        } else if (browser.includes('Edge')) {
            return 'https://www.microsoft.com/en-ph/windows/microsoft-edge';
        } else if (browser.includes('Opera')) {
            return 'http://www.opera.com/download';
        } else if (browser.includes('Firefox')) {
            return 'https://www.mozilla.org/en-US/firefox';
        } else if (browser.includes('IE')) {
            return 
        }

        return 'https://www.google.com/chrome/browser/desktop/index.html';
    }
}