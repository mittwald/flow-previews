import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-DQVVF7oc.js";import{S as r}from"./Section-B7_0V-Qc.js";import{T as n}from"./Text-CadoLc4y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-S8oBNLtu.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-Lrm-5Dji.js";import"./PopoverTrigger-BdhblLz-.js";import"./OverlayTrigger-BPhu1iqi.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BCqBDIej.js";import"./useFocusable-DpEA8Hsr.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-DWE0U9Im.js";import"./context-FRXDLkOm.js";import"./useSelector-O6pPILhT.js";import"./Action-v64sO3Vo.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BxWtZCih.js";import"./IconWarning-D35fNG9E.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-BZQFS83W.js";import"./Header-CL3U4zra.js";import"./Separator-DG_EV7vp.js";import"./Text-D6Zjnbf0.js";import"./useMenuTrigger-qLXEuwQ5.js";import"./SelectionManager-C0vcxxFt.js";import"./useEvent-BUAZZNDw.js";import"./Button-DMJBC97W.js";import"./LoadingSpinner-BNJYvKRG.js";import"./Button-D4VcI4Uu.js";import"./useHasTabbableChild-KSnbs68I.js";import"./useSingleSelectListState-BWTp8L38.js";import"./Heading-BRJ-0FTl.js";import"./TextField-CQcUrc4c.js";import"./TextFieldBase-5Lckew2v.js";import"./FormField.module-BZG3xUMW.js";import"./Form-BOwpWbru.js";import"./useLabel-D9TuMkUI.js";import"./FieldDescription-CgtUnkcc.js";import"./Input-AN0YuBj3.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-DvNC-UuM.js";import"./LabeledValue-Dm6AysED.js";import"./Switch-F1mhDK41.js";import"./useToggleState-aJf0ifXc.js";import"./Header-1TckDcjC.js";import"./StatusIcon-Bggz8RNY.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const Re={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(p,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:a=>e.createElement(p,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _e=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,_e as __namedExportsOrder,Re as default};