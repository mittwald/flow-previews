import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-BlECfgvr.js";import"./index-CpQwDZ82.js";import"./index-ZGtVZsDz.js";import{S as n}from"./Section-Ce2jV9YY.js";import{T as r}from"./Text-CRgtz34V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvYijzQN.js";import"./index-BOkhicXD.js";import"./index-VV7y5rlT.js";import"./index-yGv1oPtN.js";import"./useFocusable-DdMdjPK0.js";import"./utils-DWaAzItp.js";import"./usePress-GzZvjGFA.js";import"./FocusScope-DsV13NlO.js";import"./useEvent-JfVSFEa6.js";import"./Dialog-CUn0EhxI.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CblaC-Mh.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-LW5SiPO7.js";import"./VisuallyHidden-ORZgQdGI.js";import"./Collection-BDIHGFnI.js";import"./Popover-IRcdiENY.js";import"./Text-5ecqfi7M.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-B9sYd4aE.js";import"./index-dN8z-uw3.js";import"./Button-t89z1yPQ.js";import"./LoadingSpinner-BHiCCzsu.js";import"./Button-r8qbaGYD.js";import"./index-mMkq7dwn.js";import"./Heading-p2MPOftY.js";import"./index-DEfEmVRZ.js";import"./index-DtRoiBSD.js";import"./FormField.module-Des02XVA.js";import"./Form-DzhzTTqI.js";import"./useLabel-C6gbbzAU.js";import"./Input-HbuZbdfw.js";import"./useFormReset-CgH7zaje.js";import"./Label-CTTMUmjq.js";import"./index-CSewQKTb.js";import"./Label-CfDHK9n-.js";import"./LabeledValue-DJS9Zjur.js";import"./index-DwvSl2Tf.js";import"./useToggleState-BZWnT8N-.js";import"./index-A78JWodu.js";import"./Header-CPyvpS0q.js";import"./index-BPImkm1B.js";import"./StatusIcon-TcZwWrhd.js";import"./index-C1tRuZrD.js";import"./index-DePfloUh.js";const Be={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      <Tab id="a">
        <TabTitle>Tab A</TabTitle>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Tab>
      <Tab id="b">
        <TabTitle>Tab B</TabTitle>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Tab>
    </Tabs>
}`,...(s=(c=i.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var b,u,d;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      <Tab id="a">
        <TabTitle>Tab A</TabTitle>
        <Section>
          <Text>{dummyText.short}</Text>
        </Section>
      </Tab>
      <Tab id="b">
        <TabTitle>Tab B</TabTitle>
        <Section>
          <Text>{dummyText.short}</Text>
          <Tabs {...props} disabledKeys={["spam"]}>
            <Tab id="subA">
              <TabTitle>Sub tab A</TabTitle>
              <Section>
                <Text>{dummyText.short}</Text>
              </Section>
            </Tab>
            <Tab id="subB">
              <TabTitle>Sub tab B</TabTitle>
              <Section>
                <Text>{dummyText.short}</Text>
              </Section>
            </Tab>
          </Tabs>
        </Section>
      </Tab>
    </Tabs>
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Ne=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Ne as __namedExportsOrder,Be as default};
