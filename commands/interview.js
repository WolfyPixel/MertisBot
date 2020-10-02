module.exports = {
	name: 'interview',
	description: 'interview',
	execute(message) {
        message.channel.send( `
        There are 4 kinds of schools when it comes to interviews:

1. Schools that only interview students that they are interested in admitting (schools like Harvard)

2. Schools that try to interview anyone who has applied (schools like Stanford and Princeton)

3. Schools that try to interview students who has registered for an interview. Registration forms are on school websites. Make sure you sign up for these interviews as they are helpful in terms of indicating interest (schools like Pomona and Haverford)

4. Schools that do not do interviews (schools like Amherst)

Most of your interviewers will be either from your country or your region. Most of them are usually alumni from the school, but some of them could be members of the admissions committee.

Interviews are usually held at casual locations like coffee shops and other public spaces. Some interviewers might prefer to conduct the interview over Skype or Zoom. Interviews are designed to resemble casual conversations for you to share about yourself and to learn more about the school. Most of them are evaluative to a limited extent (the interviewers will note down what you say and submit a report). The interviews are mainly there to help the school to identify any red flags with you as a person. There is not much need to prepare other than doing some research about the school and preparing some answers about yourself. Being genuine and lovable is most important.
        ` );
	},
};

