import{j as r}from"./iframe-D8FrJ-CZ.js";import{B as o}from"./Button-Cq__NSNu.js";import{A as T}from"./ActionGroup-Bf3adsmK.js";import{L as s,a as y}from"./LightBox-9A7vINPI.js";import{I as m}from"./Image-C3PFDZKD.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-C11FXGxU.js";import{u as w}from"./DialogTriggerView-C-13EtHB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-EPA_0_Bo.js";import"./mergeRefs-utDOSA_8.js";import"./index-DO8-cvBB.js";import"./Text-CijQgHlf.js";import"./browser-Df0WU9AE.js";import"./EmulatedBoldText-CzquwV9M.js";import"./Text-CjVOmJR3.js";import"./utils-DLru3qrQ.js";import"./LoadingSpinner-Cw9GFgG6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BJgvBQQo.js";import"./context-Dz2Qbbtu.js";import"./Button-DVdJDgqt.js";import"./ProgressBar-DaMaURS1.js";import"./Label-CJkrjybq.js";import"./Hidden-DLVb5zGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DAKRqT8J.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-mcSHbC1W.js";import"./useFocus-_KFCgimG.js";import"./useFocusRing-Dt7u0yDa.js";import"./useFocusable-BXg3nN8-.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-kdQR9GNf.js";import"./useStatic-3eGZwKWm.js";import"./Overlay-Dkj_u9Rg.js";import"./Dialog-D2aL6iTu.js";import"./RSPContexts-DvajV3uw.js";import"./OverlayArrow-DjgfcPnj.js";import"./useControlledState-Bhtz6D6k.js";import"./Collection-BWh0MO5P.js";import"./CollectionBuilder-D7rkl-fZ.js";import"./Separator-Dp29JyT-.js";import"./Group-CHBQvVuc.js";import"./SearchField-BVNSbwCA.js";import"./FieldError-DUyd9_2U.js";import"./Form-DsyloFzD.js";import"./useTextField-mqiYsdTK.js";import"./useFormReset-BMZp-ADn.js";import"./TextField-DhjdGSid.js";import"./useEvent-TvzQ57Lp.js";import"./SelectionManager-BHHDa5mG.js";import"./useCollator-D1vKzkof.js";import"./FocusScope-BCf9GP_l.js";import"./VisuallyHidden-HCxlUedB.js";import"./ButtonView-DJzXQuoF.js";import"./context-DfaRjifq.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
