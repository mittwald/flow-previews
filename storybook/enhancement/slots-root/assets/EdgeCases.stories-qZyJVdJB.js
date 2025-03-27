import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-94xGkdx2.js";import"./index-CtQTiInQ.js";import{B as m}from"./Button-DixTcy-g.js";import y from"./Default.stories-BgJzy8hJ.js";import{C as h}from"./Content-Ds5Gygil.js";import{S as r}from"./Section-CvSh2rmp.js";import{T as n}from"./Text-jYIFGcvn.js";import{A as j}from"./ActionGroup-edo7OWsJ.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DBo8I5WT.js";import{A as g}from"./Action-BTBARLRy.js";import{u as f}from"./OverlayTrigger-Duo_Ybcj.js";import"./DialogTriggerView-CWwya1Ag.js";import"./flowComponent-oN21CMYe.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./clsx-B-dksMZM.js";import"./Overlay-D1LPkIfL.js";import"./utils-DcjC1aig.js";import"./Dialog-DMNLsUVl.js";import"./Button-PaysjOmZ.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DPCVhyCF.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D57HKG0J.js";import"./useFocus-nbRcaiXq.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocusable-CZzsVVWR.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-BupEJ213.js";import"./CollectionBuilder-92b9NEiR.js";import"./Separator-pz6eaBqf.js";import"./Text-UNZxgqCx.js";import"./useOverlayTriggerState-DY-7iay5.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-B5yo36z-.js";import"./useEvent-KizPqgSt.js";import"./useCollator-Sm__dF4I.js";import"./FocusScope-71KNoUag.js";import"./VisuallyHidden-DdD-CBUj.js";import"./IconApp-DB6cOM9g.js";import"./IconWarning-kCzmC3X3.js";import"./Header-BPXQagP6.js";import"./ButtonView-d3skRGZQ.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BTj-lsSS.js";import"./TextField-Deo6mStL.js";import"./TextFieldBase-XJ59C3wf.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BrTRafpo.js";import"./FieldError-CQDuJ0EJ.js";import"./FieldDescription-GWF4eqaC.js";import"./Form-B6mfikVx.js";import"./Input-D73fD5bD.js";import"./useTextField-DrsVPilB.js";import"./useFormReset-CGMiLjFo.js";import"./useFormValidation-DG4TqYaU.js";import"./Label-BJo4HJwf.js";import"./lib-DC1QtrsP.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-B_YZUHw7.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-BUdXXZI-.js";import"./ColumnLayout-BYnAdeoN.js";import"./AccentBox-D1ydiIFi.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Heading-gLVfuOEw.js";import"./context-CetbvVVg.js";import"./useStatic-DHHoNh1z.js";import"./getActionGroupSlot-Duw2LQJS.js";import"./ContextMenuSection-g__z2ab2.js";const Wo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <Modal {...props} controller={useOverlayController("Modal", {
    isDefaultOpen: true
  })}>
      <Heading>{dummyText.short}</Heading>
      <Content>
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
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Content>
      <ActionGroup>
        <Action closeOverlay="Modal">
          <Button color="accent">Create customer</Button>
          <Button variant="soft" color="secondary">
            Abort
          </Button>
        </Action>
      </ActionGroup>
    </Modal>
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var a,d,x;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <Modal offCanvas {...props} controller={useOverlayController("Modal", {
    isDefaultOpen: true
  })}>
      <Heading>{dummyText.short}</Heading>
      <Content>
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
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Content>
      <ActionGroup>
        <Action closeOverlay="Modal">
          <Button color="accent">Create customer</Button>
          <Button variant="soft" color="secondary">
            Abort
          </Button>
        </Action>
      </ActionGroup>
    </Modal>
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Xo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Xo as __namedExportsOrder,Wo as default};
