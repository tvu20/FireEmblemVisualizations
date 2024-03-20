import React, { useState } from "react";

import "./relationships.css";
import Description from "../../../components/articles/Description";

function PairingPopups(props) {
  const { id } = props;
  return (
    <>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 2 ? "visible" : ""}`}>
          <p>Lover: You’re about to leave, aren’t you, Leif?</p>
          <p>Leif: Do you wish to accompany me, Lover?</p>
          <p>Lover: Huh? Would that really be alright with you?</p>
          <p>
            Leif: But of course! All I want is to have you and your might by my
            side.
          </p>
          <p>Lover: Th-thank you!</p>
          <p className="rel-scroll-popup-label">Leif's generic lover ending</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 5 ? "visible" : ""}`}>
          <p>
            After returning home, Lilina became the marquess of Ostia and
            dedicated her time to rebuilding her land. She later rebuilt and led
            the Lycia Alliance to create the Kingdom of Lycia, a peaceful nation
            blessed with prosperity and harmony.
          </p>
          <p className="rel-scroll-popup-label">Lilina’s solo ending</p>
          <p>
            After returning home, Lilina became the marquess of Ostia, and
            married Roy a short while later. Together, Roy and Lilina united the
            Lycia Alliance and created the Kingdom of Lycia, a peaceful nation
            blessed with prosperity and harmony.
          </p>
          <p className="rel-scroll-popup-label">
            Lilina’s paired ending with Roy
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 6 ? "visible" : ""}`}>
          <p>Lilina: Roy... I'm sorry about the other day.</p>
          <p>Roy: The other day?</p>
          <p>
            Lilina: I was on some nostalgia trip, remember? We're in a war... Of
            course things won't be the same...
          </p>
          <p>Roy: Well, some things will.</p>
          <p>Lilina: Like what?</p>
          <p>Roy: I'll be at your side, and you'll be at mine.</p>
          <p>Lilina: Huh...</p>
          <p>
            Roy: We can't go back to the past, but we can shape the future. Then
            we should work to make a future the same as, or even better than the
            past, right?
          </p>
          <p>Lilina: Hahaha... Roy, you're showing off...</p>
          <p>
            Roy: D-Do you think so? Yeah, I was thinking that didn't sound like
            me myself...
          </p>
          <p>Lilina: But...</p>
          <p>Roy: ?</p>
          <p>Lilina: Thanks...</p>
          <p>Roy: Lilina...</p>
          <p>Lilina: We'll always be together...right?</p>
          <p>Roy: ...Of course.</p>
          <p className="rel-scroll-popup-label">Lilina and Roy's A-Support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 7 ? "visible" : ""}`}>
          <p>Lance: You made one mistake the other day. Roy: I did?</p>
          <p>
            Lance: You said, ‘I’m not particularly smart, and I don’t have much
            charisma, either.’
          </p>
          <p>Roy: Yes, I did say that.</p>
          <p>
            Lance: That’s the part about you that people like. No one would give
            his life to someone who has no charisma at all.
          </p>
          <p>Roy: …Do you think so?</p>
          <p>
            Lance: Of course. If I may also add a comment, be sure to keep that
            pure heart. As long as you do, our troops will follow you.
          </p>
          <p>Roy: I’ll try. Thank you, Lance.</p>
          <p>Lance: I am glad to be of assistance.</p>
          <p className="rel-scroll-popup-label">Roy and Lance's A-Support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 8 ? "visible" : ""}`}>
          <p>
            Hector succeeded his brother as the marquess of Ostia, but the pain
            of his brother’s death weighed heavily on him. His beloved Lyn gave
            him comfort and helped him become an enlightened leader.
          </p>
          <p className="rel-scroll-popup-label">
            Hector and Lyn's paired ending
          </p>
          <p>
            Though both desired to be together, they could not bring themselves
            to end their service to their lords, and so they parted ways. That
            was the last time Harken ever heard Vaida’s voice.
          </p>
          <p className="rel-scroll-popup-label">
            Harken and Vaida's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 9 ? "visible" : ""}`}>
          <p>
            The merchant Merlinus began working for Eliwood. He and Marcus were
            fast friends, and when Marcus became the head of military training,
            Merlinus used his business acumen to deal with all matters
            financial.
          </p>
          <p className="rel-scroll-popup-label">
            Merlinus and Marcus's paired ending
          </p>
          <p>
            After these dragonkin bid farewell to the land of their birth, they
            returned to their new world. Meeting Eliwood warmed the hearts of
            these ice dragons with the hope that man and dragon could live in
            peace.
          </p>
          <p className="rel-scroll-popup-label">
            Nils and Ninian's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 10 ? "visible" : ""}`}>
          <p>
            Farina: We sure do seem to be bumping into each other a lot lately…
            Especially considering how uncomfortable we both find it being
            around each other…
          </p>
          <p>Kent: I don’t think any such thing…</p>
          <p>Farina: Oh?</p>
          <p>
            Kent: I must apologize if that was your impression… But I do not
            dislike being around you…
          </p>
          <p>
            Farina: O-Oh? …… Well, if you don’t mind, that’s good. You may not
            be rich… And we may not be much alike… But I do feel rather secure
            when I’m around you. Ah!
          </p>
          <p>Kent: ?</p>
          <p>
            Farina: Don’t get me wrong! No offense. I mean… I just…you
            know…that’s all.
          </p>
          <p>
            Kent: ? Sure, I understand. Well, I’m about to be off. Are you
            coming?
          </p>
          <p>
            Farina: Err… Yeah, sure. It’s not like there’s any reason for me not
            to… Let’s go!
          </p>
          <p className="rel-scroll-popup-label">Farina and Kent's A-Support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 11 ? "visible" : ""}`}>
          <p>
            Eliwood: If it is too hard for you to talk about, I will not force
            you. Just… if you ever feel able, tell me then.
          </p>
          <p>
            Ninian: But… I have been false… I have lied to you and the others.
          </p>
          <p>
            Eliwood: Ninian, I love you. That will not change, no matter what
            may come.
          </p>
          <p>Ninian: Lord Eliwood…</p>
          <p>
            Eliwood: I don’t care what your secret is– I will still feel the
            same. If something troubles you, let me sweep it away. Please, don’t
            cry anymore. I would do anything to see you smile again. You are the
            first woman I have ever felt this way about, Ninian.
          </p>
          <p>
            Ninian: Lord Eliwood… I… I don’t know what– Lord Eliwood… Lord
            Eliwood…
          </p>
          <p className="rel-scroll-popup-label">
            Eliwood and Ninian's A-Support
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 12 ? "visible" : ""}`}>
          <p>
            Raven: Some day when this war is over, I’ll go searching for the
            truth. And I’ll pay Ostia back for my suspicions in full.{" "}
          </p>
          <p>Lucius: Excellent! </p>
          <p>Raven: Except, I want you to stay home. </p>
          <p>Lucius: What!? You are too cruel! Why!? </p>
          <p>
            Raven: I want someone to go home to, you see. So go back, and wait.{" "}
          </p>
          <p>
            Lucius: Why don’t you marry! Then there would be someone at home…
            And I could journey with you!{" "}
          </p>
          <p>
            Raven: I need no bride to jabber at me– There’s enough going on
            around here already!{" "}
          </p>
          <p>Lucius: W-What is that supposed to mean!? </p>
          <p>Raven: My case in point. </p>
          <p>Lucius: Wait– Wait! Lord Raymond!</p>
          <p className="rel-scroll-popup-label">Raven and Lucius' A-Support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 13 ? "visible" : ""}`}>
          <p>
            After the conflict, Raven revealed his past to Hector. Hector
            offered to rebuild Raven’s home, but Raven refused. He and Lucius
            travel as mercenaries, but Lucius is pleased to see his friend’s
            heart has been eased.
          </p>
          <p className="rel-scroll-popup-label">
            Raven and Lucius' paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 14 ? "visible" : ""}`}>
          <p>
            Renault: And that is the greatest pain of all… The pain of doubt. If
            I dispelled this doubt, I could free you from your pain. But then
            you should be nothing more than a puppet that kills. Use your doubt.
            Use it to become something more. I think it makes you…human.
          </p>
          <p>Isadora: Bishop Renault…</p>
          <p>
            Renault: Whether you will ever find answers, I do not know. But you
            must live with your doubt until then. If you can, then all of the
            joy and sorrow you experience… will truly belong to you.
          </p>
          <p>Isadora: Your Excellency…</p>
          <p>
            Renault: I have lived this way since I found myself… Some are
            sustained by faith, but for me, there are no answers.
          </p>
          <p className="rel-scroll-popup-label">
            Renault and Isadora's A-support
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 15 ? "visible" : ""}`}>
          <p>
            Upon their return to Renais, Eirika and Seth were wed, with the
            blessings of Ephraim and all of the Knights of Renais. The tale of
            the love that grew between a princess and her loyal knight became a
            beloved romance in Renais.
          </p>
          <p className="rel-scroll-popup-label">
            Eirika and Seth's paired ending
          </p>
          <p>
            After the war, Eirika and Forde returned to Renais. Eirika spent her
            days toiling in the reconstruction of Renais, and he was her
            faithful supporter. His portrait of Eirika captured the smile he had
            thought lost forever.
          </p>
          <p className="rel-scroll-popup-label">
            Eirika and Forde's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 15 ? "visible" : ""}`}>
          <p>
            Following the war, Tana and Eirika remained the best of friends.
            They visited one another when time permitted, and as they grew
            older, their children shared a bond of friendship as close as Eirika
            and Tana themselves did.
          </p>
          <p className="rel-scroll-popup-label">
            Eirika and Tana's paired ending
          </p>
          <p>
            After the war, Joshua challenged Gerik to a duel in hopes of
            pressing him to move to Jehanna. The match ended in a tie, but Gerik
            was impressed by Joshua’s swagger. From that day forward, Gerik
            never left Joshua’s side.
          </p>
          <p className="rel-scroll-popup-label">
            Joshua and Gerik's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 16 ? "visible" : ""}`}>
          <p>
            Heather: Well... It looks uphill battle to fight. I bet I can help
            out.
          </p>
          <p>Nephenee: But you...</p>
          <p>
            Heather: Don't worry about it. I'm the type that likes to help nice
            country girls like you.
          </p>
          <p>Nephenee: Um...like me?</p>
          <p>
            Heather: That's right. Don't worry about it. Tee hee... This is
            turning out to be a great day.
          </p>
          <p className="rel-scroll-popup-label">Chapter 2-1, Radiant Dawn</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 17 ? "visible" : ""}`}>
          <p>
            Elincia governed Crimea with resolve and a deep love for her people.
            Her reign was remembered as a golden age.
          </p>
          <p className="rel-scroll-popup-label">Elincia's ending</p>
          <p>
            Geoffrey’s chivalrous nature and loyalty to Queen Elincia ensured
            that all of Crimea supported their marriage.
          </p>
          <p className="rel-scroll-popup-label">
            Geoffrey’s paired ending with Elincia
          </p>
          <p>
            As captain of the Royal Knights and a model of chivalry, Geoffrey
            served his queen and country all his days.
          </p>
          <p className="rel-scroll-popup-label">Geoffrey’s solo ending</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 18 ? "visible" : ""}`}>
          <p>
            Once he saw stability returned, Ike left on a journey to lands still
            unknown. He was never seen again.
          </p>
          <p className="rel-scroll-popup-label">Ike's ending</p>
          <p>
            When peace had settled on the land, Soren packed lightly and set off
            with the only person he had ever trusted.
          </p>
          <p className="rel-scroll-popup-label">
            Soren's paired ending with Ike
          </p>
          <p>
            After seeing Skrimir crowned as king, Ranulf set off on a journey,
            saying only, “There’s so much I haven’t seen.”
          </p>
          <p className="rel-scroll-popup-label">
            Ranulf's paired ending with Ike
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 19 ? "visible" : ""}`}>
          <p>
            Soren: Once I had learned to speak and behave like other people, I
            wandered Crimea for several years. Then I finally found you.
          </p>
          <p>Ike: But I’d…</p>
          <p>
            Soren: Yes. You’d forgotten that day in Gallia. But I didn’t care.
            My only wish was to see you again. I just wanted to see the only boy
            who had held out a warm hand when I had nothing.
          </p>
          <p>Ike: Soren… Don’t cry.</p>
          <p>Soren: Don’t cry? What? I’m not crying…</p>
          <p>
            Ike: Soren, you’re smart, but you’re no good when it comes to your
            emotions. Come over here.
          </p>
          <p>Soren: D-don’t treat me like I’m a child! I’m not that–</p>
          <p>Ike: Come on.</p>
          <p>Soren: Shut up! Shut up…</p>
          <p>Ike: Then I’ll come over to you.</p>
          <p className="rel-scroll-popup-label">
            Part 4-Endgame 5, Radiant Dawn
          </p>
          <p>
            There’s only one place for me to be, Ike... and it’s by your side.
          </p>
          <p className="rel-scroll-popup-label">
            Soren and Ike's A-support, Path of Radiance
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 20 ? "visible" : ""}`}>
          <p>
            Chrom: There's a war going on, and people are suffering. I can't
            ignore them. I won't.
          </p>
          <p>
            Robin: So why not send your men to search for these hapless
            innocents?!
          </p>
          <p>
            Chrom: Because...of you. If I hadn't been there—if Frederick alone
            had found you—would we have ever met?
          </p>
          <p>Robin: ...Probably not.</p>
          <p>
            Chrom: You see? And it's not just you, Robin. It's everyone like
            you. I know going out there exposes me to danger, and I haven't
            always been careful. But it's a risk I'm willing to take in order to
            connect with the people. To forge bonds.
          </p>
          <p>Robin: Bonds? Between who?</p>
          <p>
            Chrom: You and me. Me and the others. The villagers we've met, the
            world we've seen... Such bonds are the true strength of this army.
          </p>
          <p>
            Robin: It's hard to argue when you use me as your example. But at
            least let me come with you.
          </p>
          <p>Chrom: So you can watch my back?</p>
          <p>
            Robin: That's part of it, yes. But I also want to be there when you
            find the next me, face down in the field. I want to help you make
            this army stronger. I want to help you forge new bonds.
          </p>
          <p className="rel-scroll-popup-label">
            Male Robin and Chrom's A-support
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 21 ? "visible" : ""}`}>
          <p>
            Chrom: Robin... I'm in love with you. I have been from the very
            first moment I laid eyes on you. I just didn't realize it until the
            last little while.
          </p>
          <p>Robin: ......</p>
          <p>
            Chrom: Look, I know this is sudden. But I'm not trying to force you
            into a decision, believe me. Whatever your answer, I shall abide by
            it—no matter how painful. And come what may, we'll always be
            friends. That I promise.
          </p>
          <p>
            Robin: This is... I'm sorry, Chrom, but this is impossible. The
            general and his chief tactician? It just... It wouldn't be right.
            Our first responsibility must be to the soldiers we lead, not to
            each other. You understand that, don't you?
          </p>
          <p>Chrom: Yes, I do.</p>
          <p>
            Robin: But someday this war will end. We'll emerge victorious and
            bring peace back to the world. And when that happens, we'll be free
            to follow our hearts.
          </p>
          <p>Chrom: ...OUR hearts?</p>
          <p>Robin: Yes...because I love you as well.</p>
          <p>
            Chrom: You do? But that's...but that's... Wonderful! This is the
            best day of my life! Robin...listen to me...
          </p>
          <p>
            Chrom: You are the wind at my back, and the sword at my side.
            Together, my love, we shall build a peaceful world, just you and me.
          </p>
          <p className="rel-scroll-popup-label">
            Female Robin and Chrom's S-support
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 22 ? "visible" : ""}`}>
          <p>
            Niles: Given two people with equally complex histories... What do
            you think would happen if they joined to create a new future
            together? As a married couple.
          </p>
          <p>Corrin: A married couple?!</p>
          <p>
            Niles: Yes. I've done a lot of thinking about this. You and I have
            so much in common. You're the first person I've ever met who has
            shown genuine empathy for me. And I don't believe that's a
            coincidence.
          </p>
          <p>Corrin: This is a lot to take in.</p>
          <p>
            Niles: Do you think you could marry me? I want you to take this
            ring.
          </p>
          <p>Corrin: Niles...</p>
          <p>
            Niles: You seem hesitant. Very well, I was aware that my chances
            were slim...
          </p>
          <p>Corrin: You speak too soon, Niles.</p>
          <p>Niles: Hmm?</p>
          <p>
            Corrin: In truth, I've become fascinated with you. You've overcome
            so much. Our past is out of our control and irrelevant. You've shown
            me how to move forward. So...yes. I will marry you.
          </p>
          <p className="rel-scroll-popup-label">Corrin and Niles' S-support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 23 ? "visible" : ""}`}>
          <p>
            Corrin: To be honest...I've enjoyed having you around...pretty much
            all of the time.
          </p>
          <p>Rhajat: Do you mean that?</p>
          <p>
            Corrin: I do. I don't know what I'd do anymore if I looked up and
            you weren't there. I...I've even followed YOU around once or twice.
          </p>
          <p>Rhajat: What?! And I didn't notice? Grr!</p>
          <p>Corrin: Hah! Maybe I've learned a thing or two from you.</p>
          <p>
            Rhajat: I assure you that you still have more to learn. But I'm glad
            to see that you're becoming as obsessed with me as I am with you.
          </p>
          <p>
            Corrin: Perhaps we should stop sneaking around each other like
            this... I'd like to spend the rest of my life with you in plain
            sight.
          </p>
          <p>
            Rhajat: Eh, that doesn't sound too great. I'd like to be stalking
            you at least 20 percent of the time.
          </p>
          <p>Corrin: Fair enough. Will you marry me, Rhajat?</p>
          <p>Rhajat: I will. I love you, Corrin!</p>
          <p>
            Rhajat: I've got you right where I want you. And I'm never going to
            let go...
          </p>
          <p className="rel-scroll-popup-label">Corrin and Rhajat' S-support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 24 ? "visible" : ""}`}>
          <p>Valbar: You're awful quiet there, Leon. Something on your mind?</p>
          <p>
            Leon: Just realizing I've been a fool for feeling sorry for myself.
            Compared to what you've gone through, my worries are nothing.
          </p>
          <p>
            Valbar: Worries, eh? I didn't think you were the type for all that.
          </p>
          <p>
            Leon: Uh, hi? Rude? I've my share of concern, the same as anyone
            else. Such as a not-insignificant case of unrequited love.
          </p>
          <p>Valbar: ...Oh. That.</p>
          <p>
            Leon: Heh heh. But it's fine. Emotions come in many forms, and as
            you say, there's no point in hanging on. I'm still glad I have these
            feelings, and nothing will change that.
          </p>
          <p className="rel-scroll-popup-label">Leon and Valbar's A-support</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 1 ? "visible" : ""}`}>
          <p>
            Kamui: What would you do if Valbar ended up being the opposite of
            your ideal?
          </p>
          <p>
            Leon: Well, that's an absurd question. But in the interest of
            humoring you and passing the time... Well, I suppose I'd set off
            looking for a man who met my perfect ideal. A journey like that
            might actually be kind of... fun.
          </p>
          <p>
            Kamui: I think that's the first time you and I have agreed on
            anything.
          </p>
          <p>
            Leon: Listen, Kamui, I'm sorry. Really I am. This is all very
            flattering, but I just don't see you like that.
          </p>
          <p>Kamui: I told you before, that's not what I'm— Oh, never mind!</p>
          <p className="rel-scroll-popup-label">Leon and Kamui's A-support</p>
          <p>
            Welcomed into the One Kingdom’s Brotherhood of Knights, Leon
            remained at Valbar’s side until an injury ended his fighting career.
            He then took up work as a merchant in the city market, where he
            lived free, happy, and dauntlessly true to himself to the last.
          </p>
          <p className="rel-scroll-popup-label">Leon's ending</p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 25 ? "visible" : ""}`}>
          <p>
            Edelgard: I don't know what the future holds, but...come what may,
            will you stay by my side? You chose to protect me at the Holy Tomb.
            Will you choose me again?
          </p>
          <p>Edelgard: What I'm trying to say is...I need you.</p>
          <p>Byleth: El... Please accept this gift.</p>
          <p>
            Edelgard: This ring... It's lovely. Thank you, my dearest friend. I
            will happily accept it. I must admit, I feared my feelings would be
            unrequited. So long as I had you by my side, it never mattered how
            many enemies I amassed. You were all I needed. All this time, I
            longed to share my feelings with you, and it seems you wished for
            the same. Now, our wishes have come true. This feeling... it's
            overwhelming.
          </p>
          <p>Byleth: I promise to always be there for you.</p>
          <p>
            Edelgard: I promise the same. Together, we can achieve anything.
          </p>
          <p className="rel-scroll-popup-label">
            Edelgard and Byleth's S-support
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 26 ? "visible" : ""}`}>
          <p>
            They achieved much in their time together, and it is said that they
            were sometimes spotted leaving the palace to privately enjoy the
            world they had created. How they spent those previous moments, none
            but the two of them will ever know.
          </p>
          <p className="rel-scroll-popup-label">
            Byleth and Edelgard's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 27 ? "visible" : ""}`}>
          <p>
            When Byleth took on the role of archbishop in Rhea's place, he
            devoted himself to official business as the new leader of the Church
            of Seiros. Behind his achievements was the knight Gustave, formerly
            known as Gilbert of the Knights of Seiros, who remained always by
            the archbishop's side. Byleth came to rely on Gustave for nearly
            everything. It is said that he continued to call upon Gustave for
            instruction and advice well into his retirement.
          </p>
          <p className="rel-scroll-popup-label">
            Byleth and Gilbert's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 28 ? "visible" : ""}`}>
          <p>
            The Mittelfrank Opera Company was on the brink of collapse until two
            of its star songstresses, Manuela and Dorothea, returned to the
            stage and brought the troupe new life and prominence. When the
            damage from the war had finally healed, the pair once again
            retreated from the stage, this time retiring to a private life
            together. It is said that their relationship was full of light and
            love.
          </p>
          <p className="rel-scroll-popup-label">
            Dorothea and Manuela's paired ending
          </p>
        </div>
      </div>
      <div className="rel-scroll-popup-container">
        <div className={`rel-scroll-popup ${id === 29 ? "visible" : ""}`}>
          <p>
            After quitting the Knights of Seiros, Catherine and Shamir set out
            on a lifelong journey together. The pair were inseparable as they
            traveled across Fodlan, and eventually wound up in Shamir's homeland
            of Dagda.
          </p>
          <p className="rel-scroll-popup-label">
            Catherine and Shamir's paired ending
          </p>
          <p>
            After the war, Linhardt and Caspar abandoned their noble houses to
            pursue a carefree journey wandering the world. They traveled to
            every corner of Fodlan, and even ventured abroad now and again.
            Caspar got into trouble at every turn on their travels, but Linhardt
            was always there, begrudgingly, to get him out of it. It is said
            they did eventually settle down, after the events in those stories,
            but where they actually went is unknown.
          </p>
          <p className="rel-scroll-popup-label">
            Linhardt and Caspar's paired ending
          </p>
        </div>
      </div>
    </>
  );
}

export default PairingPopups;
