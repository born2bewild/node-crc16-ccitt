declare module "node-crc" {
    /**
     * bits = 16, reflection = false, exp = 0x0000000000000000, ini = 0x0000000000000000, fix = 0x0000000000000000
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc16ccitt(data: Buffer): Buffer | boolean;
}
