/**
 * Created by nancyli on 9/10/17.
 */


var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

module.exports = function(app) {
    app.use((req, res, next) => {
        const location = createLocation(req.path);

        // Note that req.url here should be the full URL path from
        // the original request, including the query string.
        ReactRouter.match({
            routes: ( {
                    path: '/',
                    component: require('./../../client/components/Home'),
                    childRoutes: [
                        {
                            path: '/login',
                            component: require('./../../client/components/LoginBox')
                        }
                    ]

                }
            ),
            location
        }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message);
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            } else if (renderProps) {
                // renderWithData(req,res, renderProps);
                var generated = ReactDOMServer.renderToString(<ReactRouter.RouterContext {
                                                                   ...renderProps
                                                               } />);
                res.render('./../../client/index', {reactOutput: generated});

            } else {
                next();
            }
        })
    })
};
