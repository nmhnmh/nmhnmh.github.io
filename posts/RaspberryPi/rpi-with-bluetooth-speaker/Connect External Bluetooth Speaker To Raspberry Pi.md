---
title: 树莓派连接蓝牙音箱或者耳机
id: raspberry-pi-with-bluetooth-speaker
date: 2018-02-26
---

树莓派本身带有两个音频输出方案：hdmi数字音频输出(可以配合支持hdmi音频的显示器或者转接口使用)和3.5mm耳机接口。现在各种蓝牙耳机和音箱也越来越多，大多数智能音箱也支持蓝牙连接，将树莓派与这些无线音频输出设备进行连接变得流行起来了。本文简单介绍两种方法将蓝牙音箱与树莓派连接的方法。

本文中使用的树莓派版本是 Pi3 Model B V1.2，系统版本是：Raspbian GNU/Linux 9.3 (stretch)。本文使用是Raspbian的lite版本，默认没有图形界面以及多数非必要的软件包。带有图形界面的Raspbian蓝牙应该是可以开箱即用的，无需特殊设置。使用的蓝牙音箱是天猫精灵。

在进行正式的配置之前，有必要简单介绍一下各个软件包的作用和原理。[ALSA(Advanced Linux Sound Architechture)](https://en.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture)是Linux上的主流音频框架，是linux内核的一部分，这是最底层的音频接口，一般只有声卡驱动厂商需要与其对接，普通用户不需要了解这一部分，只要使用即可。后面使用的`aplay`命令就是ALSA相关的包提供的。[Bluez](http://www.bluez.org/)是一个蓝牙协议栈实现，简单说就是linux上所有蓝牙相关的底层功能都是由它提供的，没有他蓝牙就无法工作，Bluez主要提供蓝牙基础设施、和最基本的蓝牙管理工具，后面用到的`bluetoothctl`命令就是Bluez里面提供的，桌面环境下的各种蓝牙图形界面通常是由其它的软件包提供。[PulseAudio](https://www.freedesktop.org/wiki/Software/PulseAudio/)是一个sound server，是目前linux环境下的一个主流高级音频解决方案，与ALSA不同的是，PulseAudio不与底层声卡直接打交道（这是ALSA的工作），他介于音频播放软件(如omxplayer, mplayer等)和ALSA之间，他的功能主要集中在与各种音频播放软件对接、多路音频混合、音频转发（到不同的声卡或者网卡）等，有了它我们就能轻松实现给不同的音频源设置不同的音量，音频流媒体等高级功能。后面使用的`pulseaudio`、`pactl`、`pacmd`等命令都是PulseAudio提供的。

在进行音频播放前，需要通过`bluetoothctl`命令搜索到目标蓝牙音频设备，并与其进行配对连接。

# 连接方案1：Bluez + ALSA

这是一种非常轻量级的方案，需要的安装包数量最少，能满足基本的蓝牙音频播放，但是不建议日常使用。Bluez是linux平台的标准蓝牙协议栈，默认系统已经安装了。ALSA也是Linux下的标准音频输出解决方案，内置于Linux内核之中。按照道理来讲，有了这两者，我们就可以实现蓝牙音频播放了。在Bluez 5之前，我们确实可以直接做到，但是由于Bluez 5之后，取消了直接进行音频输出的支持，所以我们需要一个额外的软件包来将Bluez和ALSA连接起来实现播放。这个软件包就是[bluez-alsa](https://github.com/Arkq/bluez-alsa)。具体命令如下：

```sh
// 下载一个测试音频文件
wget -O example.wav http://www.music.helsinki.fi/tmt/opetus/uusmedia/esim/a2002011001-e02-ulaw.wav
// 安装bluezalsa软件包
sudo apt-get install bluealsa
// 播放音频文件，将DEV=后面的地址改为你的蓝牙音箱的实际MAC地址
aplay -D bluealsa:HCI=hci0,DEV=XX:XX:XX:XX:XX:XX,PROFILE=a2dp example.wav
```

可以通过设置`~/.asoundrc`文件来避免每次播放都需要指定输出设备(其中的device地址需要改成蓝牙音箱真实mac地址)：
```sh
$ cat ~/.asoundrc
defaults.bluealsa.interface "hci0"
defaults.bluealsa.device "XX:XX:XX:XX:XX:XX"
defaults.bluealsa.profile "a2dp"
defaults.bluealsa.delay 10000
```

# 连接方案2：Bluez + PulseAudio

PulseAudio是目前Linux中非常主流的一个音频播放方案，功能完善，被主流的linux发行版所采用。这也是桌面版Raspbian所采用的方案。PulseAudio作为一个Sound Server处于音频播放软件和系统底层音频接口之间，可以实现软件混音、音频转发等各种高级功能。PulseAudio能够识别蓝牙音频设备，并将音频输出导入到其中进行播放。由于Raspbian Lite版本没有默认安装PulseAudio，我们需要手动进行安装：

```sh
sudo apt-get install pulseaudio
sudo apt-get install pulseaudio-module-bluetooth
```

在PulseAudio安装完成后，进行蓝牙连接后，蓝牙音箱会被PulseAudio识别为一个音频输出通道（audio sink)。可以通过以下命令查看确认蓝牙音箱已经被识别：

```
$ pactl list sinks
Sink #1
	State: SUSPENDED
	Name: bluez_sink.AB_12_34_56_78_90.a2dp_sink
	Description: Tmall Genie
	Driver: module-bluez5-device.c
	Sample Specification: s16le 2ch 44100Hz
	Channel Map: front-left,front-right
	Owner Module: 23
	Mute: no
	Volume: front-left: 65536 / 100% / 0.00 dB,   front-right: 65536 / 100% / 0.00 dB
	        balance 0.00
	Base Volume: 65536 / 100% / 0.00 dB
	Monitor Source: bluez_sink.AB_12_34_56_78_90.a2dp_sink.monitor
	Latency: 0 usec, configured 0 usec
	Flags: HARDWARE DECIBEL_VOLUME LATENCY
	Properties:
		bluetooth.protocol = "a2dp_sink"
		device.description = "Tmall Genie"
		device.string = "AB:12:34:56:78:90"
		device.api = "bluez"
		device.class = "sound"
		device.bus = "bluetooth"
		device.form_factor = "speaker"
		bluez.path = "/org/bluez/hci0/dev_AB_12_34_56_78_90"
		bluez.class = "0x2c0414"
		bluez.alias = "我的Tmall Genie"
		device.icon_name = "audio-speakers-bluetooth"
	Ports:
		speaker-output: Speaker (priority: 0)
	Active Port: speaker-output
	Formats:
		pcm
```

此时，蓝牙音频设备已经被识别，但是可能并不是默认的音频输出设备，我们可以手动将其设为默认输出设备：

```
$ pactl set-default-sink bluez_sink.AB_12_34_56_78_90.a2dp_sink
$ pactl info
Server String: /run/user/1000/pulse/native
Library Protocol Version: 32
Server Protocol Version: 32
Is Local: yes
Client Index: 47
Tile Size: 65496
User Name: pi
Host Name: raspberrypi
Server Name: pulseaudio
Server Version: 10.0
Default Sample Specification: s16le 2ch 44100Hz
Default Channel Map: front-left,front-right
Default Sink: bluez_sink.AB_12_34_56_78_90.a2dp_sink
Default Source: alsa_output.platform-soc_audio.analog-stereo.monitor
Cookie: afb6:5bd8
```

如上面所示，此时PulseAudio已经默认使用蓝牙设备作为音频输出，之后便可以播放音频：

```
aplay exmaple.wmv
```

还可以将PulseAudio设置为每次自动切换到新连接的设备上，我们需要在`/etc/pulse/default.pa`中加入以下配置：

```
# automatically switch to newly-connected devices
load-module module-switch-on-connect
```

# 问题调试

蓝牙音频播放如果没有声音，首先第一步确认蓝牙连接已经建立。如果使用PulseAudio，运行`pactl list sinks`来查看蓝牙设备有没有被识别，运行`pactl info`来查看蓝牙设备是否是默认的音频输出设备。`/var/log/syslog`日志文件中也可能会有有用的信息。

当然最重要的还是要理解各个软件包和模块的作用和工作原理，否则还是很难解决可能出现的各种问题。

需要注意的是，上面的方案一和方案二无法同时工作。只能二选一，按照实用性来讲，一般都推荐使用第二种PulseAudio的方法。如果方案一和方案二的软件都同时安装了，则需要设置PulseAudio不使用蓝牙(不加载PulseAudio所有蓝牙相关的模块)，否则将会出现问题。

# 树莓派3 Model B 的蓝牙播放抖动杂音问题

树莓派3 Model B 的板载的蓝牙和Wifi是集成在同一个芯片上的，目前wifi和蓝牙同时工作时会相互影响，尤其是在使用蓝牙播放音频设备时，数据量比较大，开始播放时会出现明显的杂音，之后逐渐消失。目前该问题还没有明确的解决方案。具体信息请见和最新进展请看[这里](https://github.com/raspberrypi/linux/issues/1402)。

针对该问题，目前只能通过禁用wifi功能来可以解决：
```
sudo ifconfig wlan0 down
```
使用外接的独立USB无线网卡也可以解决该问题，或者使用以太网网线进行连接。

# 参考链接

* https://wiki.debian.org/PulseAudio
* https://gavv.github.io/blog/pulseaudio-under-the-hood/
* https://wiki.debian.org/ALSA
* http://www.bluez.org/
* https://github.com/Arkq/bluez-alsa
* https://wiki.debian.org/Bluetooth/Alsa
* https://wiki.archlinux.org/index.php/Bluetooth_headset
* https://wiki.archlinux.org/index.php/bluetooth
