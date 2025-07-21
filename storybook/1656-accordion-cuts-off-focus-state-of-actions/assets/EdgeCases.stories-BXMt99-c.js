import{j as t}from"./iframe-tng_7MnI.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import h from"./Default.stories-B6WL7cPy.js";import{T as a,a as o,b as n}from"./Tab-DlvJMyyA.js";import{S as r}from"./Section-DwdxfWO6.js";import{T as e}from"./Text-D_jDO6uI.js";import"./Heading-g6boEUQI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DYtDUrj3.js";import"./mergeRefs--BPoweoc.js";import"./index-Drzl8fEc.js";import"./Heading-k2W8L45n.js";import"./RSPContexts-B53Ismbm.js";import"./utils-5hQd1GPy.js";import"./TextField-B3qtAxXD.js";import"./TextFieldBase-C9WYIGvY.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DfzpSzZW.js";import"./IconWarning-BPmu7WCe.js";import"./FieldError-DYaGdwvi.js";import"./Text-CW9rRGi5.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-D_eJZryM.js";import"./useLocalizedStringFormatter-CgARc_YB.js";import"./context-DF7MMgfI.js";import"./TextField-iYZH2OXM.js";import"./Form-DwsjCjtf.js";import"./useFocus-DB2yX2jm.js";import"./useLabel-Xo2bW3MF.js";import"./Input-X3v1cPFB.js";import"./Hidden-DtL8MOne.js";import"./useFocusRing-DhOBCV_L.js";import"./Label-CUv_itT5.js";import"./useTextField--Fxttb5L.js";import"./useFormReset-xJzqPhqW.js";import"./useControlledState-BUDKzFUA.js";import"./useFocusable-DouN-Cym.js";import"./ReactAriaControlledValueFix-BXQiwHMq.js";import"./Label-Dv5kr7I4.js";import"./LabeledValue-C17uqpbY.js";import"./Switch-CKXwEwjT.js";import"./useToggleState-Biz1LJLQ.js";import"./usePress-GMQejvE6.js";import"./VisuallyHidden-_vEXP6Y8.js";import"./Header-OmSCOusy.js";import"./AlertIcon-iYnPjESC.js";import"./ContextMenuContent-CewkrvJ1.js";import"./Action-DpGM30Ow.js";import"./context-t97AZKNB.js";import"./useStatic-Vj9I4teO.js";import"./browser-zPD-OImI.js";import"./getActionGroupSlot-jEh-tcyT.js";import"./dynamic-DKDa4OpU.js";import"./ContextMenuSection-Dqcd1OLC.js";import"./Dialog-IOGvswXh.js";import"./Button-BAFArKRX.js";import"./ProgressBar-BKGN512w.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-D1J4V4Xu.js";import"./Collection-U6iOHpYg.js";import"./CollectionBuilder-Bvhqn8Ns.js";import"./Separator-mXU6o4ZK.js";import"./SearchField-BOUVMF0K.js";import"./Group-7jupwvb6.js";import"./SelectionManager-Ci6gTmLN.js";import"./useEvent-CP-X5b9K.js";import"./useCollator-B2nuGa8V.js";import"./FocusScope-DGiBHAPP.js";import"./Popover-BJU7ttZm.js";import"./DialogTriggerView-CRs3bhJy.js";import"./Button-DU_QW8Rd.js";import"./LoadingSpinner-DVPPG5kf.js";import"./Activity-CGbWhj1g.js";import"./inertValue-CPObkqIT.js";import"./useHasTabbableChild-BvlL7BlZ.js";import"./useSingleSelectListState-Bo3bFXvS.js";import"./useListState-Xg4w4G_U.js";import"./EmulatedBoldText-d-Lx_bwT.js";const It={title:"Navigation/Tabs/Edge Cases",...h},s={render:m=>t.jsxs(a,{...m,children:[t.jsxs(o,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(e,{children:i.long})})]}),t.jsxs(o,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsx(r,{children:t.jsx(e,{children:i.long})}),t.jsx(r,{children:t.jsx(e,{children:i.long})}),t.jsx(r,{children:t.jsx(e,{children:i.long})}),t.jsx(r,{children:t.jsx(e,{children:i.long})})]})]})},p={render:m=>t.jsxs(a,{...m,children:[t.jsxs(o,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(e,{children:i.short})})]}),t.jsxs(o,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsxs(r,{children:[t.jsx(e,{children:i.short}),t.jsxs(a,{...m,disabledKeys:["spam"],children:[t.jsxs(o,{id:"subA",children:[t.jsx(n,{children:"Sub tab A"}),t.jsx(r,{children:t.jsx(e,{children:i.short})})]}),t.jsxs(o,{id:"subB",children:[t.jsx(n,{children:"Sub tab B"}),t.jsx(r,{children:t.jsx(e,{children:i.short})})]})]})]})]})]})};var T,d,c;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(l=p.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const Jt=["DifferentHeight","Nested"];export{s as DifferentHeight,p as Nested,Jt as __namedExportsOrder,It as default};
