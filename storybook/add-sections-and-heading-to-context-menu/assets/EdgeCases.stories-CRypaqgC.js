import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-N8cpVLCJ.js";import{S as n}from"./Section-pYJvHIu7.js";import{T as r}from"./Text-EyCvEgnK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0hgC601.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./index-BOkhicXD.js";import"./ContextMenuSection-yQw222rb.js";import"./PopoverTrigger-C35F8xkT.js";import"./OverlayTrigger-6VtsQuLn.js";import"./utils-DsDc2z3f.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-C3Uw9j7L.js";import"./useFocusRing-DQ9q31uS.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-v15KrNwr.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";import"./Action-D1MPQzaf.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DZ6iFK1V.js";import"./IconWarning-D5KLWx1O.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Collection-CPOND5Y7.js";import"./Header-CFQsHu-x.js";import"./SelectionManager-BXcc41yp.js";import"./useEvent-YC2gB4eD.js";import"./Separator-DHXedzvY.js";import"./Text-DAlZawmB.js";import"./Button-COr4qXCu.js";import"./LoadingSpinner-CsLReDiT.js";import"./Button-D3-i4KBG.js";import"./useFocusable-R-ZPDh0R.js";import"./useHasTabbableChild-BoY8FDA9.js";import"./useSingleSelectListState-CigSESnd.js";import"./Heading-Dx4e16v2.js";import"./TextField-Cw-QnNz-.js";import"./TextFieldBase-Cfc8pxAA.js";import"./FormField.module-B1Ek3pwS.js";import"./Form-CP-B8ZEw.js";import"./useLabel-C-G_TB0Q.js";import"./FieldDescription-C_JyU3ZG.js";import"./Input-oGq534xr.js";import"./useFormReset-D51lDO-b.js";import"./Label-C3uTUzzd.js";import"./Label-BfZsFn3a.js";import"./LabeledValue-Dg1Y43aD.js";import"./Switch-DGuq8I1a.js";import"./useToggleState-CGs9flsu.js";import"./Header-CT5ZbolJ.js";import"./StatusIcon-B0hbQAvJ.js";import"./Activity-DYbiBj6P.js";import"./EmulatedBoldText-DzNCZpDp.js";const Ke={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
