import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import h from"./Default.stories-DUZTMkMQ.js";import{T as a,a as e,b as n}from"./Tab-DJcAVk5G.js";import{S as r}from"./Section-DsNdiMUn.js";import{T as o}from"./Text-Dr5MNJ9m.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading-JTZ2bzsA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./Heading-ChI_1Pt6.js";import"./RSPContexts-C2SW_8A9.js";import"./utils-D_n-6U4k.js";import"./TextField-u_Z7hqsc.js";import"./TextFieldBase-CTQL2sCv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B3rmrlTw.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./FieldError-BGs8e4N-.js";import"./Text-BUuVncJZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-DwkiDR0F.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./Form-czy9A9fl.js";import"./useLabel-BoT2JKOr.js";import"./Input-B3uAq9ei.js";import"./Hidden-DtYLaSTT.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocus-DPMzGzIF.js";import"./Label-D7zTyyav.js";import"./useTextField-Di-fd6ps.js";import"./useFormReset-C7M_aUQL.js";import"./useControlledState-CHe-wEx1.js";import"./useFocusable-C54KMRcY.js";import"./useFormValidation-xTAo0ZUA.js";import"./Label-BlFJqu_U.js";import"./LabeledValue-h9QtOskW.js";import"./Switch-BpWnRt3O.js";import"./useToggleState-BTAejZnG.js";import"./usePress-DKvzVrwU.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./Header-CUv3SiwW.js";import"./AlertIcon-CwbKKDIa.js";import"./ContextMenuContent-C7QppDXV.js";import"./Action-BEVxohwb.js";import"./context-DaPO0HZf.js";import"./useStatic-RnO7WcrC.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-BilYt8La.js";import"./dynamic-DKDa4OpU.js";import"./ContextMenuSection-BGfGuiMH.js";import"./Dialog-D9rW5YgD.js";import"./Button-BcgzNVYq.js";import"./ProgressBar-8nsGDrqI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./useOverlayTriggerState-EP699KjE.js";import"./SelectionManager-DLUrYsh7.js";import"./useEvent-9NPw0H85.js";import"./useCollator-BSqHj9jo.js";import"./FocusScope-ienAdI6u.js";import"./Popover-C7hXwPPn.js";import"./OverlayTrigger-Dv9azQvo.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-gOfyQuAV.js";import"./Button-DoxNqpU5.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-C8RokD4H.js";import"./Activity-C6fheo5e.js";import"./useHasTabbableChild-CONV1fp9.js";import"./useSingleSelectListState-Jm8y9DAU.js";import"./useListState-DIoCcs_y.js";import"./EmulatedBoldText-BPJW4PHD.js";const Mt={title:"Navigation/Tabs/Edge Cases",...h},s={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]})]})},p={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsxs(r,{children:[t.jsx(o,{children:i.short}),t.jsxs(a,{...m,disabledKeys:["spam"],children:[t.jsxs(e,{id:"subA",children:[t.jsx(n,{children:"Sub tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"subB",children:[t.jsx(n,{children:"Sub tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]})]})]})]})]})};var T,d,c;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(l=p.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const Pt=["DifferentHeight","Nested"];export{s as DifferentHeight,p as Nested,Pt as __namedExportsOrder,Mt as default};
