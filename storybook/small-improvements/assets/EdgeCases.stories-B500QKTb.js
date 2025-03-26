import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-DehRk4na.js";import"./index-BZISi7jw.js";import{B as m}from"./Button-BJXlxerY.js";import y from"./Default.stories-BBgRdftr.js";import{C as h}from"./Content-CwyRk6Sz.js";import{S as r}from"./Section-Bqxa29Os.js";import{T as n}from"./Text-BwURBFsG.js";import{A as j}from"./ActionGroup-B_-ythaz.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-BkqfOpTv.js";import{A as g}from"./Action-oPy_g2KX.js";import{u as f}from"./OverlayTrigger-y32pdg1B.js";import"./DialogTriggerView-CFDJjbxM.js";import"./flowComponent-CB_r5UQ3.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./clsx-B-dksMZM.js";import"./Overlay-CJ0hTS6O.js";import"./utils-BAtcVSHo.js";import"./Dialog-CI6Vrv3H.js";import"./Button-Bd7GnYjT.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-AhNAqARA.js";import"./useFocus-CGq_xkJe.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-B-bZ71PV.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BHsfcKmd.js";import"./CollectionBuilder-C_ibKIdv.js";import"./Separator-BH0DZ6tu.js";import"./Text-CxIdO6ok.js";import"./SelectionManager-DjqhJ6FU.js";import"./useEvent-0eO3yNkM.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-FOL1CxoP.js";import"./VisuallyHidden-FconPwXt.js";import"./IconApp-Do9-6_HN.js";import"./IconWarning-Dahq1OkV.js";import"./Header-n5o_wodV.js";import"./ButtonView-CS6E1gtX.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BWATc-O8.js";import"./TextField-C0MFmDxJ.js";import"./TextFieldBase-y2FOH4rH.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CH0xy9sj.js";import"./FieldError-DGtg9YPD.js";import"./FieldDescription-AyF_Dh8L.js";import"./Form-qm5cnMB7.js";import"./Input-njpPCLyw.js";import"./useTextField--bi5H5bl.js";import"./useFormReset-4n_yD9ws.js";import"./useFormValidation-CbU_Acnh.js";import"./Label-DOL6pGCw.js";import"./lib-B5wwni4N.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-CNaeLIL8.js";import"./dynamic-DKDa4OpU.js";import"./browser-B1A6F7LW.js";import"./Align-Lz-04LNa.js";import"./ColumnLayout-91510yXX.js";import"./AccentBox-DfuSKbxE.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Heading-DmITIAYD.js";import"./context-B15Zrh1O.js";import"./useStatic-D-e10mVk.js";import"./getActionGroupSlot-CDFIfnsV.js";import"./ContextMenuSection-6FJCuZh4.js";const Vo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Wo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Wo as __namedExportsOrder,Vo as default};
