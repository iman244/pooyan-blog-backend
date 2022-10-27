'use strict';

/**
 * first-paragraph service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::first-paragraph.first-paragraph');
