'use strict';
const crc = require('../index');

it('should calculate CRC-16-CCITT(CRC-CCITT)', function() {
    const result = crc(Buffer.from('123456789')).toString('hex');
    expect(result).toEqual('31c3');
});
