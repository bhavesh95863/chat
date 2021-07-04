import { ChatBubble, ChatList } from './components';
frappe.provide('frappe.Chat');

frappe.Chat = class {
	constructor() {
		this.setup_app();
	}
	setup_app() {
		this.$app_element = $(document.createElement('div'));
		this.$app_element.addClass('chat-app');
		this.$chat_container = $(document.createElement('div'));
		this.$chat_container.addClass('chat-container');
		$('body').append(this.$app_element);
		this.$chat_container.appendTo(this.$app_element);
		this.is_open = true;
		this.chat_bubble = new ChatBubble(this);
		this.chat_list = new ChatList(this);
	}
	setup_events() {}
};
