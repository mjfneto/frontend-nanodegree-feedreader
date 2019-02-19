/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* A test suite that contains specs related to RSS feeds definitions,
     * the allFeeds variable in app.js.
     */
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Tests each feed in the allFeeds object
         * and ensures it has a URL defined and
         * that the URL is not empty.
         */
        it('have URLs defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* Tests each feed in the allFeeds object
        * and ensures it has a name property defined
        * and that the URL is not empty.
        */
        it('have names defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* A test suite that contains specs related to the menu feature. */
    describe('The menu', function () {
        const body = $('body')[0];

        /* Tests the menu element to ensure that it is hidden by default.*/
        it('is hidden on load', function () {
            expect(body).toHaveClass('menu-hidden');
        });

        /* Tests the 'body' to ensure that it has menu-hidden class when the menu
         * icon is clicked, and that it doesn't when the icon is clicked again.*/
        it('is displayed when clicked and hidden when clicked again', function () {
            $('.menu-icon-link').trigger('click');
            expect(body).not.toHaveClass('menu-hidden');
            $('.menu-icon-link').trigger('click');
            expect(body).toHaveClass('menu-hidden');
        });
    });

    /* A test suite that contains specs related to the entries
     * loaded after http requests.
     */
    describe('Initial entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* Spec that tests asynchronous loadFeed function
        * to ensure that when it is called and completes its work,
        * there is at least a single .entry element within the
        * .feed container.
        */
        it('contains at least one entry', function (done) {
            let entries = $('.feed').find('.entry');
            expect(entries.length).toBeGreaterThanOrEqual(1);
            done();
        });
    });

    /* A test suite that contains specs related to the entries
    * loaded after the first http request.
    */
    describe('New Feed Selection', function () {

        /* A spec that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let initialFeed;
        let newFeed;

        beforeEach(function (done) {
            loadFeed(0, function () {
                initialFeed = $('.header').html();
                loadFeed(1, function () {
                    newFeed = $('.header').html();
                    done();
                });
            });
        });

        it('is loaded', function (done) {
            expect(newFeed).not.toEqual(initialFeed);
            done();
        });
    });
}());
