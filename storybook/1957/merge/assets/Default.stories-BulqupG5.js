import{j as r}from"./iframe-CVONDZxG.js";import{B as o}from"./Button-CPWkxiPl.js";import{A as T}from"./ActionGroup-CulJXRbN.js";import{L as s,a as y}from"./LightBox-B1bGIP41.js";import{I as m}from"./Image-QR5crdaB.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CjssIWkt.js";import{u as w}from"./DialogTriggerView-CZoxH0uq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHJ1i56Q.js";import"./mergeRefs-TXfZ5z39.js";import"./index-C4vkAaOo.js";import"./Text-gWNENs-O.js";import"./browser-BiAec6cY.js";import"./EmulatedBoldText-CnL_Am8U.js";import"./Text-Doa1PxMD.js";import"./utils-BSjfMHTl.js";import"./LoadingSpinner-DIlTVHYE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CII2PiuM.js";import"./context-Bs2g7JPB.js";import"./Button-38xdtiYe.js";import"./ProgressBar-DrI-uHFO.js";import"./Label-DJefMWg6.js";import"./Hidden-BwiNP3dS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jVeBX_ap.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zhVroEZ0.js";import"./useFocus-D78mW_re.js";import"./useFocusRing-B7s00iLq.js";import"./useFocusable-DkfZWGFH.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-WI0cGZqP.js";import"./useStatic-Duh0tpLB.js";import"./Overlay-iWJkk3fw.js";import"./Dialog-BUUqsfzD.js";import"./RSPContexts-DNP2NapF.js";import"./OverlayArrow-DGSmKKnj.js";import"./useControlledState-KXE4Dwqt.js";import"./Collection-CaTnxI7B.js";import"./CollectionBuilder-CePrgAQb.js";import"./Separator-CO7E1Mbo.js";import"./Group-BUf8QsAy.js";import"./SearchField-DsKki_7U.js";import"./FieldError-D3nW9ApF.js";import"./Form-BgCAIeRI.js";import"./useTextField-6Xm8NcSF.js";import"./useFormReset-D4oFtU7p.js";import"./TextField-Bq5WehIb.js";import"./useEvent-CIDboHYb.js";import"./SelectionManager-DQbblkna.js";import"./useCollator-DDJs2P-f.js";import"./FocusScope-LX2k-wEc.js";import"./VisuallyHidden-C8_ZT0Uw.js";import"./ButtonView-D0q0EIvL.js";import"./context-DdZgH6qQ.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
