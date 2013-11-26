MyCollection = new Meteor.Collection('myColl',{connection: null});



if (Meteor.isClient) {


    // inject some data
    for (var i = 0; i <= 20; i++) {
        MyCollection.insert({
            title: "myItem with some crazy name -> "+ Math.random().toString(36).substr(2, 5)
        });
    };



    Template.main.items = function () {
        return MyCollection.find();
    };



    Template.itemTemplate.red = function(){
        // return (Session.get('itemTemplate->changeColor')) ? 'red' : '';
        return (TemplateStore.get(this,'itemTemplate->changeColor')) ? 'red' : '';
    }


    Template.itemTemplate.events({
        'click button' : function (e, template) {
            // change the color
            // if(Session.get('itemTemplate->changeColor') === true)
            //     Session.set('itemTemplate->changeColor', false);
            // else
            //     Session.set('itemTemplate->changeColor', true);

            if(TemplateStore.get(template, 'itemTemplate->changeColor') === true)
                TemplateStore.set(template, 'itemTemplate->changeColor', false);
            else
                TemplateStore.set(template, 'itemTemplate->changeColor', true);
        }
    });




}
