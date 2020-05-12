var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var authMW = require('../../../../middleware/auth/authMW');

describe('authMW middleware ', function() {

    it('should call next if logged in', function(done) {
        const redirectmock = chai.spy();

        const mw = authMW({})
        const reqmock = {session: {belepve: true}};
        const resmock = {redirect: redirectmock};
        const nextmock = chai.spy();
        
        mw( reqmock,resmock, nextmock)

        chai.expect(nextmock).to.have.been.called();
        chai.expect(redirectmock).not.have.been.called();

        done();
    });

    it('should redirect if not logged in', function(done) {

        const redirectmock = chai.spy();

        const mw = authMW({})
        const reqmock = {session: {belepve: false}};
        const resmock = {redirect: redirectmock};
        const nextmock = chai.spy();
        
        mw( reqmock,resmock, nextmock)

        chai.expect(nextmock).to.not.have.been.called();
        chai.expect(redirectmock).to.have.been.called.with.exactly('/login');

        done();
    });

});