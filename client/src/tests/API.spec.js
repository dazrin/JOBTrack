import API from '../utils/API';
import axios from 'axios';

jest.mock('axios');

// Code adapted from: https://jestjs.io/docs/mock-functions
describe('Unit-tests for searchJobs()', () => {
    it('Test searchJobs() with Muse API', () => {
        const museJob = [{ timed_out: true }];
        const resp = { data: museJob };
        // use mock'd axios module to return fake data
        axios.get.mockResolvedValue(resp);
        return API.searchJobs('Software Engineer', 'Toronto, Canada', 'li')
            .then(res => {
                const query = `/api/search/muse?category=Software Engineer&location=Toronto, Canada`;
                // Validate URL passed to AXIOS
                expect(axios.get).toHaveBeenCalledWith(
                    query,
                );
                // Check that fake data is returned 
                expect(res.data).toEqual(museJob);
            })
    });
    it('Test searchJobs() with GitHub API', () => {
        const ghJob = [{ id: 'abc-123' }];
        const resp = { data: ghJob };
        // use mock'd axios module to return fake data
        axios.get.mockResolvedValue(resp);
        return API.searchJobs('Developer', 'Toronto', 'gh')
            .then(res => {
                const query = `/api/search?description=Developer&location=Toronto`;
                // Validate URL passed to AXIOS
                expect(axios.get).toHaveBeenCalledWith(
                    query,
                );
                // Check that fake data is returned 
                expect(res.data).toEqual(ghJob);
            })
    });
});