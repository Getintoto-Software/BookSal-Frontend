<template>
    <div class="regular-bookings-page">
        <div class="page-header">
            <div class="header-content">
                <h1>Regular Bookings</h1>
                <p>Set up recurring bookings for teams and regular customers</p>
            </div>
        </div>

        <div class="container">
            <!-- Form and Calendar Layout -->
            <div class="content-layout">
                <!-- Booking Form -->
                <div class="booking-form-container">
                    <div class="form-card">
                        <h2 class="form-title">Add Regular Booking</h2>

                        <!-- Customer Information -->
                        <div class="form-section">
                            <h3 class="section-title">Customer Information</h3>

                            <div class="form-group">
                                <label for="customerName">Customer Name*</label>
                                <input id="customerName" v-model="formData.customerName" type="text" class="form-input"
                                    :class="{ 'error': errors.customerName }" placeholder="Enter customer name" />
                                <p v-if="errors.customerName" class="error-message">{{ errors.customerName }}</p>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="customerPhone">Phone Number*</label>
                                    <input id="customerPhone" v-model="formData.customerPhone" type="text"
                                        class="form-input" :class="{ 'error': errors.customerPhone }"
                                        placeholder="Enter phone number" />
                                    <p v-if="errors.customerPhone" class="error-message">{{ errors.customerPhone }}</p>
                                </div>

                                <div class="form-group">
                                    <label for="customerEmail">Email</label>
                                    <input id="customerEmail" v-model="formData.customerEmail" type="email"
                                        class="form-input" :class="{ 'error': errors.customerEmail }"
                                        placeholder="Enter email address" />
                                    <p v-if="errors.customerEmail" class="error-message">{{ errors.customerEmail }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Booking Schedule -->
                        <div class="form-section">
                            <h3 class="section-title">Booking Schedule</h3>

                            <div class="form-group">
                                <label>Days of Week*</label>
                                <div class="days-selector">
                                    <div v-for="day in weekdays" :key="day.value" class="day-option"
                                        :class="{ 'selected': formData.selectedDays.includes(day.value) }"
                                        @click="toggleDay(day.value)">
                                        <span class="day-abbr">{{ day.abbr }}</span>
                                        <span class="day-name">{{ day.name }}</span>
                                    </div>
                                </div>
                                <p v-if="errors.selectedDays" class="error-message">{{ errors.selectedDays }}</p>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="startTime">Start Time*</label>
                                    <select id="startTime" v-model="formData.startTime" class="form-input"
                                        :class="{ 'error': errors.startTime }">
                                        <option value="">Select time</option>
                                        <option v-for="time in timeSlots" :key="time" :value="time">{{ time }}</option>
                                    </select>
                                    <p v-if="errors.startTime" class="error-message">{{ errors.startTime }}</p>
                                </div>

                                <div class="form-group">
                                    <label for="duration">Duration*</label>
                                    <select id="duration" v-model="formData.duration" class="form-input"
                                        :class="{ 'error': errors.duration }">
                                        <option value="">Select duration</option>
                                        <option value="1">1 hour</option>
                                        <option value="1.5">1.5 hours</option>
                                        <option value="2">2 hours</option>
                                        <option value="2.5">2.5 hours</option>
                                        <option value="3">3 hours</option>
                                    </select>
                                    <p v-if="errors.duration" class="error-message">{{ errors.duration }}</p>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label for="startDate">Start Date*</label>
                                    <input id="startDate" v-model="formData.startDate" type="date" class="form-input"
                                        :class="{ 'error': errors.startDate }" :min="today" />
                                    <p v-if="errors.startDate" class="error-message">{{ errors.startDate }}</p>
                                </div>

                                <div class="form-group">
                                    <label for="endDate">End Date*</label>
                                    <input id="endDate" v-model="formData.endDate" type="date" class="form-input"
                                        :class="{ 'error': errors.endDate }" :min="formData.startDate || today" />
                                    <p v-if="errors.endDate" class="error-message">{{ errors.endDate }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Court Selection -->
                        <div class="form-section">
                            <h3 class="section-title">Court Selection</h3>

                            <div class="form-group">
                                <label for="court">Select Court*</label>
                                <select id="court" v-model="formData.court" class="form-input"
                                    :class="{ 'error': errors.court }">
                                    <option value="">Select a court</option>
                                    <option v-for="court in courts" :key="court.id" :value="court.id">
                                        {{ court.name }} - {{ court.type }}
                                    </option>
                                </select>
                                <p v-if="errors.court" class="error-message">{{ errors.court }}</p>
                            </div>
                        </div>

                        <!-- Pricing -->
                        <div class="form-section">
                            <h3 class="section-title">Pricing</h3>

                            <div class="pricing-info">
                                <div class="price-row">
                                    <span>Standard Rate:</span>
                                    <span>NPR {{ standardRate }} per hour</span>
                                </div>

                                <div class="price-row">
                                    <span>Duration:</span>
                                    <span>{{ formData.duration || 0 }} hours</span>
                                </div>

                                <div class="price-row">
                                    <span>Weekly Sessions:</span>
                                    <span>{{ formData.selectedDays.length }}</span>
                                </div>

                                <div class="price-row">
                                    <span>Total Weeks:</span>
                                    <span>{{ totalWeeks }}</span>
                                </div>

                                <div class="price-row total">
                                    <span>Total Amount:</span>
                                    <span>NPR {{ totalAmount }}</span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="checkbox-group">
                                    <input id="customPrice" type="checkbox" v-model="formData.hasCustomPrice" />
                                    <label for="customPrice">Set custom price for regular customer</label>
                                </div>
                            </div>

                            <div v-if="formData.hasCustomPrice" class="form-group">
                                <label for="customPriceValue">Custom Price (per session)*</label>
                                <div class="input-with-prefix">
                                    <span class="input-prefix">NPR</span>
                                    <input id="customPriceValue" v-model="formData.customPrice" type="number"
                                        class="form-input with-prefix" :class="{ 'error': errors.customPrice }"
                                        placeholder="Enter custom price" />
                                </div>
                                <p v-if="errors.customPrice" class="error-message">{{ errors.customPrice }}</p>
                            </div>

                            <div class="form-group">
                                <div class="checkbox-group">
                                    <input id="paymentReceived" type="checkbox" v-model="formData.paymentReceived" />
                                    <label for="paymentReceived">Payment received for first session</label>
                                </div>
                            </div>
                        </div>

                        <!-- Additional Notes -->
                        <div class="form-section">
                            <h3 class="section-title">Additional Notes</h3>

                            <div class="form-group">
                                <textarea v-model="formData.notes" class="form-textarea"
                                    placeholder="Add any special requirements or notes about this booking"
                                    rows="3"></textarea>
                            </div>
                        </div>

                        <!-- Form Actions -->
                        <div class="form-actions">
                            <button type="button" class="btn-secondary" @click="resetForm">
                                Reset
                            </button>
                            <button type="button" class="btn-primary" @click="previewBooking" :disabled="isSubmitting">
                                {{ isSubmitting ? 'Processing...' : 'Preview & Save' }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Schedule Preview -->
                <div class="schedule-preview-container">
                    <div class="preview-card">
                        <h2 class="preview-title">Weekly Schedule</h2>

                        <div class="schedule-grid">
                            <div class="time-column">
                                <div class="time-header">Time</div>
                                <div v-for="time in displayTimeSlots" :key="time" class="time-slot">
                                    {{ time }}
                                </div>
                            </div>

                            <div v-for="day in weekdays" :key="day.value" class="day-column">
                                <div class="day-header">{{ day.abbr }}</div>
                                <div v-for="(time, index) in displayTimeSlots" :key="`${day.value}-${time}`"
                                    class="schedule-cell" :class="getCellClass(day.value, time)">
                                    <span v-if="getBookingInfo(day.value, time)" class="booking-info">
                                        {{ getBookingInfo(day.value, time) }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="legend">
                            <div class="legend-item">
                                <div class="legend-color available"></div>
                                <span>Available</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color booked"></div>
                                <span>Booked</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color selected"></div>
                                <span>Selected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Preview Modal -->
        <div v-if="showPreviewModal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Booking Preview</h3>
                    <button class="close-button" @click="showPreviewModal = false">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="preview-section">
                        <h4>Customer</h4>
                        <p><strong>{{ formData.customerName }}</strong></p>
                        <p>{{ formData.customerPhone }}</p>
                        <p v-if="formData.customerEmail">{{ formData.customerEmail }}</p>
                    </div>

                    <div class="preview-section">
                        <h4>Booking Details</h4>
                        <p>
                            <strong>Court:</strong>
                            {{ getCourtName(formData.court) }}
                        </p>
                        <p>
                            <strong>Time:</strong>
                            {{ formData.startTime }} ({{ formData.duration }} hours)
                        </p>
                        <p>
                            <strong>Days:</strong>
                            {{ getSelectedDaysText() }}
                        </p>
                        <p>
                            <strong>Period:</strong>
                            {{ formatDate(formData.startDate) }} to {{ formatDate(formData.endDate) }}
                        </p>
                    </div>

                    <div class="preview-section">
                        <h4>Recurring Dates</h4>
                        <div class="dates-grid">
                            <div v-for="(date, index) in recurringDates" :key="index" class="date-item">
                                <span class="date-number">{{ index + 1 }}</span>
                                <span class="date-text">{{ formatDate(date) }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="preview-section">
                        <h4>Payment</h4>
                        <p>
                            <strong>Price per session:</strong>
                            NPR {{ formData.hasCustomPrice ? formData.customPrice : standardRate * formData.duration }}
                        </p>
                        <p>
                            <strong>Total sessions:</strong>
                            {{ recurringDates.length }}
                        </p>
                        <p>
                            <strong>Total amount:</strong>
                            NPR {{ finalTotalAmount }}
                        </p>
                        <p>
                            <strong>Payment status:</strong>
                            {{ formData.paymentReceived ? 'First session paid' : 'Pending' }}
                        </p>
                    </div>

                    <div v-if="formData.notes" class="preview-section">
                        <h4>Notes</h4>
                        <p>{{ formData.notes }}</p>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn-secondary" @click="showPreviewModal = false">
                        Edit
                    </button>
                    <button class="btn-primary" @click="saveBooking" :disabled="isSaving">
                        {{ isSaving ? 'Saving...' : 'Confirm & Save' }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Success Modal -->
        <div v-if="showSuccessModal" class="modal-overlay">
            <div class="modal-content success-modal">
                <div class="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>

                <h3>Regular Booking Created!</h3>
                <p>The regular booking for {{ formData.customerName }} has been successfully created.</p>

                <div class="success-actions">
                    <button class="btn-secondary" @click="resetAndClose">
                        Add Another Booking
                    </button>
                    <button class="btn-primary" @click="viewAllBookings">
                        View All Bookings
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const formData = reactive({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    selectedDays: [],
    startTime: '',
    duration: '',
    startDate: '',
    endDate: '',
    court: '',
    hasCustomPrice: false,
    customPrice: '',
    paymentReceived: false,
    notes: ''
});

// UI state
const errors = reactive({});
const isSubmitting = ref(false);
const isSaving = ref(false);
const showPreviewModal = ref(false);
const showSuccessModal = ref(false);

// Constants and options
const weekdays = [
    { name: 'Sunday', abbr: 'Sun', value: 0 },
    { name: 'Monday', abbr: 'Mon', value: 1 },
    { name: 'Tuesday', abbr: 'Tue', value: 2 },
    { name: 'Wednesday', abbr: 'Wed', value: 3 },
    { name: 'Thursday', abbr: 'Thu', value: 4 },
    { name: 'Friday', abbr: 'Fri', value: 5 },
    { name: 'Saturday', abbr: 'Sat', value: 6 }
];

const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
];

const displayTimeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
];

const courts = [
    { id: 'court1', name: 'Court A', type: '5-a-side Indoor' },
    { id: 'court2', name: 'Court B', type: '5-a-side Outdoor' },
    { id: 'court3', name: 'Court C', type: '7-a-side Outdoor' }
];

// Sample existing bookings data (in a real app, this would come from an API)
const existingBookings = [
    { day: 1, startTime: '7:00 PM', endTime: '9:00 PM', court: 'court1', customer: 'Team Alpha' },
    { day: 3, startTime: '6:00 PM', endTime: '7:00 PM', court: 'court2', customer: 'Team Beta' },
    { day: 5, startTime: '8:00 PM', endTime: '10:00 PM', court: 'court1', customer: 'Team Gamma' },
    { day: 0, startTime: '9:00 AM', endTime: '11:00 AM', court: 'court3', customer: 'Sunday League' }
];

// Computed properties
const today = computed(() => {
    const now = new Date();
    return now.toISOString().split('T')[0];
});

const standardRate = computed(() => {
    // In a real app, this might depend on the court, time of day, etc.
    if (!formData.court) return 0;

    const court = courts.find(c => c.id === formData.court);
    if (!court) return 0;

    // Different rates for different courts
    switch (court.id) {
        case 'court1': return 1500;
        case 'court2': return 1800;
        case 'court3': return 2000;
        default: return 1500;
    }
});

const totalWeeks = computed(() => {
    if (!formData.startDate || !formData.endDate) return 0;

    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return Math.ceil((diffDays + 1) / 7);
});

const totalAmount = computed(() => {
    if (!formData.duration || formData.selectedDays.length === 0 || !totalWeeks.value) return 0;

    const sessionPrice = formData.hasCustomPrice && formData.customPrice
        ? parseFloat(formData.customPrice)
        : standardRate.value * parseFloat(formData.duration);

    return sessionPrice * formData.selectedDays.length * totalWeeks.value;
});

const finalTotalAmount = computed(() => {
    if (!formData.duration || formData.selectedDays.length === 0) return 0;

    const sessionPrice = formData.hasCustomPrice && formData.customPrice
        ? parseFloat(formData.customPrice)
        : standardRate.value * parseFloat(formData.duration);

    return sessionPrice * recurringDates.value.length;
});

const recurringDates = computed(() => {
    if (!formData.startDate || !formData.endDate || formData.selectedDays.length === 0) return [];

    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const dates = [];

    const current = new Date(start);

    while (current <= end) {
        const dayOfWeek = current.getDay();

        if (formData.selectedDays.includes(dayOfWeek)) {
            dates.push(new Date(current));
        }

        // Move to next day
        current.setDate(current.getDate() + 1);
    }

    return dates;
});

// Methods
const toggleDay = (day) => {
    const index = formData.selectedDays.indexOf(day);
    if (index === -1) {
        formData.selectedDays.push(day);
    } else {
        formData.selectedDays.splice(index, 1);
    }
};

const getCellClass = (day, time) => {
    // Check if this cell is part of the user's selection
    if (formData.selectedDays.includes(day) &&
        formData.startTime === time &&
        formData.duration) {
        return 'selected';
    }

    // Check if this cell is already booked
    const isBooked = existingBookings.some(booking => {
        if (booking.day !== day) return false;

        const bookingStartIndex = timeSlots.indexOf(booking.startTime);
        const bookingEndIndex = timeSlots.indexOf(booking.endTime);
        const cellIndex = timeSlots.indexOf(time);

        return cellIndex >= bookingStartIndex && cellIndex < bookingEndIndex;
    });

    return isBooked ? 'booked' : 'available';
};

const getBookingInfo = (day, time) => {
    // Find if there's a booking at this day and time
    const booking = existingBookings.find(booking => {
        if (booking.day !== day) return false;

        const bookingStartIndex = timeSlots.indexOf(booking.startTime);
        const cellIndex = timeSlots.indexOf(time);

        return cellIndex === bookingStartIndex;
    });

    return booking ? booking.customer : '';
};

const getCourtName = (courtId) => {
    const court = courts.find(c => c.id === courtId);
    return court ? `${court.name} - ${court.type}` : '';
};

const getSelectedDaysText = () => {
    return formData.selectedDays
        .map(day => weekdays.find(d => d.value === day).name)
        .join(', ');
};

const formatDate = (date) => {
    if (!date) return '';

    if (typeof date === 'string') {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    }

    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
};

const validateForm = () => {
    errors.customerName = '';
    errors.customerPhone = '';
    errors.customerEmail = '';
    errors.selectedDays = '';
    errors.startTime = '';
    errors.duration = '';
    errors.startDate = '';
    errors.endDate = '';
    errors.court = '';
    errors.customPrice = '';

    let isValid = true;

    // Validate customer information
    if (!formData.customerName) {
        errors.customerName = 'Customer name is required';
        isValid = false;
    }

    if (!formData.customerPhone) {
        errors.customerPhone = 'Phone number is required';
        isValid = false;
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.customerPhone)) {
        errors.customerPhone = 'Please enter a valid phone number';
        isValid = false;
    }

    if (formData.customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
        errors.customerEmail = 'Please enter a valid email address';
        isValid = false;
    }

    // Validate booking schedule
    if (formData.selectedDays.length === 0) {
        errors.selectedDays = 'Please select at least one day';
        isValid = false;
    }

    if (!formData.startTime) {
        errors.startTime = 'Start time is required';
        isValid = false;
    }

    if (!formData.duration) {
        errors.duration = 'Duration is required';
        isValid = false;
    }

    if (!formData.startDate) {
        errors.startDate = 'Start date is required';
        isValid = false;
    }

    if (!formData.endDate) {
        errors.endDate = 'End date is required';
        isValid = false;
    } else if (formData.startDate && formData.endDate < formData.startDate) {
        errors.endDate = 'End date must be after start date';
        isValid = false;
    }

    // Validate court selection
    if (!formData.court) {
        errors.court = 'Please select a court';
        isValid = false;
    }

    // Validate custom price if enabled
    if (formData.hasCustomPrice && (!formData.customPrice || parseFloat(formData.customPrice) <= 0)) {
        errors.customPrice = 'Please enter a valid custom price';
        isValid = false;
    }

    return isValid;
};

const previewBooking = () => {
    if (!validateForm()) {
        // Scroll to the first error
        const firstErrorElement = document.querySelector('.error-message');
        if (firstErrorElement) {
            firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    showPreviewModal.value = true;
};

const saveBooking = () => {
    isSaving.value = true;

    // In a real app, you would send data to your API
    setTimeout(() => {
        isSaving.value = false;
        showPreviewModal.value = false;
        showSuccessModal.value = true;
    }, 1500);
};

const resetForm = () => {
    Object.keys(formData).forEach(key => {
        if (Array.isArray(formData[key])) {
            formData[key] = [];
        } else if (typeof formData[key] === 'boolean') {
            formData[key] = false;
        } else {
            formData[key] = '';
        }
    });

    Object.keys(errors).forEach(key => {
        errors[key] = '';
    });
};

const resetAndClose = () => {
    resetForm();
    showSuccessModal.value = false;
};

const viewAllBookings = () => {
    // Navigate to the bookings management page
    router.push('/admin/bookings');
};

// Initialize
onMounted(() => {
    // Set default start date to today
    formData.startDate = today.value;

    // Set default end date to 3 months from today
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 3);
    formData.endDate = endDate.toISOString().split('T')[0];
});
</script>

<style scoped>
.regular-bookings-page {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.page-header {
    background-color: #2e7d32;
    color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
}

.page-header h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.container {
    width: 100%;
}

.content-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 1024px) {
    .content-layout {
        grid-template-columns: 1fr 1fr;
    }
}

.form-card,
.preview-card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    height: 100%;
}

.form-title,
.preview-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #2e7d32;
}

.form-section {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.form-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.section-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #111827;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #374151;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 640px) {
    .form-row {
        grid-template-columns: 1fr 1fr;
    }
}

.form-input,
.form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    transition: border-color 0.2s;
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
}

.form-input.error,
.form-textarea.error {
    border-color: #dc2626;
}

.error-message {
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

.days-selector {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
}

.day-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 0;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.2s;
}

.day-option:hover {
    background-color: #f3f4f6;
}

.day-option.selected {
    background-color: #d1fae5;
    border-color: #2e7d32;
    color: #2e7d32;
}

.day-abbr {
    font-weight: 600;
    font-size: 0.875rem;
}

.day-name {
    font-size: 0.75rem;
    color: #6b7280;
}

.day-option.selected .day-name {
    color: #2e7d32;
}

.input-with-prefix {
    position: relative;
}

.input-prefix {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
}

.form-input.with-prefix {
    padding-left: 3rem;
}

.checkbox-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.checkbox-group input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    accent-color: #2e7d32;
}

.pricing-info {
    background-color: #f9fafb;
    border-radius: 0.375rem;
    padding: 1rem;
    margin-bottom: 1rem;
}

.price-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e5e7eb;
}

.price-row:last-child {
    border-bottom: none;
}

.price-row.total {
    font-weight: 600;
    font-size: 1.125rem;
    color: #2e7d32;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #e5e7eb;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary {
    background-color: #2e7d32;
    color: white;
    border: none;
}

.btn-primary:hover {
    background-color: #1b5e20;
}

.btn-primary:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
}

.btn-secondary {
    background-color: white;
    color: #4b5563;
    border: 1px solid #d1d5db;
}

.btn-secondary:hover {
    background-color: #f3f4f6;
}

.schedule-grid {
    display: flex;
    overflow-x: auto;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
}

.time-column,
.day-column {
    display: flex;
    flex-direction: column;
    min-width: 80px;
}

.time-column {
    background-color: #f9fafb;
    border-right: 1px solid #e5e7eb;
}

.time-header,
.day-header {
    padding: 0.75rem 0.5rem;
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f3f4f6;
}

.time-slot {
    padding: 0.75rem 0.5rem;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
    font-size: 0.875rem;
}

.schedule-cell {
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid #e5e7eb;
    border-right: 1px solid #e5e7eb;
    min-height: 3rem;
    position: relative;
}

.schedule-cell.available {
    background-color: #f9fafb;
}

.schedule-cell.booked {
    background-color: #fee2e2;
}

.schedule-cell.selected {
    background-color: #d1fae5;
}

.booking-info {
    font-size: 0.75rem;
    font-weight: 500;
    color: #4b5563;
}

.legend {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
}

.legend-color {
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
}

.legend-color.available {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
}

.legend-color.booked {
    background-color: #fee2e2;
}

.legend-color.selected {
    background-color: #d1fae5;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    padding: 1rem;
}

.modal-content {
    background-color: white;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
    font-size: 1.25rem;
    font-weight: 600;
}

.close-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
}

.close-button svg {
    width: 1.25rem;
    height: 1.25rem;
}

.modal-body {
    padding: 1.5rem;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    border-top: 1px solid #e5e7eb;
}

.preview-section {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e7eb;
}

.preview-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.preview-section h4 {
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #111827;
}

.dates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
    margin-top: 0.75rem;
}

.date-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: #f3f4f6;
    border-radius: 0.25rem;
}

.date-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #2e7d32;
    color: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 600;
}

.date-text {
    font-size: 0.875rem;
}

.success-modal {
    text-align: center;
    padding: 2rem;
}

.success-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.success-icon svg {
    width: 4rem;
    height: 4rem;
    color: #2e7d32;
}

.success-modal h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.success-modal p {
    color: #6b7280;
    margin-bottom: 2rem;
}

.success-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

@media (max-width: 640px) {
    .success-actions {
        flex-direction: column;
    }

    .btn-primary,
    .btn-secondary {
        width: 100%;
    }
}
</style>