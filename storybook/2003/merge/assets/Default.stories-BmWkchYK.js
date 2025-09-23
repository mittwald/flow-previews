import{j as r}from"./iframe-BJWngGl7.js";import{B as o}from"./Button-Dpovk5Ay.js";import{A as T}from"./ActionGroup-DqoNe3tH.js";import{L as s,a as y}from"./LightBox-DL6zHcUY.js";import{I as m}from"./Image-fYHWs0Jr.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CLxGQCa2.js";import{u as w}from"./DialogTriggerView-G0XTVNWS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DxSnxty7.js";import"./mergeRefs-CeYupt5U.js";import"./index-CMnnMEF7.js";import"./Text-D-lw11hw.js";import"./browser-qhbVwDYR.js";import"./EmulatedBoldText-BDv3rega.js";import"./Text-zfbbvU9b.js";import"./utils-BjLoxrER.js";import"./LoadingSpinner-D0Y9UFL7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DP6nHzmP.js";import"./context-ZX7huqtR.js";import"./Button-BC63ENzq.js";import"./ProgressBar-IjP_LWAf.js";import"./Label-jDh2Rcdd.js";import"./Hidden-cZZZgSgN.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Lh8Q6d1O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bx1Ga4ml.js";import"./useFocus-B52D3fzv.js";import"./useFocusRing-B_Jq-YSB.js";import"./useFocusable-jxsYQPZM.js";import"./dynamic-D7o2EbQn.js";import"./getActionGroupSlot-BcQW_u77.js";import"./useStatic-BpRokF7z.js";import"./Overlay-Bk_gFwPm.js";import"./ClearPropsContextView-DxmEoSzP.js";import"./useControlledState-DIKMvFKO.js";import"./ButtonView-CMG5j_Ru.js";import"./context-D9sg3hhH.js";import"./RSPContexts-1ZAuRZHz.js";import"./FocusScope-DwCuMKHy.js";import"./useCollator-Qs-Te_M3.js";import"./VisuallyHidden-5aVnsY39.js";import"./Collection-CxJ7q3qS.js";import"./CollectionBuilder-CsBKfuQ1.js";import"./Separator-DE1lcCbm.js";import"./Group-BEwONPHD.js";import"./SearchField-Cm99TGpl.js";import"./FieldError-RjUORd-P.js";import"./Form-DRROzcFd.js";import"./useTextField-DQq52j-y.js";import"./useFormReset-BCaIB7JH.js";import"./TextField-BtON624e.js";import"./useEvent-Bn8fTfAG.js";import"./SelectionManager-DgshuB3D.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
