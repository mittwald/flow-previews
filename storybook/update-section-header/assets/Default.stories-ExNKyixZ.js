import{S as n}from"./Section-BUCiQgUY.js";import{R as e}from"./index-BwDkhjyp.js";import{H as r}from"./Heading-lKANVE1O.js";import{T as a}from"./Text-CKjZYOWy.js";import{T as c}from"./TextField-K2u6UGst.js";import{L as u}from"./Label-DmmpejK1.js";import{L as H}from"./Link-Ay8P_6g2.js";import{S as T}from"./Switch-Cz-_hRSf.js";import{S as d}from"./StatusBadge-DXxUSh5R.js";import{H as l}from"./Header-BgmfWA5t.js";import"./IconApp-D9YGKrkS.js";import{b as B,g as v}from"./IconWarning-B77fLmlz.js";import{B as o}from"./Button-CE1BCqF-.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./flowComponent-L8FZPC_o.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Activity-Cov3f-FH.js";import"./ContextMenu.module-CAjBRoKS.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-C_suByGF.js";import"./TextFieldBase-BBVpNcZC.js";import"./FormField.module-CBawRedG.js";import"./Form-Dmkgi1d-.js";import"./useFocusable-CKMlalor.js";import"./useLabel-BaXqGmeE.js";import"./useLabels-kg7v6Afk.js";import"./FieldDescription-DG7d9E6F.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./Input-DNo_oYh5.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-CfqvoD0r.js";import"./useControlledState-C0C-dzuH.js";import"./Label-DwL17Jrp.js";import"./usePress-YR3pmEr9.js";import"./useToggleState-BohumPZ6.js";import"./VisuallyHidden-BSWHffzG.js";import"./StatusIcon-CghxaSSn.js";import"./LoadingSpinner-WO6qy2zn.js";import"./Button-BTMfZQLF.js";const we={title:"Structure/Section",component:n,render:t=>e.createElement(n,{...t},e.createElement(r,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(H,{href:"#"},"Subscribe"))},i={},m={render:t=>e.createElement(e.Fragment,null,e.createElement(n,{...t},e.createElement(r,null,e.createElement(B,null),"Personal Information"),e.createElement(c,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(c,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(n,{...t},e.createElement(r,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(H,{href:"#"},"Subscribe")))},s={render:t=>e.createElement(e.Fragment,null,e.createElement(n,{...t},e.createElement(l,null,e.createElement(r,null,"Newsletter ",e.createElement(d,null,"Subscribed")),e.createElement(T,{defaultSelected:!0},"Subscription"),e.createElement(o,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date.")),e.createElement(n,{...t},e.createElement(l,null,e.createElement(r,null,"My Project with a looooooooooong name",e.createElement(d,{status:"danger"},"Deactivated")),e.createElement(o,{variant:"soft",color:"secondary"},"Start database migration"),e.createElement(o,{color:"accent"},"Activate")),e.createElement(a,null,p.medium)),e.createElement(n,{...t},e.createElement(l,null,e.createElement(r,null,"My Project"),e.createElement(o,{variant:"soft",color:"secondary"},e.createElement(v,null)),e.createElement(o,{color:"danger"},"Deactivate")),e.createElement(a,null,p.medium)))};var b,g,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,E,y;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(E=m.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var x,w,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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

          <Button variant="soft" color="secondary">
            Start database migration
          </Button>
          <Button color="accent">Activate</Button>
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
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const he=["Default","MultipleSections","WithHeaderContent"];export{i as Default,m as MultipleSections,s as WithHeaderContent,he as __namedExportsOrder,we as default};
