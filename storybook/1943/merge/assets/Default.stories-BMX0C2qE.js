import{j as r}from"./iframe-Bi2SfRmV.js";import{B as o}from"./Button-D5Xd0LEq.js";import{A as T}from"./ActionGroup-BuBZsTiM.js";import{L as s,a as y}from"./LightBox-CXxkBeie.js";import{I as m}from"./Image-BQsieaKt.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-Bplgov_i.js";import{u as w}from"./DialogTriggerView-CRsA35wH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./Text-BBB4yGC-.js";import"./browser-B5YnOpHr.js";import"./EmulatedBoldText-B38Yfz1K.js";import"./Text-CkSKd-Z_.js";import"./utils-Dxcmwd9a.js";import"./LoadingSpinner-ClEMvWD9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./context-BhsUJEB9.js";import"./Button-D6XrWsvH.js";import"./ProgressBar-Dobb74j3.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-A5VLCzVG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BC_RRwfM.js";import"./useFocus-C-Ng-ghT.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocusable-CoivSZnS.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CbuIGg6y.js";import"./useStatic-DCDW6go-.js";import"./Overlay-BZJVN0bT.js";import"./Dialog-MyAkaQuV.js";import"./RSPContexts-SSRv2tEc.js";import"./OverlayArrow-B-xht0if.js";import"./useControlledState-CIKoypYK.js";import"./Collection-Bq_myMt6.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Separator-D9zMzSnu.js";import"./Group-CNmX4nS8.js";import"./SearchField-BM55Blft.js";import"./FieldError-BIS3uJRl.js";import"./Form-B_Pu4x7F.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./TextField-Cs62mBed.js";import"./useEvent-62uCNpCU.js";import"./SelectionManager-DBvQYGX_.js";import"./useCollator-nLcbAmPr.js";import"./FocusScope-lVODcCJ_.js";import"./VisuallyHidden-DCu-7XPb.js";import"./ButtonView-cgCkxm-5.js";import"./context-BL-ZIP9s.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const vr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,vr as __namedExportsOrder,Cr as default};
