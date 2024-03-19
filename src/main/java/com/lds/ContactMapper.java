package com.lds;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository // 이 어노테이션을 추가하여 스프링에게 빈을 등록하도록 지시합니다.
public interface ContactMapper {
	
    /**
     * 문의글 저장
     * @param ContactVo - 문의글 정보
     */
	void save(ContactVo ContactVo);
}