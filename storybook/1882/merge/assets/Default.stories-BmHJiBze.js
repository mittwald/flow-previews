import{j as r}from"./iframe-BAtUELBR.js";import{B as o}from"./Button-BEq1XaV7.js";import{A as T}from"./ActionGroup-DylyHBpW.js";import{L as s,a as y}from"./LightBox-Bjk9rhWb.js";import{I as m}from"./Image-DFiE1RXM.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a8 as O}from"./IconWarning-h84dHhem.js";import{u as w}from"./DialogTriggerView-TQtuWl8o.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./Text-DzMLmIhZ.js";import"./browser-BVtPTxgw.js";import"./EmulatedBoldText-CosrpHXB.js";import"./Text-j2Uyll_5.js";import"./utils-UbQMFgd1.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./context-DbLHYHiQ.js";import"./Button-BiJPJvF0.js";import"./ProgressBar-BZ7qWBUr.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DmioRyAZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B88qu-VD.js";import"./useFocus-DJUZ2En4.js";import"./useFocusRing-BdUFZX00.js";import"./useFocusable-BuN38nX6.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./useStatic-D26yqcd1.js";import"./Overlay-D-undUip.js";import"./Dialog-CdEVLYW9.js";import"./RSPContexts-DQlzARDq.js";import"./OverlayArrow-CGwoImC3.js";import"./useControlledState-Cdm8pC1T.js";import"./Collection-DKvh5qnS.js";import"./CollectionBuilder-DOOg8umD.js";import"./Separator-BOj5W9de.js";import"./Group-BnQz7s-E.js";import"./SearchField-DJD_RJ9_.js";import"./FieldError-D0SFQKR_.js";import"./Form-D4YUCIIk.js";import"./useTextField-BD89Nm0g.js";import"./useFormReset-Cu48O1XS.js";import"./TextField-CA7eDuBl.js";import"./useEvent-DEdGGfK8.js";import"./SelectionManager-pSSWogs3.js";import"./useCollator-CMTT-Cpv.js";import"./FocusScope-CQU9T81i.js";import"./VisuallyHidden-CFnWwY81.js";import"./ButtonView-oKENZZvg.js";import"./context-B7yiaX0P.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
