package com.lds;


import com.lds.ContactVo;
import com.lds.ContactMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class ContactService {

    private final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:sss");
    private final Date time = new Date();
    private final String localTime = format.format(time);

    public void joinUser(ContactVo contactVo, ContactMapper contactMapper){
        contactVo.setCustDate(localTime);
        contactMapper.save(contactVo);
    }
}