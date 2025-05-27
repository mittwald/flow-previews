import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-CcUF_gSI.js";import"./index-BdpSHsi2.js";import{B as m}from"./Button-C1dNkanO.js";import y from"./Default.stories-BQuHaMVA.js";import{C as h}from"./Content-CVHuoDDz.js";import{S as r}from"./Section-C8WfKyQ-.js";import{T as n}from"./Text-BnT9pmDe.js";import{A as j}from"./ActionGroup-BurT5WqF.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-CJymgL7Y.js";import{A as g}from"./Action-C2knT7-L.js";import{u as f}from"./OverlayTrigger--ulk67hi.js";import"./DialogTriggerView-CLrJGBpq.js";import"./PropsContextProvider-CwsjuOpO.js";import"./mergeRefs-DCHnGnoY.js";import"./clsx-B-dksMZM.js";import"./iframe-BSAIfxFq.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Overlay-B021Pj_0.js";import"./utils-CGBbld1I.js";import"./Dialog-DR27fcja.js";import"./Button-QGm5fJ3f.js";import"./ProgressBar-DVHZMV_Y.js";import"./Label-C3wuJWVC.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-2PTTjRTo.js";import"./useLocalizedStringFormatter-CQZe-1oI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-KHE_7Dyp.js";import"./useFocus-CrOIx9qr.js";import"./useFocusRing-voAwBIMi.js";import"./useFocusable-CeEllLln.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BDH2is-P.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CfN95BI8.js";import"./CollectionBuilder-DWO952CO.js";import"./Separator-CuUYeIPG.js";import"./Text-cxnoU24n.js";import"./SelectionManager-DA0mbM8D.js";import"./useEvent-BleeV9lU.js";import"./useCollator-DIkGalmP.js";import"./FocusScope-CVefUuHc.js";import"./VisuallyHidden-BgU4cU5T.js";import"./IconWarning-CyJsJ4s2.js";import"./Header-DaFVdGtz.js";import"./ButtonView-C60rj0tz.js";import"./index-BAMY2Nnw.js";import"./LoadingSpinner-CcHxumCi.js";import"./TextField-XvEbiNRR.js";import"./TextFieldBase-DnRksTZw.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CA7wrmsb.js";import"./FieldError-CaLbDVO5.js";import"./FieldDescription-ClHx0LhV.js";import"./TextField-C_y54g74.js";import"./Form-8Dlepkcn.js";import"./Input-Y1A_Nvih.js";import"./useTextField-yOa8OnLq.js";import"./useFormReset-DAKGIyMh.js";import"./useFormValidation-CV1_HBS_.js";import"./ReactAriaControlledValueFix-ODLc6jpk.js";import"./Label-YD0WPdje.js";import"./lib-Bp1D03YU.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-D7l-adwA.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-CyRCFbCN.js";import"./ColumnLayout-vUPB5OWo.js";import"./AccentBox-BoJo1Xb6.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Heading-DCNnB3YY.js";import"./context-Be5-R6KO.js";import"./useStatic-BvhlQpOK.js";import"./getActionGroupSlot-DpZDuh2a.js";import"./ContextMenuSection-CqhrtcbY.js";const Xo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var a,d,x;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Yo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Yo as __namedExportsOrder,Xo as default};
