cmd_Release/obj.target/crc.node := g++ -shared -pthread -rdynamic -m64  -Wl,-soname=crc.node -o Release/obj.target/crc.node -Wl,--start-group Release/obj.target/crc/src/crc.o -Wl,--end-group 
