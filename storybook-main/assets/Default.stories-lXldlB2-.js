import{j as r}from"./iframe-ABGSKs5r.js";import{B as o}from"./Button-Q43F_r8t.js";import{A as T}from"./ActionGroup-BnRYMoCo.js";import{L as s,a as y}from"./LightBox-BtdTRJa3.js";import{I as m}from"./Image-DrKNKOx0.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-CrQ4Sq1v.js";import{u as w}from"./DialogTriggerView-D7J_WAXm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./Text-DtVn_38U.js";import"./browser-BJO6t65z.js";import"./EmulatedBoldText-GSAm8QjJ.js";import"./Text-BcmTaKwf.js";import"./utils-DiDGDlBS.js";import"./LoadingSpinner-Dzzm5nCT.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./context-DyJmA51t.js";import"./Button-iaRAOLSz.js";import"./ProgressBar-CGoCl-ZJ.js";import"./Label-BwOKtJNA.js";import"./Hidden-B4dLwXdT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DcKqU1cs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBkNBI46.js";import"./useFocus-Dg7gZngi.js";import"./useFocusRing-Q7Twgd_z.js";import"./useFocusable-BAjBFm0a.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-GvSmty2r.js";import"./useStatic-CcRZhvyK.js";import"./Overlay-J8sF61Ft.js";import"./Dialog-BtJFOPGU.js";import"./RSPContexts-fBWTPx9Q.js";import"./OverlayArrow-bYgiNorp.js";import"./useControlledState-Un3rm8eO.js";import"./Collection-Dxy4s6rJ.js";import"./CollectionBuilder-COEyccke.js";import"./Separator-CSQ2PCE5.js";import"./Group-WLHEG_qD.js";import"./SearchField-C3LVCaj4.js";import"./FieldError-B1yCOr13.js";import"./Form-CvEoesSu.js";import"./useTextField-A3YOYzMp.js";import"./useFormReset-CDcF8HBQ.js";import"./TextField-CYxV6_KF.js";import"./useEvent-D4qKx0m_.js";import"./SelectionManager-_MA_Xqcw.js";import"./useCollator-W9bifTbC.js";import"./FocusScope-CeShPDZQ.js";import"./VisuallyHidden-DZthTgNa.js";import"./DivView-C5mX61qw.js";import"./ButtonView-C5W5X-1i.js";import"./context-D7oi58C7.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
