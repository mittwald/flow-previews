import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-CVwxH9Sp.js";import{S as r}from"./Section-DgGPYImf.js";import{T as n}from"./Text-Dgrf8S-7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cll4pGCY.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-B1gTEU1D.js";import"./ContextMenu.module-CAjBRoKS.js";import"./PopoverTrigger-C23yS8da.js";import"./OverlayTrigger-CInB0dMO.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-B_2Pd_cl.js";import"./useFocusable-B1CfUGG-.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bc78XfGJ.js";import"./FocusScope-CBGue2Od.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CVANJuSe.js";import"./context-CSQJgabl.js";import"./useSelector-DpPpxyR7.js";import"./Action-CAcZ0_fm.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DWya8WHB.js";import"./IconWarning-D6ajfWtk.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-BZQFS83W.js";import"./Header-CL3U4zra.js";import"./Separator-DG_EV7vp.js";import"./Text-3FUNhTNc.js";import"./useMenuTrigger-sTn7Pn93.js";import"./SelectionManager-CGAryKFY.js";import"./useEvent-BUAZZNDw.js";import"./Button-xFoG6pgt.js";import"./LoadingSpinner-CBtSEswS.js";import"./Button-DvIckO9Z.js";import"./useHasTabbableChild-uzqEo9vn.js";import"./useSingleSelectListState-DasC_xvB.js";import"./Heading-BCjHoBHi.js";import"./TextField-DZynHZ0f.js";import"./TextFieldBase-B5LL_2k5.js";import"./FormField.module-0SstBIkW.js";import"./Form-pLdcVy8a.js";import"./useLabel-D9TuMkUI.js";import"./FieldDescription-DwIkflUx.js";import"./TextField-BGn1ZlWC.js";import"./Input-CK4H1fha.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BzjXWGX7.js";import"./Label-SpZFRJ_k.js";import"./LabeledValue-Dm6AysED.js";import"./Switch-BAz0j8yD.js";import"./useToggleState-D5LCi4E-.js";import"./Header-CkoFYiSi.js";import"./StatusIcon-DLyppRA5.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const ve={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var b,u,d;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Ce=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,Ce as __namedExportsOrder,ve as default};
