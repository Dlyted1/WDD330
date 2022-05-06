 // Get your shorts on - this is an array workout!
      // ## Array Cardio Day 1

      // Some data we can work with
// object
      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
//string array
      const people = [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
      ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(function(inventor) {
      if inventor.year >= 1500 && inventor.year < 1600) {
        return true; // keep it
      }
    }) 
     // shorter way to write the above code:
     // const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))

    // to check console on above
      //  console.table(fifteen);

// Array.prototype.map()
// map will create a new array from old but length always stays the same 
// 2. Give us an array of the inventors' first and last names
    const fullnames = inventors.map(inventor => `${inventor.first} ${$inventor.last}`);
      // console.log(fullnames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort(function(firstPerson, secondPerson){
     if(firstPerson.year > secondPerson.year) {
       return 1;
     } else {
       return -1;
     }
    });
   // shorter way to write the above code:
      // const ordered = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);

    // console.table(ordered)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
    const ordered = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);  // the zero added bacuae the first time around in this loop total is undefined so it adds the value to add it up

    // console.log(totalYears);

// 5. Sort the inventors by years lived
    const oldest = inventors.sort(function(firstPerson, secondPerson) {
      const lastGuy = firstPerson.passed - firstPerson.year;
      const nextGuy = secondPerson.passed - secondPerson.year;
      return lastGuy > nextGuy ? -1 : 1;
    })

    // console.table(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
      // const category = document.querySelector('.mw-category');
         //.mw-catagory was found through opening dev tools & inspect the boulevards of paris line what it's ref to under div and the links that follow which we will show as a below
      // const links = Array.from(category.querySelectorAll('a'));

      const category =document.querySelector('.mw-category');
      const links = Array.from(category.querySelectorAll('a'));
      const de = links
        .map(link => link.textContent)
        .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
    const alpha = people.sort((lastOne, nextOne) => {
      const [aLast. aFirst] = lastOne.split(', ');
      const [bLast. bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });

    console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck',
        'pogostick'
      ];

      const transportation = data.reduce(function(obj, item) {
        if(!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});

      console.log(transportation);