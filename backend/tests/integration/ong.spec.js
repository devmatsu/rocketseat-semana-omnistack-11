const st = require('supertest');
const app = require('../../src/app.js');
const connection = require('../../src/database/connection.js');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(() => {
        connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await st(app)
          .post('/ongs')
          .send({
            name: "APAD",
            email: "contato@apad.com.br",
            whatsapp: "0123456789",
            city: "Rio do Sul",
            uf: "SC"
          });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});