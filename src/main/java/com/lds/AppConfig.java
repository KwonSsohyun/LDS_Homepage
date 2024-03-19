// AppConfig.java
package com.lds;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;

@Configuration
public class AppConfig {

    private final DataSource dataSource;

    public AppConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public JdbcTemplate myJdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    } 
}

