import {toast, ToastContent, ToastOptions} from 'react-toastify';

const defaultConfig = {
	position: 'top-right',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: true,
	progress: undefined,
};

export function notifyError(content, options = defaultConfig){
	toast.error( content, options );
}

export function notifySuccess(content, options = defaultConfig){
	toast.success( content, options );
}

export function notifyInfo(content, options = defaultConfig){
	toast.info( content, options );
}
export function clearNotifications(){
	toast.dismiss();
}
