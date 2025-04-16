import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-n-xcLTj3.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import h from"./Default.stories-CkYfAtEQ.js";import{T as a,a as e,b as n}from"./Tab-X0CJF-Cy.js";import{S as r}from"./Section-YW-6nUkS.js";import{T as o}from"./Text-CvWN1dQn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading-BMuol6x4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./index-jVogklOU.js";import"./index-7o24Rkki.js";import"./Heading-B6IEBoPv.js";import"./RSPContexts-DXggXklQ.js";import"./utils-CHEN54dH.js";import"./TextField-uvDX0XvK.js";import"./TextFieldBase-CNaFa31t.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DTHL6QGh.js";import"./IconWarning-BT9Vk3ZR.js";import"./FieldError-D-X35EJ8.js";import"./Text-DatuNbZl.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-DuCTkKO2.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./Form-ChuGhSFG.js";import"./useLabel-DBnsbNrv.js";import"./Input-CzLAkyht.js";import"./Hidden-B-9naaqD.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocus-XoJeJsyS.js";import"./Label-CnZl9U2I.js";import"./useTextField-CbF7aTVM.js";import"./useFormReset-DmN8pfru.js";import"./useControlledState-B6lyO5nT.js";import"./useFocusable-I3Nst49W.js";import"./useFormValidation-BxWfN6mX.js";import"./Label-DuWaARVY.js";import"./LabeledValue-CzL5Aor5.js";import"./Switch-74Uoz9_i.js";import"./useToggleState-Ckq7rO_C.js";import"./usePress-D9kiuk6J.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./Header-D-FpYDad.js";import"./AlertIcon-B0Qoa8Mw.js";import"./ContextMenuContent-3QQNQ-JO.js";import"./Action-VjMgs9Db.js";import"./context-ah73-6JJ.js";import"./useStatic-bVMyw5l7.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-huFUK6tI.js";import"./dynamic-DKDa4OpU.js";import"./ContextMenuSection-B_OuJeoD.js";import"./Dialog-DMm5cJWQ.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-pA50mchW.js";import"./Collection-CURWNON1.js";import"./CollectionBuilder-DoslnNQQ.js";import"./Separator-C0eHURoS.js";import"./useOverlayTriggerState-B1QNhm0O.js";import"./SelectionManager-C5jjfSGo.js";import"./useEvent-CaE4O6jv.js";import"./useCollator-DYp7eA3k.js";import"./FocusScope-VprgOmaE.js";import"./Popover-C_vX1M9f.js";import"./OverlayTrigger-CPKfF4Tt.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-BNuGuwjN.js";import"./Button-Dhpj9FRh.js";import"./LoadingSpinner-V_OKVJm3.js";import"./Activity-C9GQH95Y.js";import"./useHasTabbableChild-Disf9xjt.js";import"./useSingleSelectListState-Fe8W6B1P.js";import"./useListState-DYH0WGeK.js";import"./EmulatedBoldText-bRyCqTVk.js";const Jt={title:"Navigation/Tabs/Edge Cases",...h},s={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]})]})},p={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsxs(r,{children:[t.jsx(o,{children:i.short}),t.jsxs(a,{...m,disabledKeys:["spam"],children:[t.jsxs(e,{id:"subA",children:[t.jsx(n,{children:"Sub tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"subB",children:[t.jsx(n,{children:"Sub tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]})]})]})]})]})};var T,d,c;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var x,l,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(l=p.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const Lt=["DifferentHeight","Nested"];export{s as DifferentHeight,p as Nested,Lt as __namedExportsOrder,Jt as default};
