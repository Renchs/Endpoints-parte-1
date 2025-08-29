import request from "supertest";
import { app } from "../src/index";

describe("Testes dos endpoints -", () => {
    test('deve criar um novo usuário - método POST', async () => {
        const newUser = {
            name: 'Andrea',
            email: 'andrea@email.com',
            password: '123abc'
        };
        const result = await request(app).post('/').send(newUser);
        expect(result.status).toBe(200);
        expect(result.body).toEqual(expect.objectContaining(newUser)
        );
    });

    test('deve buscar usuários - método GET', async () => {
        const result = await request(app).get('/');
        expect(result.status).toBe(200);
        expect(Array.isArray(result.body)).toBe(true);

        const user = result.body[0];
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('password');
        //console.log(user);
    });

    test('deve buscar usuário por id - método GET ID / findById', async () => {
        const result = await request(app).get(`/1`);
        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('id');
        expect(result.body).toHaveProperty('name');
        expect(result.body).toHaveProperty('email');
        expect(result.body).toHaveProperty('password');
    });

    test('deve atualizar usuário por id - método PUT / updateById', async () => {
        const update = {
            name: 'Janete',
            email: 'janetinha@gmail.com',
            password: 'janetinha123'
        };

        const result = await request(app).put(`/1`).send(update);
        expect(result.status).toBe(200);
        expect(result.body.user).toEqual(expect.objectContaining(update));
    });

    test('deve deletar usuário por id - método DELETE / remove', async () => {
        const result = await request(app).delete(`/1`);
        expect(result.status).toBe(200);
        expect(result.body.message).toBe('removido com sucesso!');
    });
})

