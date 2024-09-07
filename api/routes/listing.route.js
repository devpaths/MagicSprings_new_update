import express from 'express';
import { createListing, getListings, getListingById  , deleteListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createListing);
router.get('/get', getListings);
router.get('/:id', getListingById); // New route for fetching a single listing by ID
router.delete('/delete/:id', deleteListing); // New route for fetching a single listing by ID

export default router;
