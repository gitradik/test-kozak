import React from 'react';
import styles from './SearchField.module.sass';
import PropTypes from 'prop-types';

class SearchField extends React.Component {
    render() {
        const { placeholder, onChange, value, dataAos, dataAosOffset, dataAosDuraction } = this.props;
        return (
            <div className={ styles.searchField } data-aos={dataAos} data-aos-offset={dataAosOffset} data-aos-duraction={dataAosDuraction}>
                <input type="text" value={ value } onChange={ onChange } placeholder={ placeholder }/>
            </div>
        );
    }
}

SearchField.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default SearchField;