import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-CXxJ1PGC.js";import"./index-Daz97z6Q.js";import"./index-CKQW-jEo.js";import{S as n}from"./Section-Bnyg2777.js";import{T as r}from"./Text-C0DLGRNQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-QEeDNvGW.js";import"./index-BOkhicXD.js";import"./index-B3BNL2EQ.js";import"./index-DXlCzpEX.js";import"./useFocusable-RGXmTSaR.js";import"./utils-C7OtDhNB.js";import"./usePress-D_26Yem3.js";import"./FocusScope-CWtX81LG.js";import"./useEvent-BL9KwTgj.js";import"./Dialog-DrRXEBMJ.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-D0MIRduX.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-C0jXhLYz.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-CNR_uYUR.js";import"./VisuallyHidden-D--TIFAz.js";import"./Collection-CjvWy9qW.js";import"./Popover-CyMzr4Vs.js";import"./Text-BYJas5cX.js";import"./IconApp-Bqs2Ag64.js";import"./IconWarning-BaU_oeNF.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-B4xtKTpi.js";import"./index-DHPuW7GG.js";import"./Button-B3kcPtTp.js";import"./LoadingSpinner-RZaVNG4l.js";import"./Button-Cw5E5qm1.js";import"./index-BkeTpYxc.js";import"./Heading-20-rY8KL.js";import"./index-BxS8x1xz.js";import"./index-GJf-_heS.js";import"./FormField.module-34EknUzL.js";import"./Form-NGP_1qVw.js";import"./useLabel-DiVdGcuc.js";import"./Input-8BYvBazc.js";import"./useFormReset-CxIkinkb.js";import"./Label-Bk9KOE91.js";import"./index-HPGIZNGH.js";import"./Label-CaFxWXkb.js";import"./LabeledValue-C-lbuMIy.js";import"./index-D28rYFZd.js";import"./useToggleState-BBhQJvM9.js";import"./index-D0xmZZCM.js";import"./Header-DxeoDNZV.js";import"./index-CPibCf0t.js";import"./StatusIcon-CnzvuHBn.js";import"./index-CxNkZrba.js";import"./index-IVpWfQyc.js";const Be={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
