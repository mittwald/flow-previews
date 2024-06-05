import{S as r}from"./Section-BX_QgEBU.js";import{R as e}from"./index-uCp2LrAq.js";import{H as n}from"./Heading-2hsWwErZ.js";import{T as m}from"./Text-BPR0_XVn.js";import{T as l}from"./TextField-D-BSYz_9.js";import{L as u}from"./Label-C6AmQGH5.js";import{L as H}from"./Link-BmKe-kg_.js";import{S as L}from"./Switch-Cvuouk-e.js";import{S as F}from"./StatusBadge-ew1OOSzI.js";import{H as T}from"./Header-ChDIOXtm.js";import"./IconApp-Cxjf7gPB.js";import{b as N}from"./IconWarning-CR1QMAEc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./flowComponent-wUaQYyEI.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./utils-DZgOXw50.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-D6Zjnbf0.js";import"./TextFieldBase-VufC3sA2.js";import"./FormField.module-B_Qgt1D5.js";import"./Form-DfhY7G1r.js";import"./useFocusable-rZ2Ly5zk.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./FieldDescription-bWVZSkz8.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Input-CMYLvj2s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-Bt7ImmB-.js";import"./useControlledState-B8AA3oOY.js";import"./Label-BQk6lJ-q.js";import"./usePress-B-dVD-xw.js";import"./useToggleState-C3edgkad.js";import"./VisuallyHidden-dBh8p4gE.js";import"./StatusIcon-DgHjPte5.js";const Se={title:"Structure/Section",component:r,render:t=>e.createElement(r,{...t},e.createElement(n,null,"Newsletter"),e.createElement(m,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(H,{href:"#"},"Subscribe"))},o={},a={render:t=>e.createElement(e.Fragment,null,e.createElement(r,{...t},e.createElement(n,null,e.createElement(N,null),"Personal Information"),e.createElement(l,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(l,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(r,{...t},e.createElement(n,null,"Newsletter"),e.createElement(m,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(H,{href:"#"},"Subscribe")))},i={render:t=>e.createElement(r,{...t},e.createElement(T,null,e.createElement(n,null,"Newsletter"),e.createElement(L,null,"Subscription")),e.createElement(m,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."))},s={render:t=>e.createElement(r,{...t},e.createElement(T,null,e.createElement(n,null,"Newsletter"),e.createElement(F,null,"Subscribed")),e.createElement(m,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."))};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,S,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var f,w,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <Section {...props}>
      <Header>
        <Heading>Newsletter</Heading>
        <Switch>Subscription</Switch>
      </Header>
      <Text>
        Upcoming releases, new features and tips about your hosting - we bring
        the most important information to inbox. Subscribe to our newsletter and
        stay up to date.
      </Text>
    </Section>
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var E,x,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <Section {...props}>
      <Header>
        <Heading>Newsletter</Heading>
        <StatusBadge>Subscribed</StatusBadge>
      </Header>
      <Text>
        Upcoming releases, new features and tips about your hosting - we bring
        the most important information to inbox. Subscribe to our newsletter and
        stay up to date.
      </Text>
    </Section>
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const ge=["Default","MultipleSections","WithSwitch","WithStatusBadge"];export{o as Default,a as MultipleSections,s as WithStatusBadge,i as WithSwitch,ge as __namedExportsOrder,Se as default};
