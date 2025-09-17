import{j as r}from"./iframe-DKbVX-Q4.js";import{B as o}from"./Button-DHaahZXz.js";import{A as T}from"./ActionGroup-B8VdJgEq.js";import{L as s,a as y}from"./LightBox-2Wn3onlW.js";import{I as m}from"./Image-D5ZhRkbi.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CwOfNeg5.js";import{u as w}from"./DialogTriggerView-iXY870Z0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-jeOa0ZES.js";import"./mergeRefs-Q550Qguu.js";import"./index-C2KS530J.js";import"./Text-BScgMmTm.js";import"./browser-f0JKU1-T.js";import"./EmulatedBoldText-GMB9n-7d.js";import"./Text-CUplgO8_.js";import"./utils-BkpHnTsU.js";import"./LoadingSpinner-nmPm0aQJ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CteVI3SD.js";import"./context-CEbk5IPs.js";import"./Button-BxBgI48c.js";import"./ProgressBar-CBmHG919.js";import"./Label-zFNLx0tV.js";import"./Hidden-D4Nr3Z2s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xF4kjUJ4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-xBrGITaP.js";import"./useFocus-BSzVp7e_.js";import"./useFocusRing-CNTepbVZ.js";import"./useFocusable-V5Yb86R1.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BGUvfLPF.js";import"./useStatic-X0n-4EnU.js";import"./Overlay-jVtyHEfR.js";import"./Dialog-CMjGRt0K.js";import"./RSPContexts-DwjCRf2W.js";import"./OverlayArrow-DI6CzN6D.js";import"./useControlledState-DPI6eaeZ.js";import"./Collection-ztGNnLcc.js";import"./CollectionBuilder-DDbAHuMc.js";import"./Separator-B52_I9Ir.js";import"./Group-9s9egjt8.js";import"./SearchField-CYyqDTIT.js";import"./FieldError-DMz-rebE.js";import"./Form-DeoxQrJ0.js";import"./useTextField-DCNHdt2S.js";import"./useFormReset-Bl7MFLhY.js";import"./TextField-Bg7pk97P.js";import"./useEvent-CpKb_F4n.js";import"./SelectionManager-egJl3JHW.js";import"./useCollator-BomaeOTE.js";import"./FocusScope-Cxy8QZEw.js";import"./VisuallyHidden-DbgH8FGV.js";import"./ButtonView-ExT-wCIc.js";import"./context-cawJMatb.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
