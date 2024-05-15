import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-pElgJ2wl.js";import"./index-DXjA3jiw.js";import"./index-AB4t4iiq.js";import{S as n}from"./Section-B4n14f5j.js";import{T as r}from"./Text-DO63ymi3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-mx6gNTLC.js";import"./index-BOkhicXD.js";import"./index-CWvqEudm.js";import"./index-Dx5oAdt2.js";import"./useFocusable-DNSguhwx.js";import"./utils-CdQPmsSK.js";import"./usePress-BYMZ8FXB.js";import"./FocusScope-C7oaV3dv.js";import"./useEvent-BBHMoIxk.js";import"./Dialog-D2Subqkv.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-F9Tj1JST.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSZsX2U2.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-Cb96l7Yv.js";import"./VisuallyHidden-kdbq3tHP.js";import"./Collection-DoEXPhES.js";import"./Popover-BYgLdfRy.js";import"./Text-CCrwicCI.js";import"./IconApp-BIdwNI98.js";import"./IconWarning-D8_Kmr9-.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-pYgiwtgi.js";import"./index-AUac-Xx-.js";import"./Button-Dh2QoOvP.js";import"./LoadingSpinner-66NAcl6E.js";import"./Button-B0KPMA4K.js";import"./index-DQQEtRHx.js";import"./Heading-hz5PLd9i.js";import"./index-C4PLwbr_.js";import"./index-B0gsvtGS.js";import"./FormField.module-LvYbSK_w.js";import"./Form-CYvIfZY5.js";import"./useLabel-BPOl7npH.js";import"./Input-CS4ZEe3F.js";import"./useFormReset-BVAoG5kh.js";import"./Label-CQOGn-Bz.js";import"./index-D4sAUk7Q.js";import"./Label-DR5LScjm.js";import"./LabeledValue-CGMNpUy4.js";import"./index-IA-mdrGu.js";import"./useToggleState-SwxixQ5g.js";import"./index-qwYnRWmq.js";import"./Header-B0VgwbfO.js";import"./index-BIri02p6.js";import"./StatusIcon-ZGri-9gZ.js";import"./index-DePfloUh.js";const Ae={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Be=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Be as __namedExportsOrder,Ae as default};
