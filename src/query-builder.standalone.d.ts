
interface JQuery {

    /**
     * Create the query builder.
     * 
     * @param {any} options. 
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    queryBuilder(options: any): QueryBuilder;

    /**
     * Call the Query builder methods by name.
     * 
     * @param {string} method The method name. equalent to queryBuilder.[method]
     * @param {*} options The method arguments.
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    queryBuilder(method: string, ...options: any): QueryBuilder;

    /**
     * Create Query builder wrapper.
     * 
     * @param {*} options 
     * @returns {JQuery} 
     * 
     * @memberof JQuery
     */
    QueryBuilderWrapper(options: any): QueryBuilder;

}

interface QueryBuilder extends JQuery {
    /**
     * Add a new rule to the group.
     * 
     * @param {*} group The rule group.
     * @returns {*} The model.
     * 
     * @memberof QueryBuilder
     */
    addRule(group: any): any;

    /**
     * Set Rules for the query builder.
     * 
     * @param {Group} group The rule group.
     * 
     * @memberof QueryBuilder
     */
    setRules(group: RuleGroup);

    /**
     * Reset all the rules.
     * 
     * @memberof QueryBuilder
     */
    reset(): void;
}

/**
 * Single Rule in the query builder group.
 * 
 * @interface Rule
 */
interface Rule {
	/**
     * The filter identifier.
     * 
     * @type {string}
     * @memberof Rule
     */
    id: string;

	/**
     * The operator type
     * ex :- equals, contains.
     * 
     * @type {string}
     * @memberof Rule
     */
    operator: string;

    /**
     * The filter information
     * 
     * @type {Filter}
     * @memberof Rule
     */
    filter: Filter;

    parent:any;

    model:any;
}

interface Filter {
    childId?: string;
    parentId?: string;
    id: string;
    parentChildFilterMapping: Array<any>;

}

interface RuleGroup {
	/**
     * The rule group condition : OR, AND
     * 
     * @type {string}
     * @memberof RuleGroup
     */
    condition: Condition;

	/**
     * All the rules in the group.
     * 
     * @type {Rule[]}
     * @memberof RuleGroup
     */
    rules: Rule[];
}

type Condition = 'OR' | 'AND';
