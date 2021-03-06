import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    it("should return an array", () => {
      const result = service.getAll();
      expect(result) .toBeInstanceOf(Array); //배열 인스턴스인지 확인
    });
  });

  describe("getOne", () => {
    it("should return a movie", () => {

      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    
    });

    it("should throw 404 error", () => {
      try{
        service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual("Movie with ID 999 not found.");
      }
    });
  });

  describe("deleteOne", () => {
    it("delete a movie", () => {
      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      });
      
      const beforeDelete = service.getAll();
      service.deleteOne(1);
      const afterDelete =  service.getAll();
      
      expect(afterDelete.length).toBeLessThan(beforeDelete.length);

    });

    it("should return a 404", () => {
      try{
        service.deleteOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

    describe("create", () => {
      it("should create a movie", () => {
        const beforeCreate = service.getAll().length;
        service.create({
          title: 'Test Movie',
          year: 2000,
          genres: ['test'],
        });
        const afterCreate = service.getAll().length;
        expect(afterCreate).toBeGreaterThan(beforeCreate);
      })
    })

  });


  describe("update", () => {

    it("shoud be update a movie", () => {
      service.create({
        title: 'Test Movie',
        year: 2000,
        genres: ['test'],
      });
      service.update(1, {
        title: "update test"
      });
      const movie = service.getOne(1);
      expect(movie.title).toEqual("update test");
      
    });

    it("should throw a NotFoundException", () => {
      try{
        service.deleteOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });

  });

});