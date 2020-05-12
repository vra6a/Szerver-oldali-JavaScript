var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var checkPwMW = require('../../../../middleware/auth/checkPwMW');

describe('checkPwMW middleware ', function() {

    it('should call next if password is undefined', function(done) {

        const redirectmock = chai.spy();

        const mw = checkPwMW({})
        const reqmock = {body: {password: undefined}};
        const resmock = {redirect: redirectmock};
        const nextmock = chai.spy();

        mw( reqmock,resmock, nextmock);

        chai.expect(nextmock).to.have.been.called();

        done();
    });

    it('should call next if password is wrong', function(done) {

        const redirectmock = chai.spy();

        const mw = checkPwMW({})
        const reqmock = {body: {password: 'notadmin'}};
        const resmock = {redirect: redirectmock};
        const nextmock = chai.spy();

        mw( reqmock,resmock, nextmock);

        chai.expect(nextmock).to.have.been.called();

        done();
    });

    it('should redirect if password is right', function(done) {

        const redirectmock = chai.spy();

        const mw = checkPwMW({})
        const reqmock = {body:{password: 'admin'}, session:{save:()=>{redirectmock('/')}}};
        const resmock = {redirect: redirectmock};
        const nextmock = chai.spy();

        mw( reqmock,resmock, nextmock)

        chai.expect(nextmock).to.not.have.been.called();
        chai.expect(redirectmock).to.have.been.called.with.exactly('/');
        chai.expect(reqmock.session.belepve).to.be.true;

        done();
    });


});

