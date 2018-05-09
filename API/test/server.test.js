const assert = require('assert');
const expect = require('chai').expect
const express = require('express');
const request = require('supertest');
const {app} = require('../dist/server/server');
const baseUrl = 'http://localhost:5000/api/users'
describe('Return json', function(){


  it('should should return json', function(done){
    request()
    .get({url: baseUrl + '/test'},function(error, response, body){
      expect(response.statusCode).to.equal(200);
      console.log(body);
      done();
    });
  });
});
