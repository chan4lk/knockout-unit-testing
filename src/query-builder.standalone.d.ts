interface JQuery  {

    /**
     * Create the query builder.
     * 
     * @param {any} options. 
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    queryBuilder(options:any): JQuery;

    /**
     * Call the Query builder methods by name.
     * 
     * @param {string} method The method name. equalent to queryBuilder.[method]
     * @param {*} options The method arguments.
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    queryBuilder(method:string, ...options:any): JQuery;
    
    /**
     * Create Query builder wrapper.
     * 
     * @param {*} options 
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    QueryBuilderWrapper(options:any): JQuery;
}