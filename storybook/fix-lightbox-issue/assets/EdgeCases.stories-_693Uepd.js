import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-C7L7l_zz.js";import"./index-CgfFrydU.js";import{B as m}from"./Button-CT6jKELJ.js";import y from"./Default.stories-FlHCTuNU.js";import{C as h}from"./Content-DmwChOEr.js";import{S as r}from"./Section-C3HeVScC.js";import{T as n}from"./Text-9PUJLXl5.js";import{A as j}from"./ActionGroup-BOpkwUJI.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-bJ8ZWrvE.js";import{A as g}from"./Action-BASfP4Hw.js";import{u as f}from"./DialogTriggerView-DPQAVvTg.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yY6RzzUT.js";import"./mergeRefs-_uxeg_17.js";import"./index-sY8i7rw0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./Overlay-CdMVcq_M.js";import"./utils-DvYDvJ-W.js";import"./Dialog-y7i2Ibzp.js";import"./Button-CY6niT9f.js";import"./ProgressBar-DuZjZRB2.js";import"./Label-XuXA-row.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DP9zv8XI.js";import"./useLocalizedStringFormatter-jDgQNJem.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-rEv_nV0O.js";import"./useFocus-bBgo0bKd.js";import"./useFocusRing-DUlPoSa4.js";import"./useFocusable-fU6dY-gF.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-C1erJO4A.js";import"./useControlledState-DjePt-lg.js";import"./Collection-i8EjBJSq.js";import"./CollectionBuilder-Dw9MTGx5.js";import"./Separator-CUf66PuO.js";import"./Text-1CJ30n_Q.js";import"./SelectionManager-CTcRB2Ps.js";import"./useEvent-DsDOr2ug.js";import"./useCollator-Cym9_BaK.js";import"./FocusScope-BCiwkv3e.js";import"./VisuallyHidden-B4AzoGqn.js";import"./IconWarning-70jApbHx.js";import"./Header-Dz61db-b.js";import"./ButtonView-SJ4ZBLK3.js";import"./LoadingSpinner-BHQSc97o.js";import"./TextField-DjxhJwRe.js";import"./TextFieldBase-BdEa0dyT.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-00yIk5F2.js";import"./FieldError-DQg1rr6h.js";import"./FieldDescription-DiuoPF4X.js";import"./Form-eodUc7lY.js";import"./Input-Bwq1TeOx.js";import"./useTextField-CfbNrntM.js";import"./useFormReset-BiMHJINb.js";import"./useFormValidation-9a9nu2yD.js";import"./ReactAriaControlledValueFix-CzEct_qc.js";import"./Label-Bp6Pnofu.js";import"./lib-DJVAcGD2.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-BHGiHopX.js";import"./dynamic-DKDa4OpU.js";import"./browser-B1A6F7LW.js";import"./Align-CYQB4Vxi.js";import"./ColumnLayout-DXDfOOj1.js";import"./AccentBox-B-dN0eEV.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Heading-BFHXViOZ.js";import"./context-DnKpt6Zm.js";import"./useStatic-CLm-J0DW.js";import"./getActionGroupSlot-BoNoL21H.js";import"./ContextMenuSection-tX_qKic9.js";const Qo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Uo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Uo as __namedExportsOrder,Qo as default};
