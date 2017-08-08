import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
    imagesrc: string = '';
    show = false;

    constructor(private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.setImage(params['logo']);
        })
    }

    goToSecureStatements() {
        this.newWindow('http://securestatements.com.au');
    }

    goToDocuSign() {
        this.newWindow('https://test.1231951919.com.au/');
    }

    newWindow(url) {
        let newWindow = window.open(url);
        setTimeout(function () {
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
            default: {
                this.imagesrc = '../assets/axsess.jpg';
                break;
            }
        }
    }

    warningToggle(show) {
        this.show = show;
    }
}