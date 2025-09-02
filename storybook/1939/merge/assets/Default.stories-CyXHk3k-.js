import{j as r}from"./iframe-DoW4S5y5.js";import{B as o}from"./Button-CJ9GVWSA.js";import{A as T}from"./ActionGroup-Cwy1Fa-m.js";import{L as s,a as y}from"./LightBox-DHiBrtAr.js";import{I as m}from"./Image-DIjzxP-S.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-1bSGr7bL.js";import{u as w}from"./DialogTriggerView-Cc9fs5Ki.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqGtFlt4.js";import"./mergeRefs-Ka_JxYbf.js";import"./index-ywv6zfVU.js";import"./Text-BWWLLA_C.js";import"./browser-1Svz-vih.js";import"./EmulatedBoldText-88Z3nw3V.js";import"./Text-C09El9xQ.js";import"./utils-BERKyAtu.js";import"./LoadingSpinner-C4oFajCL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C5IBRtX2.js";import"./context-DLINqX3o.js";import"./Button-DnWzyqBm.js";import"./ProgressBar-Cw6ko2xq.js";import"./Label-BiPavfPM.js";import"./Hidden-DdNFa5_a.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAN8HAzj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BTQEKaY-.js";import"./useFocus-CTercWxn.js";import"./useFocusRing-B5qgIIvG.js";import"./useFocusable-Caaze2NE.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-C-O0F5Jp.js";import"./useStatic-CyJ13LoA.js";import"./Overlay-BIk0W5bM.js";import"./Dialog-BNyqjTo3.js";import"./RSPContexts-BR0kwtoC.js";import"./OverlayArrow-Cnmawvtl.js";import"./useControlledState-DwXivsGS.js";import"./Collection-Bm_qpX5D.js";import"./CollectionBuilder-zDP_AyQT.js";import"./Separator-B7bt-k6s.js";import"./Group-BtU7cQ2J.js";import"./SearchField-BenY0OV9.js";import"./FieldError-DdRlRixc.js";import"./Form-1DUWHykH.js";import"./useTextField-DmJTXkvZ.js";import"./useFormReset-DRCEBnHw.js";import"./TextField-DHHX1OVE.js";import"./useEvent-rS73qyHD.js";import"./SelectionManager-B1xZchnP.js";import"./useCollator-CKm8HelV.js";import"./FocusScope-C1si8CoR.js";import"./VisuallyHidden-BKF9ViHg.js";import"./ButtonView-CRbshs7Y.js";import"./context-Ex8JCHDm.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
