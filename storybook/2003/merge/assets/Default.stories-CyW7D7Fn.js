import{j as r}from"./iframe-nPsKv9M3.js";import{B as o}from"./Button-Cwt3YooV.js";import{A as T}from"./ActionGroup-DEp6kO8r.js";import{L as s,a as y}from"./LightBox-CSf-y36M.js";import{I as m}from"./Image-BNOIs9a4.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-D7ef3xYO.js";import{u as w}from"./DialogTriggerView-Cm1t_yF_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR7735qm.js";import"./mergeRefs-DGqX8NnL.js";import"./index-BHi6sGsK.js";import"./Text-XZwmfgbx.js";import"./browser-BzcSKw7f.js";import"./EmulatedBoldText-B79vZW6N.js";import"./Text-BIdL4sNQ.js";import"./utils-8bL4GcU7.js";import"./LoadingSpinner-C1ZMRQIb.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DSEYfllN.js";import"./context-mwZCjolN.js";import"./Button-_y3k4Es0.js";import"./ProgressBar-Bh2LZauY.js";import"./Label-BrXjgpUy.js";import"./Hidden-BiSDldQr.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-VKnQkuTS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CD1xEu4S.js";import"./useFocus-D6fxwPDF.js";import"./useFocusRing-caiKUn6t.js";import"./useFocusable-QTkHwuSk.js";import"./dynamic-wM-X8Xms.js";import"./getActionGroupSlot-D41EShs_.js";import"./useStatic-CwmIPWCn.js";import"./Overlay-2xZY8lpr.js";import"./ClearPropsContextView-R1wYtvDX.js";import"./useControlledState-CsXjitNs.js";import"./ButtonView-D_SoO7dY.js";import"./context-CC3ykTmh.js";import"./RSPContexts-4Iqr_AQa.js";import"./FocusScope-Bk-s4YOY.js";import"./useCollator-Dm05pnhO.js";import"./VisuallyHidden-DzuuU_mQ.js";import"./Collection-BH5fUWZT.js";import"./CollectionBuilder-BsO6Q-Ae.js";import"./Separator-Cl85CK-5.js";import"./Group-N7Se0mQR.js";import"./SearchField-DpvPGqnX.js";import"./FieldError-BeWVHHOP.js";import"./Form-C8Y-x06x.js";import"./useTextField-5p-5mVZt.js";import"./useFormReset-JMfDIv5v.js";import"./TextField-Bthj1NJK.js";import"./useEvent-Lgym_IyA.js";import"./SelectionManager-_SjxoMvT.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const Cr=["Default","WithoutFitScreen","WithController","WithImageTrigger"];export{t as Default,i as WithController,n as WithImageTrigger,e as WithoutFitScreen,Cr as __namedExportsOrder,Ar as default};
