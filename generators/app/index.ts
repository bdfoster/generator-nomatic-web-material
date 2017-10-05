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
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ];

        return this.prompt(prompts).then((props) => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('package.tpl.json'),
            this.destinationPath('package.json'),
            this.props
        );
    }

    install() {
        this.installDependencies();
    }
}

module.exports = function (args, options) {
    return new AppGenerator(args, options);
};
