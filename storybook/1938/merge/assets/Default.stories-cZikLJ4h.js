import{j as r}from"./iframe-CPSqmfOl.js";import{B as o}from"./Button-hKWpSws2.js";import{A as T}from"./ActionGroup-crXWQG_4.js";import{L as s,a as y}from"./LightBox-CTcvvkaw.js";import{I as m}from"./Image-CmBZ7qwE.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-Dz0_MR_L.js";import{u as w}from"./DialogTriggerView-DhEtoXKf.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqWlcEyR.js";import"./mergeRefs-CG7T9kGm.js";import"./index-DVxNTjjY.js";import"./Text-CpNtEmk9.js";import"./browser-CHMWQ9uX.js";import"./EmulatedBoldText-CFRYqLao.js";import"./Text-BvvdQ7EK.js";import"./utils-Bp4pxj2u.js";import"./LoadingSpinner-DLNH37Uk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CCqX6hi3.js";import"./context-DzKnIoVi.js";import"./Button-e2WWi27E.js";import"./ProgressBar-BjfkTy0Q.js";import"./Label-CnzzRGNK.js";import"./Hidden-CX2yRk0H.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BkGlbpXp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIALPEwc.js";import"./useFocus-BS8EzIP7.js";import"./useFocusRing-BjvWMKoG.js";import"./useFocusable-D7nBaAdw.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-0Vq6hASS.js";import"./useStatic-OfVjkk_J.js";import"./Overlay-CGZWiF2S.js";import"./Dialog-BRCyKDs6.js";import"./RSPContexts-D2HT_eZz.js";import"./OverlayArrow-Cn6JJnKz.js";import"./useControlledState-BlXvRNFY.js";import"./Collection-DIuPDF5B.js";import"./CollectionBuilder-SnC7X_3r.js";import"./Separator-R_OoFgiT.js";import"./Group-BmbgIKSk.js";import"./SearchField-DIrZjnJq.js";import"./FieldError-CM7w-aUX.js";import"./Form-1yVZIEH7.js";import"./useTextField-Dv6BLFv4.js";import"./useFormReset-BUGG2d-X.js";import"./TextField-nrw2PmZM.js";import"./useEvent-COUAymzI.js";import"./SelectionManager-eBYaZCJQ.js";import"./useCollator-C37beSDK.js";import"./FocusScope-CjahwwK6.js";import"./VisuallyHidden-BiIsVZWt.js";import"./ButtonView-eehyUpt-.js";import"./context-zgsQo9O-.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
