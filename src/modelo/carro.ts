import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Marca } from './marca';

export class Carro {
    public id : number;
    public tipo : string;
    public ano : number;
    public marca : Marca;
}