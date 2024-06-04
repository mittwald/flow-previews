import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-DKIpgYjC.js";import{S as n}from"./Section-CarNJhad.js";import{T as r}from"./Text-DkXNa9lH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HAqgJ-qp.js";import"./PropsContextProvider-CtgwYsrm.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger--TCqG0un.js";import"./PopoverTrigger-DwU6lZh_.js";import"./Action-BxsXLg9O.js";import"./OverlayTrigger-DWUAGUYJ.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-BDeolAmD.js";import"./useFocusable-rZ2Ly5zk.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-dVD-xw.js";import"./FocusScope-DHvs1HAk.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-dBh8p4gE.js";import"./IconApp-CtQ8LmC9.js";import"./IconWarning-Dmp0B6I3.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-B_ssJImm.js";import"./Header-1hBV_Hcy.js";import"./SelectionManager-rM5ZOo2R.js";import"./useEvent-BUAZZNDw.js";import"./Separator-Di7DbCGl.js";import"./Text-D6Zjnbf0.js";import"./Button-D3ygk8x2.js";import"./LoadingSpinner-BFbWNd2Y.js";import"./Button-Dy16a6a4.js";import"./useSingleSelectListState-DbLcXBaW.js";import"./useHasTabbableChild-9010b_fZ.js";import"./Heading-D2rl-zba.js";import"./TextField-Bjb02CJX.js";import"./TextFieldBase-Cs7E167H.js";import"./FormField.module-D9W_TR_N.js";import"./Form-DfhY7G1r.js";import"./useLabel-D9TuMkUI.js";import"./Input-CMYLvj2s.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-BJ0sAuzn.js";import"./LabeledValue-D6rJQrU2.js";import"./Switch-B6vaI61h.js";import"./useToggleState-C3edgkad.js";import"./Header-v2QnK7US.js";import"./StatusIcon-uZEc6_Xs.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const Be={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
