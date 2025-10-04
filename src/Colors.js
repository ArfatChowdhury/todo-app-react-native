export const Colors = {
  light: {
    // Primary colors
    primary: '#007AFF',        // iOS blue
    primaryDark: '#0056CC',    // Darker blue for pressed states
    
    // Background colors
    background: '#FFFFFF',     // Pure white
    backgroundSecondary: '#F8F9FA', // Light gray background
    surface: '#FFFFFF',        // Card/surface background
    
    // Text colors
    text: '#000000',           // Black text
    textSecondary: '#6C757D',  // Gray text
    textMuted: '#ADB5BD',      // Light gray text
    
    // Border colors
    border: '#E9ECEF',         // Light border
    borderFocus: '#007AFF',    // Blue border when focused
    
    // Status colors
    success: '#28A745',        // Green for completed tasks
    warning: '#FFC107',        // Yellow for warnings
    error: '#DC3545',          // Red for errors
    info: '#17A2B8',           // Blue for info
    
    // Interactive elements
    button: '#007AFF',         // Primary button color
    buttonText: '#FFFFFF',     // Button text color
    icon: '#000000',           // Icon color
    
    // Search bar
    searchBackground: '#F8F9FA',
    searchBorder: '#E9ECEF',
    searchText: '#000000',
    searchPlaceholder: '#6C757D'
  },
  
  dark: {
    // Primary colors
    primary: '#0A84FF',        // iOS blue for dark mode
    primaryDark: '#0056CC',    // Darker blue for pressed states
    
    // Background colors
    background: '#000000',     // Pure black
    backgroundSecondary: '#1C1C1E', // Dark gray background
    surface: '#2C2C2E',        // Card/surface background
    
    // Text colors
    text: '#FFFFFF',           // White text
    textSecondary: '#EBEBF5',  // Light gray text
    textMuted: '#8E8E93',      // Dark gray text
    
    // Border colors
    border: '#38383A',         // Dark border
    borderFocus: '#0A84FF',    // Blue border when focused
    
    // Status colors
    success: '#30D158',        // Green for completed tasks
    warning: '#FF9F0A',        // Orange for warnings
    error: '#FF453A',          // Red for errors
    info: '#64D2FF',           // Light blue for info
    
    // Interactive elements
    button: '#0A84FF',         // Primary button color
    buttonText: '#FFFFFF',     // Button text color
    icon: '#FFFFFF',           // Icon color
    
    // Search bar
    searchBackground: '#1C1C1E',
    searchBorder: '#38383A',
    searchText: '#FFFFFF',
    searchPlaceholder: '#8E8E93'
  }
};

// Helper function to get colors based on theme
export const getColors = (theme) => {
  return Colors[theme] || Colors.light;
};
