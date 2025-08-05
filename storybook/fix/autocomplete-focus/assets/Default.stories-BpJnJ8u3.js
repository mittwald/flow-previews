import{j as r}from"./iframe-BwUhuRm7.js";import{B as o}from"./Button-DXRAI5C8.js";import{A as T}from"./ActionGroup-BGCg1ILB.js";import{L as s,a as y}from"./LightBox-DZL8kRQy.js";import{I as m}from"./Image-DJngQHyR.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DVI2HiM9.js";import{u as w}from"./DialogTriggerView-BL8MNJX8.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cfu_dxW5.js";import"./mergeRefs-DFtW8n00.js";import"./index-C5CMDY3C.js";import"./Text-BBSS7FYM.js";import"./browser-CwFUDHtx.js";import"./EmulatedBoldText-Do_4Bp9I.js";import"./Text-CbUcC8Oz.js";import"./utils-DDoNb5qO.js";import"./LoadingSpinner-fl_VQ3tF.js";import"./useLocalizedStringFormatter-CNjvSUsH.js";import"./context-bUzCuHOu.js";import"./Button-Ds18dV5B.js";import"./ProgressBar-ByXy0FjY.js";import"./Label-D-Cavg7S.js";import"./Hidden-DCcQ90cW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CJJXcYYW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMqEl6WQ.js";import"./useFocus-BdFL2QuQ.js";import"./useFocusRing-UIPQHDoL.js";import"./useFocusable-BiRHUtLW.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-XogBqS__.js";import"./useStatic-10Z2anw0.js";import"./Overlay-C_g9KhS_.js";import"./Dialog-uD5rPHFv.js";import"./RSPContexts-cnUhnSXF.js";import"./OverlayArrow-CKENjgaB.js";import"./useControlledState-D841p2oi.js";import"./Collection-DeL1dhBj.js";import"./CollectionBuilder-BG3-IUkU.js";import"./Separator-_bTFvR5v.js";import"./Group-ZFfwIVE3.js";import"./SearchField-B_aps_XI.js";import"./FieldError-DsFBc8y3.js";import"./Form-C5mHTKgE.js";import"./useTextField-DDqPPB1t.js";import"./useFormReset-dodywWj-.js";import"./TextField-CxDkfZto.js";import"./useEvent-B7428EMj.js";import"./SelectionManager-DsYBxDUu.js";import"./useCollator-CbeUpY-G.js";import"./FocusScope-3xnL38Zh.js";import"./VisuallyHidden-C84OwjFZ.js";import"./DivView-D343xuOa.js";import"./ButtonView-DRytiBgs.js";import"./context-DSL3Ffex.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
