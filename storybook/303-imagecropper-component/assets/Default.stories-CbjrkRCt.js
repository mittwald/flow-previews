import{S as o}from"./Section-DDZL8g9_.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as n}from"./Heading-TK7j1OMP.js";import{T as a}from"./Text-U6fXasfV.js";import{T as s}from"./TextField-tuT_N8oC.js";import{L as u}from"./Label-LjpPhEpK.js";import{L as T}from"./Link-CANUX3pR.js";import{S as B}from"./Switch-uA3TfFaf.js";import{A as d}from"./AlertBadge-JV9jYeU5.js";import{H as c}from"./Header-DgsWIsDp.js";import"./IconApp-BvR14QOm.js";import{b as A,i as v}from"./IconWarning-DvIm1kNF.js";import{B as r}from"./Button-CP_UNic0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Action-BPHLOjQX.js";import{M as g}from"./ModalTrigger-Bu0ltr8k.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Hidden-CCrdO6Wk.js";import"./Header-BtBTxt0E.js";import"./utils-BwYH5X3X.js";import"./Heading-eVsuDLmW.js";import"./RSPContexts-BseA8goh.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Wrap-DQq6jo70.js";import"./Text-Dd84vsje.js";import"./TextFieldBase-CkmMgOje.js";import"./FormField.module-DNby2qWh.js";import"./Form-CqlMkRPm.js";import"./useFocusRing-if03xCoO.js";import"./useLabel-RWB8_cdz.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-Bp9q2b5T.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./Input-8WbdzIVX.js";import"./Label-z8V7EdU9.js";import"./useTextField-DZljNCaL.js";import"./useFormReset-B-nkSQHj.js";import"./useControlledState-B7K2eYzO.js";import"./useFocusable-VJrkZIcY.js";import"./usePress-1fQJjpyE.js";import"./useToggleState-D1i5Plhd.js";import"./VisuallyHidden-BWHYRTKp.js";import"./AlertIcon-CJTUCnVS.js";import"./LoadingSpinner-CmBEOOxV.js";import"./Button-BebB4Pfr.js";import"./ProgressBar-AEPgO8_B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./context-D-nUHgHo.js";import"./useSelector-DDdDwEvg.js";import"./dynamic-DKDa4OpU.js";import"./OverlayTrigger-Bdr7_DCO.js";import"./OverlayArrow-DTpAwzOr.js";import"./PressResponder-CCvTmYWN.js";import"./FocusScope--STy3lDT.js";import"./getScrollParent-CcmJp979.js";const qe={title:"Structure/Section",component:o,render:t=>e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe"))},i={},m={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(n,null,e.createElement(A,null),"Personal Information"),e.createElement(s,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(s,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(o,{...t},e.createElement(n,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(T,{href:"#"},"Subscribe")))},l={render:t=>e.createElement(e.Fragment,null,e.createElement(o,{...t},e.createElement(c,null,e.createElement(n,null,"Newsletter ",e.createElement(d,null,"Subscribed")),e.createElement(B,{defaultSelected:!0},"Subscription"),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date.")),e.createElement(o,{...t},e.createElement(c,null,e.createElement(n,null,"My Project with a looooooooooong name",e.createElement(d,{status:"danger"},"Deactivated")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(f,null,e.createElement(g,{slot:"actionConfirm"},e.createElement(n,null,"Confirmation Modal")),e.createElement(r,{color:"accent"},"Activate"))),e.createElement(a,null,p.medium)),e.createElement(o,{...t},e.createElement(c,null,e.createElement(n,null,"My Project"),e.createElement(r,{variant:"soft",color:"secondary"},e.createElement(v,null)),e.createElement(r,{color:"danger"},"Deactivate")),e.createElement(a,null,p.medium)))};var b,E,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,x,H;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
            Newsletter <AlertBadge>Subscribed</AlertBadge>
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
            <AlertBadge status="danger">Deactivated</AlertBadge>
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
}`,...(M=(h=l.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const Ve=["Default","MultipleSections","WithHeaderContent"];export{i as Default,m as MultipleSections,l as WithHeaderContent,Ve as __namedExportsOrder,qe as default};
