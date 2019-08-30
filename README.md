# crc16-ccitt

[![npmjs](https://img.shields.io/npm/v/@wawit/crc16-ccitt)](https://img.shields.io/npm/v/@wawit/crc16-ccitt)
[![CircleCI](https://circleci.com/gh/born2bewild/node-crc16-ccitt.svg?style=svg)](https://circleci.com/gh/born2bewild/node-crc16-ccitt)
[![codecov](https://codecov.io/gh/born2bewild/node-crc16-ccitt/branch/master/graph/badge.svg)](https://codecov.io/gh/born2bewild/node-crc16-ccitt)
[![req](https://img.shields.io/node/v/@wawit/crc16-ccitt)](https://img.shields.io/node/v/@wawit/crc16-ccitt)
[![size](https://img.shields.io/bundlephobia/min/@wawit/crc16-ccitt/0.0.1)](https://img.shields.io/bundlephobia/min/@wawit/crc16-ccitt/0.0.1)
[![license](https://img.shields.io/npm/l/@wawit/crc16-ccitt)](https://img.shields.io/npm/l/@wawit/crc16-ccitt)
[![activity](https://img.shields.io/github/last-commit/born2bewild/node-crc16-ccitt/master)](https://img.shields.io/github/last-commit/born2bewild/node-crc16-ccitt/master)

## Description
CRC-16-CCITT is an error detection scheme that does not impose any additional transmission overhead. This scheme was first employed by IBM in its SDLC data link protocol and is used today in other modern data link protocols such as HDLC, SS7, and ISDN. Like a checksum, the CCITT-CRC does not impose any additional transmission overhead at the character level. It can detect errors in any arbitrary number of bits of data, and its error detection rate is 99.9984 percent, worse case.

Some rather powerful math stands behind the CCITT-CRC. Luckily, one doesn't need to understand the math in order to use the algorithm. The basic idea is to treat the entire message as a binary number, which both the sender and receiver divide using the same divisor. The quotient is discarded, and the remainder is sent as the CRC. If the message is received without error, the receiver's calculation will match the sender's calculation, and the CRC's will agree. The CRC is actually the one's complement of the remainder obtained from modulo 2 division of the message by a generation polynomial.

The CCITT-CRC uses:

![equation](https://latex.codecogs.com/gif.latex?x%5E1%5E6%20&plus;%20x%5E1%5E2%20&plus;%20x%5E5%20&plus;%201)

This description was copied from [AutomationWiki](http://automationwiki.com/index.php/CRC-16-CCITT)

Code is based on [POSNET](https://posnet.com.pl) documentation.
