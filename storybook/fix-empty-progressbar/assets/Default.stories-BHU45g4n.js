import{j as r}from"./iframe-D6sRUaJR.js";import{B as o}from"./Button-BCWx4ySg.js";import{A as T}from"./ActionGroup-Dd5f-Z6K.js";import{L as s,a as y}from"./LightBox-Keu0vHHS.js";import{I as m}from"./Image-CY4eU1jy.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-D8wqW4GU.js";import{u as w}from"./DialogTriggerView-D_IG8I3W.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-uwmcWe.js";import"./mergeRefs-BZVZ0dhZ.js";import"./index-BUpOoE4F.js";import"./Text-CzI-SNLy.js";import"./browser-lItX59Of.js";import"./EmulatedBoldText-_TSizv1d.js";import"./Text-C9PfWAJQ.js";import"./utils-Qm7xLU3y.js";import"./LoadingSpinner-m9O8-gUX.js";import"./useLocalizedStringFormatter-6HxLbkJZ.js";import"./context-DolFftfM.js";import"./Button-Bca1GoSv.js";import"./ProgressBar-Bwt4IvIC.js";import"./Label-CQsKsXsC.js";import"./Hidden-DCXhQTtV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BTkVtPxw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-uE3muS2D.js";import"./useFocus-CTtv6tdW.js";import"./useFocusRing-eR86HLCW.js";import"./useFocusable-BOGY22Am.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CM5KPANG.js";import"./useStatic-D2ZqCWbX.js";import"./Overlay-CvaNLTC_.js";import"./Dialog-DZPDGKPA.js";import"./RSPContexts-BRIM2Iem.js";import"./OverlayArrow-Dkw6_o-u.js";import"./useControlledState-D69o91XC.js";import"./Collection-DXulOg_H.js";import"./CollectionBuilder-Qk8YBnFP.js";import"./Separator-DEM_icnQ.js";import"./Group-Bshd2yUf.js";import"./SearchField-Di5tRiho.js";import"./FieldError-SaPVkD34.js";import"./Form-Cgvv5odv.js";import"./useTextField-Dr42bSM8.js";import"./useFormReset-DcxoBJFg.js";import"./TextField-Bj0PDkEJ.js";import"./useEvent-BymtUDWP.js";import"./SelectionManager-D0QYa18J.js";import"./useCollator-DXk_KV0D.js";import"./FocusScope-B2gr6wNX.js";import"./VisuallyHidden-VL3LzDcs.js";import"./DivView-5vmDEwpO.js";import"./ButtonView-BMJx3wcW.js";import"./context-CqKUxs9o.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
