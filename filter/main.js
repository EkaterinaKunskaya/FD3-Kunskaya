var FilterBlock = React.createClass({

    displayName: 'FilterBlock',

    propTypes: {
        words: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    },

    getInitialState: function () {
        return {
            isSorted: false,
            filterLetters: '',
            currentWords: this.props.words
        };
    },

    alphabetSort: function (e) {
        this.setState({isSorted: e.target.checked}, this.changeStateCurrentWords);
    },

    wordsFilter: function (e) {
        this.setState({filterLetters: e.target.value}, this.changeStateCurrentWords);
    },

    reset: function () {
        this.setState({isSorted: false, filterLetters: ''}, this.changeStateCurrentWords);
    },

    changeStateCurrentWords: function () {
        var words = this.props.words.slice();

        if (this.state.filterLetters) {
            words = words.filter(value => value.indexOf(this.state.filterLetters) !== -1);
        };
        if (this.state.isSorted) words.sort();

        this.setState({currentWords: words});
    },

    render: function () {

        return React.DOM.div({className: 'FilterBlock'},
            React.DOM.div({className: 'ListController'},
                React.DOM.input({
                    className: 'AlphabeticalSorting',
                    type: 'checkbox',
                    onClick: this.alphabetSort,
                    checked: this.state.isSorted
                }),
                React.DOM.input({
                    className: 'LetterFilter',
                    onChange: this.wordsFilter,
                    value: this.state.filterLetters
                }),
                React.DOM.button({
                    className: 'Reset',
                    onClick: this.reset
                }, 'сброс'),
            ),
            React.DOM.textarea({
                className: 'FilterWords',
                value: this.state.currentWords.join('\n'),
                readOnly: true
            })
        );
    }

});