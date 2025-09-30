import{j as r}from"./iframe-oDnSRKrU.js";import{B as o}from"./Button-Cfj_belE.js";import{A as T}from"./ActionGroup-CZruOmMh.js";import{L as s,a as y}from"./LightBox-UvysNdY2.js";import{I as m}from"./Image-DZ1YtSxB.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{e as G,a6 as O}from"./IconWarning-BDchKd2I.js";import{u as w}from"./DialogTriggerView-Ce3L8qPr.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DCrF-e2x.js";import"./mergeRefs-4PJ6advV.js";import"./index-DTS24oU_.js";import"./Text-BRg3dDEW.js";import"./browser-B1IGKoaP.js";import"./EmulatedBoldText-EQ8sxSlk.js";import"./Text-BhCBXCIE.js";import"./utils-BOFgiu6B.js";import"./LoadingSpinner-DjOmL5Rt.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DYhwfjLN.js";import"./context-BACVj_LI.js";import"./Button-D46_pkFx.js";import"./ProgressBar-BuCs3ZnW.js";import"./Label-pm9yE2cO.js";import"./Hidden-B7YQi_X1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-IKTU3VFM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlfeWo8-.js";import"./useFocus-CBAj8SSC.js";import"./useFocusRing-BvVC0KGc.js";import"./useFocusable-BIMsrSRy.js";import"./dynamic-B66wdgIv.js";import"./getActionGroupSlot-DD5xlWbQ.js";import"./useStatic-B5fiOOMU.js";import"./Overlay-DPw2jtas.js";import"./ClearPropsContextView-C5KU2xgH.js";import"./useControlledState-C4SjqBt9.js";import"./ButtonView-BYrsyY3Q.js";import"./context-BfF8CEMr.js";import"./RSPContexts-wR3TIPq6.js";import"./FocusScope-CFc2lXVF.js";import"./useCollator-BUiMLO_A.js";import"./VisuallyHidden-D8Dskj69.js";import"./Collection-B4_H5DyP.js";import"./CollectionBuilder-BqrWk4D3.js";import"./context-D1pfjzoG.js";import"./Separator-DoYImFmL.js";import"./SelectionManager-D05r5y9b.js";import"./useEvent-DUbYFqCh.js";const Gr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
