'use strict'

function unescape (str) {
  return (str + '==='.slice((str.length + 3) % 4))
    .replace(/-/g, '+')
    .replace(/_/g, '/')
}

function escape (str) {
  return str.replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

function encode (str, encoding) {
  if (typeof window === 'undefined'){
    return escape(Buffer.from(str, encoding || 'utf8').toString('base64'))
  }
  return escape(btoa(str));
}

function decode (str, encoding) {
  if (typeof window === 'undefined'){
    return Buffer.from(unescape(str), 'base64').toString(encoding || 'utf8')
  }
  return atob(unescape(str));
}


export default {
  unescape,
  escape,
  encode,
  decode,
};
