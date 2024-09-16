import{S as o}from"./Section-B5VVsvHQ.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as n}from"./Heading-CkSULLTy.js";import{T as a}from"./Text-BeE63-Dr.js";import{T as c}from"./TextField-BonV9fUF.js";import{L as u}from"./Label-H6f0-JrX.js";import{L as T}from"./Link-DhPUc9sA.js";import{S as B}from"./Switch-BFlN3ADF.js";import{S as d}from"./StatusBadge-DPea92KV.js";import{H as s}from"./Header-BgWFABFf.js";import"./IconApp-Cw6LIZ6L.js";import{b as v,i as C}from"./IconWarning-CYODic7s.js";import{B as r}from"./Button-CSV5PcNg.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Action-BHSDSfnz.js";import{M as g}from"./ModalTrigger-BI05Xuy-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-C5nr8jLZ.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Activity-CPnWONG0.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Hidden-BsXGu--s.js";import"./Header-DCsdZpIF.js";import"./utils-CSHM5tWr.js";import"./Heading-zFf9nh9b.js";import"./RSPContexts-BseA8goh.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-BNegcRvf.js";import"./TextFieldBase-tKIkeaoK.js";import"./FormField.module-jgORCpta.js";import"./Form-DTFy3O7Q.js";import"./useFocusRing-CRCkdtud.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-BbBgdTsH.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Input-DMV1KN-k.js";import"./Label-CaZe8gQk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-4jd-r0Vf.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./useFocusable-Dtk_6mL9.js";import"./usePress-Do5SRlXR.js";import"./useToggleState-BGO0y5IJ.js";import"./VisuallyHidden-D4oQIDY4.js";import"./StatusIcon-jyUCL6ri.js";import"./LoadingSpinner-Bx2kpYXf.js";import"./Button-CkDWo4mt.js";import"./context-SbXjCjP8.js";import"./useSelector-r0W13MRO.js";import"./dynamic-DKDa4OpU.js";import"./OverlayTrigger-uZ2IyM3m.js";import"./OverlayArrow-B3YixoJg.js";import"./number-nHrFdSb-.js";import"./FocusScope-CGKzeA_Y.js";import"./getScrollParent-CcmJp979.js";const je={title:"Structure/Section",component:o,render:t=>e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe"))},i={},m={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(n,null,e.createElement(v,null),"Personal Information"),e.createElement(c,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(c,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe")))},l={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"Newsletter ",e.createElement(d,null,"Subscribed")),e.createElement(B,{defaultSelected:!0},"Subscription"),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date.")),e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"My Project with a looooooooooong name",e.createElement(d,{status:"danger"},"Deactivated")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{color:"accent"},"Activate"))),e.createElement(a,null,p.medium)),e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"My Project"),e.createElement(r,{variant:"soft",color:"secondary"},e.createElement(C,null)),e.createElement(r,{color:"danger"},"Deactivate")),e.createElement(a,null,p.medium)))};var b,S,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var y,x,H;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <>
      <Section {...props}>
        <Heading>
          <IconMember />
          Personal Information
        </Heading>
        <TextField isRequired defaultValue="John">
          <Label>First name</Label>
        </TextField>
        <TextField isRequired defaultValue="Doe">
          <Label>Last name</Label>
        </TextField>
      </Section>
      <Section {...props}>
        <Heading>Newsletter</Heading>
        <Text>
          Upcoming releases, new features and tips about your hosting - we bring
          you the most important information in your inbox. Subscribe to our
          newsletter and stay up to date.
        </Text>
        <Link href="#">Subscribe</Link>
      </Section>
    </>
}`,...(H=(x=m.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var w,h,M;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <>
      <Section {...props}>
        <Header>
          <Heading>
            Newsletter <StatusBadge>Subscribed</StatusBadge>
          </Heading>

          <Switch defaultSelected>Subscription</Switch>
          <Button variant="soft" color="secondary">
            Start database migration
          </Button>
        </Header>
        <Text>
          Upcoming releases, new features and tips about your hosting - we bring
          the most important information to inbox. Subscribe to our newsletter
          and stay up to date.
        </Text>
      </Section>
      <Section {...props}>
        <Header>
          <Heading>
            My Project with a looooooooooong name
            <StatusBadge status="danger">Deactivated</StatusBadge>
          </Heading>
          <Action>
            <Modal slot="actionConfirm">
              <Heading>Confirmation Modal</Heading>
            </Modal>
            <Button variant="soft" color="secondary">
              Start database migration
            </Button>
          </Action>
          <Action>
            <Modal slot="actionConfirm">
              <Heading>Confirmation Modal</Heading>
            </Modal>
            <Button color="accent">Activate</Button>
          </Action>
        </Header>
        <Text>{dummyText.medium}</Text>
      </Section>
      <Section {...props}>
        <Header>
          <Heading>My Project</Heading>
          <Button variant="soft" color="secondary">
            <IconContextMenu />
          </Button>
          <Button color="danger">Deactivate</Button>
        </Header>
        <Text>{dummyText.medium}</Text>
      </Section>
    </>
}`,...(M=(h=l.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const qe=["Default","MultipleSections","WithHeaderContent"];export{i as Default,m as MultipleSections,l as WithHeaderContent,qe as __namedExportsOrder,je as default};
