import{S as o}from"./Section-hsBef4Kf.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as n}from"./Heading-B14qmMr9.js";import{T as a}from"./Text-BM3moMBE.js";import{T as c}from"./TextField-BplhZ0NA.js";import{L as u}from"./Label-BpnA_KhO.js";import{L as T}from"./Link-BykJVV6o.js";import{S as B}from"./Switch-B05ulSJn.js";import{S as d}from"./StatusBadge-BVRWhwMA.js";import{H as s}from"./Header-BI0EsPmy.js";import"./IconApp-CyHi4WPz.js";import{b as v,f as C}from"./IconWarning-DZJaqlYL.js";import{B as r}from"./Button-m5USM9JU.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Action-C93l4HVN.js";import{M as g}from"./ModalTrigger-9qsEjMVo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./flowComponent-BttIposY.js";import"./index-BMdlDBjA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Activity-Bj6QwKZx.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-DR5xXegF.js";import"./Header-CXhviMrv.js";import"./utils-Cy-A-nlV.js";import"./RSPContexts-BseA8goh.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dh5WnJTs.js";import"./TextFieldBase-rqc4NlBq.js";import"./FormField.module-Wg7kvnEu.js";import"./Form-BsdqCRI5.js";import"./useFocusable-OFlS-6qe.js";import"./useLabel-B-9ggeSA.js";import"./useLabels-n83dATVM.js";import"./FieldDescription-DGU-9Dmk.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./Input-B2XFbQTW.js";import"./Label-8PgMpAzA.js";import"./filterDOMProps-CeZl_uWj.js";import"./useTextField-CKAAhVIN.js";import"./useFormReset-DRCqKyTt.js";import"./useControlledState-B7K2eYzO.js";import"./usePress-CTrgc7uI.js";import"./useToggleState-CsqVtbqc.js";import"./VisuallyHidden-D76woJCP.js";import"./StatusIcon-CQCgex6B.js";import"./LoadingSpinner-T2v-ofXf.js";import"./Button-DrQgql3X.js";import"./context-ByqglxCN.js";import"./useSelector-e9voYkxv.js";import"./dynamic-DKDa4OpU.js";import"./OverlayTrigger-BxJNM7zm.js";import"./OverlayArrow-BBlidXZz.js";import"./number-nHrFdSb-.js";import"./PressResponder-COi_Rbo6.js";import"./FocusScope-67rE8EpU.js";import"./getScrollParent-CcmJp979.js";const Re={title:"Structure/Section",component:o,render:t=>e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe"))},i={},m={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(n,null,e.createElement(v,null),"Personal Information"),e.createElement(c,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(c,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe")))},l={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"Newsletter ",e.createElement(d,null,"Subscribed")),e.createElement(B,{defaultSelected:!0},"Subscription"),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date.")),e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"My Project with a looooooooooong name",e.createElement(d,{status:"danger"},"Deactivated")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{color:"accent"},"Activate"))),e.createElement(a,null,p.medium)),e.createElement(o,{...t},e.createElement(s,null,e.createElement(n,null,"My Project"),e.createElement(r,{variant:"soft",color:"secondary"},e.createElement(C,null)),e.createElement(r,{color:"danger"},"Deactivate")),e.createElement(a,null,p.medium)))};var b,S,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var y,x,H;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(M=(h=l.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const Ne=["Default","MultipleSections","WithHeaderContent"];export{i as Default,m as MultipleSections,l as WithHeaderContent,Ne as __namedExportsOrder,Re as default};
