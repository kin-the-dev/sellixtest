var getBaseUrl = () => {
    return 'https://api.shop.thealtening.com/' //'https://api.shop.thealtening.com/'
}

// Smooth scrolling
document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

setInterval(function () {
    cycleReview();
}, 5000);

var reviews = [
    {
        text: `I've been using TheAltening for quite a while now and can only recommend it. It's affordable and the accounts are always unbanned on servers like Hypixel.`,
        icon: `nurmarvin.webp`,
        date: `1/23/2020`
    },
    {
        text: `I've been a part of the The Altening community for 1+ year now, and all I can say is that it's the perfect service for anyone trying to get quality Minecraft accounts for the cheap!`,
        icon: `trol_cropped.png`,
        date: `9/8/2019`
    },
    {
        text: `TheAltening is nothing short of amazing. High quality alts in a matter of seconds combined with affordable prices makes this the best generator on the market.`,
        icon: `unquieterpig_cropped.png`,
        date: `1/15/2020`
    },
    {
        text: `Thealtening is by far the best alt service, you never have to go through a sketchy website, and there are always new alts being added.`,
        icon: `charizor_cropped.png`,
        date: `1/5/2020`
    },
    {
        text: `Good Alt shop and fast services plus its good deal for alts i really like it.`,
        icon: `1_cropped.png`,
        date: `2/7/2019`
    },
    {
        text: `TheAltening is the best shop in my opinion. 19 of the 20 accounts are unbanned!`,
        icon: `2_cropped.png`,
        date: `4/2/2019`
    },
    {
        text: `I've been using this one alt store for months and usually have no problems. Whenever anything's wrong with the purchase, the customer support is extremely fast and helpful.`,
        icon: `3_cropped.png`,
        date: `4/19/2020`
    },
    {
        text: `I got a basic plan and I didn't get the email at first but it came through and it works!`,
        icon: `4_cropped.png`,
        date: `4/23/2019`
    },
    {
        text: `This website has to be the best alt shop I have used. The person helping was very kind and quick to reply.`,
        icon: `5_cropped.png`,
        date: `5/11/2019`
    },
    {
        text: `I just bought a premium plan and it was all unbanned on hypixel. it was cheap and good quality.`,
        icon: `6_cropped.png`,
        date: `5/15/2019`
    },
    {
        text: `I've bought many plans from here and it is a great and trustable website, I would recommend to anyone that wants accounts that are cheap and easy to get.`,
        icon: `7_cropped.png`,
        date: `6/6/2019`
    },
    {
        text: `At first, I thought it was a scam and it didn't work, but just wait and be patient and it goes out all right. Best shop by far.`,
        icon: `8_cropped.png`,
        date: `6/13/2019`
    },
    {
        text: `Excellent quality alts, you will not find this anywhere else. Super Awesome support too.`,
        icon: `9_cropped.png`,
        date: `6/17/2019`
    },
    {
        text: `It's great, and I received my alts! Thanks so much for making the website! Good service, all the alts worked.`,
        icon: `10_cropped.png`,
        date: `7/13/2019`
    },
    {
        text: `TheAltening has been a really nice place to get hypixel unbanned.`,
        icon: `11_cropped.png`,
        date: `7/16/2019`
    },
    {
        text: `One of the reasons i buy alts here is because you use them very easily with OQMineBot.`,
        icon: `12_cropped.png`,
        date: `8/28/2019`
    },
    {
        text: `Love this website. They sell items at a very cheap price. Extremely worth to check it out!`,
        icon: `13_cropped.png`,
        date: `10/2/2019`
    },
    {
        text: `Great website! Legit I brought from them before they are really cheap too!`,
        icon: `14_cropped.png`,
        date: `10/8/2019`
    },
    {
        text: `Bought from TheAltening multiple times, never been unhappy with my purchase.`,
        icon: `15_cropped.png`,
        date: `10/17/2019`
    },
    {
        text: `Initially i had some problems with receiveing the email but it came and was good!`,
        icon: `16_cropped.png`,
        date: `10/20/2019`
    },
    {
        text: `The giveaways in the discord server were really nice for me to get free alts.`,
        icon: `17_cropped.png`,
        date: `10/30/2019`
    },
    {
        text: `I think the alt store is the best ever, very recommended.`,
        icon: `18_cropped.png`,
        date: `11/10/2019`
    },
    {
        text: `Outstanding delivery time i really enjoyed this shop 10/10 best qulaity!`,
        icon: `19_cropped.png`,
        date: `11/22/2019`
    },
    {
        text: `Extremely fast, reliable, cheap service. Definitely worth it, would highly recommend to anyone looking into affordable alts.`,
        icon: `20_cropped.png`,
        date: `12/9/2019`
    },
    {
        text: `Good site, legit got alts no worries, easy steps to follow and support was extremely kind.`,
        icon: `21_cropped.png`,
        date: `12/25/2019`
    },
    {
        text: `Amazing website 100% trustworthy I do recommend to anyone look for unbanned accounts for super cheap.`,
        icon: `22_cropped.png`,
        date: `1/9/2020`
    },
    {
        text: `I bought from here because they were partnered with remix and it's been a really great shop.`,
        icon: `23_cropped.png`,
        date: `1/18/2020`
    },
    {
        text: `All my purchases were near instant and i didn't have to wait it was really easy.`,
        icon: `24_cropped.png`,
        date: `1/21/2020`
    },
    {
        text: `AWESOME SERVICE, VERY HIGHLY RECOMMENED STAFF WERE VERY UNDERSTANDING!`,
        icon: `25_cropped.png`,
        date: `1/27/2020`
    },
    {
        text: `Much better than any other service i've used before, highly recommended.`,
        icon: `26_cropped.png`,
        date: `1/30/2020`
    }
]

var prevReview = 4;
function cycleReview() {
    var item = document.getElementsByClassName('reviews')[0].children[0];
    item.style.height = 0;
    item.style.opacity = "0";
    item.style.overflow = "hidden";
    item.style["padding-top"] = "0px";
    item.style["padding-bottom"] = "0px";
    item.style.margin = "0px";

    var newReview = reviews[prevReview++];
    if (prevReview >= reviews.length) prevReview = 0;

    var newItem = `<div class="review" style="opacity: 0">
            <img class="avatar" src="img/avatars/${newReview.icon}" alt="avatar">
            <div class="content">${newReview.text}</div>
            <div class="info">
                <div class="stars">
                    <img src="img/icons/star.svg" alt="star">
                    <img src="img/icons/star.svg" alt="star">
                    <img src="img/icons/star.svg" alt="star">
                    <img src="img/icons/star.svg" alt="star">
                    <img src="img/icons/star.svg" alt="star">
                </div>
                <div class="date">${newReview.date}</div>
            </div>
        </div>`;

    setTimeout(function () {
        document.getElementsByClassName('reviews')[0].removeChild(item);
        document.getElementsByClassName('reviews')[0].insertAdjacentHTML("beforeend", newItem);
        document.getElementsByClassName('reviews')[0].lastChild.style.opacity = "";
    }, 1000);
}

var data = [
    { id: 0, price: 1.00, ratedByCount: 0, minOrder: 125, maxOrder: 5000, defaultOrder: 150, stock: 'Low', countForDiscount: 150 },
    { id: 1, price: 1.00, ratedByCount: 0, minOrder: 5, maxOrder: 5000, defaultOrder: 5, stock: 'Low' },
    { id: 2, price: 1.00, ratedByCount: 0, minOrder: 100, maxOrder: 5000, defaultOrder: 100, stock: 'Low' },
    { id: 3, price: 1.00, ratedByCount: 0, minOrder: 1, maxOrder: 20, defaultOrder: 3, stock: 'Low' },
    { id: 4, price: 1.00, ratedByCount: 0, minOrder: 50, maxOrder: 5000, defaultOrder: 100, stock: 'Low' },
    { id: 5, price: 1.00, ratedByCount: 0, minOrder: 1, maxOrder: 20, defaultOrder: 3, stock: 'Low' },
    { id: 6, price: 1.00, ratedByCount: 0, minOrder: 10, maxOrder: 50, defaultOrder: 30, stock: 'Low' },
    { id: 7, price: 1.00, ratedByCount: 0, minOrder: 4, maxOrder: 50, defaultOrder: 10, stock: 'Low' },
    { id: 8, price: 1.00, ratedByCount: 0, minOrder: 5, maxOrder: 50, defaultOrder: 15, stock: 'Low' },
    { id: 9, price: 1.00, ratedByCount: 0, minOrder: 1, maxOrder: 5, defaultOrder: 3, stock: 'Low' },
    { id: 10, price: 1.00, ratedByCount: 0, minOrder: 1, maxOrder: 5, defaultOrder: 3, stock: 'Low' },
    { id: 11, price: 1.00, ratedByCount: 0, minOrder: 1, maxOrder: 5, defaultOrder: 3, stock: 'Low' },
    { id: 12, price: 1.00, ratedByCount: 0, minOrder: 1, maxOrder: 5, defaultOrder: 3, stock: 'Low' },
]
var coupon = undefined;

var descriptions = [
    `Non Full Access accounts are great for playing or giving to friends! You will be unable to change the skin/name/email on these accounts.
    <br>
    <br>
    The account may have extras such as MVP+, a high level, or UHC stars
    although it is not guaranteed.`,
    `Email Full Access accounts are Minecraft Accounts that you can transfer to your own Email. They're cheaper than our Ultra Secure Access accounts, as there is a small chance for the account to be taken back. It's recommended to purchase a USA account for a main account.
    <br>
    <br>
    Email Full Access are usually unbanned on large servers like Hypixel, and may have ranks or levels.`,
    `These accounts are guaranteed to be unbanned and working on hypixel, please ensure that you use a proper
    vpn to avoid security alerts. 
    <br>
    <br>
    The account may have extras such as MVP+, a high level, or UHC stars
    although it is not guaranteed.`,
    `SFA's allows you to change the username, skin, and password of an account. These are checked to be unbanned (whereas the normal ones are simply unchecked, not neccessarily banned).
    <br>
    <br>
    Do note that they're not meant to be permanent, they could die after a few months or if you change the login.`,
    `SFA's allows you to change the username, skin, and password of an account 
    <br>
    <br>
    Do note that they're not meant to be permanent, they could die after a few months or if you change the login`,
    `IPVanish is a great solution for bypassing online privacy blocks with great speed
    <br>
    <br>
    The account possibly will have a random subscription length
    up to one year of membership remaining or a minimum of one month`,
    `These accounts are guaranteed to be unbanned and level 10-24 on hypixel, please ensure that you use a proper
    vpn (VyprVPN) to avoid security alerts. The account comes with a random level from 10 and up.
    <br>
    <br>
    The account is most likely a Non-Full Access which means that it is not usually permanent and may stop working in the future.`,
    `These accounts are guaranteed to be unbanned and ranked on hypixel, please ensure that you use a proper
    vpn (VyprVPN) to avoid security alerts. The account comes with a random rank. 
    <br>
    <br>
    The account is most likely a Non-Full Access which means that it is not usually permanent and may stop working in the future.`,
    `These accounts are guaranteed to be unbanned and level 21+ on hypixel, please ensure that you use a proper
    vpn (VyprVPN) to avoid security alerts. The account comes with a random level from 21 and up. 
    <br>
    <br>
    The account is most likely a Non-Full Access which means that it is not usually permanent and may stop working in the future.`,
    `This is the login to an account with an Optifine cape on it, you can keep the account and edit the cape (might not last forever) or move the cape to your own main account.
    <br>
    <br>
    Do note that Optifine capes can very rarely be taken back by the original user and we will only replace it if there is compelling evidence that it was not your fault`,
    `Ultra Secure Access accounts are Permanent Full Access accounts that come with the transaction ID. You can buy ranks for this account and use it as your Main.
    <br>
    <br>
    There is ZERO possibilty for this to be taken back, it is functionally identical to a Minecraft.net account, only 30%+ cheaper.`,
    `VyprVPN is great for playing on Hypixel and you can get it much cheaper here than on-site
    <br>
    <br>
    The account possibly will have a random subscription length up to one year of membership remaining, the warranty for this account is if it doesn't have a subscription, or has an invalid login.`,
    `A completely brand new Steam Account with Rust purchased!
    <br>
    <br>
    We offer lifetime warranties on this account, you're able to freely change all details including email, password, etc. You're able to transfer the game to your main steam account by use of Family Sharing!`,
    `A completely brand new Steam Account with PLAYERUNKNOWN'S BATTLEGROUNDS purchased!
    <br>
    <br>
    We offer lifetime warranties on this account, you're able to freely change all details including email, password, etc. You're able to transfer the game to your main steam account by use of Family Sharing!`,
    `A completely brand new Steam Account with Grand Theft Auto V purchased!
    <br>
    <br>
    We offer lifetime warranties on this account, you're able to freely change all details including email, password, etc. You're able to transfer the game to your main steam account by use of Family Sharing!`,
    `This is an NFA/SFA (random) Minecraft account with a Minecon cape from a random year of 2011 to 2019.<br>
    The account is not checked for bans on any servers, and the cape is also not transferable.<br>
    Due to the rarity of this product, our unlimited warranty does not apply here.
    <br>
    <br>
    As with every NFA/SFA account, these are not typically permanent or exclusive accounts.
    A great option to flex on your friends!
    `,
]

var forcedProductId = undefined;
var selectedItemData;
var productsCoveredUnderWarranty = [0, 4, 2]

function showPurchasePopup(productId) {

    selectedItemData = data[productId];

    if (productsCoveredUnderWarranty.includes(productId)) {
        $('#unlimited-warranty').css('display', 'block');
    } else {
        $('#unlimited-warranty').css('display', 'none');
    }

    var amountElement = $('#amount-input');
    amountElement.attr({
        'min': selectedItemData.minOrder,
        'max': selectedItemData.maxOrder
    });
    if (amountElement.val() < selectedItemData.defaultOrder) amountElement.val(selectedItemData.defaultOrder);

    $('#popup-min-order').text(selectedItemData.minOrder);
    $('#popup-price').text(getLowestPriceFromPriceProvider(selectedItemData.priceProvider).toFixed(2));
    $('#popup-title').text(selectedItemData.title);
    $('#popup-stock-amount').text(selectedItemData.stock);
    $('#product-description-text').html(descriptions[selectedItemData.id]);
    updatePrice();

    document.body.style.width = $('body').width() + "px";
    document.getElementById('purchase-popup').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hidePurchasePopup() {
    document.body.style.width = "";
    document.getElementById('purchase-popup').style.display = 'none';
    document.body.style.overflow = 'auto';

    try {
        document.getElementById('purchase-modal-content').style.display = 'block';
        document.getElementById('purchase-modal-coupon').style.display = 'block';
        document.getElementById('reseller-overlay-id').style.display = 'none';
    } catch (ex) {}

    if(selectedItemData.priceProvider.customTier) {
        selectedItemData.priceProvider.customTier.currentlyVisible = false;
    }

    purchaseReset();
}
function showResellerList() {
    document.getElementById('purchase-modal-content').style.display = 'none';
    document.getElementById('purchase-modal-coupon').style.display = 'none';
    document.getElementById('reseller-overlay-id').style.display = 'block';
}

function updatePrice() {

    var applyCoupon = function(price) {
        try {
            if (coupon && coupon.percentage) {
                var pricePreCoupon = Math.round((price + Number.EPSILON) * 100) / 100;
                price *= 1 - coupon.percentage;
                var pricePostCoupon = Math.round((price + Number.EPSILON) * 100) / 100;
        
                document.getElementById('coupon-success-percentage').innerText = (coupon.percentage*100) + '%';
                document.getElementById('coupon-success-amount').innerText =  '$' + (pricePreCoupon-pricePostCoupon).toFixed(2);
                document.getElementById('coupon-add-display').style.display = 'none';
                document.getElementById('coupon-active-display').style.display = 'block';
            } else {
                document.getElementById('coupon-add-display').style.display = 'block';
                document.getElementById('coupon-active-display').style.display = 'none';
            }
        } catch (ex) {}

        return price;
    }

    var showQuantityBasedProvider = function() {
        $('#quantity-custom-order-container').hide();
        $('#quantity-button-container').hide();
        
        $('#count-discount-display').show();
        $('#quanity-input-container').show();
        $('#count-discount-display').show();
        $('#purchase-button').show();
        
        var count = $('#amount-input').val();
        var price = count * (selectedItemData?.priceProvider?.priceRegular ?? selectedItemData.priceProvider.customTier.pricePerCount);
        
        document.getElementById('count-discount-display').style.display = 'block';
        const colorActive = '#21705f';
        const colorInactive = 'inherit';
        if (selectedItemData.priceProvider.countForDiscount) {
            document.getElementById('count-display-required').innerText = selectedItemData.priceProvider.countForDiscount;
            const discountPercentage = selectedItemData.priceProvider.percentDiscount;

            $('#count-discount-percentage').text((discountPercentage*100).toFixed(0));

            if (count >= selectedItemData.priceProvider.countForDiscount) {
                price *= 1 - discountPercentage;
                Array.from(document.getElementsByClassName('count-discount-text')).forEach((element) => {
                    element.style.color = colorActive;
                });
            } else {
                Array.from(document.getElementsByClassName('count-discount-text')).forEach((element) => {
                    element.style.color = colorInactive;
                });
            }
        } else {
            $('#count-discount-display').hide();
        }

        // Apply any couponts.
        price = applyCoupon(price);

        var priceRounded = Math.round((price + Number.EPSILON) * 100) / 100;
        $('.cur-price-display').text(priceRounded);
    }

    if(selectedItemData.priceProvider.type == 'StaticPriceProvider') {
        $('#quantity-button-container').hide();
        $('#quanity-input-container').show();
        //TODO:
    }
    else if(selectedItemData.priceProvider.type == 'TieredPriceProvider') {
        $('#quanity-input-container').hide();
        $('#count-discount-display').hide();
        $('#purchase-button').hide();
        $('#count-discount-display').hide();

        function showCustomOrder() {
            selectedItemData.priceProvider.customTier.currentlyVisible = true;

            var amountElement = $('#amount-input');
            amountElement.attr({
                'min': selectedItemData.priceProvider.customTier.minCount,
                'max': selectedItemData.maxOrder
            });
            if (amountElement.val() < selectedItemData.priceProvider.customTier.minCount) amountElement.val(selectedItemData.priceProvider.customTier.minCount);

            showQuantityBasedProvider();
        }

        if(selectedItemData.priceProvider.customTier && selectedItemData.priceProvider.customTier.currentlyVisible) {
            return showCustomOrder();
        }

        if(selectedItemData.priceProvider.customTier) {
            $('#quantity-custom-order-container').show();
            $('#custom-order-price').text('$' + selectedItemData.priceProvider.customTier.pricePerCount.toFixed(2));
            $('#custom-order-min').text(selectedItemData.priceProvider.customTier.minCount);
            document.querySelector('#quantity-custom-order-button').onclick = () => showCustomOrder();
        } else {
            $('#quantity-custom-order-container').hide();
        }

        $('#quantity-button-container').show();
        $('#quantity-button-container .quantity-button').each(function(i, obj) {
            var tier = selectedItemData.priceProvider.tieredPrices[i];
            obj.querySelector('.quanity-button-count').innerText = tier.count;
            //obj.querySelector('.quanity-button-price').innerText = '$' + applyCoupon(tier.priceTotal).toFixed(2);
            if(tier.attributes.includes('recommended')) {
                obj.classList.add('recommended-button');
            } else {
                obj.classList.remove('recommended-button');
            }

            obj.onclick = () => {
                $('#amount-input').val(tier.count);
                $('.cur-price-display').text(applyCoupon(tier.priceTotal).toFixed(2));
                purchaseProgress();
            };
        })
    }
    else if(selectedItemData.priceProvider.type == 'VolumeBasedPriceProvider') { 
        showQuantityBasedProvider();
    }
}

function purchaseProgress() {
    if (!document.getElementById("amount-input").reportValidity()) return;
    if ($('#amount-input').val() == '' || $('#amount-input').val() == ' ') return;
    $('#initial-purchase-container').css('display', 'none');
    $('#confirm-purchase-container').css('display', 'block');
}

function purchaseReset() {
    $('#confirm-purchase-container').css('display', 'none');
    $('#initial-purchase-container').css('display', 'block');
}

function updateCurrency() {
    document.cookie = `currency=${$('#currency').val()}; expires=Sun, 1 Jan 2030 00:00:00 UTC; path=/`
}

function purchaseBegin(method) {
    if (!updateEmailClass()) return;

    $.ajax({
        type: 'POST',
        url: getBaseUrl() + 'order/create',
        xhrFields: {
            withCredentials: true
        },      
        contentType: 'application/json',
        data: JSON.stringify({
            productId: selectedItemData.id,
            amount: parseInt($('#amount-input').val()),
            email: $('#email-input').val(),
            method: method,
            couponId: coupon != undefined ? coupon.id : undefined,
            currency: parseInt($('#currency').val())
        }),
        dataType: 'json',
        success: function (data) {
            if (data.stripeId) {
                var stripe = Stripe("pk_live_51HUxfXIyaiTeVfN3BZoVkhZk991K9uZpwkU3CkF2DhOYahJCnDxH3hGU5a0wBN9MtbLt6Q90nGEWiYwrYSx6k63900r1iRt2o5");
                stripe.redirectToCheckout({ sessionId: data.stripeId });
            } else {
                window.location.href = data.redirect;
            }
            showSuccess('Redirecting, please wait.');
        },
        error: function (jqXHR) {
            if (jqXHR.status == 400) showError('Invalid email, ensure that you have entered the correct email.');
            else if (jqXHR.status == 404) showError('Product not found, refresh the page and try again.');
            else showError('Not enough stock 😨, try a different account type.')
        }
    })
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function updateEmailClass() {
    if (!validateEmail($('#email-input').val())) {
        $('#email-input').addClass('email-error');
        return false;
    } else {
        $('#email-input').removeClass('email-error');
    }
    return true;
}

async function pullValues() {

    const urlParams = new URLSearchParams(window.location.search);
    var result = await fetch(getBaseUrl() + `index?ref=${urlParams.get('r')}`, {credentials: 'include'});
    var parsed = await result.json();
    data = parsed.types;

    parsed.stocks.forEach(function (x) {
        data.forEach(function (p) {
            if (p.id == x.id) {
                if (x.amount == 0) p.stock = "High";
                else if (x.amount == 1) p.stock = "Medium";
                else if (x.amount == 2) p.stock = "Low";
                else p.stock = "Empty"
            }
        })
    });

    syncValues();
}

function getLowestPriceFromPriceProvider(provider) {
    if(provider.type == "StaticPriceProvider") return provider.price;
    if(provider.type == "VolumeBasedPriceProvider") return provider.priceRegular * (1 - provider.percentDiscount);
    if(provider.type == "TieredPriceProvider") return provider?.customTier?.pricePerCount;
}

function syncValues() {
    function assignDataToElement(data, element) {
        console.log(element);
        if(!element) return;
        if(element.querySelector('.rated-count')) element.querySelector('.rated-count').innerText = data.ratedByCount;
        element.querySelector('.price-info').children[0].innerText = '$' + getLowestPriceFromPriceProvider(data.priceProvider).toFixed(2); //data.price.toFixed(2);
        
        try {
            var priceInfoChildren = element.querySelector('.price-info').children;
            var stockDisplayElement = priceInfoChildren[1].innerText.includes('%') ? priceInfoChildren[2] : priceInfoChildren[1];
            stockDisplayElement.innerText = data.stock;
        } catch (ex) {}

        var button = element.querySelector('.button');
        button.onclick = () => showPurchasePopup(data.id);
    }
    function dataIndexToElement(index) {
        var cards = document.getElementsByClassName('account-card');
        for(var i = 0; i < cards.length; i++)
            if(cards[i].getAttribute('product-index') == index)
                return cards[i];
    }

    data.forEach(function (x) {
        assignDataToElement(x, dataIndexToElement(x.id));
        
        // For product specific pages only.
        if(forcedProductId !== undefined && x.id === forcedProductId) {
            $('#price-information').text('$' + getLowestPriceFromPriceProvider(x.priceProvider).toFixed(2)); //x.price.toFixed(2));
        }
    });

    
}


$(document).ready(function () {
    setDefaultCurrency();
    pullValues();
    setTimeout(function() {
        checkDefaultActions();
    }, 3000);
});

function checkDefaultActions() {
    const urlParams = new URLSearchParams(window.location.search);
    var action = urlParams.get('action');
    if(action == 'view') {
        var product = urlParams.get('product');
        if(product == 'hypixel') showPurchasePopup(2);
        if(product == 'usa') showPurchasePopup(10);
    }
}

function setDefaultCurrency() {
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    var currencyCookie = getCookie('currency');
    if (currencyCookie) {
        $('#currency').val(currencyCookie);
    } else {
        var requestUrl = "http://ip-api.com/json";
        $.ajax({
            url: requestUrl,
            type: 'GET',
            success: function (json) {
                switch(json.countryCode) {
                    case "UK": document.cookie = `currency=2; expires=Sun, 1 Jan 2030 00:00:00 UTC; path=/`; break;
                    case "AT":
                    case "BE":
                    case "BG":
                    case "CY":
                    case "CZ":
                    case "DE":
                    case "DK":
                    case "EE":
                    case "ES":
                    case "FI":
                    case "FR":
                    case "GR":
                    case "HR":
                    case "HU":
                    case "IE":
                    case "IT":
                    case "LT":
                    case "LU":
                    case "LV":
                    case "MT":
                    case "NL":
                    case "PT":
                    case "RO":
                    case "SE":
                    case "SI":
                    case "SK":
                        document.cookie = `currency=1; expires=Sun, 1 Jan 2030 00:00:00 UTC; path=/`; break;
                    default:
                        document.cookie = `currency=0; expires=Sun, 1 Jan 2030 00:00:00 UTC; path=/`;
                        break;
                }
                currencyCookie = getCookie('currency');
                $('#currency').val(currencyCookie);
            },
            error: function (err) {
                console.log("Request failed, error= " + JSON.stringify(err));
            }
        });
    }
}

function setCoupon() {

    if (!document.getElementById('coupon-input').value || document.getElementById('coupon-input').value == '') return;

    // Reset everything.
    document.getElementById('coupon-error-message').innerText = '';
    this.coupon = undefined;

    var setCouponError = function (message) {
        this.coupon = undefined;
        document.getElementById('coupon-input').value = '';
        document.getElementById('coupon-error-message').innerText = message;
        this.updatePrice();
    }

    $.ajax({
        type: 'POST',
        url: getBaseUrl() + 'coupon/check',
        contentType: 'application/json',
        data: JSON.stringify({
            coupon: document.getElementById('coupon-input').value,
        }),
        dataType: 'json',
        success: function (data) {
            if (data && data.percentage) {
                coupon = data;
                updatePrice();
            } else {
                setCouponError('Coupon does not exist.');
            }
        },
        error: function (jqXHR) {
            if (jqXHR.status == 404) setCouponError('Coupon does not exist.');
            else if (jqXHR.status == 401) setCouponError('Coupon has already been used.');
            else setCouponError('Coupon does not exist.');
        }
    })
}


document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});