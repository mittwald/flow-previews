import{j as r}from"./iframe-FeXPLmWJ.js";import{B as o}from"./Button-DtLhlb3k.js";import{A as T}from"./ActionGroup-CnZgjYx_.js";import{L as s,a as y}from"./LightBox-D-l9JP0a.js";import{I as m}from"./Image-Cgy7u_jl.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-Bft-d4EJ.js";import{u as w}from"./DialogTriggerView-3szeiVhS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./Text-Bk-26kZZ.js";import"./browser-oak4xKwc.js";import"./EmulatedBoldText-Dl2sTmnq.js";import"./Text-D-W6Oypd.js";import"./utils-CXtn_DQA.js";import"./LoadingSpinner-C0aHJiGC.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./context-CdDLZW_F.js";import"./Button-DC1Hivs6.js";import"./ProgressBar-Dp_oIg1b.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DVVoN6WB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CiJ5VmDC.js";import"./useFocus-utUwSX9z.js";import"./useFocusRing-CtO3s9Jp.js";import"./useFocusable-DUk2eF1B.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BYx46ZMw.js";import"./useStatic-LuaoAJ0q.js";import"./Overlay-vPnpEKNG.js";import"./Dialog-D0hlM8gs.js";import"./RSPContexts-l4hadVnr.js";import"./OverlayArrow-QfoTus34.js";import"./useControlledState-Bg7JB_7p.js";import"./Collection-BSFTurc1.js";import"./CollectionBuilder-DjcZXz9H.js";import"./Separator-qHYMipPY.js";import"./Group-BYKu_D4V.js";import"./SearchField-CExAiUx6.js";import"./FieldError-C1vR0UXv.js";import"./Form-1I64UDUq.js";import"./useTextField-DIQk2fEk.js";import"./useFormReset-Dq2F4z6p.js";import"./TextField-EiqUYwfM.js";import"./useEvent-VX8xqKP_.js";import"./SelectionManager-DgeS2fE0.js";import"./useCollator-DCfokZLU.js";import"./FocusScope-D_yyKfql.js";import"./VisuallyHidden-BFgml7Em.js";import"./ButtonView-AD5d4aDx.js";import"./context-BnjGRpmB.js";const Cr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
