package com.lds;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ContactMapperImpl implements ContactMapper {
    
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ContactMapperImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void save(ContactVo contactVo) {
        String sql = "INSERT INTO CUSTOMER (cust_date, cust_name, cust_email, cust_hp, cust_question) " +
                     "VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, contactVo.getCustDate(), contactVo.getCustName(), 
                             contactVo.getCustEmail(), contactVo.getCustHp(), 
                             contactVo.getCustQuestion());
    }
}

