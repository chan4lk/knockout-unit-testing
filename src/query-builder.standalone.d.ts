
interface JQuery  {

    /**
     * Create the query builder.
     * 
     * @param {any} options. 
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    queryBuilder(options:any): QueryBuilder;

    /**
     * Call the Query builder methods by name.
     * 
     * @param {string} method The method name. equalent to queryBuilder.[method]
     * @param {*} options The method arguments.
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    queryBuilder(method:string, ...options:any): QueryBuilder;
    
    /**
     * Create Query builder wrapper.
     * 
     * @param {*} options 
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    QueryBuilderWrapper(options:any): QueryBuilder;

}

interface QueryBuilder extends JQuery{
    /**
     * Add a new rule to the group.
     * 
     * @param {*} group The rule group.
     * @returns {*} The model.
     * 
     * @memberof QueryBuilder
     */
    addRule(group:any):any;

    /**
     * Set Rules for the query builder.
     * 
     * @param {Group} group The rule group.
     * 
     * @memberof QueryBuilder
     */
    setRules(group:RuleGroup);

    reset():void;
}

export interface Rule {
	id: string;
	operator: string;
}

export interface RuleGroup {
	condition: string;
	rules: Rule[];
}
