import{j as r}from"./iframe-CTS_vBBR.js";import{B as o}from"./Button-BCm6-QqX.js";import{A as T}from"./ActionGroup-Cc1FZ34E.js";import{L as m,a as y}from"./LightBox-CJOMaZal.js";import{I as s}from"./Image-D87_w7Lx.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-fu5B3ESI.js";import{u as w}from"./DialogTriggerView-CNjC6RdQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D42A7vMX.js";import"./mergeRefs-BwV9Bpf-.js";import"./index-CHVZ0_DR.js";import"./Text-BLj2iCUU.js";import"./browser-CAp200rL.js";import"./EmulatedBoldText-1BeNjxGF.js";import"./Text-obNOHtVo.js";import"./utils-jZBUW_kd.js";import"./LoadingSpinner-B_uSEYnz.js";import"./useLocalizedStringFormatter-PMR3uOGp.js";import"./context-bQBwJTVW.js";import"./Button-Ckv0OeVG.js";import"./ProgressBar-DhYw7mhF.js";import"./Label-Bn0NFPwe.js";import"./Hidden-BZmRwcL-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-ByTznw_u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Wiw2pSFm.js";import"./useFocus-TOgYA3QQ.js";import"./useFocusRing-BBi2D29q.js";import"./useFocusable-CKYlOhg9.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CnqxasHi.js";import"./useStatic-DjQWr1Kz.js";import"./Overlay-C1wiX0q2.js";import"./Dialog-Dh-wheuD.js";import"./RSPContexts-Crw6uEAA.js";import"./OverlayArrow-DHDCgEG9.js";import"./useControlledState-Bfc6Wiov.js";import"./Collection-D8tFv91v.js";import"./CollectionBuilder-C2lc3lzM.js";import"./Separator-Cm_kwdR6.js";import"./Input-DWYalt4t.js";import"./SearchField-Bligs5CS.js";import"./FieldError-BrC_mw1K.js";import"./Form-CUREqm_L.js";import"./Group-DV2ZKREv.js";import"./useTextField-B5AiFiGq.js";import"./useFormReset-CIT6qu5J.js";import"./TextField-Dg76NbVN.js";import"./SelectionManager-D97bCv4u.js";import"./useEvent-B-FqLBei.js";import"./useCollator-SPBrq1bE.js";import"./FocusScope-B79Zy1Lp.js";import"./VisuallyHidden-C7PlrqLT.js";import"./DivView-5LijxMDY.js";import"./ButtonView-DMKEhv4G.js";import"./context-Qd68n4pj.js";const Fr={title:"Overlays/LightBox",component:m,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(m,{...a,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(m,{...a,controller:c,children:[r.jsx(s,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(s,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(m,{children:r.jsx(s,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Er=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Er as __namedExportsOrder,Fr as default};
