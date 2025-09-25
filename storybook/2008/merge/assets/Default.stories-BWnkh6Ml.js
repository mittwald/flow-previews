import{j as r}from"./iframe-CQa7qTJa.js";import{B as o}from"./Button-CHgvO37v.js";import{A as T}from"./ActionGroup-Cu-E7EJY.js";import{L as s,a as y}from"./LightBox-D-dNkDNK.js";import{I as m}from"./Image-ByesaU9t.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{f as G,a6 as O}from"./IconWarning-CeyZIf1V.js";import{u as w}from"./DialogTriggerView-Cf-mCLAZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./Text-CH2mDEXN.js";import"./browser-BhSl0yCb.js";import"./EmulatedBoldText-Ce7b_D_t.js";import"./Text-BRoIiTz6.js";import"./utils-cYx4gHhD.js";import"./LoadingSpinner-DVFRCiEF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./context-BU9KDZsm.js";import"./Button-DeHwua8T.js";import"./ProgressBar-FMaJOq3V.js";import"./Label-DUJFwkpM.js";import"./Hidden-Xar3rui2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGKdhdH_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D-jgt3FH.js";import"./useFocus-C9JxIGDi.js";import"./useFocusRing-DJ1LjUwE.js";import"./useFocusable-FCuKz-qE.js";import"./dynamic-RkS6HP3_.js";import"./getActionGroupSlot-gbKAHcV0.js";import"./useStatic-ByirIl9X.js";import"./Overlay-Bn2T-WFD.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./useControlledState-CFUYHrzm.js";import"./ButtonView-CH0BJJAP.js";import"./context-D_sCsAkv.js";import"./RSPContexts-C2Phcdxj.js";import"./FocusScope-C4mxiVmq.js";import"./useCollator-BHsFeSET.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./Collection-CLijKRGN.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Separator-D9m_TYOZ.js";import"./Group-D-4ygLJZ.js";import"./SearchField-DroG_a10.js";import"./FieldError-D5-jV0S5.js";import"./Form-CF3ngYGn.js";import"./useTextField-DOzcbfzW.js";import"./useFormReset-DY9tf8Hl.js";import"./TextField-BNBlfRPu.js";import"./useEvent-CyQldz3u.js";import"./SelectionManager-CZ4deCBD.js";const Ar={title:"Overlays/LightBox",component:s,parameters:{controls:{exclude:["controller"]}},render:a=>r.jsxs(y,{children:[r.jsx(o,{children:"Open LightBox"}),r.jsxs(s,{...a,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})},t={},e={args:{fitScreen:!1}},i={render:a=>{const c=w("LightBox");return r.jsxs(r.Fragment,{children:[r.jsx(o,{onPress:c.open,children:"Open LightBox"}),r.jsxs(s,{...a,controller:c,children:[r.jsx(m,{src:p.imageSrc}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(G,{})}),r.jsx(o,{children:r.jsx(O,{})})]})]})]})}},n={render:()=>r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(m,{width:100,withBorder:!0,alt:"Gopher",src:p.imageSrc})}),r.jsx(s,{children:r.jsx(m,{alt:"Gopher",src:p.imageSrc})})]})};var l,d,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(d=t.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var g,h,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
