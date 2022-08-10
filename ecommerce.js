var app = angular.module("search", []);
app.controller("searchController", function ($scope) {
    $scope.searchItems = [
        {
            section: 'appliances',
            id: 1,
            name: 'Realme',
            desc: 'Premium Metal Bezel-less Design',
            quntity: 1,
            Image: '../assignment6/images/tv.jpg',
            price: '$550',
        },
        {
            section: 'appliances',
            id: 2,
            name: 'Samsang',
            desc: 'Premium Metal Bezel-less Design',
            quntity: 1,
            Image: '../assignment6/images/tv1.jpg',
            price: '$500',
        },
        {
            section: 'appliances',
            id: 3,
            name: 'Xiaomi',
            desc: 'Premium Metal Bezel-less Design',
            quntity: 1,
            Image: '../assignment6/images/tv2.jpg',
            price: '$350',
        },
        {
            section: 'appliances',
            id: 4,
            name: 'One Plus',
            desc: 'Premium Metal Bezel-less Design',
            quntity: 1,
            Image: '../assignment6/images/tv3.jpg',
            price: '$300',
        },
        {
            section: 'appliances',
            id: 5,
            name: 'Xiaomi',
            desc: 'Premium Metal Bezel-less Design',
            quntity: 1,
            Image: '../assignment6/images/tv4.jpg',
            price: '$250',
        },
        {
            section: 'appliances',
            id: 6,
            name: 'Xiaomi',
            desc: 'Premium Metal Bezel-less Design',
            quntity: 1,
            Image: '../assignment6/images/tv5.jpg',
            price: '$400',
        },
        {
            section: 'headset',
            id: 7,
            name: 'Noise',
            desc: 'You can listen to music for up to 3.5 hours straight with the Noise Buds VS102 Earbuds.',
            quntity: 1,
            Image: '../assignment6/images/he.jpg',
            price: '$490',
        },
        {
            section: 'headset',
            id: 8,
            name: 'Boat',
            desc: 'You can listen to music for up to 3.5 hours straight with the Noise Buds VS102 Earbuds.',
            quntity: 1,
            Image: '../assignment6/images/h.jpg',
            price: '$200',
        },
        {
            section: 'headset',
            id: 9,
            name: 'Realme',
            desc: 'You can listen to music for up to 3.5 hours straight with the Noise Buds VS102 Earbuds.',
            quntity: 1,
            Image: '../assignment6/images/h2.jpg',
            price: '$300',
        },
        {
            section: 'headset',
            id: 10,
            name: 'Truke',
            desc: 'You can listen to music for up to 3.5 hours straight with the Noise Buds VS102 Earbuds.',
            quntity: 1,
            Image: '../assignment6/images/h3.jpg',
            price: '$450',
        },
        {
            section: 'headset',
            id: 11,
            name: 'Boat',
            desc: 'You can listen to music for up to 3.5 hours straight with the Noise Buds VS102 Earbuds',
            quntity: 1,
            Image: '../assignment6/images/h4.jpg',
            price: '$570',
        },
        {
            section: 'headset',
            id: 12,
            name: 'Realme',
            desc: 'You can listen to music for up to 3.5 hours straight with the Noise Buds VS102 Earbuds',
            quntity: 1,
            Image: '../assignment6/images/h5.jpg',
            price: '$500',
        },
        {
            section: 'laptop',
            id: 13,
            name: 'Lenovo',
            desc: 'Compete with the Legion 5 (15" AMD). Its armed with everything you need to dominate any lobby.3.3GHz AMD Ryzen 5 5600H.15.6in Display',
            quntity: 1,
            Image: '../assignment6/images/lop.jpg',
            price: '$550',
        },
        {
            section: 'laptop',
            id: 14,
            name: 'Lenovo',
            desc: 'Compete with the Legion 5 (15" AMD). Its armed with everything you need to dominate any lobby.',
            quntity: 1,
            Image: '../assignment6/images/lop1.jpg',
            price: '$500',
        },
        {
            section: 'laptop',
            id: 15,
            name: 'Dell',
            desc: 'Compete with the Legion 5 (15" AMD). Its armed with everything you need to dominate any lobby.',
            quntity: 1,
            Image: '../assignment6/images/lop2.jpg',
            price: '$350',
        },
        {
            section: 'laptop',
            id: 16,
            name: 'Hp',
            desc: 'Compete with the Legion 5 (15" AMD). Its armed with everything you need to dominate any lobby.',
            quntity: 1,
            Image: '../assignment6/images/lop3.jpg',
            price: '$300',
        },
        {
            section: 'laptop',
            id: 17,
            name: 'Acer',
            desc: 'Compete with the Legion 5 (15" AMD). Its armed with everything you need to dominate any lobby.',
            quntity: 1,
            Image: '../assignment6/images/lop4.jpg',
            price: '$250',
        },
        {
            section: 'laptop',
            id: 18,
            name: 'Ausu',
            desc: 'Compete with the Legion 5 (15" AMD). Its armed with everything you need to dominate any lobby. 3.3GHz AMD Ryzen ',
            quntity: 1,
            Image: '../assignment6/images/lop5.jpg',
            price: '$400',
        },
    ]
    $scope.foundList = [];
    $scope.message = '';
    $scope.isVisible = false;
    $scope.show = function () {
        $scope.isVisible = $scope.isVisible ? false : true
    };

    $scope.store = function (item) {
        if (item) {
            $scope.foundList.push({ section: item.section, id: item.id, name: item.name, desc: item.desc, Image: item.Image, price: item.price })
            $scope.Items += 1;
            // console.log($scope.foundList)
        }

    }
    $scope.heart = function (event) {

        event.currentTarget.style.color = event.currentTarget.style.color == 'red' ? 'black' : 'red';

    };

    $scope.sri = { $: undefined };

    $scope.Data = false;

    $scope.appliances = function () {
        $scope.Data = true;
        $scope.sri = "TV";
    }
    $scope.laptop = function () {
        $scope.Data = true;
        $scope.sri = "LAPTOP";
    }
    $scope.headsets = function () {
        $scope.Data = true;
        $scope.sri = "HEADSET";
    }

    $scope.setFilter = function () {
        if ($scope.searchText != "") {
            $scope.Data = true;
            $scope.sri = $scope.searchText;
        } else {
            $scope.Data = false;
        }
    };


    $scope.remove = function (cart) {
        if (cart) {
            $scope.foundList.splice($scope.foundList.indexOf(cart), 1);
            $scope.Items -= 1;
            // $scope.total -= cart.price;
        }
    }
    $scope.srikanth = false;

    $scope.openCartItems = function () {
        $scope.srikanth = true;
    };

    $scope.backToCart = function () {
        $scope.srikanth = false;

    };
    $scope.login = false;

    $scope.openContact = function () {
        $scope.login = true;
    };

    $scope.backContact = function () {
        $scope.login = false;

    };


    // app.filter('searchFor', function () {
    //   return function (arr, searchString) {
    //     if (!searchString) {
    //       return arr
    //     }
    //     var result = []
    //     searchString = searchString.toLowerCase()
    //     angular.forEach(arr, (item) => {
    //       if (item.section.toLowerCase().indexOf(searchString) !== -1) {
    //         result.push(item)
    //       }
    //     })
    //     return result;
    //   }
    // })
});