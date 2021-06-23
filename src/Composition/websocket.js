import { computed, reactive } from "vue";
// import constant from '@/constant'
var socket = null;
var isAllready = false;
socket = new WebSocket(`ws://localhost:8001/`);

/**  隨機用戶碼   */
const genID = (length) => {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

/** 
 * 1 - 連線
 * 2 - 發送訊息
 * 3 - 登出
 */
const FSocketAction = {
    connected: 1,
    send: 2,
    close: 3,
};

/** 狀態表 */
const state = reactive({
    messageList: [],
    errList: [],
    nowMessage: "",
    nowError: "",
    userlist: [],
    genID: computed(() => genID()),
})

/** 初始化連線 */
const socketinit = () => {
    //連線(onopen)
    socket.onopen = function () {
        console.log("websocket connected!!");
        socket.send(JSON.stringify({
            type: FSocketAction.connected,
            id: state.genID,
            msg: ''
        }))
        isAllready = true;
    };

    //監聽訊息(onmessage)
    socket.onmessage = function (xmsg) {
        let msg
        try {
            msg = JSON.parse(xmsg.data)
        } catch (error) {
            msg = xmsg.data
        }

        let mjson, mlist
        switch (msg.type) {
            case 4:
                // 移除自身ID
                mjson = JSON.parse(msg.msg)
                console.log(mjson);
                mlist = mjson.filter((item) => {
                    return item !== state.genID
                })
                state.userlist = mlist
                break;
            case 2:
                if (msg.target === state.genID || msg.source === state.genID || msg.target === 'all') {
                    state.nowMessage = msg.msg
                    state.messageList.push(msg.msg)
                }
                break;
            default:

                break;
        }
        console.log("onmessage", msg);
    };

    //監聽錯誤(onerror)
    socket.onerror = function (err) {
        state.errList.push(err)
        state.nowError = err
        console.log(err);
    };

    socket.onclose = function () {
        console.log(`close`);
        socket.send(JSON.stringify({
            type: FSocketAction.close,
            id: state.genID,
            msg: ''
        }))
        isAllready = false;
    };
};

const clearMsg = () => {
    state.messageList = []
    state.errList = []
    state.nowMessage = ''
    state.nowError = ''
}

const sksend = ({ msg, target }) => {
    if (isAllready) {
        socket.send(JSON.stringify({
            type: FSocketAction.send,
            id: state.genID,
            target,
            msg,
        }))
    }
}

export default {
    state,
    socketinit,
    clearMsg,
    sksend,
};
