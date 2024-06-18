import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-B2z-e2gB.js";import{S as r}from"./Section-zZXJENq8.js";import{T as n}from"./Text-DFRbGu6E.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ClMeDTWi.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-pf6Mt-TW.js";import"./PopoverTrigger-Blw5Ck0Y.js";import"./OverlayTrigger-Bcn--TOD.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BCqBDIej.js";import"./useFocusable-DpEA8Hsr.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-DWE0U9Im.js";import"./context-DJLsFYI-.js";import"./useSelector-D8IVGAeE.js";import"./Action-BZfCuNTh.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BsJtYAdy.js";import"./IconWarning-DuBxq7yL.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-B_ssJImm.js";import"./Header-BDW-eqgZ.js";import"./SelectionManager-C0vcxxFt.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";import"./Text-D6Zjnbf0.js";import"./Button-DJPOOIVp.js";import"./LoadingSpinner-DwtRU-KV.js";import"./Button-D4VcI4Uu.js";import"./useHasTabbableChild-KSnbs68I.js";import"./useSingleSelectListState-BWTp8L38.js";import"./Heading-bIvg0v65.js";import"./TextField-CUDRjZTv.js";import"./TextFieldBase-Dc90FfAg.js";import"./FormField.module-aw4tRVhf.js";import"./Form-BOwpWbru.js";import"./useLabel-D9TuMkUI.js";import"./FieldDescription-D4HuhiA2.js";import"./Input-AN0YuBj3.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-D1_J_t9t.js";import"./LabeledValue-Dm6AysED.js";import"./Switch-CF9ZpeDt.js";import"./useToggleState-aJf0ifXc.js";import"./Header-CGuw--DK.js";import"./StatusIcon-ekqfgsPt.js";import"./Link-D11O8mXd.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const Re={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(p,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:a=>e.createElement(p,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
