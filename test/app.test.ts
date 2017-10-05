import 'mocha';
import * as path from 'path';
import * as assert from 'yeoman-assert';
import * as yeoman from 'yeoman-test';

describe('app', () => {
    before(() => {
        return yeoman.run(path.join(__dirname, '../src/app')).withPrompts({someAnswer: true});
    });

    it('creates files', () => {
        assert.file([
            'dummyfile.txt'
        ]);
    });
});