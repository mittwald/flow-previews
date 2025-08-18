import{j as r}from"./iframe-xY198WZi.js";import{B as o}from"./Button-Bwr0Tqpq.js";import{A as T}from"./ActionGroup-B4l3PiVa.js";import{L as s,a as y}from"./LightBox-CGG_wcsl.js";import{I as m}from"./Image-DnM0OUf8.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a5 as O}from"./IconWarning-DKtpXb3v.js";import{u as w}from"./DialogTriggerView-CQH_y4wT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bcl1TdL7.js";import"./mergeRefs-C3ATilz7.js";import"./index-DUH-JGkU.js";import"./Text-sCeau28A.js";import"./browser-CoruqHMI.js";import"./EmulatedBoldText-D19FH_Aq.js";import"./Text-Caf7sjAz.js";import"./utils-9eQBP1kk.js";import"./LoadingSpinner-DDnO9vH9.js";import"./useLocalizedStringFormatter-CJ8Vq7It.js";import"./context-cbiqA6Ma.js";import"./Button-quH8-MSh.js";import"./ProgressBar-D8GoG1d0.js";import"./Label-Dcgw9TtS.js";import"./Hidden-CtG-gAWP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-EZ6qW8_W.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DyqoAsF-.js";import"./useFocus-Dp6Kb8w7.js";import"./useFocusRing-CNdh1loc.js";import"./useFocusable-BEMuxCdm.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-rEXXQEwj.js";import"./useStatic-BuBW5DuY.js";import"./Overlay-DBmOcOX5.js";import"./Dialog-d75pDgMH.js";import"./RSPContexts-CJJdSkVj.js";import"./OverlayArrow-J-8UDj7n.js";import"./useControlledState-DwYELHJ7.js";import"./Collection-ytNMUbYn.js";import"./CollectionBuilder-BIND5Hyl.js";import"./Separator-b4M5uB6E.js";import"./Group-IN_qKSk9.js";import"./SearchField-cMs68yGv.js";import"./FieldError-Dq9uru64.js";import"./Form-Bh-UgxBm.js";import"./useTextField-Q2Y51r8y.js";import"./useFormReset-CwVzgzUX.js";import"./TextField-CNxjTF-I.js";import"./useEvent-B_ZLPh5h.js";import"./SelectionManager-DB1_71DO.js";import"./useCollator-CcxdQyrk.js";import"./FocusScope-DirxfVa-.js";import"./VisuallyHidden-vDoGSijP.js";import"./DivView-DWLETHVL.js";import"./ButtonView-CQIUCh9J.js";import"./context-DIL7reYg.js";const vr={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
