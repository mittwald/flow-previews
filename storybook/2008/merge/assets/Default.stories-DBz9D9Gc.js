import{j as r}from"./iframe-BkQEXHdV.js";import{B as o}from"./Button-Pi6ts98U.js";import{A as T}from"./ActionGroup-kwwJbAoN.js";import{L as s,a as y}from"./LightBox-gYYibWO_.js";import{I as m}from"./Image-D8jvNHY1.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as G,a6 as O}from"./IconWarning-Bhg2W068.js";import{u as w}from"./DialogTriggerView-wkk6S007.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DGcDvaD0.js";import"./mergeRefs-CrNR4Adf.js";import"./index-NrWjSaDr.js";import"./Text-waR3uY_i.js";import"./browser-T6JBIPNk.js";import"./EmulatedBoldText-DAPjbogn.js";import"./Text-vqf5-lqk.js";import"./utils-vh8nJaNh.js";import"./LoadingSpinner-BoU0TUya.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C-gsK0Kk.js";import"./context-DYNAGC-2.js";import"./Button-U99YD9dQ.js";import"./ProgressBar-BZ-kanOy.js";import"./Label-CmAFKzLd.js";import"./Hidden-B12OlcMW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B9G_gEh3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CS8Sp9_K.js";import"./useFocus-DvrdYcoe.js";import"./useFocusRing-DgjuUHXy.js";import"./useFocusable-E_oKRPWi.js";import"./dynamic-BBWe3ygL.js";import"./getActionGroupSlot-rKcLr1EF.js";import"./useStatic-D2LoWVgv.js";import"./Overlay-Dgg15N1A.js";import"./ClearPropsContextView-DluELhC2.js";import"./useControlledState-DaeuqNOc.js";import"./ButtonView-doX-a1tA.js";import"./context-D6bN450f.js";import"./RSPContexts-BoauDkAB.js";import"./FocusScope-1Unh1ODV.js";import"./useCollator-CckG7hwg.js";import"./VisuallyHidden-BJPXQOEU.js";import"./Collection-41evgXm1.js";import"./CollectionBuilder-CMEP5N_o.js";import"./context-Df1kKepL.js";import"./Separator-ITSOrukA.js";import"./SelectionManager-B2eDCuA_.js";import"./useEvent-XpLfJ4Ej.js";const Gr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Or=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Or as __namedExportsOrder,Gr as default};
