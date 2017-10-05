import * as chalk from 'chalk';
import * as Generator from 'yeoman-generator';
import * as yosay from 'yosay';

class AppGenerator extends Generator {
    public props: object;

    public prompting() {
        this.log(
            yosay(
                'Welcome to the terrific ' +
                chalk.red('generator-nomatic-web-material') +
                ' generator!'
            )
        );

        const prompts = [
            {
                type: 'confirm',
                name: 'someAnswer',
                message: 'Would you like to enable this option?',
                default: true
            }
        ];

        return this.prompt(prompts).then((props) => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copy(
            this.templatePath('dummyfile.txt'),
            this.destinationPath('dummyfile.txt')
        );
    }

    install() {
        this.installDependencies();
    }
}

module.exports = function (args, options) {
    return new AppGenerator(args, options);
};
