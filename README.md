# Noisette_TouchOSC-DS100
A simple interface to act as a "side-car" for CL5 mixing console with Soundscape sound object controler. Can be used only with iPad also.

Example of DS100 Module usage.
For latest DS100 OSC module, I've review the example DS100<>TouchOSC noisette also, it is now including also CL/QL>DS100 as another mapping example.

Mapping to CL5 is done only for CHANNEL 1 as proof of concept, but you may easily copy paste the state container and adapt to other channels depending of your application.
If you use another model (CL3, QL1 etc), change the model setting in the CL/QL module accordingly.
The Chatainge CL/QL module used is included in zip file, and differs from official l-r-r distro as it has been modified specifically for this application during a CL5/DS100 workshop.
To install it, unzip and copy the CL/QL module master folder in your ..Chataigne/modules/ folder.
You should just setup the Yammie in surround mode to have channels surround panner parameters sent to DS100 by OSC (ONE WAY ONLY, Yammie>DS100).

WARNING: this version can still self oscillate (feedback with bi directionnal TouchOSC module mappings), if network speed is very slow (when the Rx values feedback from DS100 are received in Chataigne, map back to TouchOSC (usually WIFI speed) AFTER a new values is sent by TouchOSC, the Noisette may oscillate infinitely between those two values).
Work in progress to have autoamtic update rate setting (in the TouchOSC module), now it's manual: you can find this setting in TouchOSC module/Scripts container or the shortcut on DashBoard.

## How to setup ?
1. First install DS100 OSC module (in Files/Community module manager).
2. Next, install CL/QL SCP module (unzip and copy the CL/QL module master folder in your ..Chataigne/modules/ folder).
3. Open the noisette in Chatainge.
4. IP of DS100 device should be setup accordingly in DS100 module OSC output settings.
5. As CL/QL SCP is just sending in broadcast, nothing to set on the console except network mask to be on the same domain (if you want to use CL/QL module the other way around, you should set Chataigne CL/QL module OSC output to the console remote IP).
6. In TouchOSC settings, set the "Connections" OSC IP adress to Chataigne one.
7. The other way around, in Chataigne TouchOSC module, OSC output set it to Ipad IP.

You can add others mappings, to changes parameters like Object ID (to follow channel select on mixing desk), Master level, EnSpace sends ect. to follow mixing desk faders...
Simple example is provided: with CL/QL Yamaha module, it gather "Last Cue" as channel select, "Mono output fader" as DS100 master output level and surround paner channel parameters map to one object (only setup with channel #1, for proof of concept, you can copy paste the State container to add more channels).

Yamaha CL/QL module is based on https://github.com/l-r-r/Yamaha-CLQL-Chataigne-Module, adapted to add last cue, input channels surround panner parameters.
Please check that the Chataigne CL/QL module is using correct console model and IP for its remote port.

For global support on how to use Chataigne and its modules, or this example project, please visit the forum : http://benjamin.kuperberg.fr/chataigne/forum or join me on Discord : https://discord.com/invite/ngnJ5z my contact there is also "madees".
