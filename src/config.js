const config = {
  //The encoding method of the data source.
  // The default is UTF-8.
  // If you create a csv file by yourself and you are a domestic user, the saved code is likely to be GBK. If there are garbled characters, change this to GBK.
  // It is not recommended to modify this. Instead, it is recommended to copy the contents of the csv file that you have created to example.csv. Because the encoding format of example.csv is supported by all languages.
  // Encoding is not recommended to be modified.
  // Instead, it is recommended to copy the contents of the CSV file produced by yourself to example.csv.
  // The encoding format of example.csv is supported by all languages.
  encoding: "UTF-8",

  // The maximum number of entries displayed at each time node.
  max_number: 20,

  // Controls whether to display the top extension text.
  showMessage: true,

  // The time is sorted automatically.
  // !!! Please make sure to use the standard date format when opening this item! (Ie: YYYY-MM-DD HH:MM)
  // If closed, the sort order is the order of appearance of the time field of the csv table from top to bottom.
  // If your date format is a standard date format, you can ignore the data sorting and achieve the effect of automatically sorting in date order.
  // Turn on auto_sort to realize automatic time tweening.
  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: false,

  // Time formatting
  timeFormat: "%Y-%m-%d",

  // Reverse order so that the shortest bar is at the top
  reverse: false,

  // Types are distinguished by what fields? If it is name, turn off the type display
  divide_by: "type",

  // According to what field is the color distinguished?
  divide_color_by: "type",

  // The value of the field and its corresponding color value
  color: {
    Chinese: "#1177CC"
  },

  // Color binding growth rate
  // Bind color with increasing rate
  changeable_color: false,

  // Color gradient
  color_range: ["#1177CC", "#113388"],

  // Additional information content.
  // left label
  itemLabel: "Left text",

  // right label
  typeLabel: "Right text",


  // The horizontal position of the top item information.
  // Top item information horizontal location
  item_x: 250,

  // Time point interval time.
  interval_time: 1,

  // The horizontal height of the text above.
  text_y: -50,

  // The abscissa of the right text
  text_x: 1000,
  // Offset
  offset: 350,

  // Bars whose length is less than display_barInfo will not display barInfo.
   // Hide barInfo if bar is shorter than barInfo
  display_barInfo: 0,

  // Use counter
  // Attention! The use timer and use type are currently not compatible, that is, they cannot be turned on at the same time!
  // A counter will appear in the upper right corner, recording the duration of the current top spot.
  use_counter: true,

  // The step size of the counter for each time node.
  // For example, the time node date interval may be 1 week (seven days), then the value of step should be 7.
  step: 1,

  //////////////////////////////////////////////////////////////////////////////
  // Format the value
  // Here controls the number of displayed digits. It is mainly done by modifying the number in the middle, if it is 1, it is reserved for one decimal place.
  // The comma means that every three digits are separated by ","
  // '.2f' means keeping two decimals.
  format: ",.0f",

  // suffix
  postfix: "",

  // If you don't understand what this is doing, I suggest not to modify this.
  // Deformatting function:
  // Formatting operations may cause NaN problems. This function reverse-formats the formatted value into a number that JS can recognize.
  deformat: function(val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  //////////////////////////////////////////////////////////////////////////////

  // The left and right spacing of the chart.
  // Note that left_margin does not include the label on the left. Modifying the value to a small value will cause the label on the left to not be displayed
  left_margin: 250,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // Whether to turn on the time label.
  dateLabel_switch: true,
  // Time label coordinates. Suggest x: 1000 y: -50 to start trying, the default position is x:null,y:null
  dateLabel_x: null,
  dateLabel_y: null,

  // Allow bars larger than the average value to float up when they disappear。
  allow_up: false,

  // Set the animation effect. If it is true, the newly entered entry starts from 0.
  enter_from_0: false,

  // If all the numbers are very large, and the gap cannot be opened, turn on this option to transform the coordinate origin to (minimum value)*2-(maximum value)
  big_value: true,

  // If you want to use semi-logarithmic coordinates, turn on this
  use_semilogarithmic_coordinate: false,

  // barinfo is too long? Maybe try this
  long: false,

  // How many time nodes are delayed to start
  wait: 2,

  // Separately control the speed and magnification of the exchange animation
  update_rate: 1,

  // Turn on uniform animation effect
  // animation:'linear',
  showLabel: true,

  // label xAxis position
  labelx: -10,

  use_img: false,

  // Picture path, local picture or online picture.
  imgs: {
    entry:
      "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg"
  },

  // Global background color
  background_color: "#FFFFFF",

  // Whether the rectangular column is a rounded rectangle
  rounded_rectangle: true,

  // Whether to display the x-axis axis
  show_x_tick: true,

  // Limit the length of bar info display
  // limit bar info display length
  bar_name_max: 30
};
