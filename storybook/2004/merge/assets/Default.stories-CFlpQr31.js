import{j as r}from"./iframe-DOdCrrz9.js";import{B as o}from"./Button-B4t52lNZ.js";import{A as T}from"./ActionGroup-CUBS3hLz.js";import{L as s,a as y}from"./LightBox-CV3ru8tH.js";import{I as m}from"./Image-BBvigMRt.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-B_Db9Y2d.js";import{u as w}from"./DialogTriggerView-aJwD6Ful.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFFPDLjZ.js";import"./mergeRefs-VmgBpgq4.js";import"./index-CLjbgznf.js";import"./Text-BFGg7rBT.js";import"./browser-ChoqAG5f.js";import"./EmulatedBoldText-CTisuoOf.js";import"./Text-Cec-yt4l.js";import"./utils-BhoG2uU0.js";import"./LoadingSpinner-iDIwh9pR.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D2q5K-i7.js";import"./context-B_SSW0HI.js";import"./Button-BQ3dFx8x.js";import"./ProgressBar-CMaicEWm.js";import"./Label-CUfl9ZIc.js";import"./Hidden-Csx_ZN67.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-nPFfwg7P.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cgctm68w.js";import"./useFocus-D8b650dP.js";import"./useFocusRing-DgTZQDGQ.js";import"./useFocusable-C6B3BW3Y.js";import"./dynamic-bhcJ8YER.js";import"./getActionGroupSlot-B_tXH0Q6.js";import"./useStatic-6ENCHy3p.js";import"./Overlay-CFAUD2hF.js";import"./ClearPropsContextView-Br_9Bgha.js";import"./useControlledState-DT9C-0RB.js";import"./ButtonView-Bu9OljIl.js";import"./context-CptZziwP.js";import"./RSPContexts-OikXJV7Y.js";import"./FocusScope-BZjUyJi9.js";import"./useCollator-DDFrVUE2.js";import"./VisuallyHidden-CbboIbzH.js";import"./Collection-D29CaRkM.js";import"./CollectionBuilder-DNDqtAqI.js";import"./Separator-D4a_mIW-.js";import"./Group-CGSoOA49.js";import"./SearchField-D44cV1AG.js";import"./FieldError-Dz-HK9bS.js";import"./Form-D1kKLxzM.js";import"./useTextField-E_po2vaq.js";import"./useFormReset-BZL1wYkF.js";import"./TextField-D3yV1HlH.js";import"./useEvent-DybSIsxD.js";import"./SelectionManager-DE4WCsU3.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
