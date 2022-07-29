import {render, screen} from '@testing-library/react';
import {MockedProvider} from '@apollo/react-testing';
import {fakeItem} from '../lib/testUtils';
import SingleProduct, {GET_PRODUCT_BY_ID} from '../components/SingleProduct.js';
