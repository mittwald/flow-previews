import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as a}from"./Default.stories-D5emCrLW.js";import{S as n}from"./Section-h_H_MpFq.js";import{T as r}from"./Text-KrSbjq4H.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CVx7Nq_O.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./MenuItem-BQ_UzLcm.js";import"./Popover-DHpMNNyD.js";import"./Dialog-DkqyJwif.js";import"./utils-VMHz66w6.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CxiI-V8Q.js";import"./useFocusable-6uy--nFO.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DI1g9pTm.js";import"./FocusScope-Bl0UA8jw.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-Dg6JcKHx.js";import"./IconApp-Bpay03mZ.js";import"./IconWarning-CbiRLlNJ.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-bm5IiiHI.js";import"./Header-DRa9GF5F.js";import"./useEvent-BUAZZNDw.js";import"./Separator-BVYhIw4u.js";import"./Text-CV99Jc8q.js";import"./useSingleSelectListState-DJuH32pj.js";import"./Button-kgu6ukff.js";import"./LoadingSpinner-InQx5M66.js";import"./Button-D3p9ry0o.js";import"./Heading-C0g-K2ng.js";import"./TextField-DcfNahpB.js";import"./TextFieldBase-Bp4u8UU-.js";import"./FormField.module-CGj0xD-e.js";import"./Form-JBmGvwo6.js";import"./useLabel-D9TuMkUI.js";import"./Input-BRmCCCbY.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-ByvKXg4M.js";import"./Label-ClmFLFSU.js";import"./LabeledValue-B2PbzoQS.js";import"./Switch-DsRVfQu-.js";import"./useToggleState-DwwbFGA1.js";import"./Header-8eALDodl.js";import"./StatusIcon-B4qkhJRA.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const ge={title:"Navigation/Tabs/Edge Cases",...E},i={render:o=>e.createElement(T,{...o},e.createElement(m,{id:"a"},e.createElement(a,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(a,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:o=>e.createElement(T,{...o},e.createElement(m,{id:"a"},e.createElement(a,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(a,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...o,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(a,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(a,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ye=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,ye as __namedExportsOrder,ge as default};
