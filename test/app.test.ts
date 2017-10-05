import 'mocha';
import * as path from 'path';
import * as assert from 'yeoman-assert';
import * as yeoman from 'yeoman-test';
import * as fs from 'fs-extra';

describe('app', () => {
    before((done) => {
        yeoman.run(path.join(__dirname, '../generators/app')).withPrompts({
            name: 'my-test-app'
        }).on('end', done);
    });

    it('creates files', () => {
        assert.file([
            'package.json'
        ]);
    });
});