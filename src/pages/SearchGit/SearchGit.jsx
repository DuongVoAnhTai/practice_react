import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SearchGit.module.scss';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function SearchGit() {
    const [user, setUser] = useState('');
    const [username, setUserName] = useState('');
    const [searchResult, setSearchResult] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (username) {
            setLoading(true);

            const fetchApi = async () => {
                try {
                    const result = await searchService.search(username);
                    setSearchResult(result);
                    setLoading(false);
                } catch (error) {
                    setSearchResult(null); // Reset kết quả
                    setLoading(false);
                    console.error(error);
                }
            };
            fetchApi();
        }
    }, [username]);

    const handleEnterClick = (e) => {
        if (e.key === 'Enter') {
            setUserName(user);
        }
    };

    const handleInputChange = (e) => {
        setUser(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <input
                className={cx('search')}
                type="text"
                placeholder="Search a Github User"
                onChange={handleInputChange}
                onKeyDown={handleEnterClick}
            />

            {!loading && searchResult && (
                <div className={cx('container')}>
                    <img className={cx('avatar')} src={searchResult.avatar_url} alt="" />

                    <div className={cx('profile')}>
                        <h3 className={cx('username')}>{searchResult.login}</h3>
                        <p className={cx('follow')}>
                            {searchResult.followers} Followers {searchResult.following} Following{' '}
                            {searchResult.public_repos} Repos
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchGit;
