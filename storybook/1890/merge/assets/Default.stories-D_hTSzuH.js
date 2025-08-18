import{j as r}from"./iframe-giJ3PN41.js";import{B as o}from"./Button-t3gsP1h6.js";import{A as T}from"./ActionGroup-CwEH48hj.js";import{L as s,a as y}from"./LightBox-ClySJ96Q.js";import{I as m}from"./Image-CC5Y2b_D.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Dj_wwKGm.js";import{u as w}from"./DialogTriggerView-D_msadZI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BGOqO5Az.js";import"./mergeRefs-nfw7e1Ht.js";import"./index-HnR-1Gnf.js";import"./Text-unBq3m4E.js";import"./browser-DkEs9M37.js";import"./EmulatedBoldText-D-WMJ6En.js";import"./Text-CPIeRDsX.js";import"./utils-CXDqZ2sl.js";import"./LoadingSpinner-kOBWqA9j.js";import"./useLocalizedStringFormatter-B7e_o0Dw.js";import"./context-B5VaUXEx.js";import"./Button-DJpSVAFI.js";import"./ProgressBar-B5g3Upep.js";import"./Label-BWQQ3Esr.js";import"./Hidden-DRJxhyU2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DTs_WTOS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D1wL7cKS.js";import"./useFocus-CuIPz-Kl.js";import"./useFocusRing-DUik2Nk4.js";import"./useFocusable-Bp_JhFQV.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DO7dNHL6.js";import"./useStatic-BgGRa1ft.js";import"./Overlay-BuUVtGWy.js";import"./Dialog-BJZav00b.js";import"./RSPContexts-D9-_jwd4.js";import"./OverlayArrow-BGGM7Kja.js";import"./useControlledState-BdipClPW.js";import"./Collection-DKY2nhBh.js";import"./CollectionBuilder-DGOIxE5b.js";import"./Separator-pxt8W_GD.js";import"./Group-CrHdP7HD.js";import"./SearchField-TlY83ID8.js";import"./FieldError-nVLUoiBd.js";import"./Form-DPXxe_7V.js";import"./useTextField-_WbwmA1r.js";import"./useFormReset-ChCBJkpa.js";import"./TextField-CJSQz5rH.js";import"./useEvent-BWSnRzjc.js";import"./SelectionManager-xGqpQwPR.js";import"./useCollator-n7eXimmn.js";import"./FocusScope-D6b4m46d.js";import"./VisuallyHidden-DL0JmpvH.js";import"./DivView-Bc9pLEh8.js";import"./ButtonView-CMTHfTqq.js";import"./context-CtVI5d4l.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
