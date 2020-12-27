import device from '@system.device';
import router from '@system.router';

var time = 0;

export default {
    data: {
        width: 200,
        height: 200,
        Image: '/common/sky.png'
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

    Detail_Page() {
        router.replace({
            uri: 'pages/detail/detail',
        });
    },

    touchcancel: function(){
        if(time > 4)
        {
            router.replace({
                uri: '/',
            });
        }
        switch(time)
        {
             case 0:
                this.Image = '/common/sky.png';
                break;

            case 1:
                this.Image = '/common/aaa.png';
            break;

            case 2:
                this.Image = '/common/bbb.png';
            break;

            case 3:
                this.Image = '/common/ccc.png';
            break;

            case 4:
                this.Image = '/common/ddd.png';
            break;
        }
        time++;

    },

    Pic_show(e) {

        if(time > 4)
        {
            router.replace({
                uri: '/',
            });
        }
        else if(time < 0)
        {
            router.replace({
                uri: 'pages/detail/detail',
            });
        }

        switch(time)
        {
            case 0:
                this.Image = '/common/sky.png';
            break;

            case 1:
                this.Image = '/common/aaa.png';
            break;

            case 2:
                this.Image = '/common/bbb.png';
            break;

            case 3:
                this.Image = '/common/ccc.png';
            break;

            case 4:
                this.Image = '/common/ddd.png';
            break;
        }

        switch(e.direction)
        {
            case 'left':
                time--;
            break;

            case 'right':
                time++;
            break;

            case 'up':
                time--;
            break;

            case 'down':
                time++;
            break;
        }

    },
}
