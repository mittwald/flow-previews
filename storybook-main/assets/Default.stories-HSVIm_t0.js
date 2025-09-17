import{j as r}from"./iframe-BXWHolr7.js";import{B as o}from"./Button-CnhqfASw.js";import{A as T}from"./ActionGroup-ByPmdftr.js";import{L as s,a as y}from"./LightBox-CZM_DdJE.js";import{I as m}from"./Image-C5TOGcE2.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-C9wAMmE4.js";import{u as w}from"./DialogTriggerView-ULagL9pU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Aeosf-s6.js";import"./mergeRefs-D5kad6xW.js";import"./index-BO_Ze_Is.js";import"./Text-cublDBL7.js";import"./browser-tTf4FW93.js";import"./EmulatedBoldText-C4nbdyGF.js";import"./Text-CshnnIVL.js";import"./utils-B2TamtWx.js";import"./LoadingSpinner-CMZ7XUGA.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-7zHp9kQ3.js";import"./context-Dja7lVng.js";import"./Button-YX5RGg2w.js";import"./ProgressBar-CBzNVdsU.js";import"./Label-BCj8S481.js";import"./Hidden-BM-MvoWz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CPYM8v3M.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1TcPoWb.js";import"./useFocus-BHj76f0r.js";import"./useFocusRing-C9RrD32J.js";import"./useFocusable-CA3YRohc.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CpZVtoBZ.js";import"./useStatic-C8CrPjkp.js";import"./Overlay-rcPFEt1W.js";import"./Dialog-C_udrGIm.js";import"./RSPContexts-804iL0FW.js";import"./OverlayArrow-ttgUUjRL.js";import"./useControlledState-Dr1QSdOx.js";import"./Collection-C0Q6vASR.js";import"./CollectionBuilder-d4B1PmIH.js";import"./Separator-1cY_KjOn.js";import"./Group-DKRCTPap.js";import"./SearchField-CrZc0iss.js";import"./FieldError-kOzNSTVH.js";import"./Form-C40WvtQf.js";import"./useTextField-CHuCSPiE.js";import"./useFormReset-D3PYmlJ_.js";import"./TextField-vF4BsGOY.js";import"./useEvent-DVY60GN0.js";import"./SelectionManager-C8B9SdRc.js";import"./useCollator-DktWPlR1.js";import"./FocusScope-Bq5J7cyD.js";import"./VisuallyHidden-BHe7S0lR.js";import"./ButtonView-D6StIgA_.js";import"./context-Cnp30bgj.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
