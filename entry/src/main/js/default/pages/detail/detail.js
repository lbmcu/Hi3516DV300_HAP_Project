import router from '@system.router';
import device from '@system.device';

export default {
    data: {
        width: 200,
        height: 200,
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

    Pre_Page() {
            router.replace({
                uri: 'pages/index/index',
            });
    },

    Next_PicPage() {
            router.replace({
                uri: 'pages/pic_show/pic_show',
            });
    },

}