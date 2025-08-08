import{j as r}from"./iframe-BTcUxdaq.js";import{B as o}from"./Button-SMMW9b8C.js";import{A as T}from"./ActionGroup-BPYJCvNc.js";import{L as s,a as y}from"./LightBox-CaZUKQvv.js";import{I as m}from"./Image-B5JlVJeh.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DQhgAuti.js";import{u as w}from"./DialogTriggerView-vV1bA8CD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./Text-Cyud7aU0.js";import"./browser-B8OJoPhG.js";import"./EmulatedBoldText-CDVaFR1M.js";import"./Text-DQ5f9mUM.js";import"./utils-QQf7G53U.js";import"./LoadingSpinner-DQ2VKIPI.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./context-DPBkKLSs.js";import"./Button-R5yzYc06.js";import"./ProgressBar-DujcM5UT.js";import"./Label-N2lNAPH4.js";import"./Hidden-C0wGKKFL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-COrOgVB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CFIgJOpO.js";import"./useFocus-BGyfOFlp.js";import"./useFocusRing-C1MTD0-W.js";import"./useFocusable-BavwL0Gh.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CRqbjcra.js";import"./useStatic-D47W8BT_.js";import"./Overlay-_jY1Wy0L.js";import"./Dialog-Cp_7H9MS.js";import"./RSPContexts-BdDzjtbv.js";import"./OverlayArrow-BOe63Seg.js";import"./useControlledState-UFVvdmji.js";import"./Collection-CCOeQAim.js";import"./CollectionBuilder-BMhklLUE.js";import"./Separator-jw0blZZr.js";import"./Group-Bij86ZzX.js";import"./SearchField-BjsA91o0.js";import"./FieldError-CZwoNVbm.js";import"./Form-BWd8hqS-.js";import"./useTextField-BAW13dg9.js";import"./useFormReset-WxrNhhec.js";import"./TextField-BAMKAOQn.js";import"./useEvent-CkvJPork.js";import"./SelectionManager-aQw9Fg0e.js";import"./useCollator-BEdiRQuO.js";import"./FocusScope-_yP39RaH.js";import"./VisuallyHidden-17OXXq4D.js";import"./DivView-DMNv9_sk.js";import"./ButtonView-DVLx5J0B.js";import"./context-BOTu0wPK.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
