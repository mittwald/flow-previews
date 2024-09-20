import{S as o}from"./Section-C6mUdahz.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as n}from"./Heading-CLA_pkGz.js";import{T as a}from"./Text-CvyZKomL.js";import{T as c}from"./TextField-DJwTJKr_.js";import{L as u}from"./Label-awdnwB0E.js";import{L as T}from"./Link-BmdpRAhu.js";import{S as B}from"./Switch-BpLJJLOu.js";import{S as d}from"./StatusBadge-BH5h7lsu.js";import{H as s}from"./Header-DWjtnrkO.js";import"./IconApp-FFcOAhSU.js";import{b as v,i as C}from"./IconWarning-DVQwOeH0.js";import{B as r}from"./Button-zGGzAHNA.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Action-BcnqqLhy.js";import{M as g}from"./ModalTrigger-BeLV1Wmt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-B2GRt226.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Activity-CPnWONG0.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Hidden-DMUPAT4b.js";import"./Header-HCQ-zEiT.js";import"./utils-DI5tH0Ou.js";import"./Heading-Lmh25Bta.js";import"./RSPContexts-BseA8goh.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text--Nm9EVqj.js";import"./TextFieldBase-DOyBLmKr.js";import"./FormField.module-kJA35Jin.js";import"./Form-cGlRQF10.js";import"./useFocusable-BZYwbtlG.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./FieldDescription-DqVrToG7.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Input-CEeVCiTT.js";import"./Label-D5u8zl72.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-DwjSG6jb.js";import"./useFormReset-DlrFI1sj.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-DMpbNI7r.js";import"./useToggleState-pg2EuAp2.js";import"./VisuallyHidden-D3JK2BHS.js";import"./StatusIcon-BBDcIzkW.js";import"./LoadingSpinner-8uPh6FlH.js";import"./Button-DHNhLPwP.js";import"./context-BggLOsA2.js";import"./useSelector-D2GE8II6.js";import"./dynamic-DKDa4OpU.js";import"./OverlayTrigger-3DzVKfO2.js";import"./OverlayArrow-BcV34qBK.js";import"./number-nHrFdSb-.js";import"./FocusScope-BPYREqet.js";import"./getScrollParent-CcmJp979.js";const Ue={title:"Structure/Section",component:o,render:t=>e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe"))},i={},m={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(n,null,e.createElement(v,null),"Personal Information"),e.createElement(c,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(c,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe")))},l={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"Newsletter ",e.createElement(d,null,"Subscribed")),e.createElement(B,{defaultSelected:!0},"Subscription"),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date.")),e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"My Project with a looooooooooong name",e.createElement(d,{status:"danger"},"Deactivated")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{color:"accent"},"Activate"))),e.createElement(a,null,p.medium)),e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"My Project"),e.createElement(r,{variant:"soft",color:"secondary"},e.createElement(C,null)),e.createElement(r,{color:"danger"},"Deactivate")),e.createElement(a,null,p.medium)))};var b,S,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var y,x,H;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(M=(h=l.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const je=["Default","MultipleSections","WithHeaderContent"];export{i as Default,m as MultipleSections,l as WithHeaderContent,je as __namedExportsOrder,Ue as default};
