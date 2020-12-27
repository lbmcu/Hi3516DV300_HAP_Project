import device from '@system.device';
import router from '@system.router';
import app from '@system.app';

export default {
    data: {
        title: "HarmonyOS",
        width: 200,
        height: 200,
        flag: false,
    },

    onInit() {
        device.getInfo({
            success: (data)=>{
                this.width = data.windowWidth;
                this.height = data.windowHeight;
                console.log(`Resolution: ${this.width}*${this.height}`);
            }
        });
    },

    Change() {
        if(this.flag == false)
        {
            this.title = '鸿蒙';
        }
        else
        {
            this.title = 'HarmonyOS';
        }

        this.flag = !this.flag;
    },

    Detail_Page() {
        router.replace({
            uri: 'pages/detail/detail',
        });
    },

    Pic_Page() {
        router.replace({
            uri: 'pages/pic_show/pic_show',
        });
    },

    Home_Page() {
        app.terminate();
    },

}
