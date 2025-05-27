import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-D0disKhx.js";import"./index-CgfFrydU.js";import{B as m}from"./Button-jIw9nnwC.js";import y from"./Default.stories-5dIupo7D.js";import{C as h}from"./Content-DF5MNgWt.js";import{S as r}from"./Section-C5U0ab2l.js";import{T as n}from"./Text-D7P1-Ebs.js";import{A as j}from"./ActionGroup-zxtkHBcf.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DdMK9uxY.js";import{A as g}from"./Action-CFc5pDpb.js";import{u as f}from"./OverlayTrigger-DqoutB-1.js";import"./DialogTriggerView-BtmdQ0TJ.js";import"./PropsContextProvider-DBqjDBJq.js";import"./mergeRefs-_uxeg_17.js";import"./clsx-B-dksMZM.js";import"./index-sY8i7rw0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./Overlay-i-nPUDxo.js";import"./utils-DvYDvJ-W.js";import"./Dialog-WcTWvLN6.js";import"./Button-CY6niT9f.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-C1erJO4A.js";import"./useControlledState-DjePt-lg.js";import"./Collection-i8EjBJSq.js";import"./CollectionBuilder-Dw9MTGx5.js";import"./Separator-CUf66PuO.js";import"./Text-1CJ30n_Q.js";import"./SelectionManager-CTcRB2Ps.js";import"./useEvent-DsDOr2ug.js";import"./useCollator-Cym9_BaK.js";import"./FocusScope-BCiwkv3e.js";import"./VisuallyHidden-B4AzoGqn.js";import"./IconWarning-CTsWIAx0.js";import"./Header-CJLVQkWc.js";import"./ButtonView-AW6Oecbs.js";import"./LoadingSpinner-DN0dUJdB.js";import"./TextField-BYz6omlA.js";import"./TextFieldBase-N2C5a_3k.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-7p7MOcPd.js";import"./FieldError-DQg1rr6h.js";import"./FieldDescription-VrSTP0V7.js";import"./Form-eodUc7lY.js";import"./Input-Bwq1TeOx.js";import"./useTextField-CfbNrntM.js";import"./useFormReset-BiMHJINb.js";import"./useFormValidation-9a9nu2yD.js";import"./ReactAriaControlledValueFix-CzEct_qc.js";import"./Label-7YZm-yDa.js";import"./lib-DcMKVBGV.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-B87-6P1R.js";import"./dynamic-DKDa4OpU.js";import"./browser-B1A6F7LW.js";import"./Align-C6bkU_4S.js";import"./ColumnLayout-OuhGaDAO.js";import"./AccentBox-DwG1jsDc.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Heading-BFHXViOZ.js";import"./context-Dl2Nzub5.js";import"./useStatic-DmFR9Vew.js";import"./getActionGroupSlot-CgDIUdUI.js";import"./ContextMenuSection-q-WWQZvC.js";const Uo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Vo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Vo as __namedExportsOrder,Uo as default};
