import{j as r}from"./iframe-DdApAMdB.js";import{B as o}from"./Button-BxqrW572.js";import{A as T}from"./ActionGroup-B9aosHGA.js";import{L as s,a as y}from"./LightBox-fghLuab9.js";import{I as m}from"./Image-TOHI7GMH.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Cpaydhok.js";import{u as w}from"./DialogTriggerView-B0VPnPVc.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CEuVt76S.js";import"./mergeRefs-BvD6XTJo.js";import"./index-CmLMHji9.js";import"./Text-BwGnDMAi.js";import"./browser-Bz93nYTI.js";import"./EmulatedBoldText-BU0UeOKO.js";import"./Text-CGWbxphN.js";import"./utils-DAIXfBLw.js";import"./LoadingSpinner-BhKvcbL5.js";import"./useLocalizedStringFormatter-TjZfQGwd.js";import"./context-DR2Fzh74.js";import"./Button-C9Xh5N71.js";import"./ProgressBar-Cc1yHw2d.js";import"./Label-kWZFrMix.js";import"./Hidden-BMg7stLw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DpyWwSJM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DRRHPdfj.js";import"./useFocus-D5He2YFW.js";import"./useFocusRing-PbnZIDVe.js";import"./useFocusable-DBXoEHDs.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-w8JWX1Ad.js";import"./useStatic-CD0TvTTa.js";import"./Overlay-DDe9JzK6.js";import"./Dialog-BpJkjD9u.js";import"./RSPContexts-BOrJeOok.js";import"./OverlayArrow-C4-25t1a.js";import"./useControlledState-BEGJzQOc.js";import"./Collection-DGYwVSuD.js";import"./CollectionBuilder-EIxRxNub.js";import"./Separator-S3NhCE8J.js";import"./Group-D5m3Hvm8.js";import"./SearchField-C5uNx_R9.js";import"./FieldError-CIX9Q6F5.js";import"./Form-EknBmRno.js";import"./useTextField-5LH3O4RW.js";import"./useFormReset-BHdeIf20.js";import"./TextField-DkSNZzFP.js";import"./useEvent-L4LWTqTI.js";import"./SelectionManager-CLIYI5bX.js";import"./useCollator-DB6a0khr.js";import"./FocusScope-CMXbBALw.js";import"./VisuallyHidden-DyxmrKqh.js";import"./DivView-DgVrhJJe.js";import"./ButtonView-BT9EvhT6.js";import"./context-ruD8SKGF.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
