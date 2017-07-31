/// <reference types="node"/>
/// <reference types="mocha"/>
/// <reference types="chai"/>
/// <reference types="sinon"/>

import * as sinon from 'sinon';
import {expect} from 'chai';

import {suite, test, slow, timeout, skip, only} from "mocha-typescript";

let spyOn = sinon.spy;

import jsdomify from 'jsdomify';
jsdomify.create('<!DOCTYPE html><html><head></head><body></body></html>'); // Emulates the browser environment


import * as m from 'mithril';
import About from '../../src/components/about';

describe("Components", function() {

    before(function () {

    });

    describe("About's", () => {

        let bout = About.view(m('div'));

        it("tag is a div", () => {
            expect(bout['tag']).to.eq('div');
        });

        it("has three children", () => {
            expect(bout['children'].length).to.eq(3);
        });


        it("first child contains a function", () => {
            typeof expect(bout['children'][0].tag.view).to.be.a('function');
        });

        it("second child is a headline", () => {
            expect(bout['children'][1].tag).to.eq('h1');
        });


        it("third child is a paragraph", () => {
            expect(bout['children'][2].tag).to.eq('p');
        });

    });

    after(function () {
        jsdomify.clear();

    });

});