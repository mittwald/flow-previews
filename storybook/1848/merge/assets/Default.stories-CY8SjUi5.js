import{j as r}from"./iframe-DiTvlIx0.js";import{B as o}from"./Button-BiD6Lawu.js";import{A as T}from"./ActionGroup-8bYosJdc.js";import{L as s,a as y}from"./LightBox-77WraITc.js";import{I as m}from"./Image-DEN5EXoP.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-G89JjWcD.js";import{u as w}from"./DialogTriggerView-CU_t9XAT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CFcpYPaZ.js";import"./mergeRefs-B_ak7i-H.js";import"./index-BnnHP1pm.js";import"./Text-DI1PKUAj.js";import"./browser-BaahsGvK.js";import"./EmulatedBoldText-drbL--yb.js";import"./Text-Rz2GzXDH.js";import"./utils-BABRtEIC.js";import"./LoadingSpinner-DaBaZ8Mn.js";import"./useLocalizedStringFormatter-S2PSgqtc.js";import"./context-DGhDP4Fo.js";import"./Button-B0hpxsDM.js";import"./ProgressBar-B0Vgjwix.js";import"./Label-DVhhRECd.js";import"./Hidden-Bpwwde4M.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-du6TudaG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-gIhSeEMK.js";import"./useFocus-Csuog0QY.js";import"./useFocusRing-B2-Vw04x.js";import"./useFocusable-BMX7QfiV.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DsxZE0Zq.js";import"./useStatic-DdGraPJb.js";import"./Overlay-BwD6Ndtx.js";import"./Dialog-ByglpE6R.js";import"./RSPContexts-RnDkEBIV.js";import"./OverlayArrow-CXEJUrV_.js";import"./useControlledState-Cw5WssZN.js";import"./Collection-DCDGv6Hn.js";import"./CollectionBuilder-Dz71Bmkn.js";import"./Separator-CUbm99qE.js";import"./Group-CCQCMpIY.js";import"./SearchField-ch9pUxlM.js";import"./FieldError-DCG_xqAH.js";import"./Form-BkiUDrTE.js";import"./useTextField-Bj0Agq48.js";import"./useFormReset-DnAkrJEx.js";import"./TextField-vFmkS8-q.js";import"./useEvent-CKujStdr.js";import"./SelectionManager-DKKfhyH7.js";import"./useCollator-CLHz9ghx.js";import"./FocusScope-DA66A_td.js";import"./VisuallyHidden-DqT0mP1T.js";import"./DivView-6pGajS-E.js";import"./ButtonView-D5jLYRzm.js";import"./context-DkfqWRD_.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    fitScreen: false
  }
}`,...(u=(h=e.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var B,j,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("LightBox");
    return <>
        <Button onPress={controller.open}>Open LightBox</Button>
        <LightBox {...props} controller={controller}>
          <Image src={dummyText.imageSrc} />
          <ActionGroup>
            <Button>
              <IconDownload />
            </Button>
            <Button>
              <IconDelete />
            </Button>
          </ActionGroup>
        </LightBox>
      </>;
  }
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var L,S,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <LightBoxTrigger>
      <Button>
        <Image width={100} withBorder alt="Gopher" src={dummyText.imageSrc} />
      </Button>
      <LightBox>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </LightBox>
    </LightBoxTrigger>
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Fr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Fr as __namedExportsOrder,vr as default};
