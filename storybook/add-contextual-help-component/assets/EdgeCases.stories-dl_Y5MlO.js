import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-BAIh98l5.js";import{S as n}from"./Section-m7O-9q4L.js";import{T as r}from"./Text-DaXThI_-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ca66243O.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-DpdexQ1M.js";import"./PopoverTrigger-B3TQPK6z.js";import"./useOverlayController-uhA2g3Cs.js";import"./OverlayTrigger-24tbbi7g.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CQk-PceR.js";import"./useFocusable-78usWDLt.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-9lmrtZep.js";import"./FocusScope-DoABDPBn.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CB7QZ_UN.js";import"./Menu-BiN_fRnG.js";import"./Collection-B_ssJImm.js";import"./Header-Ch7wO_bV.js";import"./SelectionManager-C1hlGk95.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";import"./Text-D6Zjnbf0.js";import"./IconApp-BaqjkNZn.js";import"./IconWarning-Bsd3dSOq.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Button-DiZbRqGq.js";import"./LoadingSpinner-C1i2Nbou.js";import"./Button-BcoQYGn5.js";import"./useHasTabbableChild-CczwNu_4.js";import"./useSingleSelectListState-BSH2Z9ID.js";import"./Heading-DFwFiMSa.js";import"./TextField-8cD6RYGz.js";import"./TextFieldBase-DltWL5V3.js";import"./FormField.module-CVTN08rG.js";import"./Form-ZiK3HNmC.js";import"./useLabel-D9TuMkUI.js";import"./FieldDescription-DDL45TyN.js";import"./useMessageFormatter-ByXXGcme.js";import"./tslib.es6-pJfR_DrR.js";import"./Input-DKtgAYPG.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-iTt8mwRi.js";import"./LabeledValue-Dm6AysED.js";import"./Switch-dPqVQapU.js";import"./useToggleState-DEzrynGr.js";import"./Header-D8BSJimy.js";import"./StatusIcon-DW3Hsina.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const Ke={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Re=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Re as __namedExportsOrder,Ke as default};
