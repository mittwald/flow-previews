import{j as r}from"./iframe-CMpsVwOM.js";import{B as o}from"./Button-B762HPeD.js";import{A as T}from"./ActionGroup-nxKAVe34.js";import{L as s,a as y}from"./LightBox-C73ALfPM.js";import{I as m}from"./Image-Brr56nDb.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-D8u_mAP3.js";import{u as w}from"./DialogTriggerView-zPfOYurT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BMeS3O6n.js";import"./mergeRefs-C92X0W_p.js";import"./index-CZ3QCY_v.js";import"./Text-BimBNWGT.js";import"./browser-B-2It7Rx.js";import"./EmulatedBoldText-M-EPRI7w.js";import"./Text-CCkfOTTF.js";import"./utils-pWRi9foc.js";import"./LoadingSpinner-C0J7J3GJ.js";import"./useLocalizedStringFormatter-BlPP9i8C.js";import"./context-EPQ013pJ.js";import"./Button-CNx4aTn8.js";import"./ProgressBar-DR_zEB_o.js";import"./Label-CYx7L7HM.js";import"./Hidden-Cyo3M4hZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BA3FU80w.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dcm4Z-gf.js";import"./useFocus-C9MMrMar.js";import"./useFocusRing-DqD2BiAa.js";import"./useFocusable-FYb42PWO.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CEeEGEjJ.js";import"./useStatic-BFocWmVI.js";import"./Overlay-CAB3-wED.js";import"./Dialog-4INrBZTO.js";import"./RSPContexts-DHCERfty.js";import"./OverlayArrow-CMVfGmQe.js";import"./useControlledState-BNxfrGT2.js";import"./Collection-C_dbbgqH.js";import"./CollectionBuilder-Cc21ue3R.js";import"./Separator-ySPE90Jb.js";import"./Group-BmHKM3mz.js";import"./SearchField-yY4hDHGI.js";import"./FieldError-Dnex0fXb.js";import"./Form-BGZ-9vu8.js";import"./useTextField-CVfCDHOY.js";import"./useFormReset-CrSG7MNm.js";import"./TextField-Cwtkj9As.js";import"./useEvent-CBtEWer2.js";import"./SelectionManager-Bwjhvkb_.js";import"./useCollator-CBSgX5OE.js";import"./FocusScope-HNBnbjNF.js";import"./VisuallyHidden-Ctc-ZpYI.js";import"./DivView-g9shrrf8.js";import"./ButtonView-DjZqX0bw.js";import"./context-BB_uKWDa.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
