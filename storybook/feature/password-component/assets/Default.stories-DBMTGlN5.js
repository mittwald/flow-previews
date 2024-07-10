import{S as n}from"./Section-Rvmxs17J.js";import{R as e}from"./index-BwDkhjyp.js";import{H as r}from"./Heading-CWJy5QRX.js";import{T as a}from"./Text-9sk1yuEP.js";import{T as c}from"./TextField-Ds7yctqK.js";import{L as u}from"./Label-19OEyuih.js";import{L as H}from"./Link-C8DSbxNB.js";import{S as T}from"./Switch-C0mZ2l2i.js";import{S as d}from"./StatusBadge-cv2NmDaB.js";import{H as l}from"./Header-0ZrJLFST.js";import"./IconApp-DBpcl0fC.js";import{b as B,g as v}from"./IconWarning-BftDN5EW.js";import{B as o}from"./Button-D6AAkLLn.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./flowComponent-arII6e68.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Activity-Cov3f-FH.js";import"./ContextMenu.module-CAjBRoKS.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Wrap-DQq6jo70.js";import"./Text-BuIyiEeX.js";import"./TextFieldBase-17NoigTW.js";import"./FormField.module-DR_kdvFm.js";import"./Form-CL2fRmNo.js";import"./useFocusable-CtcwBWSa.js";import"./useLabel-BaXqGmeE.js";import"./useLabels-kg7v6Afk.js";import"./FieldDescription-C6NwozVR.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./TextField-BNwOvocl.js";import"./Input-DSzdqNHR.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormReset-CfqvoD0r.js";import"./useControlledState-C0C-dzuH.js";import"./Label-BdwIGkgY.js";import"./usePress-C1ab-RBW.js";import"./useToggleState-DHp5tDAt.js";import"./VisuallyHidden-ZyvE9T3T.js";import"./StatusIcon-ER_a_72l.js";import"./LoadingSpinner-flulPeUb.js";import"./Button-C6BAnfYv.js";const he={title:"Structure/Section",component:n,render:t=>e.createElement(n,{...t},e.createElement(r,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date."),e.createElement(H,{href:"#"},"Subscribe"))},i={},m={render:t=>e.createElement(e.Fragment,null,e.createElement(n,{...t},e.createElement(r,null,e.createElement(B,null),"Personal Information"),e.createElement(c,{isRequired:!0,defaultValue:"John"},e.createElement(u,null,"First name")),e.createElement(c,{isRequired:!0,defaultValue:"Doe"},e.createElement(u,null,"Last name"))),e.createElement(n,{...t},e.createElement(r,null,"Newsletter"),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring you the most important information in your inbox. Subscribe to our newsletter and stay up to date."),e.createElement(H,{href:"#"},"Subscribe")))},s={render:t=>e.createElement(e.Fragment,null,e.createElement(n,{...t},e.createElement(l,null,e.createElement(r,null,"Newsletter ",e.createElement(d,null,"Subscribed")),e.createElement(T,{defaultSelected:!0},"Subscription"),e.createElement(o,{variant:"soft",color:"secondary"},"Start database migration")),e.createElement(a,null,"Upcoming releases, new features and tips about your hosting - we bring the most important information to inbox. Subscribe to our newsletter and stay up to date.")),e.createElement(n,{...t},e.createElement(l,null,e.createElement(r,null,"My Project with a looooooooooong name",e.createElement(d,{status:"danger"},"Deactivated")),e.createElement(o,{variant:"soft",color:"secondary"},"Start database migration"),e.createElement(o,{color:"accent"},"Activate")),e.createElement(a,null,p.medium)),e.createElement(n,{...t},e.createElement(l,null,e.createElement(r,null,"My Project"),e.createElement(o,{variant:"soft",color:"secondary"},e.createElement(v,null)),e.createElement(o,{color:"danger"},"Deactivate")),e.createElement(a,null,p.medium)))};var b,g,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(S=(g=i.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,E,y;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const He=["Default","MultipleSections","WithHeaderContent"];export{i as Default,m as MultipleSections,s as WithHeaderContent,He as __namedExportsOrder,he as default};
