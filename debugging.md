**Questions**

> Open your browser. Open up the Chrome DevTools. Click on the Network tab on the DevTools. Go to your bloc dashboard page. What Request Urls are being used to get your information from the API?

A: The following request URLs are being used to get my information from the API.
https://www.bloc.io/api/v1/enrollment_chains/7282/checkpoints_remaining_in_section
https://www.bloc.io/api/v1/student_checkpoint_submissions/revision_requested?student_id=2382316
https://www.bloc.io/api/v1/users/raimond-fowler/upcoming_sessions?limit=3
https://www.bloc.io/api/v1/enrollment_chains/7282/program_modules/
https://www.bloc.io/api/v1/message_threads/unread_count

> Where can I find the cookies being used on the webpage using the Chrome DevTools?

A: You can find the cookies being used on the webpage in the network tab. Select the URL of the request, then select the cookies tab.

> Where can you execute JavaScript in the DevTools?

A: You can execute JavaScript in the console tab of the DevTools.

> How can you modify existing CSS on your webpage using the DevTools?

A: You can modify existing CSS on your webpage in the Styles section of the Elements tab.

> What happens to code you have modified through the DevTools when you refresh the page?

A: When you refresh the page the code you have modified through the DevTools reverts back to it's original state prior to any modifications.

> What are the different ways you can add breakpoints to your JavaScript for debugging?

A: To add breakpoints to your JavaScript for debugging you can:
Add the debugger statement in your code
Add a Line of Code breakpoint in the DevTools Sources tab
Add a Conditional Line of Code breakpoint in the DevTools Sources tab
Add a DOM change breakpoint in the DevTools Elements tab
Add a XHR breakpoint in the DevTools Sources tab
Add an Event Listener breakpoint in the DevTools Sources tab
Add an Exception breakpoint in the DevTools Sources tab
Add a Function breakpoint using `debug(functionName)`
