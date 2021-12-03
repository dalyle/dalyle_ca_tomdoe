/**
 *
 * @since 2021-12-03
 * @author @gsteve3
 */


import {
    ClientFunction,
    Selector,
    t
} from 'testcafe'


fixture `Check Links in the Global Footer`
    // .page `http://localhost:8080/`
    .page `https://www.dalyle.ca/`
    // todo: .meta(...

/**
 * https://stackoverflow.com/questions/44878813/how-to-expect-url-is-redirect-in-testcafe
 *
 */
 const getLocation = ClientFunction(
    () => document.location.href
);

const checkFooterLink = function(text, expectedLocation) {
    test(`Click Footer Link: ${text}`, async t => {

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
        let expectedLocationFinal =
            expectedLocation
            ?? (`${text}`.toLowerCase() + `.com`);

        await t
            .click(
                Selector('footer a')
                .withText(text)
            )
            .expect(
                getLocation()
            ).contains(
                expectedLocation
                ?? (`${text}`.toLowerCase() + `.com`)
            );

            // Pretty sure I was just super dumb 🍺🍻🍕
            /* yes, dumb...bad below
            await t
            .click(
                Selector('footer a')
                .withText(text)
            )
            .expect(
                getLocation(expectedLocation)
            ).contains();
            */
    });
}

checkFooterLink('Twitter');
checkFooterLink('LinkedIn');
checkFooterLink('GitHub');
checkFooterLink('Map', 'https://www.google.com/maps/place/Dalyle+DevOps+Inc./');


// https://www.youtube.com/watch?v=oiIBQRu8fTQ

/*
https://testcafe.io/documentation/402842/guides/advanced-guides/intercept-http-requests

fixture `New Fixture`

test(`New Test`, async t => {

    await t
        .requestHooks(logger)
        ('test', async t => {
            await
                .expect(logger.requests[0].response.statusCode).eql(301); // check _redirects for exact code
        });

});

*/

/*
test('check Twitter', async t => {
    await t
        .click(Selector('footer a').withText('Twitter'))
        .expect(getLocation()).contains('twitter.com');
});
test('check LinkedIn', async t => {
    await t
        .click(Selector('footer a').withText('Twitter'))
        .expect(getLocation()).contains('twitter.com');
});
*/
