import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import h from"./Default.stories-CKWReE-D.js";import{T as a,a as e,b as n}from"./Tab-D1DcPDNY.js";import{S as r}from"./Section-CvSh2rmp.js";import{T as o}from"./Text-jYIFGcvn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading-DBo8I5WT.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oN21CMYe.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./Heading-gLVfuOEw.js";import"./RSPContexts-8O1fXkhd.js";import"./utils-DcjC1aig.js";import"./TextField-Deo6mStL.js";import"./TextFieldBase-XJ59C3wf.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BrTRafpo.js";import"./IconApp-DB6cOM9g.js";import"./IconWarning-kCzmC3X3.js";import"./FieldError-CQDuJ0EJ.js";import"./Text-UNZxgqCx.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-GWF4eqaC.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./Form-B6mfikVx.js";import"./useLabel-DPCVhyCF.js";import"./Input-D73fD5bD.js";import"./Hidden-Dd0lSYNZ.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocus-nbRcaiXq.js";import"./Label-CvscwPf9.js";import"./useTextField-DrsVPilB.js";import"./useFormReset-CGMiLjFo.js";import"./useControlledState-BKUqB07S.js";import"./useFocusable-CZzsVVWR.js";import"./useFormValidation-DG4TqYaU.js";import"./Label-BJo4HJwf.js";import"./LabeledValue-m1-wv799.js";import"./Switch-BMcUd1EB.js";import"./useToggleState-BLH-nnKh.js";import"./usePress-D57HKG0J.js";import"./VisuallyHidden-DdD-CBUj.js";import"./Header-BPXQagP6.js";import"./AlertIcon-DuSgV6qZ.js";import"./ContextMenuContent-rWWAyNor.js";import"./Action-BTBARLRy.js";import"./context-CetbvVVg.js";import"./useStatic-DHHoNh1z.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-Duw2LQJS.js";import"./dynamic-DKDa4OpU.js";import"./ContextMenuSection-g__z2ab2.js";import"./Dialog-DMNLsUVl.js";import"./Button-PaysjOmZ.js";import"./ProgressBar-qxoNL0r_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-BupEJ213.js";import"./CollectionBuilder-92b9NEiR.js";import"./Separator-pz6eaBqf.js";import"./useOverlayTriggerState-DY-7iay5.js";import"./SelectionManager-B5yo36z-.js";import"./useEvent-KizPqgSt.js";import"./useCollator-Sm__dF4I.js";import"./FocusScope-71KNoUag.js";import"./Popover-DoD_x-cK.js";import"./OverlayTrigger-Duo_Ybcj.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-CWwya1Ag.js";import"./Button-DixTcy-g.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BTj-lsSS.js";import"./Activity-CEtrs3By.js";import"./useHasTabbableChild-C6SjsZ8u.js";import"./useSingleSelectListState-D7eR-89F.js";import"./useListState-CCJXQxMs.js";import"./EmulatedBoldText-D1jUzRoU.js";const Mt={title:"Navigation/Tabs/Edge Cases",...h},s={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]})]})},p={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsxs(r,{children:[t.jsx(o,{children:i.short}),t.jsxs(a,{...m,disabledKeys:["spam"],children:[t.jsxs(e,{id:"subA",children:[t.jsx(n,{children:"Sub tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"subB",children:[t.jsx(n,{children:"Sub tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]})]})]})]})]})};var T,d,c;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
