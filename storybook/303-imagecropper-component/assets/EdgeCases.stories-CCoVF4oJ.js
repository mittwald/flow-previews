import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-BPJfRTpk.js";import{S as r}from"./Section-C8kIh9p2.js";import{T as n}from"./Text-CzfDsx2u.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-d9koHm8X.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-C2y7UYa8.js";import"./PopoverTrigger-6KT5KTFb.js";import"./OverlayTrigger-PMv2-p4P.js";import"./utils-CRveUs4Q.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DobB3-tX.js";import"./useFocusable-DIY1EfD0.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-CvugjgZN.js";import"./usePress-B-418flx.js";import"./FocusScope-DRFNwxZB.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-BwH5wu93.js";import"./context-DGHf5otc.js";import"./useSelector-BUIORffs.js";import"./Action-DH-nwfeD.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-AT6m4EFM.js";import"./Header-hOCBwC_K.js";import"./Separator-D-FRkinj.js";import"./Text-BxG67LRB.js";import"./useMenuTrigger-BGlgYenP.js";import"./SelectionManager-ADoBXYhu.js";import"./useEvent-YC2gB4eD.js";import"./useDescription-DkXZ8A7g.js";import"./Button-CKjWx2QM.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";import"./useHasTabbableChild-CJ5Dj5Mh.js";import"./useSingleSelectListState-3HenLGl_.js";import"./Heading-BTmWJFHE.js";import"./TextField-BlQXrf97.js";import"./TextFieldBase-ChTaGRR4.js";import"./FormField.module-Baz52Xvq.js";import"./Form-CUMXIWEV.js";import"./useLabel-C-G_TB0Q.js";import"./FieldDescription-Bpo0BlGa.js";import"./Input-CR20gog_.js";import"./Label-B6vS7Cqe.js";import"./useTextField-CjnTyCTK.js";import"./useFormReset-D51lDO-b.js";import"./Label-BizVKcMA.js";import"./LabeledValue-Dg1Y43aD.js";import"./Switch-DXYQRTgm.js";import"./useToggleState-CK_jpPEc.js";import"./Header-r7EcPp6B.js";import"./StatusIcon-DghZpfMW.js";import"./Activity-DYbiBj6P.js";import"./EmulatedBoldText-DzNCZpDp.js";const Ce={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Oe=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,Oe as __namedExportsOrder,Ce as default};
