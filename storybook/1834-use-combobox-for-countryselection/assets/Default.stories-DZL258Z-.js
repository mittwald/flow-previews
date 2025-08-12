import{j as r}from"./iframe-DL1Xk_TW.js";import{B as o}from"./Button-CSYR-8zw.js";import{A as T}from"./ActionGroup-BaSOhNto.js";import{L as s,a as y}from"./LightBox-Ckltd2wz.js";import{I as m}from"./Image-C_p8CKac.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-CDWDVN9t.js";import{u as w}from"./DialogTriggerView-DxPEo7_6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CiZc51HM.js";import"./mergeRefs-BSp0TNwj.js";import"./index-DqZKnEqd.js";import"./Text-BarKc5iO.js";import"./browser-DlWkPxXn.js";import"./EmulatedBoldText-Cuoo9C-B.js";import"./Text-hY-xwtRO.js";import"./utils-CQ_zdhKT.js";import"./LoadingSpinner-eLX_rEKw.js";import"./useLocalizedStringFormatter-C3W1UUyM.js";import"./context-DL9YfZ-4.js";import"./Button-D1cW4wjn.js";import"./ProgressBar-B-kphiC_.js";import"./Label-BAbeU0V_.js";import"./Hidden-DR9x0YX2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-W7XlL7TD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DN8Ip39y.js";import"./useFocus-XNeQty2s.js";import"./useFocusRing-Ch_JF-Gz.js";import"./useFocusable-D0Knm-Aw.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BqQnBfv6.js";import"./useStatic-CDHuYpjM.js";import"./Overlay-SavqoUo3.js";import"./Dialog-BV4IJ0nk.js";import"./RSPContexts-x84Hoe_h.js";import"./OverlayArrow-D3HDkbZg.js";import"./useControlledState-m-GoXsAY.js";import"./Collection-C6Hsa1NN.js";import"./CollectionBuilder-DomLDs3M.js";import"./Separator-7Z7HyIGD.js";import"./Group-Dvl4nkih.js";import"./SearchField-DmEcaw4n.js";import"./FieldError-BUlchV0X.js";import"./Form-DgOn25JB.js";import"./useTextField-D29gkUES.js";import"./useFormReset-BVtOSdS9.js";import"./TextField-DfEA8x8Q.js";import"./useEvent-BwN_9XGI.js";import"./SelectionManager-98zZcpep.js";import"./useCollator-CIWymtw-.js";import"./FocusScope-CddfFBWs.js";import"./VisuallyHidden-OD3rFgcd.js";import"./DivView-FO6EhIq6.js";import"./ButtonView-ClStsEUD.js";import"./context-DUQna2Na.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
